import { render, screen } from "@testing-library/react";
import DesktopNav from "../components/DesktopNav";

describe("DesktopNav", () => {
  it("renders the desktop nav component", () => {
    const { container } = render(<DesktopNav />);
    expect(container).toMatchSnapshot();
  });

  it("renders the navigation", () => {
    render(<DesktopNav />);
    const navElement = screen.getByTestId("navigation");
    expect(navElement).toBeTruthy();
  });

  it("renders the Home text link", () => {
    render(<DesktopNav />);
    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("renders the Books text link", () => {
    render(<DesktopNav />);
    expect(screen.getByText("Books")).toBeInTheDocument();
  });

  it("renders the Magazines text link", () => {
    render(<DesktopNav />);
    expect(screen.getByText("Magazines")).toBeInTheDocument();
  });

  it("renders the E-Books text link", () => {
    render(<DesktopNav />);
    expect(screen.getByText("E-Books")).toBeInTheDocument();
  });

  it("renders the Account text link", () => {
    render(<DesktopNav />);
    expect(screen.getByText("Account")).toBeInTheDocument();
  });
});
