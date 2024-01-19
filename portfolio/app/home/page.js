import Image from "next/image";
import React from "react";

export default function page() {
  return (
    <div>
      <Image
        src="/photos/Profile.jpg"
        width={250}
        height={250}
        className="rounded-full"
      />
      <h1 className="text-3xl">
        Hello, I'm <strong>Corbin Bullard</strong>
      </h1>
      <p className="text-xl">
        <strong>Full-Stack Software Engineer</strong> | JavaScript | React |
        Redux | Express | SQL | Python | Flask | SQLAlchemy | Sequelize |
        Node.js | HTML/CSS | Next.js | MongoDB | Git |{" "}
        <a href="https://github.com/CorbinBullard" target="_blank" className="text-blue-500">Github</a>
      </p>
    </div>
  );
}
