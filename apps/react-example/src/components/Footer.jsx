import React from "react";
import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faBehance,
  faTelegram
} from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="socials">
          <a href="https://github.com/dmitrylean" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          <a href="https://www.behance.net/dmitrylean" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faBehance} />
          </a>
          <a href="https://t.me/bionicman451" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faTelegram} />
          </a>
        </div>
        <p>Copyright ©2020 All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
