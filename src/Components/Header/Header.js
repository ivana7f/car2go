import React from "react";
import { Link } from "react-router-dom";
import classes from "./Header.module.scss";

function Header() {
  return (
    <header className={classes.header}>
      <Link to="/home" className={classes.logo}>
        LOGO
      </Link>
      <nav className={classes.mainNav}>
        <ul className={classes.mainNavList}>
          <li>
            <Link to="/home" className={classes.mainNavLink}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className={classes.mainNavLink}>
              About
            </Link>
          </li>
          <li>
            <Link to="/cars" className={classes.mainNavLink}>
              Rent a Car
            </Link>
          </li>
          <li>
            <Link to="/blog" className={classes.mainNavLink}>
              Blog
            </Link>
          </li>
          <li>
            <Link to="/contact" className={classes.mainNavLink}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <div className={classes.mainNavBtn}>
        <li>
          <Link
            to="/signin"
            className={`${classes.mainNavLink} ${classes.navBtnColor}`}
          >
            Sign In
          </Link>
        </li>
        <li>
          <Link to="/signup" className={`${classes.mainNavLink}`}>
            Sign Up
          </Link>
        </li>
      </div>
    </header>
  );
}

export default Header;
