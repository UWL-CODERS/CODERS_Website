# CODERS - Website Research Project

Welcome to the CODERS Club Website GitHub repository! This website serves as the central hub for our vibrant community of coding enthusiasts at our college.

## Website Structure & What To Know to Contribute:

Nothing! Our website is built using the following technologies
I highly suggest you learn about or at least get a feel for:

- HTML for structure
- CSS, SCSS for styling
- JavaScript/TypeScript for interactivity
- Angular Service for Dynamic Website Modification and Deployment

### If you have any questions, concerns, or need anything, please reach out to me at lambrecht5083@uwlax.edu or through Snapchat!

# Cool Angular Tips and Tricks

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.6.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Karma](https://karma-runner.github.io) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.



# Git Commands Demo for Beginners

This section provides a simple guide to commonly used Git commands. Each command is explained with its purpose and usage, making it beginner-friendly.
If possible, use Visual Studio Code or an IDE with an easy-to-understand interface with git functionality unless you have mastered it.
---

## **1. Initialize a Repository**
### Command: `git init`
- **What it does**: Creates a new Git repository in your project folder.
- **Example**:
git init
text |
This initializes a `.git` directory to track your project's changes.

---

## **2. Check Repository Status**
### Command: `git status`
- **What it does**: Displays the current state of your working directory and staging area.
- **Example**:
git status
text |
Use this to see which files are modified, added, or ready to commit.

---

## **3. Stage Changes**
### Command: `git add`
- **What it does**: Moves changes to the staging area, preparing them for a commit.
- **Examples**:
- Stage a single file:
  ```
  git add file1.txt
  ```
- Stage all changes:
  ```
  git add .
  ```

---

## **4. Commit Changes**
### Command: `git commit`
- **What it does**: Saves changes from the staging area to the repository's history.
- **Example**:
git commit -m "Add feature X"
text | 
Use meaningful messages to describe your changes.

---

## **5. Push Changes**
### Command: `git push`
- **What it does**: Uploads your local commits to a remote repository (e.g., GitHub).
- **Example**:
git push origin main
text | 
This sends changes from your local `main` branch to the remote repository.

---

## **6. Pull Updates**
### Command: `git pull`
- **What it does**: Fetches and merges updates from a remote repository into your local branch.
- **Example**:
git pull origin main
text | 
Keeps your local branch synchronized with the remote.

---

## **7. View Commit History**
### Command: `git log`
- **What it does**: Displays a list of past commits.
- **Example**:
git log
text
Add options like `--oneline` for a concise view:
git log --oneline
text

---

## **8. Create and Switch Branches**
### Commands:
1. Create a new branch:
git branch feature-x
text
2. Switch to the branch:
git checkout feature-x
text
3. Combine both steps:
git checkout -b feature-x
text

---

## **9. Merge Branches**
### Command: `git merge`
- **What it does**: Combines changes from one branch into another.
- **Example**:
git merge feature-x
text
Merges `feature-x` into the current branch.

---

## **10. Clone a Repository**
### Command: `git clone`
- **What it does**: Creates a local copy of a remote repository.
- **Example**:


