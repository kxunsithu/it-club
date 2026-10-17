# Git & GitHub — Short Notes

**For IT Club juniors. Sample project: `my-first-project`**

---

## 1. What is Git & GitHub?

### What is a Version Control System (VCS)?

A **Version Control System (VCS)** is a tool that records changes to files over time, so you can review, compare, and restore older versions whenever you need.

**Example without a VCS:**

```
project.zip
project_v2.zip
project_v2_final.zip
project_FINAL_use_this_one.zip   <-- which one is correct??
```

It is confusing: you do not know which file is newest, you cannot see what changed, and two people editing the same file lose each other's work.

**Example with a VCS (Git):**

```
commit 1 → commit 2 → commit 3 → commit 4
"Add       "Add       "Fix       "Add
 homepage"  styles"    bug"       footer"
```

Every change is saved as a step with a message and a date. You can jump back to any step instantly.

> **Git is the most popular VCS.** Others include SVN and Mercurial.

### What is Git?

Git is a **version control system** that tracks changes in files over time. It helps developers save different versions of their projects and return to previous versions when necessary. It is installed on your own computer and works offline.

**Example:** Imagine you are developing a website. Today, you create a login page. Tomorrow, you change its design, but the new design causes errors. Git helps you review previous changes and recover an earlier version.

### What is GitHub?

GitHub is an **online platform** that hosts Git repositories. It allows developers to store their code online, share projects, review code, and work together as a team. It needs an internet connection.

**Example:** You finish your login page on your laptop (Git). You upload (push) it to GitHub. Your teammate downloads (clone) it, adds a sign-up page, and sends (push) it back — no more emailing `.zip` files.

### Git vs GitHub

| Git | GitHub |
|-----|--------|
| A tool on your PC | A website online |
| Works offline | Needs internet |
| Tracks changes to files | Stores + shares code |
| Made in 2005 by Linus Torvalds | Made by GitHub Inc. (now Microsoft) |

> **Analogy:** Git is a camera that takes snapshots of your project. GitHub is Instagram where you share the photos.

**Key point:** You can use Git without GitHub. But GitHub needs Git to work.

---

## 2. Install & Setup (once)

**Ubuntu:**
```bash
sudo apt install git -y
```

**Windows:** Download from https://git-scm.com/download/win → install → open **Git Bash**.

**macOS:**
```bash
brew install git
```

**Check it installed:**
```bash
git --version
```

**Setup your name (use your GitHub email):**
```bash
git config --global user.name "Your Name"
git config --global user.email "you@example.com"
```

---

## 3. Full Example (Step by Step)

We will build the sample project **`my-first-project`** from scratch and upload it to GitHub. Follow each step.

### Step 1 — Create the project folder

```bash
mkdir my-first-project
cd my-first-project
```

- `mkdir` creates a new folder.
- `cd` moves you into that folder.

### Step 2 — Start tracking with Git

```bash
git init
```

`git init` turns the folder into a **Git repository**. A hidden `.git` folder is created. This is done **once** per project.

### Step 3 — Create your first file

Create a file named `index.html` and add this content:

```html
<!DOCTYPE html>
<html>
<head>
  <title>My First Project</title>
</head>
<body>
  <h1>Hello, IT Club!</h1>
</body>
</html>
```

### Step 4 — Check the status

```bash
git status
```

`git status` shows what changed. Here, `index.html` appears as **Untracked** (Git sees it but is not saving it yet).

### Step 5 — Stage the change

```bash
git add .
```

`git add .` moves all changes into the **staging area** (the "waiting room" before saving).

### Step 6 — Save a snapshot (commit)

```bash
git commit -m "Add homepage"
```

`git commit` saves the staged changes as a **snapshot** with a message. Now the file is safely stored in Git history.

### Step 7 — Create the repository on GitHub

1. Go to **github.com** and sign up.
2. Click **+ → New repository** → name it `my-first-project` → Create.
3. Keep the page open — it shows the URL you need next.

> **Password problem?** GitHub asks for a **Personal Access Token**, not your password.
> Settings → Developer settings → Personal access tokens → Generate (check `repo`) → paste it.

### Step 8 — Connect your local project to GitHub

```bash
git remote add origin https://github.com/yourname/my-first-project.git
```

`git remote add` links your local folder to the online repository. `origin` is just the nickname for that link.

### Step 9 — Upload your code

```bash
git push -u origin main
```

`git push` sends your commits to GitHub. The `-u` remembers the link, so next time you only type `git push`.

### Step 10 — Verify

Refresh your GitHub page — you should see `index.html`. **Done, your code is on GitHub!**

### Normal flow (remember this)

```
git status → git add . → git commit -m "message" → git push
```

---

## 4. Best Practices

- **Commit messages:** clear and short → `Fix login button`, not `fix`.
- **`.gitignore`:** list files Git should ignore.
  ```gitignore
  node_modules/
  .env
  *.log
  .DS_Store
  ```
- **README.md:** describe your project (name, features, how to run).
- Always **pull before you start**.
- **Never commit secrets** (passwords, API keys).
- Commit often, push often.

---

## 5. Quick Command Table

| Command | Does |
|---------|------|
| `git init` | New repo |
| `git clone <url>` | Copy repo |
| `git status` | Show changes |
| `git add .` | Stage all |
| `git commit -m "msg"` | Save snapshot |
| `git log --oneline` | Show history |
| `git branch` | List branches |
| `git switch <name>` | Change branch |
| `git switch -c <name>` | New + change branch |
| `git merge <branch>` | Join branch |
| `git remote add origin <url>` | Link to GitHub |
| `git push` | Send to GitHub |
| `git pull` | Get from GitHub |
| `git reset --soft HEAD~1` | Undo last commit |
| `git stash` | Save work temporarily |

---

> **Remember:** Pull before you work → commit often → push when done → never commit secrets.
