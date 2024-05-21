# Project Documentation

## Introduction

This project is built using Next.js, a React framework that enables functionality such as server-side rendering and generating static websites for React based web applications.

## Installation

To get started with this project, you need to have Node.js and npm installed on your machine. Follow these steps to install the project dependencies and run the project locally:

```bash
# Clone the repository
git clone <repository-url>
# Navigate to the project directory
cd <project-directory>
# Install dependencies
npm install
# Run the development server
npm run dev
```

The development server starts at http://localhost:3000. Open this URL in your browser to view the application.

## Project Structure
This section outlines the key directories and files in the project:

 -.github: Contains GitHub workflows and pull request templates which help in automating tasks and standardizing pull requests.
 - e2e: Contains end-to-end tests using Playwright. Example test files include home-page.spec.ts and quiz-page.spec.ts.
 - public: Stores static files like images, fonts, and the favicon.ico.
 - src: The source directory where the React components and other source files reside.
    - app: Contains global styles and scripts.
    - components: React components used throughout the project.
    - fonts: Font files.
    - icons: SVG icons.
    - store: State management using Redux or a similar library.

## File Naming Conventions
In this project, we utilize specific suffixes in our file names to indicate their purpose and functionality within the application. This practice helps in quickly identifying the role of each file and enhances the maintainability of the codebase. Below are the suffixes currently in use and their descriptions:

- .component.tsx: Indicates that the file is a React component. This suffix is used for files that contain React components, which include the UI logic and structure.
    - Example: results.component.tsx

- .constants.ts: Used for files that define constants which can be reused across different components or functions.
    - Example: results.constants.ts

- .module.css: Represents CSS module files. These are locally scoped CSS files used to style the corresponding React components.
    - Example: results.module.css

- .test.tsx and .util.test.ts: Applied to files containing tests. The .test.tsx is typically used for unit tests of components, whereas .util.test.ts is for utility functions.
    - Examples: results.test.tsx, results.util.test.ts

- .util.ts: Used for utility files which contain functions that can be imported and used across different parts of the application.
    - Example: results.util.ts

- .hook.ts: For files that define custom React hooks. Hooks are functions that let you “hook into” React state and lifecycle features from function components.
    - Example: useAuth.hook.ts

- .container.tsx: Used for React components that involve data fetching or integration with state management tools. The container components are primarily responsible for handling logic, data fetching, and state management, delegating the rendering logic to presentational components.
    - Example: userList.container.tsx

- .storage.ts: Designates files that interact with browser storage solutions like localStorage or sessionStorage, or manage state in global storage like Redux or Context API.
    - Example: session.storage.ts

- .model.ts: Suggested for files that define TypeScript interfaces or types, particularly when modeling the data structures used across the application.
    - Example: user.model.ts

Using these suffixes consistently across your project will ensure that the structure and purpose of your files are immediately clear to new developers and contributors to the project.

## Husky Configuration Overview
Husky is an essential tool used in this project to enforce code quality and consistency through pre-commit and commit-message hooks. This document will outline the Husky setup and the scripts it triggers.

### Husky Setup
Husky is configured to manage git hooks for this project, ensuring that certain conditions are met before commits and pushes are allowed. Below are the Husky hooks and their respective actions:

#### Pre-commit Hook
Linting and Testing: Before each commit, Husky runs linters and tests to ensure that the changes meet the project standards and do not break any existing functionality. This is crucial for maintaining code quality and stability.

```bash
# Commands run by Husky pre-commit hook
npx lint-staged
npm run test
```

#### Commit-msg Hook
Commit Message Linting: Husky uses the commitlint tool to ensure that commit messages adhere to defined conventions. This improves readability and trackability of commit history.

```bash
# Command run by Husky commit-msg hook
npx commitlint --edit
```

## Testing Configuration Overview
In this project, we use Jest alongside React Testing Library (RTL) for unit and integration tests, and Playwright for end-to-end (E2E) testing. This document details each testing framework and its configuration within the project.

### Jest + React Testing Library
Jest is a popular testing framework that provides a comprehensive testing solution, including test runners, assertion libraries, and mocking capabilities. React Testing Library complements Jest by allowing you to render React components in a test environment and interact with them as users would.

#### Usage
Tests are written using the .test.tsx suffix for React components and the .test.ts for regular JavaScript functions. Tests aim to mimic user interactions and check for proper component states and outputs.

```bash
# Command to run unit/integration tests
npm run test
```

### Playwright for E2E Testing
Playwright is a node library to automate Chromium, Firefox, and WebKit browsers. It allows for robust end-to-end testing, ensuring that the entire application works as expected on all supported platforms.

#### Usage
E2E tests use the .spec.ts suffix and are stored in the e2e directory. These tests simulate complete user flows, from navigating pages to interacting with elements, ensuring comprehensive coverage.

```bash
# Command to run e2e tests in headless mode
npx playwright test
# Command to run e2e tests in ui mode
npx playwright test --ui 
```

## CI/CD Configuration Overview
In this project, we have a robust Continuous Integration and Continuous Deployment (CI/CD) setup using GitHub Actions. This setup ensures the quality and deployability of the application through automated workflows.

### GitHub Actions Workflows
We utilize two main workflows:

- **E2E Tests Workflow**: This workflow runs the end-to-end tests to ensure that the application behaves as expected from start to finish. It is triggered on pull requests to the main branch.

- **Build, Lint, and Test Workflow**: This workflow is responsible for building the application, linting the code, and running unit/integration tests. It ensures that every commit meets the project's standards for code quality and functionality.

## Deployment
The deployment process is automated and handled through Vercel, which is directly integrated into our GitHub repository. Once the changes are merged into the main branch and all workflows succeed, the application is automatically deployed to Vercel.

For those interested in the specifics of our CI/CD setup or who may need to modify the workflows, all configuration files and details are located within the .github folder of the repository.

## Future Enhancements
- Expand E2E Testing
    - Add and organize end-to-end tests.
- Implement i18next
    - Enable multi-language support.
- Online Documentation
    - Host documentation on a dedicated webpage.
- Custom Hooks
    - Abstract common logic into reusable hooks.