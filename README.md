# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### `npm start`

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

|/| Custom |\|
Building off of - https://www.positronx.io/react-mern-stack-crud-app-tutorial/ (Outdated)

### Setup

Backend - Handles all contact with the Database.
Ensure to run `npm install` inside both primary dir /dungeons-and-details and backend dir /dungeons-and-details/backend
`npm install && cd backend && npm install`
ensure you have nodemon installed on your dev `npm install -g nodemon`
run `nodemon server.js` or `npm start` inside backend to start up the DB watcher for auto refresh.
open a new terminal.
run `npm start` inside root dir to start the front-end.
open a new terminal
run `npm run tailwind:watch` inside root dir to start css watcher.
If Issues running the command above, try `npm install -D tailwindcss`

Frontend `npm start`
Backend `npm start`
Tailwind `npm run tailwind:watch`

### Frontend

React - Framework of our frontend.
Bootstrap - Library for bootstrap CSS. --- Outdated
Reactstrap - Library for utilizing bootstrap react components. --- Outdated
Tailwind - Library for styling.
react-router-dom - Library for managing paging.
Axios - Used for simplifying creating http/https CRUD calls.
Formik - Used for all Forms and validation. https://formik.org/docs/overview
If Prettier throws an error from ESLINT. Run `npm install --save-dev eslint-config-prettier`
If ESLint Babel error [ERROR in Failed to load parser 'babel-eslint' declared in '.eslintrc.json': Cannot find module 'babel-eslint']
`npm install eslint babel-eslint -g`

### CSS

We are using Tailwind and TailwindCLI to compile the raw Tailwind config into usable CSS.

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

### VSCode Plugins

Tailwind CSS IntelliSense

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

### Fundamentals

