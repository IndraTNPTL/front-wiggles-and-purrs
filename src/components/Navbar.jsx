import { Link } from "react-router-dom";
import React, { useState } from "react";
import logo from "../assets/catndog.png";
import { slide as Menu } from "react-burger-menu";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const handleMenuToggle = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <nav>
        <div className="nav-header">
          <Link className="link-to-HP" to="/">
            <img className="logo" src={logo} alt="logo" />
          </Link>
          <Link to="/">
            <button className="btn-donate">Donate</button>
          </Link>
        </div>

        <Menu
          isOpen={menuOpen}
          onStateChange={({ isOpen }) => setMenuOpen(isOpen)}
        >
          <a id="home" className="menu-item" href="/">
            ABOUT US
          </a>

          <a id="about" className="menu-item" href="/about">
            FOUND A PET
          </a>
          <a id="contact" className="menu-item" href="/contact">
            DOG
          </a>
          <a id="contact" className="menu-item" href="/contact">
            CAT
          </a>
          <a id="contact" className="menu-item" href="/contact">
            HEDGEHOG
          </a>
        </Menu>
      </nav>
    </>
  );
}

export default Navbar;
