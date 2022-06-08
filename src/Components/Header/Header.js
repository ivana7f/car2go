import React from "react";
import classes from "./Header.module.scss";

function Header() {
  return (
    <header className={classes.header}>
      <a href="#" className={classes.logo}>
        LOGO
      </a>
      <nav className={classes.mainNav}>
        <ul className={classes.mainNavList}>
          <li>
            <a href="#" className={classes.mainNavLink}>
              Home
            </a>
          </li>
          <li>
            <a href="#" className={classes.mainNavLink}>
              About
            </a>
          </li>
          <li>
            <a href="#" className={classes.mainNavLink}>
              Rent a Car
            </a>
          </li>
          <li>
            <a href="#" className={classes.mainNavLink}>
              Blog
            </a>
          </li>
          <li>
            <a href="#" className={classes.mainNavLink}>
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className={classes.mainNavBtn}>
        <li>
          <a
            href="#"
            className={`${classes.mainNavLink} ${classes.navBtnColor}`}
          >
            Sign In
          </a>
        </li>
        <li>
          <a href="#" className={`${classes.mainNavLink}`}>
            Sign Up
          </a>
        </li>
      </div>
    </header>
  );
}

export default Header;
