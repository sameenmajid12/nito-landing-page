import "../styles/header.css";
function Header({ scrollToSection, setHeaderMenuVisible }) {
  return (
    <div className="header-wrapper">
      <img className="logo" src="/assets/logo.png" />
      <img onClick={()=>setHeaderMenuVisible(true)} className="menu-icon" src="/assets/menu.png"></img>
      <div className="header-right">
        <div className="header-link-wrapper">
          <a
            onClick={() => scrollToSection("home")}
            className={"header-link-active"}
          >
            Home
          </a>
        </div>
        <div className="header-link-wrapper">
          <a
            onClick={() => scrollToSection("howitworks")}
            className={"header-link-active"}
          >
            How it works
          </a>
        </div>
        <div className="header-link-wrapper">
          <a
            onClick={() => scrollToSection("features")}
            className={"header-link-active"}
          >
            Features
          </a>
        </div>
        <button onClick={()=>scrollToSection("joinwaitlist")} className="waitlist-button">Join the waitlist</button>
      </div>
    </div>
  );
}

export default Header;
