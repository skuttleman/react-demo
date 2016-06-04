# Getting Started with React/Redux
Welcome to this overview of building apps with React. It starts with a very simple "hello world" example and builds to an app with synchronous and asynchronous behavior that uses Redux for state management and Karma for unit tests. This is not a workbook or code-along sort of tutorial, but rather a series of code samples meant to spark discussion. This repo is intended to be a reference you can use as you build your first real app with React/Redux.

## Setup the App
```bash
$ git clone https://github.com/skuttleman/react-demo
$ cd react-demo
$ npm run setup #This will install what you need. It includes some global npm modules and may need to be run with "sudo".
$ npm start #This runs the react app on port 8888.
$ npm run dev #This watches changes to the files in ./src and transpiles them into the build folder.
```
Visit http://localhost:8888 to see the app running. Note that `npm run dev` is only needed if you plan to edit the source code and see your changes reflected in the browser.

## What's Inside
Checkout the branches to follow along with the progression of building the app.
```bash
$ git checkout step-1
$ git checkout step-2
...
$ git checkout step-6 #The code in the master branch is the same as step-6
```

### Step 1
This is what React code looks like both with and without jsx preprocessing. React does not use html templates like other popular frameworks. Everything gets put in your javascript files. Most tutorials and code examples that you find online will use the jsx syntax (xml embedded in your javascript that gets transpiled to regular javascript), so it's probably your best bet to get used to using that syntax. An appropriate pre-processor will need to be setup. This app is using babel with webpack.

### Step 2
Here is some interactivity. Note the pattern in changing state. An event - in this case a React DOM event - triggers a change in the React component's state, which in turn triggers a re-render of the component. Notice that each component is managing its own state and that its state is isolated from the other components' state.

### Step 3
Here is a simple external state manager that can be used to share state among multiple components. With this model, the component that updates state needs to be aware of what it is updating, and the component that is subscribing to the state manager surrenders its ability to mange its own state. The actual implementation of the state manager is not very robust and not likely to be something you would use on a real app.

### Step 4
Now our app's state is being managed by Redux. Changes to the state are declarative not imperative, and special functions called "reducers" are triggered and update state according to the the dispatched action. Take a look at the code in `src/js/store/reduxSimple.js`. This simulates the interface with Redux to help you understand the flow. The properties on your store are defined by the reducers you create, and every time you dispatch an action it passes through every reducer to determine what, if anything, needs to update on the store. Open the console in your browser and run `simpleRedux()` to see how the state changes when dispatching actions.

### Step 5
This step adds asynchronous behavior. If you look in the src/js/actions folder you will see we have one function that is generating a dispatch-able Redux action, and another that takes dispatch as an argument and can dispatch actions at a later time. Make sure you run `npm run server` so the react app has someone to talk to.

### Step 6
Finally, some examples of unit tests with Karma. You can either use `npm test` to run the tests once, or `npm run test:watch` to watch for changes in both the `src` and `test` directories and continually re-run the tests. The test output is displayed in both the browser (click the Debug button on the page that loads) and the terminal. React's TestUtils library can be helpful for testing your component's behavior. Take a look at test/components/TypeTastic-spec.js for some examples of what can be done.
