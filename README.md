# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

# 071125

 - Cloned project and went through steps at: [Host a Static Website](https://aws.amazon.com/getting-started/hands-on/host-static-website/)
 - Issue with NPM version while building with Amplify, no time to troublehsoot.

 # 071525

 - Redeployed with Amplify, but modified YML:
 
    ```
    version: 1
    frontend:
    phases:
        preBuild:
        commands:
            - nvm install 20.19.0
            - nvm use 20.19.0
            - node -v
            - npm -v
            - npm ci --cache .npm --prefer-offline
        build:
        commands:
            - npm run build
    artifacts:
        baseDirectory: dist
        files:
        - '**/*'
    cache:
        paths:
        - .npm/**/*
    ```
 - This mitigates the build error from Amplify resulting from an older version of NPM
 - Modified sample app to be a navbar header.

 # 073025

  - added bg image to pages
  - added links to git/linked in

# 080425

 - removed contact component in favor of social buttons in navbar
 - added css layout for 3 panel display in home component
 - added css layout for 2 column display in bio
 - added sample images/lorem ipsum content