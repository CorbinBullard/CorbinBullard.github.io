import { capitalize } from "@/app/utils/capitalize";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const pages = ["home", "about", "projects", "contact"];

  return (
    <div className="fixed w-[100%]">
      <nav className="flex gap-5 justify-center w-[100%]">
        {pages.map((page, index) => (
          <a key={index} href={`#${page}`}>
            {capitalize(page)}
          </a>
        ))}
      </nav>
    </div>
  );
}
