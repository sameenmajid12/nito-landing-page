import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Footer from "./components/Footer";
import JoinWaitlist from "./components/JoinWaitlist";
import HeaderMenu from "./components/HeaderMenu";
function App() {
  const [active, setActive] = useState("home");
  const [headerMenuVisible, setHeaderMenuVisible] = useState(false);
  const [email, setEmail] = useState("");
  const [loadingSubmission, setLoadingSubmission] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const submitDisabled = loadingSubmission || submitted || email.trim() === "";
  const isValidEmail = () => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  const submitEmail = async () => {
    if (!isValidEmail(email)) {
      alert("Please enter a valid email!");
      return;
    }
    setLoadingSubmission(true);
    try {
      const formData = new FormData();
      formData.append("email", email);
      await fetch("https://formspree.io/f/meorevjl", {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" },
      });
      setEmail("");
      setSubmitted(true);
    } catch (e) {
      console.error(e);
    } finally {
      setLoadingSubmission(false);
    }
  };
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    window.scrollTo({
      top: section.offsetTop-50,
      behavior: "smooth",
    });
  };
  return (
    <div className="main-wrapper">
      {headerMenuVisible && (
        <HeaderMenu
          setHeaderMenuVisible={setHeaderMenuVisible}
          scrollToSection={scrollToSection}
        />
      )}
      <Header
        scrollToSection={scrollToSection}
        setHeaderMenuVisible={setHeaderMenuVisible}
      />
      <div className="content-wrapper">
        <Hero
          email={email}
          setEmail={setEmail}
          loadingSubmission={loadingSubmission}
          submitted={submitted}
          submitEmail={submitEmail}
          submitDisabled={submitDisabled}
        />
        <HowItWorks />
        <Features />
        <JoinWaitlist
          email={email}
          setEmail={setEmail}
          loadingSubmission={loadingSubmission}
          submitted={submitted}
          submitEmail={submitEmail}
          submitDisabled={submitDisabled}
        />
        <Footer />
      </div>
    </div>
  );
}

export default App;
