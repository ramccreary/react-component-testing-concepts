import { cleanup, fireEvent, render } from "@testing-library/react";
import TestHook from "../test_hook";
import App from "../../../App"

afterEach(cleanup); // Since we are not using shallow render we have to unmount or cleanup after every test, which is what this function does

it ('Text in state is changed when button clicked', () => {
    // getByText is the query method we get by using object destructuring on the value of the render function, you'll use this most of the time
    // Since a user will see the text on the UI, this is how we will query the DOM nodes
    // We are testing the same way a user would use our app and that is through the text they will see
    const { getByText } = render(<TestHook />);
    expect(getByText(/Initial/i).textContent).toBe("Initial State"); // (/Initial/i) is a regex expression that returns the first node that at least contains the text "Initial"
    fireEvent.click(getByText("State Change Button"));
    expect(getByText(/Initial/i).textContent).toBe("Initial State Changed");
});

// we can do the same exact thing with props as well
it ('button click changes props', () => {
    // since the props are going to be changed in App.js we will need to render it along with our component
    const { getByText } = render(
        <App>
            <TestHook/>
        </App>
    );
    expect(getByText(/Moe/i).textContent).toBe("Moe");
    fireEvent.click(getByText("Change Name"));
    expect(getByText(/Steve/i).textContent).toBe("Steve");
});