import { render, screen } from "@testing-library/react";
import SocialMediaLinks from "../components/SocialMediaLinks";

describe("SocialMediaLinks", () => {
  it("renders the social media links", () => {
    const { container } = render(<SocialMediaLinks />);
    expect(container).toMatchSnapshot();
  });

  it("renders the list", () => {
    render(<SocialMediaLinks />);
    const list = screen.getByTestId("list");
    expect(list).toBeTruthy();
  });

  it("renders the twitter link", () => {
    render(<SocialMediaLinks />);
    const twitterLink = screen.getByTestId("twitter-link");
    expect(twitterLink).toBeTruthy();
  });

  it("renders the facebook link", () => {
    render(<SocialMediaLinks />);
    const facebookLink = screen.getByTestId("facebook-link");
    expect(facebookLink).toBeTruthy();
  });

  it("renders the instagram link", () => {
    render(<SocialMediaLinks />);
    const instagramLink = screen.getByTestId("instagram-link");
    expect(instagramLink).toBeTruthy();
  });
});
