import React from "react";

function Footer() {
  const curretnYear = new Date().getFullYear();

  return (
    <footer>
      <p>Copyright © {curretnYear}</p>
    </footer>
  );
}

export default Footer;
