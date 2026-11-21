
import React, { useState, useEffect } from 'react';
import { Menu, X, Cloud, Download } from 'lucide-react';
import { profile } from '../data/portfolioData';

const navLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Education', href: '#education' },
  { label: 'Contact', href: '#contact' }
];

// Use the same resume path for desktop and mobile.
const resumeUrl = `${import.meta.env.BASE_URL}resume.pdf`;

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'border-b border-[#22D3EE]/15 bg-[#071426]/90 shadow-lg backdrop-blur-xl'
          : 'bg-transparent'
      }`}
    >
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8"
        aria-label="Primary"
      >
        {/* Logo and Name */}
        <a
          href="#home"
          className="group flex items-center gap-2.5 focus:outline-none"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-xl border border-[#22D3EE]/35 bg-[#102C50]/80 text-[#22D3EE] transition group-hover:border-[#22D3EE] group-hover:shadow-glow">
            <Cloud className="h-5 w-5" />
          </span>

          <div className="leading-tight">
            <span className="block text-sm font-bold tracking-wider text-white">
              {profile.name}
            </span>
            <span className="block font-mono text-[10px] text-[#22D3EE]">
              CLOUD &amp; DEVOPS
            </span>
          </div>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-1 lg:flex">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="rounded-lg px-3 py-2 text-sm font-medium text-[#C2D4E8] transition hover:bg-[#102C50]/70 hover:text-[#22D3EE]"
            >
              {link.label}
            </a>
          ))}

          {/* Desktop Resume Button */}
          <a
            href={resumeUrl}
            download="Srinivasan_Cloud_DevOps_Resume.pdf"
            aria-label="Download Resume PDF"
            className="ml-3 inline-flex items-center gap-1.5 rounded-lg border border-[#22D3EE]/40 bg-[#2563EB]/20 px-3.5 py-2 text-xs font-semibold text-white transition hover:bg-[#2563EB] hover:shadow-glow"
          >
            <Download className="h-3.5 w-3.5" />
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          type="button"
          onClick={() => setOpen((prev) => !prev)}
          aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={open}
          className="inline-flex items-center justify-center rounded-lg border border-[#22D3EE]/25 bg-[#102C50]/70 p-2 text-[#C2D4E8] hover:text-white lg:hidden"
        >
          {open ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {open && (
        <div className="border-b border-[#22D3EE]/20 bg-[#071426]/95 px-4 pb-5 pt-2 backdrop-blur-xl lg:hidden">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-[#C2D4E8] hover:bg-[#102C50] hover:text-[#22D3EE]"
              >
                {link.label}
              </a>
            ))}

            {/* Mobile Resume Button */}
            <a
              href={resumeUrl}
              download="Srinivasan_Cloud_DevOps_Resume.pdf"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-[#2563EB] px-4 py-2.5 text-sm font-semibold text-white"
            >
              <Download className="h-4 w-4" />
              Download Resume
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
