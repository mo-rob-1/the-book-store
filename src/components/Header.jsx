import { useState } from "react";
import Hamburger from "hamburger-react";
import MobileNav from "./MobileNav";
import DesktopNav from "./DesktopNav";
import { FaTwitter, FaFacebookSquare, FaInstagram } from "react-icons/fa";

function Header() {
  const [isOpen, setOpen] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => {
    setOpenMenu(!openMenu);
  };

  const style = { color: "black", fontSize: "2rem" };
  const titleWrapper = { textAlign: "center", marginTop: "1rem", marginBottom: "1rem" };

  return (
    <header>
      <div className="header__main-wrapper">
        <div className="header__title-wrapper" style={titleWrapper}>
          <a href="/" className="header__title">
            The Book Store
          </a>
        </div>

        <div className="header__nav-wrapper">
          <button onClick={toggleMenu} className="hamburger__btn" data-testid="toggle-btn">
            <Hamburger toggled={isOpen} toggle={setOpen} size={30} onClick={toggleMenu} color="#000" />{" "}
          </button>

          {openMenu ? <MobileNav /> : null}
        </div>

        <div data-testid="social-media-links">
          <ul className="header-socials__list">
            <li className="header-socials--margin" data-testid="twitter-link">
              <a href="https://twitter.com/">
                <FaTwitter style={style} />
              </a>
            </li>
            <li className="header-socials--margin" data-testid="facebook-link">
              <a href="https://www.facebook.com/">
                <FaFacebookSquare style={style} />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/" data-testid="instagram-link">
                <FaInstagram style={style} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      <DesktopNav />
    </header>
  );
}

export default Header;
