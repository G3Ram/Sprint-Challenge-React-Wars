# Answers

1.  What is React JS and what problems does it try and solve?

# Answer:

    ReactJS is a UI component library. It is a very developer-friendly combination and is a solution for all browser needs like UI interactions, beautifications, etc.

    What problems does it try to solve:

    a. Can update only the relevant sections of the virtual DOM:
    As we all know DOM operations are expensive with respect to performance. In a situation where there is loads of information to be displayed ReactJS comes in handy by only updating the relevant parts of the DOM.
    Example: In the to-do list application, when a item was selected as complete I had made a strike through. This was very easily handled in the child class by conditional rendering. Also, in the calculator app, only the display part kept changing. So we retained all the other
    buttons as they were and refreshed only the display button.

    b. A single page multiple components:
    Different UI parts of the application can be split into relevant components. Writing code This way makes it more modular and highly reusable.
    Example: In the to-do list app, we had the to-do items split from the list. This helps in resusing components and making it more modular. If I want to have a different display, I can just change only the to-do item component and have a different display.

    These are a few problems that ReactJS solves. Other positives will include it allowing us to use
    javascript and html together thereby making it extremely easy to develop complex UIs with ease.

2.  What does it mean to _think_ in react?

# Answer:

    To me, thinking in react means thinking interms of components. When a UI design is presented, I would split it into various logical components and try to assign their respective functionality at the component level and assemble it all together in one .js (usually app.js).

3.  Briefly describe some of the differences between a Class/Stateful component and a Functional/Presentational component.

# Answer:

    a. A functional component is a plain JS function which accepts 'props' as an argument and returns a React element. A class
    component requires us to extend the React.Component and create a render() which returns a React element.

    b. Functional component does not have their own state. Class component has its own state - (this.state and this.setState() can be used)

4.  Describe state.

# Answer:

    State is like a dataStore to the ReactJS component. Any display item that need to be dynamic or will undergo change in a page will be stored in state. Based on the user input or user interaction, the user requested data will be set in the state to be displayed on page.

5.  Describe props.

# Answer:

    Props are a means of sending data to the component. Props are equivalent to a parameters of a pure JS function and their values cannot be changed. As we all know, reactJS is a UI component library. We need the data that are passed as attributes in html to be available to the javascript functions for processing. This is possible using props. Props are reactJS specific and is a way to pass an html/component attribute values to the handlers and other functions for rendering and processing.
