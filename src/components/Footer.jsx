import React from "react";
import { FaGithub, FaInstagram, FaLinkedin, FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100 text-white flex justify-center gap-6">
      <a
        href="https://www.instagram.com/_falcon23/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaInstagram size={24} />
      </a>

      <a
        href="https://twitter.com/your_twitter_handle"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaXTwitter size={24} />
      </a>

      <a
        href="https://github.com/abhinavsharma2310"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={24} />
      </a>

      <a
        href="https://www.linkedin.com/in/abhinav-sharma-825170236/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
    </footer>
  );
};

export default Footer;
