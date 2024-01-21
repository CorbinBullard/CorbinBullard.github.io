import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { FaGithubSquare } from "react-icons/fa";

export default function Contact() {
  return (
    <div id="contact">
      <a
        href="https://www.linkedin.com/in/corbin-b-ab572b98/"
        target="_blank"
        className="text-blue-500 text-5xl"
      >
        <FaLinkedin />
      </a>
      <a
        href="https://github.com/CorbinBullard"
        target="_blank"
        className="text-blue-500 text-5xl"
      >
        <FaGithubSquare />
      </a>
    </div>
  );
}
