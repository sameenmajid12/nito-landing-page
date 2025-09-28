import "../styles/header.css";
import { useEffect, useState } from "react";
function HeaderMenu({ setHeaderMenuVisible, scrollToSection }) {
  useEffect(() => {
    const preventScroll = (e) => e.preventDefault();

    window.addEventListener("scroll", preventScroll, { passive: false });
    window.addEventListener("wheel", preventScroll, { passive: false });
    window.addEventListener("touchmove", preventScroll, { passive: false });

    return () => {
      window.removeEventListener("scroll", preventScroll);
      window.removeEventListener("wheel", preventScroll);
      window.removeEventListener("touchmove", preventScroll);
    };
  }, []);
  const [menuClosing, setMenuClosing] = useState(false);
  const closeHeaderMenu = (section) => {
    setMenuClosing(true);
    setTimeout(() => {
      setHeaderMenuVisible(false);
    }, 500);
    if (section) {
      scrollToSection(section);
    }
  };
  return (
    <div className={`header-menu-wrapper ${menuClosing && "menu-closing"}`}>
      <div className="header-menu-header">
        <img className="logo" src="/assets/logo.png" />
        <ion-icon
          name="close"
          className="header-menu-close"
          onClick={closeHeaderMenu}
        />
      </div>
      <div className="header-menu-content-wrapper">
        <h3
          onClick={() => closeHeaderMenu("home")}
          className="header-menu-link"
        >
          Home <ion-icon name="chevron-forward-outline" />
        </h3>
        <h3
          onClick={() => closeHeaderMenu("howitworks")}
          className="header-menu-link"
        >
          How it works <ion-icon name="chevron-forward-outline" />
        </h3>
        <h3
          onClick={() => closeHeaderMenu("features")}
          className="header-menu-link"
        >
          Features <ion-icon name="chevron-forward-outline" />
        </h3>
        <button
          onClick={() => closeHeaderMenu("joinwaitlist")}
          className="header-menu-waitlist-button"
        >
          Join the waitlist
        </button>
      </div>
      <div className="header-menu-seperator" />
      <div className="header-menu-footer">
        <a
          href="https://www.linkedin.com/company/app-nito/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/linkedin.png" />
        </a>
        <a href="https://www.x.com" target="_blank" rel="noopener noreferrer">
          <img src="/assets/twitter.png" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src="/assets/instagram.png" />
        </a>
      </div>
    </div>
  );
}
export default HeaderMenu;
