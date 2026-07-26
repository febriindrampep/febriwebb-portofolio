"use client";

import Link from "next/link";
import { motion } from "framer-motion"; // opsional, bisa pakai CSS biasa kalau belum install

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-black via-gray-900 to-black text-white min-h-[calc(100vh-64px)] flex items-center overflow-hidden">
      {/* Efek dekorasi latar (bisa dihapus jika tidak suka) */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          {/* Badge kecil */}
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-block bg-blue-600/20 text-blue-300 text-sm font-semibold px-4 py-1 rounded-full mb-6 border border-blue-500/30"
          >
            Siap membantu bisnis Anda
          </motion.span>

          {/* Judul utama */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight"
          >
            Bangun Website{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Profesional
            </span>{" "}
            & Menarik
          </motion.h1>

          {/* Subjudul */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-4 text-base sm:text-lg md:text-xl text-gray-300 max-w-2xl"
          >
            Saya menyediakan jasa pembuatan website modern, responsif, dan
            dioptimalkan untuk bisnis Anda. Dari portofolio pribadi hingga toko
            online — semuanya bisa.
          </motion.p>

          {/* Tombol CTA */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-8 flex flex-wrap gap-4"
          >
            <Link
              href="/Tentang"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-md transition shadow-lg shadow-blue-600/30"
            >
              Tentang Kami
            </Link>
            <Link
              href="/Kontak"
              className="bg-transparent border border-white hover:bg-white hover:text-black text-white font-semibold px-8 py-3 rounded-md transition"
            >
              Hubungi Saya
            </Link>
          </motion.div>

          {/* Statistik kecil (opsional) */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-12 flex flex-wrap gap-8 text-gray-300"
          >
            <div>
              <span className="text-2xl font-bold text-white">50+</span>
              <p className="text-sm">Proyek Selesai</p>
            </div>
            <div>
              <span className="text-2xl font-bold text-white">100%</span>
              <p className="text-sm">Kepuasan Klien</p>
            </div>
            <div>
              <span className="text-2xl font-bold text-white">24/7</span>
              <p className="text-sm">Dukungan</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}