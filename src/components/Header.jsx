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

  return (
    <header>
      <div className="header__main-wrapper">
        <h1 className="header__title">The Book Store</h1>

        <div className="header__nav-wrapper">
          <button onClick={toggleMenu} className="hamburger__btn">
            <Hamburger toggled={isOpen} toggle={setOpen} size={30} onClick={toggleMenu} />{" "}
          </button>

          {openMenu ? <MobileNav /> : null}
        </div>

        <div>
          <ul className="header-socials__list">
            <li className="header-socials--margin">
              <a href="https://twitter.com/">
                <FaTwitter style={style} />
              </a>
            </li>
            <li className="header-socials--margin">
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
        </div>
      </div>

      <DesktopNav />
    </header>
  );
}

export default Header;
