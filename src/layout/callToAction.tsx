export default function CallToAction() {
  return (
    <section
      id="join"
      className="relative overflow-hidden bg-gradient-to-r from-[#24B6B0] via-[#0E9E9A] to-[#24B6B0] py-28"
    >
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-20"></div>
      <div className="absolute top-10 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/10 rounded-full blur-3xl animate-pulse delay-75"></div>
      <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
        <h3 className="text-5xl md:text-6xl font-black text-white mb-8 leading-tight drop-shadow-lg">
          Bergabung dengan komunitas kami
        </h3>
        <p className="text-2xl text-white/95 mb-12 leading-relaxed max-w-3xl mx-auto font-medium">
          Dapatkan akses ke acara eksklusif, proyek kolaboratif, dan jaringan
          profesional yang akan membawa karier teknologi Anda ke level
          berikutnya.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-5">
          <a
            className="group px-10 py-5 rounded-2xl bg-white text-[#24B6B0] font-black text-lg shadow-2xl hover:shadow-3xl transition-all duration-200 transform hover:scale-110 hover:-translate-y-1"
            href="#"
          >
            Daftar Gratis Sekarang
            <span className="inline-block ml-2 group-hover:translate-x-2 transition-transform">
              →
            </span>
          </a>
          <a
            className="px-10 py-5 rounded-2xl border-3 border-white text-white font-black text-lg hover:bg-white/20 backdrop-blur-sm transition-all duration-200"
            href="#"
          >
            Pelajari Cara Kerja
          </a>
        </div>
        <p className="mt-10 text-white text-base font-medium">
          ✨ Gratis selamanya · No credit card required
        </p>
      </div>
    </section>
  );
}
