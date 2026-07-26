"use client";

import Link from "next/link";
import {
  FaInstagram,
  FaGithub,
  FaLinkedin,
  FaYoutube,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white pt-12 pb-4">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 pb-8 border-b border-gray-800">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold tracking-tight mb-3">
              FEBRI<span className="text-blue-400">WEBB</span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
              Jasa pembuatan website profesional, responsif, dan siap membantu
              bisnis Anda berkembang di era digital.
            </p>
          </div>

          {/* Navigasi */}
          <div>
            <h4 className="font-semibold text-white mb-3">Navigasi</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-gray-400 hover:text-blue-400 transition">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/#layanan" className="text-gray-400 hover:text-blue-400 transition">
                  Layanan
                </Link>
              </li>
              <li>
                <Link href="/Tentang" className="text-gray-400 hover:text-blue-400 transition">
                  Tentang
                </Link>
              </li>
              <li>
                <Link href="/Kontak" className="text-gray-400 hover:text-blue-400 transition">
                  Kontak
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontak */}
          <div>
            <h4 className="font-semibold text-white mb-3">Kontak</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2 text-gray-400">
                <FaEnvelope className="w-4 h-4 text-blue-400" />
                <a href="mailto:febriindrapratama2027@gmail.com" className="hover:text-blue-400 transition">
                  febriindrapratama2027@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2 text-gray-400">
                <FaWhatsapp className="w-4 h-4 text-blue-400" />
                <a href="https://wa.me/6285183154973" className="hover:text-blue-400 transition">
                  +62 851-8325-4973
                </a>
              </li>
            </ul>
          </div>

          {/* Sosial Media */}
          <div>
            <h4 className="font-semibold text-white mb-3">Ikuti Saya</h4>
            <div className="flex gap-4">
              <a
                href="https://www.instagram.com/mpeep_?igsh=MXZtMWRranFuemFwNg=="
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition"
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6" />
              </a>
              <a
                href="https://github.com/febriindrampep"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition"
                aria-label="GitHub"
              >
                <FaGithub className="w-6 h-6" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition"
                aria-label="LinkedIn"
              >
                <FaLinkedin className="w-6 h-6" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-blue-400 transition"
                aria-label="YouTube"
              >
                <FaYoutube className="w-6 h-6" />
              </a>
            </div>
            <p className="text-gray-500 text-xs mt-4">
              Terhubunglah dengan saya di media sosial.
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-center text-gray-500 text-sm pt-4">
          &copy; {currentYear} FEBRIWEBB. All rights reserved.
        </div>
      </div>
    </footer>
  );
}