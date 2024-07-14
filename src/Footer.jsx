import React from "react";

const date = new Date();
const year = date.getFullYear();

function Footer() {
  return (
    <div>
      <p className="Footer">Copyright @ {year}</p>
    </div>
  );
}

export default Footer;
