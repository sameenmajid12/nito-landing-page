import "../styles/phoneLayout.css";
function PhoneLayout({ image, type }) {
  return (
    <div
      className={`phone-layout-wrapper ${
        type === "hero"
          ? "phone-layout-wrapper-hero"
          : "phone-layout-wrapper-howitworks"
      }`}
    >
      <img
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
