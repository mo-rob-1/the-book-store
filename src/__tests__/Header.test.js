import { render, screen } from "@testing-library/react";
import Header from "../components/Header";

describe("Header", () => {
  it("renders the header component", () => {
    const { container } = render(<Header />);
    expect(container).toMatchSnapshot();
  });

  it("renders the logo text", () => {
    render(<Header />);
    expect(screen.getByText("The Book Store")).toBeInTheDocument();
  });

  it("renders the toggle button", () => {
    render(<Header />);
    const toggleBtn = screen.getByTestId("toggle-btn");
    expect(toggleBtn).toBeTruthy();
  });

  it("renders the social media links", () => {
    render(<Header />);
    const socialLinks = screen.getByTestId("social-media-links");
    expect(socialLinks).toBeTruthy();
  });

  it("renders the twitter link", () => {
    render(<Header />);
    const twitterLink = screen.getByTestId("twitter-link");
    expect(twitterLink).toBeTruthy();
  });

  it("renders the facebook link", () => {
    render(<Header />);
    const facebookLink = screen.getByTestId("facebook-link");
    expect(facebookLink).toBeTruthy();
  });

  it("renders the instagram link", () => {
    render(<Header />);
    const instagramLink = screen.getByTestId("instagram-link");
    expect(instagramLink).toBeTruthy();
  });
});
