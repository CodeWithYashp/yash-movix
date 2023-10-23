import React from "react";
import { FaInstagram, FaLinkedin, FaGithub, FaCode } from "react-icons/fa";

import ContentWrapper from "../contentWrapper/ContentWrapper";
import "./footer.scss";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="Footer">
      <ContentWrapper>
        <ul className="menuItems">
          <li className="menuItem">Terms Of Use</li>
          <li className="menuItem">Privacy-Policy</li>
          <li className="menuItem">About</li>
          <li className="menuItem">Blog</li>
          <li className="menuItem">FAQ</li>
        </ul>
        <div className="infoText">
          Welcome to Movix, where the magic of cinema comes alive. Dive into a
          world of captivating stories, unforgettable characters, and
          breathtaking visuals. Discover a vast collection of movies and TV
          shows spanning across genres, eras, and cultures. Immerse yourself in
          the art of storytelling with trailers, exclusive behind-the-scenes
          content, and insightful cast details.
          <br />
          <span>&copy; 2023 Yash Pandey: All Rights Reserved</span>
        </div>
        <div className="socialIcons">
          <Link to="https://github.com/CodeWithYashp" target="_blank">
            <span className="icon">
              <FaGithub />
            </span>
          </Link>
          <Link to="https://www.instagram.com/yash_pandey__/" target="_blank">
            <span className="icon">
              <FaInstagram />
            </span>
          </Link>
          <Link to="https://leetcode.com/CodeWithYashp/" target="_blank">
            <span className="icon">
              <FaCode />
            </span>
          </Link>
          <Link
            to="https://www.linkedin.com/in/yash-sharma-22200b201/"
            target="_blank"
          >
            <span className="icon">
              <FaLinkedin />
            </span>
          </Link>
        </div>
      </ContentWrapper>
    </footer>
  );
};

export default Footer;
