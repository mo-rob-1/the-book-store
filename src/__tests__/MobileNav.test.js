import { render, screen } from "@testing-library/react";
import MobileNav from "../components/MobileNav";

describe("MobileNav", () => {
  it("renders the mobile nav component", () => {
    const { container } = render(<MobileNav />);
    expect(container).toMatchSnapshot();
  });

  it("renders the navigation", () => {
    render(<MobileNav />);
    const navElement = screen.getByTestId("navigation");
    expect(navElement).toBeTruthy();
  });

  it("renders the Home text link", () => {
    render(<MobileNav />);
    expect(screen.getByText("Home")).toBeInTheDocument();
  });

  it("renders the Books text link", () => {
    render(<MobileNav />);
    expect(screen.getByText("Books")).toBeInTheDocument();
  });

  it("renders the Magazines text link", () => {
    render(<MobileNav />);
    expect(screen.getByText("Magazines")).toBeInTheDocument();
  });

  it("renders the E-Books text link", () => {
    render(<MobileNav />);
    expect(screen.getByText("E-Books")).toBeInTheDocument();
  });

  it("renders the Account text link", () => {
    render(<MobileNav />);
    expect(screen.getByText("Account")).toBeInTheDocument();
  });
});
