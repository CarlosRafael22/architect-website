"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold tracking-tighter">
          NEURO<span className="text-primary">ARCHITECT</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#neuroarchitecture"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Neuroarchitecture
          </Link>
          <Link
            href="#about"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            About
          </Link>
          <Link
            href="#services"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Services
          </Link>
          <Link
            href="#process"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Process
          </Link>
          <Link
            href="#portfolio"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Portfolio
          </Link>
          <Link
            href="#contact"
            className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors"
          >
            Book a Call
          </Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-white shadow-md z-40">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <Link
              href="#neuroarchitecture"
              className="text-sm font-medium hover:text-primary py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Neuroarchitecture
            </Link>
            <Link
              href="#about"
              className="text-sm font-medium hover:text-primary py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#services"
              className="text-sm font-medium hover:text-primary py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="#process"
              className="text-sm font-medium hover:text-primary py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Process
            </Link>
            <Link
              href="#portfolio"
              className="text-sm font-medium hover:text-primary py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="#contact"
              className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors inline-block"
              onClick={() => setIsMenuOpen(false)}
            >
              Book a Call
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
