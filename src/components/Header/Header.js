import React from "react";
import "./Header.css";
import head from "./head.png";

function Header() {
  const headTitle = "Question Creator";
  return (
    <header className="header">
      <div className="heading">{headTitle}</div>
      <img className="headerImg" src={head} alt="Kopf"></img>
    </header>
  );
}
export default Header;
