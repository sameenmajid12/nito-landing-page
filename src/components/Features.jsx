import "../styles/features.css";
import FeatureBlock from "./FeatureBlock";
function Features() {
  return (
    <section id="features" className="features-page">
      <h3 className="features-header">What makes Nito so special?</h3>
      <div className="features-content-wrapper">
        <FeatureBlock
          body={
            "Exclusively for students, verified by school email. You only get paired with other students at your university"
          }
          header={"College exclusive"}
          icon={"/assets/school.png"}
        />
        <FeatureBlock
          body={
            "Pairings are powered by mutual interests, so you’ll always have something to talk about"
          }
          header={"Paired by Interests"}
          icon={"/assets/extracurricular-activities.png"}
        />
        <FeatureBlock
          body={
            "Conversations start anonymously, so you can be yourself without pressure."
          }
          header={"Anonymous First"}
          icon={"/assets/anonymous.png"}
        />
        <FeatureBlock
          body={"You get 20 minutes to connect, then either reveal or move on"}
          header={"Time-bound chats"}
          icon={"/assets/hourglass.png"}
        />
      </div>
    </section>
  );
}
export default Features;
