import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Footer from "./components/Footer";
import JoinWaitlist from "./components/JoinWaitlist";
function App() {
  const [active, setActive] = useState("home");
  const [windowTop, setWindowTop] = useState();
  useEffect(() => {
    const sections = document.querySelectorAll("section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      { threshold: 0.2 }
    );
    sections.forEach((section) => observer.observe(section));
    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);
  useEffect(() => {
    const handleScrollTop = () => {
      setWindowTop(window.scrollY === 0);
    };
    window.addEventListener("scroll", handleScrollTop);
    return () => {
      window.removeEventListener("scroll", handleScrollTop);
    };
  }, []);
  const checkActive = (route) => active === route;
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (!checkActive(sectionId)) {
      window.scrollTo({
        top: section.offsetTop - 72,
        behavior: "smooth",
      });
    }
  };
  return (
    <div className="main-wrapper">
      <Header
        checkActive={checkActive}
        scrollToSection={scrollToSection}
        windowTop={windowTop}
      />
      <Hero />
      <HowItWorks />
      <Features />
      <JoinWaitlist />
      <Footer />
    </div>
  );
}

export default App;
