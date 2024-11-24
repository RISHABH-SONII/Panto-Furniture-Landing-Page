import React from "react";
import classes from "./header.module.css";
import { FaBagShopping } from "react-icons/fa6";
import { PiNumberZeroBold } from "react-icons/pi";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <div className={classes.navbar}>
      <h2 className={classes.logo}>Panto</h2>
      <ul>
        <li>
          <Link to="section1" smooth={true} duration={500} className="nav-link">
            Furniture
          </Link>
        </li>
        <li>
          <Link to="section3" smooth={true} duration={500} className="nav-link">
            Shop
          </Link>
        </li>
        <li>
          <Link to="section4" smooth={true} duration={500} className="nav-link">
            About Us
          </Link>
        </li>
        <li>
          <Link to="section7" smooth={true} duration={500} className="nav-link">
            Contact
          </Link>
        </li>
      </ul>
      <div className={classes.cart}>
        <FaBagShopping className={classes.FaBagShopping} />
        <PiNumberZeroBold className={classes.PiNumberZeroBold} />
      </div>
    </div>
  );
};

export default Header;
