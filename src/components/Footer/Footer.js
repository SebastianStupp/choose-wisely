import React from 'react';
import './Footer.css';
// import arrow from "./arrow.png";

function Footer(props) {
  return <footer className="footer">{props.children}</footer>;
}

export default Footer;
