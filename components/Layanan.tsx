"use client";

import Link from "next/link";

const services = [
  {
    id: 1,
    title: "Pembuatan Website",
    description:
      "Website profesional dari nol, sesuai kebutuhan bisnis Anda. Mulai dari company profile, landing page, hingga sistem manajemen konten.",
    icon: (
      <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L15 12.75L9.75 8.5M4.5 4.5L19.5 4.5L19.5 19.5L4.5 19.5L4.5 4.5Z" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Desain UI/UX",
    description:
      "Antarmuka yang menarik dan pengalaman pengguna yang optimal. Kami fokus pada kemudahan navigasi dan estetika modern.",
    icon: (
      <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7M21 18l-4-4m0 0l-4 4m4-4v8" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Maintenance & Support",
    description:
      "Perawatan rutin, pembaruan keamanan, dan dukungan teknis 24/7 agar website Anda selalu aman dan berjalan lancar.",
    icon: (
      <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Optimasi SEO",
    description:
      "Meningkatkan visibilitas website Anda di mesin pencari. Kami terapkan strategi SEO on-page dan teknis untuk trafik organik.",
    icon: (
      <svg className="w-10 h-10 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9" />
      </svg>
    ),
  },
];

export default function Layanan() {
  return (
    <section id="layanan" className="py-20 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-blue-600 font-semibold text-sm uppercase tracking-wider">
            Layanan
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mt-2">
            Jasa Yang Saya Tawarkan
          </h2>
          <p className="text-gray-600 mt-4">
            Saya menyediakan berbagai layanan untuk membantu Anda memiliki
            kehadiran digital yang kuat dan profesional.
          </p>
        </div>

        {/* Grid layanan */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="group bg-gray-50 hover:bg-gray-100 rounded-xl p-8 transition-all duration-300 border border-gray-200 hover:border-blue-400"
            >
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 p-3 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition">
                  {service.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900 group-hover:text-blue-600 transition">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action tambahan (opsional) */}
        <div className="text-center mt-12">
          <p className="text-gray-600 mb-4">
            Butuh layanan yang lebih spesifik? Konsultasikan dengan saya.
          </p>
          <Link
            href="/Kontak"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-md transition shadow-lg shadow-blue-600/30"
          >
            Hubungi Saya
          </Link>
        </div>
      </div>
    </section>
  );
}