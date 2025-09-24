import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HowItWorks from "./components/HowItWorks";
import Features from "./components/Features";
import Footer from "./components/Footer";
import JoinWaitlist from "./components/JoinWaitlist";
function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Header />
      <Hero />
      <HowItWorks />
      <Features />
      <JoinWaitlist />
      <Footer />
    </div>
  );
}

export default App;
