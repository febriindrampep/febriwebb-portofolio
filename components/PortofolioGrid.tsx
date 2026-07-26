"use client";

import Link from "next/link";

// Data proyek (3 contoh)
const projects = [
  {
    id: 1,
    title: "Website Hyundai Company Profile",
    category: "Company Profile",
    description: "Landing page modern untuk perusahaan teknologi.",
    image: "/images/project1.jpg", // perbaiki: tambahkan slash di depan
    link: "https://www.hyundaikembangan.com",
  },
  {
    id: 2,
    title: "Cafee KopiMu",
    category: "E-commerce",
    description: "Platform belanja dengan sistem pembayaran terintegrasi.",
    image: "/images/project2.jpg",
    link: "https://kopimuumeruya.netlify.app/",
  },
  {
    id: 3,
    title: "Kantor Akuntan Publik Ardiansyah",
    category: "Company Profile",
    description: "Dashboard untuk tim mengelola tugas dan deadline.",
    image: "/images/project3.jpg",
    link: "https://kapardiansyah.netlify.app/",
  },
];

export default function PortfolioGrid() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Proyek Terbaru Saya
          </h2>
          <p className="text-gray-600 mt-4">
            Berikut beberapa proyek website yang telah saya kerjakan. Setiap
            proyek dibangun dengan perhatian pada detail dan kebutuhan klien.
            Portofolio ini akan terus bertambah seiring dengan proyek-proyek baru.
          </p>
        </div>

        {/* Grid 3 kolom */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <a
              key={project.id}
              href={project.link}
              target={project.link.startsWith("http") ? "_blank" : "_self"}
              rel={project.link.startsWith("http") ? "noopener noreferrer" : ""}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 group block"
            >
              {/* Gambar */}
              <div className="relative h-56 bg-gray-200 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      "https://via.placeholder.com/400x300?text=No+Image";
                  }}
                />
              </div>

              {/* Konten */}
              <div className="p-6">
                <span className="inline-block text-xs font-semibold text-blue-600 bg-blue-50 px-3 py-1 rounded-full">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-900 mt-3 group-hover:text-blue-600 transition">
                  {project.title}
                </h3>
                <p className="text-gray-600 text-sm mt-2">{project.description}</p>
                <span className="inline-block mt-4 text-blue-600 font-medium group-hover:underline">
                  Lihat Detail →
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}