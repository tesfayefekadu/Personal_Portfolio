"use client";

import { useState } from "react";

const navItems = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "#projects" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200/80 bg-[#fafafa]/90 backdrop-blur">
      <nav className="mx-auto max-w-6xl px-6">
        <div className="flex h-20 items-center justify-between">
          <a
            href="/"
            className="text-lg font-bold tracking-tight"
            onClick={() => setIsOpen(false)}
          >
            YourName
          </a>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-gray-600 transition-colors hover:text-black"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Desktop CTA */}
          <a
            href="#contact"
            className="hidden rounded-full bg-black px-5 py-2.5 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-gray-800 md:block"
          >
            Let's Talk
          </a>

          {/* Mobile Menu Button */}
<button
  type="button"
  onClick={() => setIsOpen(!isOpen)}
  className="rounded-lg p-2 transition hover:bg-gray-100 md:hidden"
  aria-label={isOpen ? "Close menu" : "Open menu"}
  aria-expanded={isOpen}
  aria-controls="mobile-navigation"
>
            {isOpen ? (
              <span className="text-2xl">×</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="border-t border-gray-200 py-4 md:hidden">
            <div className="flex flex-col">
              {navItems.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="py-3 text-sm font-medium text-gray-600 transition-colors hover:text-black"
                >
                  {item.label}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setIsOpen(false)}
                className="mt-2 rounded-full bg-black px-5 py-3 text-center text-sm font-semibold text-white transition hover:bg-gray-800"
              >
                Let's Talk
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}