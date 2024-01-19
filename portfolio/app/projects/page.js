import React from "react";
import ProjectCard from "../components/ProjectCard";

export default function page() {
  const projects = [
    {
      image: "/photos/HelloHome.png",
      title: "Hello Home Cleaning Co.",
      clone: "Hello Home Cleaning Co.",
      link: "https://hello-home-cleaning-co.vercel.app/",
      github: "https://github.com/Alugibihl/Hello-Home-Cleaning-Co.",
    },
    {
      image: "/photos/Delay.png",
      title: "Delay",
      clone: "Reverb.com clone",
      link: "https://delay-dxjb.onrender.com/",
      github: "https://github.com/CorbinBullard/Delay",
    },
    {
      image: "/photos/BearBnB.png",
      title: "BearBnB",
      clone: "AirBnB.com clone",
      link: "https://bearbnb-iy1a.onrender.com/",
      github: "https://github.com/CorbinBullard/BearBnb",
    },
    {
      image: "/photos/Snack.png",
      title: "Snack",
      clone: "Slack.com clone",
      link: "https://snack-app.onrender.com/",
      github: "https://github.com/YutaroHirayama/Snack",
    },
  ];
  return (
    <div className="flex justify-center gap-5">
      {projects.map((project) => {
        return (
          <ProjectCard
            image={project.image}
            title={project.title}
            clone={project.clone}
          />
        );
      })}
    </div>
  );
}
