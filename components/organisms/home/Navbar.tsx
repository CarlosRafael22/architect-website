"use client";

import { useState } from "react";
import Link from "next/link";
// import Image from "next/image";
import { Menu, X } from "lucide-react";
import { BEGIN_TRANSFORMATION, WHATSAPP_LINK } from "@/const/strings";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-sm shadow-sm">
      <div className="container mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl tracking-tighter font-[Alethia_Next]">
          THEREZA <span className="text-primary">OLIVEIRA</span>
          {/*           <Image
            src="/images/logo.png"
            alt={"author"}
            width={100}
            height={100}
            className="object-cover"
          /> */}
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link
            href="#metodologia"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Metodologia
          </Link>
          <Link
            href="#sobre"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Sobre mim
          </Link>
          <Link
            href="#servicos"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Serviços
          </Link>
          <Link
            href="#fases"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Fases
          </Link>
          <Link
            href="#portfolio"
            className="text-sm font-medium hover:text-primary transition-colors"
          >
            Portfolio
          </Link>
          <Link
            href={WHATSAPP_LINK}
            className="px-4 py-2 bg-primary text-white rounded hover:bg-primary/90 transition-colors"
          >
            {BEGIN_TRANSFORMATION}
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
              href="#metodologia"
              className="text-sm font-medium hover:text-primary py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Metodologia
            </Link>
            <Link
              href="#sobre"
              className="text-sm font-medium hover:text-primary py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre mim
            </Link>
            <Link
              href="#servicos"
              className="text-sm font-medium hover:text-primary py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Serviços
            </Link>
            <Link
              href="#fases"
              className="text-sm font-medium hover:text-primary py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Fases
            </Link>
            <Link
              href="#portfolio"
              className="text-sm font-medium hover:text-primary py-2 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href={WHATSAPP_LINK}
              className="px-4 py-2 bg-primary text-white text-center rounded hover:bg-primary/90 transition-colors inline-block"
              onClick={() => setIsMenuOpen(false)}
            >
              {BEGIN_TRANSFORMATION}
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
