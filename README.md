# react-redux-example

**React Redux Example**. ReactJS Example App for React with Redux.

React Redux example is a more complex example of how to use React Redux in a large scale application.

Created by **ReactJSExample** [https://github.com/reactjsexample](https://github.com/reactjsexample)

Full source code available at [https://github.com/reactjsexample/react-redux-example](https://github.com/reactjsexample/react-redux-example)

## Running Example

Click for running example: [react-redux-example](https://reactjsexample.github.io/react-redux-example)

### Screen Shot

![react-redux-example](https://github.com/reactjsexample/react-redux-example/blob/master/src/assets/images/react-redux-example.png)

## Compare Same App Without Redux

You can compare this app to the same app without Redux.

This is a good way to see how to convert an existing React app to React Redux.

- [react-example-app](https://github.com/reactjsexample/react-example-app)

## Same App In Angular and Polymer

Here is the same app written in Angular and Polymer:

- [angular-9-example-app](https://github.com/angularexample/angular-9-example-app)
- [polymer-3-example-app](https://github.com/polymerexample/polymer-3-example-app)

## Table of Contents

- [About The Author](#about-the-author)
- [Project Setup](#project-setup)
  - [Prerequisites](#prerequisites)
  - [How To Install](#how-to-install)
  - [How To Run](#how-to-run)
  - [How To Run Unit Tests](#how-to-run-unit-tests)
  - [How To Build For Production](#how-to-build-for-production)
- [Software Libraries Used](#software-libraries-used)
- [Installing The Libraries](#installing-the-libraries)
- [React Redux Best Practices](#react-redux-best-practices)
  - [Redux combineReducers](#redux-combinereducers)
  - [Redux Selectors](#redux-selectors)

## About The Author

**JC Lango** is a UI Architect and UI Developer for large scale web applications at several Fortune 500 companies.

He is an expert in **Angular**, **Polymer**, and **React** and maintains these sites at Github:

- **AngularExample** [https://github.com/angularexample](https://github.com/angularexample)
- **PolymerExample** [https://github.com/polymerexample](https://github.com/polymerexample)
- **ReactJSExample** [https://github.com/reactjsexample](https://github.com/reactjsexample)

JC may be available to work remote, and can be contacted at these links:

- LinkedIn: [https://www.linkedin.com/in/jclango](https://www.linkedin.com/in/jclango)
- Email: [jobs@jclango.com](mailto:jobs@jclango.com)

## Project Setup

### Prerequisites

You need to have Node and NPM installed on your PC.

[Downloading and installing Node.js and npm](https://docs.npmjs.com/downloading-and-installing-node-js-and-npm)

### How To Install

Download the source code using git or else download and unzip the zip file.

Open a terminal window and go to the project root folder.

You need to have npm installed globally.

Run `npm i` to install the required libraries.

### How To Run

Open a terminal window and make sure you are in the project root folder.

Run the following command for a dev server.

#### `npm start`

Open your browser and go to [http://localhost:3000](http://localhost:3000)

The browser will automatically reload if you change any of the source files.

Open the browser's Developer Tools window to see any errors in the Console.

### How To Run Unit Tests

To run the unit tests, you need to stop the server.

If the server is running, stop the server from the terminal window by pressing _Control-C_.

To run the unit tests, Run the following command in the terminal window.

#### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### How To Build For Production

Run the following command to do a production build.

#### `npm run build`

Builds the app for production to the _build_ folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

#### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Software Libraries Used

These are the main packages used in this app:

- react 16.9.0
- react-redux 7.1.1
- react-router-dom 5.0.1
- redux 4.0.4
- redux-thunk 2.3.0
- node-sass 4.12.0
- @material-ui/core 4.4.0

For a complete list, see the [package.json](https://github.com/reactjsexample/react-redux-example/blob/master/package.json) file.
For installation instructions, see [Installing The Libraries](#installing-the-libraries)

### Installing The Libraries

#### Install React

There are a few different ways to create your React App.

Start by reading [Create a New React App](https://reactjs.org/docs/create-a-new-react-app.html)

If you use the [Create React App](https://reactjs.org/docs/create-a-new-react-app.html#create-react-app) command, it will install the React library packages.

#### Install Redux

There are several packages you will need to install Redux.

##### Install React Redux

[React Redux](https://react-redux.js.org/) is Redux for React.

You need to install both **Redux** and **React Redux**.

`npm i -s redux`

`npm i -s react-redux`

##### Install Redux Thunk

[Redux Thunk](https://github.com/reduxjs/redux-thunk) is required to use any kind of asynchronous data or events with the store.

`npm i -s redux-thunk`

See the documentation on **Redux Thunk** to see how to add it when creating the store.

##### Install Redux Devtools

[Redux DevTools](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=en) is a Chrome Extension.
You need that for debugging with Redux.

Install it from your Chrome browser.

You will need to modify your code to use this properly.

**Note**: You should also install the library package.

`npm i --save-dev redux-devtools-extension`

Then follow [these instructions](https://github.com/zalmoxisus/redux-devtools-extension#13-use-redux-devtools-extension-package-from-npm) to setup your code to use the plugin most effectively.

#### Install React Router

[React Router](https://www.npmjs.com/package/react-router) is required if you want to use routing in your app.

`npm i -s react-router-dom`

#### Install Node Sass

[Node Sass](https://www.npmjs.com/package/node-sass) allows your React app to use SCSS instead of CSS.

`npm i -s node-sass`

#### Install Material UI

[Material UI](https://material-ui.com/) is a collection of View Components for React,
based on [Material Design](https://material.io/).

It gives your app a more modern look and feel.

`npm i -s @material-ui/core`

#### Install Material Icons

[Material Icons](https://material.io/resources/icons/?style=baseline) is the set of standard icons from Material Design.

There is a package for React that is part of **Material UI**.

`npm i -s @material-ui/icons`

#### Install query-string

[query-string](https://www.npmjs.com/package/query-string) is a package that makes it easier to parse URL query strings.

#### Install classnames

[classnames](https://www.npmjs.com/package/classnames) is a package that makes it easier to do conditional CSS classes in your React app.

`npm i -s classnames`

#### Install Prettier

[Prettier](https://prettier.io/) is a tool to format your code in a consistent way.

`npm i --save-dev prettier`

Note: **--save-dev** saves it under the **devDependencies** section,
where it available during development, but not is not used during the build process.

I use [JetBrains WebStorm](https://www.jetbrains.com/webstorm/) as my code editor,
and have configured File Watchers that automatically run Prettier on file save.

## React Redux Best Practices

There are a number of design techniques used in this app that you will not see in my simple Redux example app.

- [react-redux-simple-example](https://github.com/reactjsexample/react-redux-simple-example)

### Redux combineReducers

Using **combineReducers** is a best practice for large scale React Redux apps.

It automatically adds a hierarchy to your central store.
By addressing the child level, each reducer will have its own store.

In this app, we have 3 reducers, plus the app reducer.

We combine the reducers in the app reducer like this:

```
const xxxAppReducer = combineReducers({
  answersPage,
  questionsPage,
  searchBox
});
```

Now our store will have a child level that uses the same name that is given to the `combineReducers` function.

So you access the store like this:

`store.answersPage.isLoading`

This is why we don't use a reducer name like "xxxAnswersPageReducer".

So give your reducer the name you want to appear in the store.
The main consideration is that it must be a unique name.

### Redux Selectors

Using Redux Selectors is a best practice for large scale React Redux apps.

In the component source file, there are 2 key things we do in a Redux app.

- mapStateToProps: Access to redux store properties
- mapDispatchToProps: Access to redux action methods

These two functions are connected to redux in your component export like this:

```
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(XxxAnswersPage);

```

In `mapStateToProps`, we must provide the store address to each property that will be used.

`store.answersPage.isLoading`

This where we use our _Redux Selectors_.

```
const mapStateToProps = state => ({
  answers: selectAnswers(state),
  isError: selectIsError(state),
  isLoading: selectIsLoading(state),
  isQuestions: selectIsQuestions(state)
});
```

The selectors are defined in the reducer file.

```
// Redux selectors
export const selectAnswers = state => state.answersPage.answers;
export const selectIsError = state => state.answersPage.isError;
export const selectIsLoading = state => state.answersPage.isLoading;
export const selectIsQuestions = state => state.questionsPage.isQuestions;
```

A best practice is to name each selector with the prefix "select".

If we decide later to move the location of anything in the store,
we can easily change just the selector.

---
