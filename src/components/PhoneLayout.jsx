import "../styles/phoneLayout.css";
import {  motion } from "motion/react";

function PhoneLayout({ image, type }) {
  return (
    <div
      className={`phone-layout-wrapper ${
        type === "hero"
          ? "phone-layout-wrapper-hero"
          : "phone-layout-wrapper-howitworks"
      }`}
    >
      {type !== "hero" && (
        <div className="demo-image-howitworks phone-layout-placeholder" />
      )}
      <motion.img
        initial={{
          scale: type === "hero" ? 1 : 0,
          opacity: type === "hero" ? 1 : 0,
        }}
        whileInView={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
        viewport={{ once: true }}
        src={image}
        className={type === "hero" ? "demo-image" : "demo-image-howitworks"}
      />
      <div
        className={`notch ${
          type === "hero" ? "notch-hero" : "notch-howitworks"
        }`}
      >
        <div
          className={`camera ${
            type === "hero" ? "camera-hero" : "camera-howitworks"
          }`}
        ></div>
      </div>
    </div>
  );
}

export default PhoneLayout;
