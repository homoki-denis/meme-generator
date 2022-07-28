import React from "react";
import img from "../images/troll-face.png";

const Header = () => {
  return (
    <div className="header">
      <img src={img} alt="" className="trollface" />
      <h2>Meme Generator</h2>
    </div>
  );
};

export default Header;
