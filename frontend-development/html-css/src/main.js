/**
 * IT Club — Front-end Development Program
 * UI behaviour: theme toggle, mobile menu, scroll effects.
 */

const root = document.documentElement;

/* ------------------------------------------------------------------ */
/* Theme toggle                                                        */
/* ------------------------------------------------------------------ */
const themeToggle = document.getElementById("theme-toggle");

function setTheme(theme) {
  root.classList.toggle("dark", theme === "dark");
  try {
    localStorage.setItem("it-club-theme", theme);
  } catch (_) {
    /* ignore storage errors */
  }
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    setTheme(root.classList.contains("dark") ? "light" : "dark");
  });
}

/* ------------------------------------------------------------------ */
/* Mobile menu                                                         */
/* ------------------------------------------------------------------ */
const menuToggle = document.getElementById("menu-toggle");
const mobileMenu = document.getElementById("mobile-menu");
const menuIconOpen = document.getElementById("menu-icon-open");
const menuIconClose = document.getElementById("menu-icon-close");

function setMenu(open) {
  if (!mobileMenu || !menuToggle) return;
  mobileMenu.classList.toggle("hidden", !open);
  menuIconOpen?.classList.toggle("hidden", open);
  menuIconClose?.classList.toggle("hidden", !open);
  menuToggle.setAttribute("aria-expanded", String(open));
  menuToggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
}

if (menuToggle && mobileMenu) {
  menuToggle.addEventListener("click", () => {
    setMenu(mobileMenu.classList.contains("hidden"));
  });

  mobileMenu.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => setMenu(false));
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") setMenu(false);
  });

  document.addEventListener("click", (event) => {
    if (
      !mobileMenu.classList.contains("hidden") &&
      !mobileMenu.contains(event.target) &&
      !menuToggle.contains(event.target)
    ) {
      setMenu(false);
    }
  });
}

/* ------------------------------------------------------------------ */
/* Header appearance on scroll                                         */
/* ------------------------------------------------------------------ */
const headerShell = document.getElementById("header-shell");
const backToTop = document.getElementById("back-to-top");

function onScroll() {
  const scrolled = window.scrollY > 16;

  if (headerShell) {
    headerShell.classList.toggle("bg-white/85", scrolled);
    headerShell.classList.toggle("backdrop-blur-xl", scrolled);
    headerShell.classList.toggle("shadow-soft", scrolled);
    headerShell.classList.toggle("border-slate-200", scrolled);
    headerShell.classList.toggle("dark:bg-[#0b1020]/80", scrolled);
    headerShell.classList.toggle("dark:border-white/10", scrolled);
  }

  backToTop?.classList.toggle("opacity-0", !scrolled);
  backToTop?.classList.toggle("translate-y-16", !scrolled);
  backToTop?.classList.toggle("opacity-100", scrolled);
  backToTop?.classList.toggle("translate-y-0", scrolled);
}

window.addEventListener("scroll", onScroll, { passive: true });

/* ------------------------------------------------------------------ */
/* Back to top                                                         */
/* ------------------------------------------------------------------ */
if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}

/* ------------------------------------------------------------------ */
/* Scroll reveal                                                       */
/* ------------------------------------------------------------------ */
const revealItems = document.querySelectorAll(".reveal");

if ("IntersectionObserver" in window) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15, rootMargin: "0px 0px -40px 0px" }
  );

  revealItems.forEach((item) => revealObserver.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add("is-visible"));
}

/* ------------------------------------------------------------------ */
/* Animated counters                                                   */
/* ------------------------------------------------------------------ */
const counters = document.querySelectorAll(".counter");

if (counters.length && "IntersectionObserver" in window) {
  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;

        const el = entry.target;
        const target = Number(el.dataset.target || 0);
        const duration = 1400;
        const start = performance.now();

        const tick = (now) => {
          const progress = Math.min((now - start) / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          el.textContent = String(Math.round(target * eased));
          if (progress < 1) requestAnimationFrame(tick);
        };

        requestAnimationFrame(tick);
        counterObserver.unobserve(el);
      });
    },
    { threshold: 0.5 }
  );

  counters.forEach((counter) => counterObserver.observe(counter));
}

/* ------------------------------------------------------------------ */
/* Footer year                                                         */
/* ------------------------------------------------------------------ */
const year = document.getElementById("current-year");
if (year) year.textContent = String(new Date().getFullYear());

/* Initial paint */
onScroll();
