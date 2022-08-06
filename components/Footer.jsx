import React from "react";
import {
  AiFillInstagram,
  AiOutlineTwitter,
  AiFillGithub,
  AiFillFacebook,
} from "react-icons/ai";

const Footer = () => {
  return (
    <div className="footer-container">
      <p>2022 R.N. Traders | All Right Reserved</p>
      <div className="icons">
        <a
          href="https://www.instagram.com/sumittripathi07"
          rel="noreferrer"
          target="_blank"
        >
          <AiFillInstagram />
        </a>

        <a
          href="https://twitter.com/iamSumit076"
          rel="noreferrer"
          target="_blank"
        >
          <AiOutlineTwitter />
        </a>

        <a
          href="https://www.facebook.com/sumittripathi07"
          rel="noreferrer"
          target="_blank"
        >
          <AiFillFacebook />
        </a>

        <a
          href="https://github.com/sumittripathi07"
          rel="noreferrer"
          target="_blank"
        >
          <AiFillGithub />
        </a>
      </div>
    </div>
  );
};

export default Footer;
