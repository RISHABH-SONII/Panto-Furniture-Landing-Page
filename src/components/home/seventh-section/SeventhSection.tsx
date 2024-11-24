import React from "react";
import classes from "./seventhSection.module.css";
import { FaFacebookF } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
const SeventhSection = () => {
  return (
    <div className={classes.containers}>
      <div className={classes.container1}>
        <div className={classes.column1}>
          <h3>Panto</h3>
          <p>
            The advantage of hiring a workspace with us is that gives you
            comfortable service and all-around facilities.
          </p>
        </div>

        <div className={classes.column2}>
          <h4>Services</h4>
          <ul>
            <li>Email-Marketing</li>
            <li>Campaigns</li>
            <li>Branding</li>
          </ul>
        </div>

        <div className={classes.column3}>
          <h4>Furniture</h4>
          <ul>
            <li>Beds</li>
            <li>Chairs</li>
            <li>All</li>
          </ul>
        </div>

        <div className={classes.column4}>
          <h4>Follow Us</h4>
          <ul className={classes.socialIcons}>
            <li>
              <a href="https://www.facebook.com/" className={classes.link1}>
                <i>
                  <FaFacebookF />
                </i>{" "}
                Facebook
              </a>
            </li>
            <li>
              <a href="https://x.com/twitt_login" className={classes.link2}>
                <i>
                  <FaTwitter />
                </i>{" "}
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/accounts/login/"
                className={classes.link3}
              >
                <i>
                  <FaInstagram />
                </i>{" "}
                Instagram
              </a>
            </li>
          </ul>
        </div>
        <br />
      </div>
      <div className={classes.container2}>
        <div className={classes.column5}>
          <p className={classes.copyright}>Copyright © 2021</p>
        </div>
        <div className={classes.column6}>
          {" "}
          <a href="#">Terms & Conditions</a>
        </div>
        <div className={classes.column7}>
          <a href="#">Privacy Policy</a>
        </div>
      </div>
    </div>
  );
};

export default SeventhSection;
