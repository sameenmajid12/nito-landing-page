function FeatureBlock({ icon, header, body }) {
  return (
    <div className="feature-block-wrapper">
      <div className="feature-block-icon-container">
        <img
          className="feature-block-icon"
          style={{ marginBottom: header === "College exclusive" ? "5px" : 0 }}
          src={icon}
        ></img>
      </div>
      <div className="feature-block-text-wrapper">
        <h3>{header}</h3>
        <p>{body}</p>
      </div>
    </div>
  );
}
export default FeatureBlock;
