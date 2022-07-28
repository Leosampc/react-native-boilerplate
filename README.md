[![MIT License](https://img.shields.io/apm/l/atomic-design-ui.svg?)](https://github.com/tterb/atomic-design-ui/blob/master/LICENSEs)
![React Native Boilerplate TypeScript](https://badgen.net/npm/types/tslib)

# React Native Boilerplate 🚀 ⚛️

This project is a [React Native](https://facebook.github.io/react-native/) boilerplate that can be used to kickstart a mobile application.

The boilerplate provides **an simple and optimized architecture for to start building solid cross-platform mobile applications**.

## Requirements

Node 12 or greater is required. Development for iOS requires a Mac and Xcode 10 or up, and will target iOS 11 and up.

You also need to install the dependencies required by React Native.  
Go to the [React Native environment setup](https://reactnative.dev/docs/environment-setup), then select `React Native CLI Quickstart` tab.  
Follow instructions for your given `development OS` and `target OS`.

## Quick Start

To create a new project using the boilerplate simply run:

`npx react-native init MyApp --template https://github.com/Leosampc/react-native-boilerplate.git`

## Running the project

Assuming you have all the requirements installed, you can run the project by running:

- `yarn start` || `npm run start`: to start the metro bundler, in a dedicated terminal.
- `yarn <platform>` || `npm run <platform>`: to run the _platform_ application (remember to start a simulator or connect a device).

## Used Libraries

- [Styled Components](http://styled-components.com)
- [React Navigation](http://reactnavigation.org)
- [Axios](https://axios-http.com)
- [React Redux](https://react-redux.js.org)
- [Redux Toolkit](https://redux-toolkit.js.org)

## Project Structure (relevant folders and files)

    .
    ├── __tests__
    ├── _bundle
    ├── android
    ├── ios
    ├── src
    │   ├── assets              # Assets (images and something like it)
    │   │   ├── fonts           # Font files (.ttf)
    │   ├── components          # All the components
    │   ├── constants           # Images imports, API urls
    │   ├── hooks               # All of the custom hooks
    │   ├── navigation          # AppNavigator configs
    │   ├── providers           # Possible providers (ThemeProvider, Custom Redux Provider, etc)
    │   ├── redux               # Redux toolkit configs, stores, reducers and actions
    │   ├── screens             # All screens
    │   ├── services            # Axios instance and REST API calls
    │   ├── theme               # Theme configs, like colors, style props and style functions
    │   ├── types               # Type annotations
    │   ├── utils               # Helpers, Device and another possible utils functions
    ├── .eslintignore
    ├── .eslintrc.json
    ├── .gitattributes
    ├── .gitignore
    ├── .prettierrc.js
    ├── app.json
    ├── babel.config.js
    ├── global.d.ts
    ├── index.js                # Entry point of the app
    ├── babel.config.js
    ├── react-native-config.js
    ├── tsconfig.json
