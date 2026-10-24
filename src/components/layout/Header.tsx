// src/components/layout/Header.tsx
"use client";

import Link from "next/link";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" }, 
    { name: "Testimonials", href: "/testimonials" },
    { name: "FAQ", href: "/faq" },
  ];

  return (
    <header className="bg-uk-white shadow-sm sticky top-0 z-50">
      <div aria-hidden="true" className="flex h-1">
        <span className="w-1/2 bg-uk-navy" />
        <span className="w-1/2 bg-uk-red" />
      </div>
      <div className="max-w-6xl mx-auto px-4 h-20 flex items-center justify-between">
        <Link href="/" className="flex flex-col">
          <span className="text-xl font-bold text-grey-900">English With Lilian</span>

        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link key={link.name} href={link.href} className="text-sm font-medium text-grey-600 hover:text-uk-navy transition-colors">
              {link.name}
            </Link>
          ))}
          <Link href="/contact" className="bg-uk-red text-uk-white px-6 py-2.5 rounded-md text-sm font-semibold hover:bg-uk-red-dark transition-colors">
            Book a Free Call
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          type="button"
          className="p-2 text-grey-600 md:hidden"
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={isOpen}
        >
          <FontAwesomeIcon
            icon={isOpen ? faXmark : faBars}
            aria-hidden="true"
            className="text-xl"
          />
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden bg-uk-white border-t p-4 flex flex-col gap-4 absolute w-full shadow-lg">
          {links.map((link) => (
            <Link key={link.name} href={link.href} onClick={() => setIsOpen(false)} className="text-grey-600 font-medium p-2">
              {link.name}
            </Link>
          ))}
          <Link href="/contact" onClick={() => setIsOpen(false)} className="bg-uk-red text-uk-white text-center px-6 py-3 rounded-md font-semibold mt-2">
            Book a Free Call
          </Link>
        </nav>
      )}
    </header>
  );
}