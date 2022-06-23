import { FaTwitter, FaFacebookSquare, FaInstagram } from "react-icons/fa";

function SocialMediaLinks() {
  const style = { color: "black", fontSize: "2.6rem" };

  return (
    <ul className="socials__wrapper">
      <li className="socials--margin">
        <a href="https://twitter.com/">
          <FaTwitter style={style} />
        </a>
      </li>
      <li className="socials--margin">
        <a href="https://www.facebook.com/">
          <FaFacebookSquare style={style} />
        </a>
      </li>
      <li>
        <a href="https://www.instagram.com/">
          <FaInstagram style={style} />
        </a>
      </li>
    </ul>
  );
}

export default SocialMediaLinks;
