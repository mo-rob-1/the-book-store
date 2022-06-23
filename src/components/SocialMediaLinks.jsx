import { FaTwitter, FaFacebookSquare, FaInstagram } from "react-icons/fa";

function SocialMediaLinks() {
  const style = { color: "black", fontSize: "2.6rem" };

  return (
    <div className="socials__wrapper">
      <a href="https://twitter.com/">
        <FaTwitter style={style} />
      </a>
      <a href="https://www.facebook.com/">
        <FaFacebookSquare style={style} />
      </a>
      <a href="https://www.instagram.com/">
        <FaInstagram style={style} />
      </a>
    </div>
  );
}

export default SocialMediaLinks;