Eerything is Javascript. We utilize React as a framework on top of JS.

    Variables: Variable means anything that can vary. In JavaScript, a variable stores the data value that can be changed later on.
        There are two different types of ways to initalize a variable
            1. const: This is a constant. This value cannot be change.
                Example: const variableName = value
            2. let: This value is not constant. This value can be change.
                Example: let variableName = value
        Variable Types:
            1. String - Uses quotes to notate is a string.
                Example: const variableName = "value" or "123"
            2. Number | Integer - is only numbers
                Example: const variableName = 123
            3. Boolean: Contains either true or false. Never set booleans to anything other than true or false. These are case sensitive. They must be lowercase, either true or false.
                Example: const variableName = true | const variableName = false
            4. Array - An object containing other variables without keys. Instead uses numbers, starting with 0. This is called the 'index' of an array. An array can contain any number of variables that can also be any type of variable. Each value in an array is seperated using a comma.
                Example 1: const variableName = ["string", 123, true]
                Example 2: const variableName = ["string", 123, true, [string, true, 123], {}, () => {}]
            5. Object - Contains variables with a key, or variable names. Similar to an array, but instead of using an Index you provide the key. each key has to be unique.
                Example: const variableName = {variableNameString: "string", variableNameInt: 123, variableNameBoolean: true}
                Example: const variableName = {variableNameString: "string", variableNameInt: 123, variableNameBoolean: true, variableNameArray: [], variableNameObject: {}, variableNameFunc: () => {}}
            6. Func - 'Can' take in a value when called, and 'can' return data back. In React we will mostly utilize 'Arrow Functions' - Arrow functions don't redefine the value of this within their function body. This makes it a lot easier to predict their behavior when passed as callbacks, and prevents bugs caused by use of this within callbacks.
                Example 1: Arrow Function Example: const functionName = (valueToTakeIn) => {return valueToTakeIn + 1};
                    const newValue = functionName(2)
                    newValue is equal to 3.
                Example 2: Regular Function Example: const functionName(valueToTakeIn){return valueToTakeIn + 1}
                    const newValue = functionName(2)
                    newValue is equal to 3.
            Javascript Looks at how the variable is built to determine what type of variable it is.
                String: "",
                Number: 123,
                Boolean: true/false
                Array: []
                Object: {}
                Func: () => {}
    HTML: (Hypertext Markup Language). A standardized system for tagging text files to achieve font, color, graphic, and hyperlink effects on World Wide Web pages.
        parent: the HTML tag that you are inside of.
        Defined by wrapped in <>
        2 differents ways to utilize html tags.
            Self Closing Tags - <div/>
            Non-Self Closing Tags - <div></div>
        <hr>: Horizontal Rule
            Creates a horizontal line inside of it's parent.
        <div>: Content Division
            The <div> HTML element is the generic container for flow content. It has no effect on the content or layout until styled in some way using CSS (e.g. styling is directly applied to it, or some kind of layout model like Flexbox is applied to its parent element).
            A div will naturally try to place it's self below content in front of it.
        <p>: Paragraph
            Used for displaying paragraph amount of text on the screen.
        <span>: The Content Span element.
            Used for displaying a small amount of text on the screen.
        <h1>: Header 1
            Largest header size.
        <h2>: Header 2
        <h3>: Header 3
        <h4>: Header 4
        <h5>: Header 5
        <h6>: Header 6
        <br>: Line Break
            Forces text to the next line
        <ul>: Unordered List
            The difference between an ordered list and an unordered list, is that an ordered list will have its items ordered by number, whereas unordered lists will have just bullet points
        <ol>: Ordered List
            The difference between an ordered list and an unordered list, is that an ordered list will have its items ordered by number, whereas unordered lists will have just bullet points
        <li>: Line Item
            used to notate each item inside of an ordered or unordered list.
    Data Minipulation
        Updating a basic Variable.
            1. let basicVariable = "one".
                basicVariable = "two"
            2. let basicVariable = 1.
                basicVariable = 2
            3. let basicVariable = true
                basicVariable = false
            4. let basicVariable = ["one", 1, true]
                basicVariable[0] = "two"
                basicVariable[1] = 2
                basicVariable[2] = false
                    console.log(basicVariable)
                        ["two", 2, false]
            5. let basicVariable = {keyOne: "one", keyTwo: 1, keyThree: true}
                basicVariable.keyOne = "two"
                basicVariable.keyTwo = 2
                basicVariable.keyThree = false
                    console.log(basicVariable)
                        {keyOne: "two", keyTwo: 2, keyThree: false}
        Updating arrays programatically. https://helpx.adobe.com/coldfusion/cfml-reference/coldfusion-functions/functions-by-category/array-functions.html
            1. push - will push a new item into the array at the top of the stack.
                let basicVariable = [1, 2, 3];
                basicVariable.push(4)
                    console.log(basicVariable)
                        [1, 2, 3, 4]
            2. slice - remove specific items from an array.
                let basicVariable = [0, 1, 2, 3, 4, 5];
                basicVariable.slice(2, 4)  - (start, end)
                    console.log(basicVariable)
                        [2, 3]
            3. Length - Get back the length int for an array
                let basicVariable = [0, 1, 2, 3, 4, 5];
                console.log(basicVariable.length)
                    6
            4. Find - search through an array return first instance that matches.
                let basicVariable = [0, 1, 2, 2, 3, 4, 5];
                const found = basicVariable.find((value) => value === 2)
                    console.log(found)
                        2
                const found = basicVariable.find((value) => value === 6)
                    console.log(found)
                        undefined
            5. Filter - search through an array return all instances that matches.
                let basicVariable = [0, 1, 2, 2, 3, 4, 5];
                const found = basicVariable.find((value) => value === 2)
                    console.log(found)
                        [2, 2]
                const found = basicVariable.find((value) => value === 6)
                    console.log(found)
                        []
            6. Updating an array utilizing map.
                let basicVariable = [1, 2, 3]; Add 1 to each number.
                const newArray = basicVariable.map((value) => return {value + 1})
                    console.log(newArray)
                        [2, 3, 4]
            7. When copying over Objects or Arrays. Ensure to destructure as to not refrence the variable copied from
                Example
                    const foo = {bar: 1}
                    const foo2 = foo  // DO NOT DO THIS
                    const foo2 = {...foo} // DO THIS INSTEAD

    React Specifics
        Component Life Cycle Method - Mounts / Updates / Dismounts
        Props - Properties you pass to a component. Component will Rerender anytime the props are updated. You can desconstruct Props or use the key word props
            Example: const Component = (props) => {
                props.value
            }
            Example: const Component = ({value}) => {
                value
            }
        State - object is where you store property values that belongs to the component. When the state object changes, the component re-renders.
            We utilize useState to create/update state variables
                Example
                    const [variableName, setVariableName] = useState("variableValue")
                           Name          Func to Update               Initial Value
                If you want to update the state variable call setVariableName
                    Example
                        setVariableName("New VariableValue")
                Try keeping the state value the same variable TYPE.
        Components - Components are independent and reusable bits of code. They serve the same purpose as JavaScript functions, but work in isolation and return HTML.
        PropTypes - Used for defining out props for a component.
        Render - Whenever the screen updates
        useEffect - Utilized to perform actions at specific times during the components life cycle method.
            At render
                Example:
                    useEffect(() => {
                        perform this on component render
                    }, [])
            During any prop or state variable change.
                Example:
                    useEffect(() => {
                        perform this on looked at variable change.
                    }, [variableToLookAt])
            Run when component is unmounting
                Example:
                    useEffect(() => {
                        return () => {
                            perform this when the component is being unmounted
                        }
                    }, [])

### Database

Collections:

Characters
Classes
Attributes
