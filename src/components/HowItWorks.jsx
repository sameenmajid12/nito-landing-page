import "../styles/howitworks.css";
import PhoneLayout from "./PhoneLayout";
function HowItWorks() {
  return (
    <section id="howitworks" className="howitworks-page">
      <div className="howitworks-header-wrapper">
        <h2>How it works</h2>
        <h3>Three simple steps to start connecting.</h3>
      </div>
      <div className="howitworks-screens">
        <div className="howitworks-screen">
          <PhoneLayout image={"/assets/demo2.png"} />
          <p className="howitworks-screen-label">
            Enter your information along with your school email
          </p>
        </div>
        <div className="howitworks-screen">
          <PhoneLayout image={"/assets/demo3.png"} />
          <p className="howitworks-screen-label">
            Enter your interests so Nito can give you the best pairs
          </p>
        </div>
        <div className="howitworks-screen">
          <PhoneLayout image={"/assets/demo4.png"} />
          <p className="howitworks-screen-label">
            Get a new pair every 30 minutes and make a new friend
          </p>
        </div>
      </div>
    </section>
  );
}
export default HowItWorks;
