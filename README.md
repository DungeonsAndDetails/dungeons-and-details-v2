# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

|/| Custom |\|
Building off of - https://www.positronx.io/react-mern-stack-crud-app-tutorial/ (Outdated)

### Setup

Backend - Handles all contact with the Database.
Ensure to run `npm install` inside both primary dir /dungeons-and-details and backend dir /dungeons-and-details/backend
`npm install && cd backend && npm install`
ensure you have nodemon installed on your dev `npm install -g nodemon`
run `nodemon server.js` inside backend to start up the DB watcher for auto refresh.

### Frontend

React - Framework of our frontend.
Bootstrap - Library for bootstrap CSS. --- Outdated
Reactstrap - Library for utilizing bootstrap react components. --- Outdated
Tailwind - Library for styling.
react-router-dom - Library for managing paging.
Axios - Used for simplifying creating http/https CRUD calls.
Formik - Used for all Forms and validation. https://formik.org/docs/overview
If Prettier throws an error from ESLINT. Run `npm install --save-dev eslint-config-prettier`

### Backend

Express - It’s a robust Node.js web application framework that helps in creating powerful REST APIs.
MongoDB - It’s a NoSQL document-oriented database for creating a robust web application.
CORS - It’s a node.js package helps in enabling Access-Control-Allow-Origin CORS header.
bodyParser - This package extracts the entire body portion of an incoming request stream and exposes it on req.body.
nodemon - Dependency to automate the server restarting process.

### Tools

VSCode: https://code.visualstudio.com/
Github Desktop: https://desktop.github.com/
MongoDB Compass: https://www.mongodb.com/products/compass

### Docs

This App uses React Functional Components - A Functional component is a function that takes props and returns JSX. They do not have state or lifecycle methods. Functional components are easier to read, debug, and test. They offer performance benefits, decreased coupling, and greater reusability.

Component Lifecycle Methods - Mounting / Updating / Unmounting / Error Handling.
https://reactjs.org/docs/react-component.html

This App will be using hooks to interact with the component lifecycle method instead of the component life cycle methods.
https://reactjs.org/docs/hooks-reference.html

This App will be using useState to interact with the state of components.
https://reactjs.org/docs/hooks-reference.html#usestate

This App will use useContext & useReducer to handle global state.
https://reactjs.org/docs/hooks-reference.html#usecontext
https://reactjs.org/docs/hooks-reference.html#usereducer

### Database

Collections:

Characters
Classes
Attributes
