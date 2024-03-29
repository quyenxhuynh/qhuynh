import Link from "../ui/Link";
import { NavLinks } from "./navLinks";
import React from "react";

export default function NavigationBar() {
  return (
    <nav className="flex flex-row justify-between px-6 py-5">
      <div className="text-xl font-semibold">Quyen Huynh</div>
      <ul className="flex flex-row gap-8 font-semibold">
        {NavLinks.map((link, index) => (
          <li key={index}>
            <Link href={link.href}>{link.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
