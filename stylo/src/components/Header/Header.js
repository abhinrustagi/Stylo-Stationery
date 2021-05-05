import React, { useState } from "react";
import "../../styles/components/header.scss";
import Img from "../../img/Logo.svg";
import { RiCompasses2Line } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import { IoIosContact } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";

function Header() {
  const [isExpanded, setState] = useState(false);
  const onClickHandler = () => {
    if (isExpanded) {
      setState(false);
    } else {
      setState(true);
    }
  };

  return (
    <header>
      <nav className="container">
        <img src={Img} alt="Stylo Stationery" className="nav-logo" />
        <GiHamburgerMenu onClick={onClickHandler} className="menu-btn" />
        <ul className={`nav-links ${isExpanded ? "isExpanded" : ""}`}>
          <a href="/">
            <li>
              <AiOutlineHome />
              Home
            </li>
          </a>
          <a href="/products">
            <li>
              <RiCompasses2Line />
              View Products
            </li>
          </a>
          <a href="/contact">
            <li>
              <IoIosContact />
              Contact Us
            </li>
          </a>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
