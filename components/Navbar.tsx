"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        scrolled ? "bg-black/90 backdrop-blur-md shadow-lg" : "bg-black"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="text-white text-2xl font-bold tracking-tight">
            FEBRI<span className="text-blue-400">WEBB</span>
          </Link>

          {/* Desktop Menu - Portfolio dihapus */}
          <div className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-blue-400 transition">
              Home
            </Link>
            <Link href="/#layanan" className="text-white hover:text-blue-400 transition">
              Layanan
            </Link>
            <Link href="/Tentang" className="text-white hover:text-blue-400 transition">
              Tentang
            </Link>
            <Link
              href="/Kontak"
              className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition"
            >
              Hubungi Kami
            </Link>
          </div>

          {/* Tombol Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-white focus:outline-none"
            aria-label="Toggle menu"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu - Portfolio dihapus */}
      <div
        className={`md:hidden bg-black/95 backdrop-blur-sm transition-all duration-300 overflow-hidden ${
          isOpen ? "max-h-96 border-t border-gray-700" : "max-h-0"
        }`}
      >
        <div className="px-4 pt-2 pb-4 space-y-3 text-center">
          <Link
            href="/"
            className="block text-white hover:text-blue-400 transition py-2"
            onClick={() => setIsOpen(false)}
          >
            Home
          </Link>
          <Link
            href="/#layanan"
            className="block text-white hover:text-blue-400 transition py-2"
            onClick={() => setIsOpen(false)}
          >
            Layanan
          </Link>
          <Link
            href="/Tentang"
            className="block text-white hover:text-blue-400 transition py-2"
            onClick={() => setIsOpen(false)}
          >
            Tentang
          </Link>
          <Link
            href="/Kontak"
            className="block bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md transition mt-2"
            onClick={() => setIsOpen(false)}
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </nav>
  );
}