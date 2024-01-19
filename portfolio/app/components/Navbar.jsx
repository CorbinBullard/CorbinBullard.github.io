import { capitalize } from "@/app/utils/capitalize";
import Link from "next/link";
import React from "react";

export default function Navbar() {
  const pages = ["home", "about", "projects", "contact"];

  return (
    <nav className="flex gap-5">
      {pages.map((page, index) => (
        <Link key={index} href={`/${page}`}>
          {capitalize(page)}
        </Link>
      ))}
    </nav>
  );
}
