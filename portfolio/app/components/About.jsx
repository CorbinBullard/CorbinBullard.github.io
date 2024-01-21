import Image from "next/image";
import React from "react";

export default function About() {
  return (
    <div id="about" className="flex flex-col items-center">
      <h1 className="text-4xl">About Me</h1>
      <div className="flex gap-5">
        <Image
          src="/photos/AppAcademyCertificate.jpg"
          width={400}
          height={400}
          className="rounded-sm"
        />
        <p className="indent-10">
          I am a versatile individual with a passion for both music and
          full-stack software engineering. With a solid foundation in
          JavaScript, I excel in utilizing tools such as React.js and Redux for
          dynamic front-end development. I have a strong proficiency in using
          Sequelize.js and Express.js to develop reliable and scalable back-end
          solutions. Additionally, I am proficient in Python, employing Flask
          and SQLAlchemy to build efficient back-end systems. My love for
          technology drives me to continuously explore new avenues and
          innovation. I graduated from App Academy which was rated #1 bootcamp
          according to SwitchUp and CourseReport. App Academy has an acceptance
          rate of 3% and was a very challenging and rewarding experience and
          created a solid foundation as a software engineer.
        </p>
      </div>
    </div>
  );
}
