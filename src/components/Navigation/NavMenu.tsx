"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { navItems } from "./navItems";

export default function NavMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className="justify-self-end"
      onBlur={(e) => {
        // Only close when focus leaves the container entirely, not when it
        // moves to a child (e.g. a nav link).
        if (!e.currentTarget.contains(e.relatedTarget as Node)) {
          setIsOpen(false);
        }
      }}
    >
      <button
        type="button"
        aria-expanded={isOpen}
        aria-label="Toggle navigation menu"
        onClick={() => setIsOpen(!isOpen)}
      >
        <Menu className="text-accent" />
      </button>
      <nav
        className={`${isOpen ? "block" : "hidden"} absolute right-0 top-full z-10 border border-border shadow-lg`}
      >
        {navItems.map((item, i) => (
          <Link
            key={i}
            href={item.href}
            className="block px-4 py-2 text-sm text-body-text bg-surface hover:bg-surface-sunken"
            onClick={() => setIsOpen(false)}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </div>
  );
}
