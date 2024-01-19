import Image from "next/image";
import React from "react";

export default function ProjectCard({
  image,
  title,
  clone,
  link,
  github,
  description,
}) {
  return (
    <article className="cursor-pointer flex-col w-96 h-64 text-black">
      <img src={image} className="rounded-t-xl min-h-48" />
      <div className="flex-col justify-center bg-slate-100 rounded-b-xl">
        <h1 className="text-center pt-3 font-bold">{title}</h1>
        <div className="flex gap-2 justify-center pb-3 ">
          <p>{clone}</p> |
          <a className="text-blue-600 underline" href={github} target="_blank">
            Github
          </a>
        </div>
      </div>
    </article>
  );
}
