// src/components/Navbar.jsx
import { useState } from 'react';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const links = [
    { name: 'Home', href: '#hero' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Testimonials', href: '#testimonials' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#0d0d0d]/80 backdrop-blur-md z-50">
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo Section */}
        <a href="#hero" className="flex items-center">
          <img src="/images/logo.png" alt="Logo" className="h-8 w-auto" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="hover:text-[#02DAF8] transition">
              {l.name}
            </a>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6 text-[#02DAF8]"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 8h16M4 16h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Links */}
      {open && (
        <div className="md:hidden bg-[#0d0d0d] px-6 pb-4 space-y-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="block hover:text-[#00FFB3] transition"
              onClick={() => setOpen(false)}
            >
              {l.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}
