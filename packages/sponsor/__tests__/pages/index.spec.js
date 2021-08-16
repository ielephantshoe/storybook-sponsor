import { render, screen } from "@testing-library/react"
import Home from "../../pages/index"

describe("Home Page", () => {
  it("says 'Sponsor Portal' in the h1", () => {
    render(<Home />)
    expect(screen.queryByText("Sponsor Portal")).toBeInTheDocument()
  })
})
