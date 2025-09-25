import { useState } from "react";
import "../styles/header.css";
function Header({ windowTop, checkActive, scrollToSection }) {
  const activeLine = <span className="active-line" />;
  return (
    <div className="header-wrapper">
      <img className="logo" src="/assets/logo.png" />
      <div className="header-right">
        <div className="header-link-wrapper">
          <a
            onClick={() => scrollToSection("home")}
            className={
              checkActive("home") ? "header-link-active" : "header-link"
            }
          >
            Home
          </a>
          {checkActive("home") && activeLine}
        </div>
        <div className="header-link-wrapper">
          <a
            onClick={() => scrollToSection("howitworks")}
            className={
              checkActive("howitworks") ? "header-link-active" : "header-link"
            }
          >
            How it works
          </a>
          {checkActive("howitworks") && activeLine}
        </div>
        <div className="header-link-wrapper">
          <a
            onClick={() => scrollToSection("features")}
            className={
              checkActive("features") ? "header-link-active" : "header-link"
            }
          >
            Features
          </a>
          {checkActive("features") && activeLine}
        </div>
        <button className="waitlist-button">Join the waitlist</button>
      </div>
    </div>
  );
}

export default Header;
