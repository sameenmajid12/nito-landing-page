import "../styles/hero.css";
import { useState } from "react";
import { useEffect } from "react";
import PhoneLayout from "./PhoneLayout";
function Hero({
  email,
  setEmail,
  submitted,
  loadingSubmission,
  submitEmail,
  submitDisabled,
}) {
  console.log(submitDisabled);
  console.log(`var(--color-primary${submitDisabled ? "-70" : ""})`);
  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setScreenWidth(window.innerWidth);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  const header = "Making friends in college doesn’t have to be awkward";
  const subheader =
    screenWidth > 500
      ? "Nito anonymously connects students at your college based on shared interests. Chat for 20 minutes, then choose to reveal your identity,or move on."
      : "Nito anonymously connects students with shared interests for a 20-minute chat. Reveal your identity or move on";
  const waitlistInput = (
    <div className="input-container">
      <input
      disabled={submitted}
        className="input"
        placeholder={submitted?"Thanks for joining the waitlist!":"Your email address"}
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      ></input>
      <button
        disabled={submitDisabled}
        onClick={submitEmail}
        className="input-button"
        style={{
          backgroundColor: `var(--color-primary${submitDisabled ? "-70" : ""})`,
        }}
      >
        {submitted ? (
          <ion-icon name="checkmark" style={{fontSize:"1.25rem"}}/>
        ) : loadingSubmission ? (
          <div className="spinner"></div>
        ) : (
          "Join"
        )}
      </button>
    </div>
  );
  const contentToRender =
    screenWidth > 500 ? (
      <>
        <div className="hero-left">
          <h1 className="header">{header}</h1>
          <h4 className="sub-header">{subheader}</h4>
          <span className="decoration-line" />
          <h3 className="input-label">Join the waitlist</h3>
          {waitlistInput}
        </div>
        <div className="hero-right">
          <div className="demo">
            <PhoneLayout type={"hero"} image={"/assets/demo1.png"} />
          </div>
          <div className="decoration-shape1"></div>
          <div className="decoration-shape2"></div>
        </div>
      </>
    ) : (
      <div className="hero-mobile-wrapper">
        <h1 className="hero-mobile-header">{header}</h1>
        <div className="hero-mobile-content-wrapper">
          <h4 className="hero-mobile-subheader">{subheader}</h4>
          <span className="hero-mobile-decoration-line" />
          <h3 className="mobile-input-label">Join the waitlist</h3>
          {waitlistInput}
          <div className="demo-mobile-wrapper">
            <div className="mobile-decoration-shape1" />
            <div className="mobile-decoration-shape2" />

            <div className="demo-mobile">
              <PhoneLayout type={"hero"} image={"/assets/demo1.png"} />
            </div>
          </div>
        </div>
      </div>
    );
  return (
    <section id="home" className="hero-page">
      {contentToRender}
    </section>
  );
}
export default Hero;
