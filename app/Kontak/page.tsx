"use client";

import { useState } from "react";
import Link from "next/link";

export default function KontakPage() {
  const [formData, setFormData] = useState({
    nama: "",
    alamat: "",
    telepon: "",
    layanan: "",
    pesan: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  const layananOptions = [
    "Pembuatan Website",
    "Desain UI/UX",
    "Maintenance & Support",
    "Optimasi SEO",
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    const { nama, alamat, telepon, layanan, pesan } = formData;

    const message = `Halo FebriWebb,%0A%0A*Nama:* ${nama}%0A*Alamat:* ${alamat}%0A*No Telepon:* ${telepon}%0A*Layanan:* ${layanan}%0A*Pesan:* ${pesan}%0A%0ATerima kasih.`;

    const phoneNumber = "6285183154973";
    const url = `https://wa.me/${phoneNumber}?text=${message}`;

    window.location.href = url;
    setIsLoading(false);
  };

  return (
    <section className="min-h-[calc(100vh-64px)] py-16 bg-gray-50 flex items-center">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            {/* Link kembali ke beranda */}
            <div className="mb-6">
              <Link
                href="/"
                className="inline-flex items-center text-gray-600 hover:text-blue-600 transition text-sm"
              >
                <svg
                  className="w-4 h-4 mr-1"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M10 19l-7-7m0 0l7-7m-7 7h18"
                  />
                </svg>
                Kembali ke Beranda
              </Link>
            </div>

            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Hubungi Saya
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              Konsultasi Gratis
            </h1>
            <p className="text-gray-600 mt-4">
              Isi form di bawah, saya akan segera merespon Anda.
            </p>
          </div>

          {/* Form */}
          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-xl shadow-lg p-6 md:p-8 space-y-6"
          >
            <div>
              <label htmlFor="nama" className="block text-sm font-semibold text-gray-700 mb-1">
                Nama Lengkap
              </label>
              <input
                type="text"
                id="nama"
                name="nama"
                value={formData.nama}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Nama Anda"
              />
            </div>

            <div>
              <label htmlFor="alamat" className="block text-sm font-semibold text-gray-700 mb-1">
                Alamat
              </label>
              <input
                type="text"
                id="alamat"
                name="alamat"
                value={formData.alamat}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="Alamat Anda"
              />
            </div>

            <div>
              <label htmlFor="telepon" className="block text-sm font-semibold text-gray-700 mb-1">
                No Telepon
              </label>
              <input
                type="tel"
                id="telepon"
                name="telepon"
                value={formData.telepon}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                placeholder="08xx-xxxx-xxxx"
              />
            </div>

            <div>
              <label htmlFor="layanan" className="block text-sm font-semibold text-gray-700 mb-1">
                Pilihan Layanan
              </label>
              <select
                id="layanan"
                name="layanan"
                value={formData.layanan}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-white"
              >
                <option value="">-- Pilih Layanan --</option>
                {layananOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label htmlFor="pesan" className="block text-sm font-semibold text-gray-700 mb-1">
                Pesan
              </label>
              <textarea
                id="pesan"
                name="pesan"
                rows={4}
                value={formData.pesan}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-y"
                placeholder="Tulis pesan Anda di sini..."
              />
            </div>

            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-3 rounded-md text-white font-semibold transition ${
                isLoading
                  ? "bg-gray-400 cursor-not-allowed"
                  : "bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-600/30"
              }`}
            >
              {isLoading ? "Mengirim..." : "Kirim ke WhatsApp"}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}