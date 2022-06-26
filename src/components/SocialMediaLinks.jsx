import { FaTwitter, FaFacebookSquare, FaInstagram } from "react-icons/fa";

function SocialMediaLinks() {
  const style = { color: "black", fontSize: "2.6rem" };

  return (
    <ul className="socials__wrapper" data-testid="list">
      <li className="socials--margin" data-testid="twitter-link">
        <a href="https://twitter.com/">
          <FaTwitter style={style} />
        </a>
      </li>
      <li className="socials--margin">
        <a href="https://www.facebook.com/" data-testid="facebook-link">
          <FaFacebookSquare style={style} />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/" data-testid="instagram-link">
          <FaInstagram style={style} />
        </a>
      </li>
    </ul>
  );
}

export default SocialMediaLinks;
