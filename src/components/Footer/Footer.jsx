import React from "react";
import "../Footer/Footer.css";
import { GitHubIcon, LinkedinIcon } from "../Icons/Icons";

function Footer() {
  return (
    <div className="allFooter">
      <footer className="Footer">
        <div className="containerIcon">
          <h3>By 🚀 Jhonn Diaz.</h3>
          <a
            href="https://www.linkedin.com/in/jhonn-diaz-77968b244/"
            target="_blank"
            className="linkedIncon"
          >
            <LinkedinIcon />
          </a>
          <a
            href="https://github.com/jhonnD09"
            target="_blank"
            className="linkedIncon"
          >
            <GitHubIcon />
          </a>
        </div>
        <p>© 2023 Gaming Page - All rights reserved.</p>
      </footer>
    </div>
  );
}

export default Footer;
