import React from "react";

const footerStyle = {
  left: 0,
  bottom: 0,
  width: "100%",
  backgroundColor: "#3e3d3d",
  color: "white",
  textAlign: "center",
  padding: "10px 0",
};

const linkStyle = {
  textDecoration: "underline",
  transition: "color 0.3s",
};

const Footer = () => {
  return (
    <footer style={footerStyle}>
      &copy; 2024 | Made by{" "}
      <a
        target="_blank"
        href="https://devkmaan.vercel.app"
        style={linkStyle}
        onMouseEnter={(e) => (e.target.style.color = "blue")}
        onMouseLeave={(e) => (e.target.style.color = "")}
      >
        Dev Kumar Maan
      </a>
    </footer>
  );
};

export default Footer;
