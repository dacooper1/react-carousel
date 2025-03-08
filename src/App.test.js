import { render, fireEvent } from "@testing-library/react";
import App from "./App"

// smoketest
it("renders without crashing", () => {
    render(<App />)
  }) 