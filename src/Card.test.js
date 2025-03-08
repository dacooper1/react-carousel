import { render, fireEvent } from "@testing-library/react";
import Card from "./Card"

// smoketest
it("should render without breaking", () => {
    render(<Card />)
})

// snapshot
it("should be the same as previous render", () => {
    const {asFragment} = render(<Card />)
    expect(asFragment()).toMatchSnapshot()
})