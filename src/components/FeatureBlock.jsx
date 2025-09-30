import { easeIn, easeOut, motion } from "motion/react";

function FeatureBlock({ icon, header, body }) {
  return (
    <motion.div
      viewport={{ once: true }}
      initial={{ opacity: 0 }}
      transition={{ duration: 1, ease: easeOut }}
      whileInView={{ opacity: 1 }}
      className="feature-block-wrapper"
    >
      <div className="feature-block-icon-container">
        <motion.img
          viewport={{ once: true }}
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.5, ease: easeOut }}
          className="feature-block-icon"
          style={{ marginBottom: header === "College exclusive" ? "5px" : 0 }}
          src={icon}
        />
      </div>
      <div className="feature-block-text-wrapper">
        <h3>{header}</h3>
        <p>{body}</p>
      </div>
    </motion.div>
  );
}
export default FeatureBlock;
