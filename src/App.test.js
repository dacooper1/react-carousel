import { render, fireEvent } from "@testing-library/react";
import App from "./App"

// smoketest
it("renders without crashing", () => {
    render(<App />)
  }) 

// snapshot
it("should be the same as previous render", () => {
    const  {asFragment} = render(<App />);
    expect(asFragment()).toMatchSnapshot();
})