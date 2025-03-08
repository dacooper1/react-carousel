import { render, fireEvent } from "@testing-library/react";
import Card from "./Card"

// smoketest
it("should render without breaking", () => {
    render(<Card />)
})