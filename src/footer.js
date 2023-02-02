export default function Footer({ title, desc, image, bgColor }) {
  return (
    <div className="footer_content">
      <div
        style={{
          backgroundColor: bgColor,
          width: "63px",
          height: "63px",
          borderRadius: "4px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <img src={image} alt="logo" />
      </div>
      <div>
        <h3 className="footer_heading">{title}</h3>
        <p className="footer_para">{desc}</p>
      </div>
    </div>
  );
}
