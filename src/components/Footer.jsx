import React from 'react';
import { Cloud } from 'lucide-react';
import { profile } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer className="border-t border-[#22D3EE]/15 bg-[#050F1E] py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 px-4 sm:flex-row sm:px-6 lg:px-8">
        <div className="flex items-center gap-2.5 text-sm text-[#C2D4E8]">
          <Cloud className="h-4 w-4 text-[#22D3EE]" />
          <span>
            &copy; {new Date().getFullYear()} <strong className="text-white">{profile.displayName}</strong> — Cloud &amp; DevOps Engineer
          </span>
        </div>
        <div className="flex items-center gap-5 text-xs text-[#C2D4E8]">
          <a href="#home" className="hover:text-[#22D3EE]">Top</a>
          <a href="#projects" className="hover:text-[#22D3EE]">Projects</a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-[#22D3EE]">
            LinkedIn
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-[#22D3EE]">
            GitHub
          </a>
          <a href={profile.resumePath} download="Srinivasan_Cloud_DevOps_Resume.pdf" className="hover:text-[#22D3EE]">
            Resume
          </a>
        </div>
      </div>
    </footer>
  );
}
