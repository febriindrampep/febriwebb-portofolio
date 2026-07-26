"use client";

import Link from "next/link";
import {
  SiNextdotjs,
  SiReact,
  SiTypescript,
  SiTailwindcss,
  SiNodedotjs,
  SiFigma,
  SiMysql,
  SiMongodb,
  SiGoogle,
  SiPhp,
  SiHtml5,
  SiJavascript,
  SiLaravel,
  SiCss,
} from "react-icons/si";
import { FaAward } from "react-icons/fa";

export default function TentangPage() {
  const skills = [
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "React", icon: SiReact, color: "#61DAFB" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
    { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
    { name: "UI/UX Design", icon: SiFigma, color: "#F24E1E" },
    { name: "MySQL", icon: SiMysql, color: "#4479A1" },
    { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
    { name: "SEO", icon: SiGoogle, color: "#4285F4" },
    { name: "PHP", icon: SiPhp, color: "#777BB4" },
    { name: "HTML", icon: SiHtml5, color: "#E34F26" },
    { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
    { name: "Laravel", icon: SiLaravel, color: "#FF2D20" },
    { name: "CSS", icon: SiCss, color: "#1572B6" },
  ];

  return (
    <section className="min-h-[calc(100vh-64px)] py-16 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Link kembali */}
          <div className="mb-8">
            <Link
              href="/"
              className="inline-flex items-center text-gray-600 hover:text-blue-600 transition text-sm"
            >
              <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Kembali ke Beranda
            </Link>
          </div>

          {/* Header */}
          <div className="text-center mb-12">
            <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
              Tentang Saya
            </span>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
              FebriWebb
            </h1>
            <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
              Pengembang web dengan pengalaman 5 tahun, berkomitmen menghadirkan
              solusi digital berkualitas untuk bisnis dan individu.
            </p>
          </div>

          {/* Profil */}
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden mb-12">
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/3 bg-gray-200 flex items-center justify-center p-6">
                <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
                  <img
                    src="/images/Profile.png"
                    alt="FebriWebb - Pengembang Web"
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src =
                        "https://ui-avatars.com/api/?name=Febri&background=3b82f6&color=fff&size=200";
                    }}
                  />
                </div>
              </div>
              <div className="md:w-2/3 p-6 md:p-8 flex flex-col justify-center">
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Halo, Saya Febri!</h2>
                <p className="text-gray-600 leading-relaxed">
                  Saya adalah lulusan D3 Sistem Informasi dari Universitas Bina
                  Sarana Informatika (UBSI) dan telah memiliki pengalaman lebih
                  dari 5 tahun di bidang pengembangan web.
                </p>
                <p className="text-gray-600 leading-relaxed mt-4">
                  Saya percaya bahwa setiap bisnis berhak memiliki kehadiran
                  digital yang kuat untuk menjangkau lebih banyak pelanggan.
                </p>
                <div className="mt-6">
                  <Link
                    href="/Kontak"
                    className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-2 rounded-md transition shadow-lg shadow-blue-600/30"
                  >
                    Hubungi Saya
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Pendidikan & Pengalaman */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path d="M12 14l9-5-9-5-9 5 9 5z" />
                  <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                </svg>
                Pendidikan
              </h3>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold">D3 Sistem Informasi</span>
                <br />
                Universitas Bina Sarana Informatika (UBSI)
                <br />
                <span className="text-sm text-gray-500">Lulusan tahun 20xx</span>
              </p>
            </div>

            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 hover:shadow-xl transition">
              <h3 className="text-xl font-bold text-gray-900 mb-3 flex items-center">
                <svg className="w-6 h-6 text-blue-500 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                Pengalaman
              </h3>
              <p className="text-gray-600 leading-relaxed">
                <span className="font-semibold">5+ Tahun</span>
                <br />
                Berpengalaman dalam pengembangan website menggunakan berbagai
                teknologi modern, mulai dari company profile hingga aplikasi
                kompleks.
              </p>
            </div>
          </div>

          {/* Skill */}
          <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 mb-12 overflow-hidden">
            <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">
              Teknologi yang Saya Kuasai
            </h2>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6">
              {skills.map((skill, index) => (
                <div key={index} className="flex flex-col items-center gap-1">
                  <skill.icon className="w-8 h-8 md:w-10 md:h-10" style={{ color: skill.color }} />
                  <span className="text-[10px] md:text-xs text-gray-600 font-medium">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Nilai-nilai */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <FaAward className="w-6 h-6 text-blue-600" />
              </div>
              <h4 className="font-bold text-gray-900 text-lg mb-2">Kualitas</h4>
              <p className="text-gray-600 text-sm">
                Mengutamakan kualitas dalam setiap proyek.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 text-lg mb-2">Kepercayaan</h4>
              <p className="text-gray-600 text-sm">
                Transparansi dan komunikasi yang jelas.
              </p>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-6 text-center hover:shadow-xl transition">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h4 className="font-bold text-gray-900 text-lg mb-2">Inovasi</h4>
              <p className="text-gray-600 text-sm">
                Solusi kreatif dan selalu up-to-date.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}