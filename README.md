- https://www.freecodecamp.org/news/testing-react-hooks/

# What to Test in a React Component
- It must render: At the very least, make sure the component renders without error. This verifies there are no JSX syntax errors, that all variables are defined, etc. This could be as simple as verifying that the rendered output is not null.

- Test the output: One step above “it renders” is “it renders the correct thing.” Given a set of props, what output is expected? Does Person render its name and age, or does it render a name and “TODO: age coming in v2.1”?

- Test the states: Every conditional should be accounted for. If the classNames are conditional (enabled/disabled, success/warning/error, etc), make sure to test that the className-deciding logic is working right. Likewise for conditionally-rendered children: if a Logout button is only visible when the user is logged in, for instance, make sure to test for that.

- Test the events: If the component can be interacted with (an input or button with an onClick or onChange or onAnything), test that the events work as expected and call the specified functions with the correct arguments (including binding this, if it matters).

- Test the edge cases: Anything that operates on an array could have boundary cases — an empty array, an array with 1 element, a paginated list that should truncate at 25 items, and so on. Try out every edge case you can think of, and make sure they all work correctly.

# What Not to Test
- Implementation details (things that aren't end user functionality): Constantly having to worry about function and variable names is a headache, and having to rewrite tests every time you change them is tedious.

- Const variables: these are unchanging variables, no need to test them.

- Third party libraries: It is not your job to test these libraries. It is up to the creators of these libraries to test it. If you are not sure if a library is tested you should not use it. Or you can read the source code to see if the author included tests. You can download the source code and run these tests yourself. You can also ask the author if their library is production ready or not.

# Kinds of Tests to Write
- Many integration tests. No snapshot tests. Few unit tests. Few e to e tests.
- Write mostly integration tests. Unit tests are good but they don't really resemble the way your end user interacts with your app.
- Integration tests should mock as little as possible.

# Shallow vs Mount
- Mount actually executes the html, css and js code like a browser would, but does so in a simulated way.
- Unmount or cleanup  the component after each test, because it’s almost a live app and one test will affect another test.
- Mount/render is typically used for integration testing and shallow is used for unit testing.
- Shallow rendering only renders the single component we are testing. It does not render child components.

# React-testing-library
- npm install @testing-library/react
