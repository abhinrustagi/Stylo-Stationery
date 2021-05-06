import React, { useState } from "react";
import "../../styles/components/header.scss";
import Img from "../../img/Logo.svg";
import { RiCompasses2Line } from "react-icons/ri";
import { AiOutlineHome } from "react-icons/ai";
import { IoIosContact } from "react-icons/io";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";

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
        <Link to="/">
          <img src={Img} alt="Stylo Stationery" className="nav-logo" />
        </Link>
        <GiHamburgerMenu onClick={onClickHandler} className="menu-btn" />
        <ul className={`nav-links ${isExpanded ? "isExpanded" : ""}`}>
          <Link to="/">
            <li>
              <AiOutlineHome />
              Home
            </li>
          </Link>
          <Link to="/products">
            <li>
              <RiCompasses2Line />
              View Products
            </li>
          </Link>
          <Link to="/contact">
            <li>
              <IoIosContact />
              Contact Us
            </li>
          </Link>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
