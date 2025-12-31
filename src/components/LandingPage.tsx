export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 antialiased">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3 min-w-0">
            <img
              src="/logo-tifid.png"
              alt="TIF logo"
              className="w-12 h-12 rounded-xl object-cover shadow-lg ring-2 ring-[#24B6B0]/20"
            />
            <div className="hidden md:block">
              <h1 className="text-lg font-bold text-gray-900">
                TIFID community
              </h1>
              <p className="text-xs text-gray-500">
                Teknik Informatika Indonesia
              </p>
            </div>
          </div>
          <nav className="space-x-8 hidden md:flex">
            <a
              href="#about"
              className="text-sm font-medium text-gray-600 hover:text-[#24B6B0] transition-colors"
            >
              About
            </a>
            <a
              href="#features"
              className="text-sm font-medium text-gray-600 hover:text-[#24B6B0] transition-colors"
            >
              Features
            </a>
            <a
              href="#join"
              className="text-sm font-medium text-gray-600 hover:text-[#24B6B0] transition-colors"
            >
              Join
            </a>
          </nav>
          <div className="flex items-center gap-2">
            <button className="px-3 sm:px-5 py-1.5 sm:py-2 rounded-lg bg-transparent border-2 border-gray-300 text-sm sm:text-base text-gray-700 hover:border-[#24B6B0] hover:text-[#24B6B0] transition-all duration-200 font-medium">
              Sign in
            </button>
            <button className="px-3 sm:px-5 py-1.5 sm:py-2 rounded-lg bg-gradient-to-r from-[#24B6B0] to-[#0E9E9A] text-white text-sm sm:text-base font-semibold hover:shadow-xl hover:shadow-[#24B6B0]/50 transition-all duration-200 transform hover:scale-105">
              Get Started
            </button>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative overflow-hidden bg-gradient-to-br from-[#24B6B0]/5 via-white to-[#0E9E9A]/5">
          {/* Decorative Background */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-1/4 -left-48 w-96 h-96 bg-[#24B6B0]/10 rounded-full blur-3xl"></div>
            <div className="absolute bottom-1/4 -right-48 w-96 h-96 bg-[#0E9E9A]/10 rounded-full blur-3xl"></div>
          </div>

          <div className="max-w-7xl mx-auto px-6 py-20 md:py-28 grid md:grid-cols-2 gap-16 items-center relative">
            <div className="space-y-8">
              <div className="inline-block animate-bounce">
                <span className="px-4 py-2 rounded-full bg-[#24B6B0]/15 text-[#0E9E9A] text-sm font-bold border border-[#24B6B0]/30">
                  🎉 Join 15,000+ Tech Professionals
                </span>
              </div>
              <h2 className="text-5xl md:text-6xl lg:text-7xl font-black text-gray-900 leading-[1.1]">
                Community untuk
                <span className="block mt-2 bg-gradient-to-r from-[#24B6B0] via-[#0E9E9A] to-[#24B6B0] bg-clip-text text-transparent">
                  berbagi, belajar, dan berkolaborasi
                </span>
              </h2>
              <p className="text-xl md:text-2xl text-gray-600 leading-relaxed font-light">
                Bergabunglah dengan jaringan profesional, mahasiswa, dan
                pengembang untuk proyek, diskusi, dan acara teknologi di seluruh
                Indonesia.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <a
                  href="#join"
                  className="group px-8 py-4 rounded-xl bg-gradient-to-r from-[#24B6B0] to-[#0E9E9A] text-white font-bold text-lg shadow-2xl shadow-[#24B6B0]/40 hover:shadow-[#24B6B0]/60 transition-all duration-300 transform hover:scale-105 hover:-translate-y-1 text-center"
                >
                  Gabung Sekarang
                  <span className="inline-block ml-2 group-hover:translate-x-2 transition-transform">
                    →
                  </span>
                </a>
                <a
                  href="#features"
                  className="px-8 py-4 rounded-xl bg-white border-2 border-gray-300 text-gray-700 font-bold text-lg hover:border-[#24B6B0] hover:text-[#24B6B0] hover:bg-gray-50 transition-all duration-200 text-center"
                >
                  Pelajari Lebih Lanjut
                </a>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="space-y-2 group cursor-pointer">
                  <div className="text-4xl font-black bg-gradient-to-r from-[#24B6B0] to-[#0E9E9A] bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                    15K+
                  </div>
                  <div className="text-sm font-medium text-gray-600">
                    Active Members
                  </div>
                </div>
                <div className="space-y-2 group cursor-pointer">
                  <div className="text-4xl font-black bg-gradient-to-r from-[#24B6B0] to-[#0E9E9A] bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                    500+
                  </div>
                  <div className="text-sm font-medium text-gray-600">
                    Projects
                  </div>
                </div>
                <div className="space-y-2 group cursor-pointer">
                  <div className="text-4xl font-black bg-gradient-to-r from-[#24B6B0] to-[#0E9E9A] bg-clip-text text-transparent group-hover:scale-110 transition-transform">
                    100+
                  </div>
                  <div className="text-sm font-medium text-gray-600">
                    Events/Year
                  </div>
                </div>
              </div>
            </div>

            {/* Hero Card */}
            <div className="flex items-center justify-center">
              <div className="w-full max-w-lg rounded-3xl shadow-2xl overflow-hidden bg-white border-2 border-gray-200 transform hover:scale-[1.02] hover:shadow-[#24B6B0]/20 hover:shadow-3xl transition-all duration-500">
                <div className="p-8 space-y-6">
                  <div className="h-64 rounded-2xl bg-gradient-to-br from-[#24B6B0] via-[#0E9E9A] to-[#24B6B0] flex items-center justify-center text-white relative overflow-hidden shadow-xl">
                    <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-40"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                    <div className="relative z-10 text-center space-y-3">
                      <img
                        src="/logo-tifid.png"
                        alt="TIF logo"
                        className="w-24 h-24 mx-auto rounded-full object-cover drop-shadow-lg"
                      />
                      <div className="text-2xl font-semibold">Community</div>
                      <div className="text-sm opacity-90 font-medium">
                        Teknik Informatika Indonesia
                      </div>
                    </div>
                    {/* Decorative circles */}
                    <div className="absolute top-4 right-4 w-24 h-24 bg-white/15 rounded-full blur-2xl animate-pulse"></div>
                    <div className="absolute bottom-4 left-4 w-40 h-40 bg-white/15 rounded-full blur-3xl animate-pulse delay-75"></div>
                  </div>
                  <div>
                    <h3 className="font-black text-2xl text-gray-900 mb-2">
                      Upcoming Events
                    </h3>
                    <p className="text-sm text-gray-600 mb-6">
                      Temukan meetup dan hackathon lokal atau ikut acara online
                      kami.
                    </p>
                    <ul className="space-y-3">
                      <li className="group flex items-start justify-between p-4 rounded-xl bg-gradient-to-br from-[#24B6B0]/5 to-white border-2 border-gray-200 hover:border-[#24B6B0] hover:shadow-lg transition-all duration-200 cursor-pointer">
                        <div className="flex gap-4">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#24B6B0] to-[#0E9E9A] flex flex-col items-center justify-center text-white font-bold text-xs shadow-lg group-hover:scale-110 transition-transform">
                            <span className="text-base">22</span>
                            <span className="text-[10px] opacity-90">JAN</span>
                          </div>
                          <div className="flex-1">
                            <div className="font-bold text-base text-gray-900 group-hover:text-[#24B6B0] transition-colors">
                              Hackathon Jakarta
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              📍 Hybrid Event
                            </div>
                          </div>
                        </div>
                        <button className="text-sm text-[#24B6B0] font-bold hover:underline whitespace-nowrap">
                          Register →
                        </button>
                      </li>
                      <li className="group flex items-start justify-between p-4 rounded-xl bg-gradient-to-br from-[#24B6B0]/5 to-white border-2 border-gray-200 hover:border-[#24B6B0] hover:shadow-lg transition-all duration-200 cursor-pointer">
                        <div className="flex gap-4">
                          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#24B6B0] to-[#0E9E9A] flex flex-col items-center justify-center text-white font-bold text-xs shadow-lg group-hover:scale-110 transition-transform">
                            <span className="text-base">05</span>
                            <span className="text-[10px] opacity-90">FEB</span>
                          </div>
                          <div className="flex-1">
                            <div className="font-bold text-base text-gray-900 group-hover:text-[#24B6B0] transition-colors">
                              Web Dev Workshop
                            </div>
                            <div className="text-xs text-gray-500 mt-1">
                              💻 Online
                            </div>
                          </div>
                        </div>
                        <button className="text-sm text-[#24B6B0] font-bold hover:underline whitespace-nowrap">
                          Register →
                        </button>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="bg-white py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h3 className="text-5xl font-black text-gray-900 mb-6">
                Apa yang kita tawarkan
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Akses ke berbagai fasilitas dan program untuk mengembangkan
                karier teknologi Anda
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              <div className="group p-10 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-[#24B6B0] hover:-translate-y-2">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#24B6B0] to-[#0E9E9A] flex items-center justify-center text-5xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg">
                  🌐
                </div>
                <h4 className="text-2xl font-black mb-4 text-gray-900 group-hover:text-[#24B6B0] transition-colors">
                  Global Network
                </h4>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Terhubung dengan ribuan profesional teknologi di seluruh
                  Indonesia dan bangun jaringan yang kuat.
                </p>
              </div>
              <div className="group p-10 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-[#24B6B0] hover:-translate-y-2">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#24B6B0] to-[#0E9E9A] flex items-center justify-center text-5xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg">
                  📚
                </div>
                <h4 className="text-2xl font-black mb-4 text-gray-900 group-hover:text-[#24B6B0] transition-colors">
                  Learning Paths
                </h4>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Kurikulum terstruktur untuk berbagai jalur karier, dari web
                  development hingga AI & machine learning.
                </p>
              </div>
              <div className="group p-10 bg-gradient-to-br from-white to-gray-50 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300 border-2 border-gray-200 hover:border-[#24B6B0] hover:-translate-y-2">
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-[#24B6B0] to-[#0E9E9A] flex items-center justify-center text-5xl mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all shadow-lg">
                  🚀
                </div>
                <h4 className="text-2xl font-black mb-4 text-gray-900 group-hover:text-[#24B6B0] transition-colors">
                  Startup Support
                </h4>
                <p className="text-gray-600 leading-relaxed text-lg">
                  Akses ke mentor berpengalaman, peluang funding, dan platform
                  co-founder hunting untuk startup Anda.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-gradient-to-br from-gray-50 to-white py-24">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-16 items-center">
              <div className="space-y-8">
                <h3 className="text-5xl font-black text-gray-900 leading-tight">
                  Kenapa bergabung dengan TIFID Community?
                </h3>
                <div className="space-y-6">
                  <div className="flex gap-5 group cursor-pointer">
                    <div className="w-14 h-14 rounded-xl bg-[#24B6B0]/15 flex items-center justify-center text-[#24B6B0] text-2xl font-black flex-shrink-0 group-hover:bg-[#24B6B0] group-hover:text-white transition-all group-hover:scale-110 shadow-md">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-black text-xl mb-2 group-hover:text-[#24B6B0] transition-colors">
                        Akses Eksklusif ke Events
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        Workshop, hackathon, dan meetup dengan expert dari
                        industri teknologi.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-5 group cursor-pointer">
                    <div className="w-14 h-14 rounded-xl bg-[#24B6B0]/15 flex items-center justify-center text-[#24B6B0] text-2xl font-black flex-shrink-0 group-hover:bg-[#24B6B0] group-hover:text-white transition-all group-hover:scale-110 shadow-md">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-black text-xl mb-2 group-hover:text-[#24B6B0] transition-colors">
                        Job & Internship Opportunities
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        Portal lowongan kerja eksklusif dari partner perusahaan
                        teknologi terkemuka.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-5 group cursor-pointer">
                    <div className="w-14 h-14 rounded-xl bg-[#24B6B0]/15 flex items-center justify-center text-[#24B6B0] text-2xl font-black flex-shrink-0 group-hover:bg-[#24B6B0] group-hover:text-white transition-all group-hover:scale-110 shadow-md">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-black text-xl mb-2 group-hover:text-[#24B6B0] transition-colors">
                        Collaborative Projects
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        Kerjakan proyek open-source bersama member lain dan
                        tingkatkan portfolio Anda.
                      </p>
                    </div>
                  </div>
                  <div className="flex gap-5 group cursor-pointer">
                    <div className="w-14 h-14 rounded-xl bg-[#24B6B0]/15 flex items-center justify-center text-[#24B6B0] text-2xl font-black flex-shrink-0 group-hover:bg-[#24B6B0] group-hover:text-white transition-all group-hover:scale-110 shadow-md">
                      ✓
                    </div>
                    <div>
                      <h4 className="font-black text-xl mb-2 group-hover:text-[#24B6B0] transition-colors">
                        Mentorship Program
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        Bimbingan langsung dari senior developer dan tech
                        leaders berpengalaman.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-5">
                <div className="space-y-5">
                  <div className="group p-8 bg-gradient-to-br from-[#24B6B0] to-[#0E9E9A] rounded-3xl text-white shadow-2xl hover:scale-105 transition-transform cursor-pointer">
                    <div className="text-5xl mb-3">🎓</div>
                    <div className="font-black text-2xl">Courses</div>
                    <div className="text-sm opacity-90 mt-2">
                      Workshop & Tutorial
                    </div>
                  </div>
                  <div className="group p-8 bg-gray-100 rounded-3xl shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer border-2 border-gray-200 hover:border-[#24B6B0]">
                    <div className="text-5xl mb-3">💼</div>
                    <div className="font-black text-2xl text-gray-900">
                      Career
                    </div>
                    <div className="text-sm text-gray-600 mt-2">Job Portal</div>
                  </div>
                </div>
                <div className="space-y-5 mt-12">
                  <div className="group p-8 bg-gray-100 rounded-3xl shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer border-2 border-gray-200 hover:border-[#24B6B0]">
                    <div className="text-5xl mb-3">💬</div>
                    <div className="font-black text-2xl text-gray-900">
                      Forums
                    </div>
                    <div className="text-sm text-gray-600 mt-2">
                      Diskusi & Q&A
                    </div>
                  </div>
                  <div className="group p-8 bg-gradient-to-br from-[#0E9E9A] to-[#24B6B0] rounded-3xl text-white shadow-2xl hover:scale-105 transition-transform cursor-pointer">
                    <div className="text-5xl mb-3">🤝</div>
                    <div className="font-black text-2xl">Projects</div>
                    <div className="text-sm opacity-90 mt-2">Open Source</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
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
              Dapatkan akses ke acara eksklusif, proyek kolaboratif, dan
              jaringan profesional yang akan membawa karier teknologi Anda ke
              level berikutnya.
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
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid md:grid-cols-4 gap-12 mb-12">
            <div className="space-y-5">
              <div className="flex items-center gap-3">
                <img
                  src="/logo-tifid.png"
                  alt="TIF logo"
                  className="w-12 h-12 rounded-xl object-cover shadow-lg"
                />
                <div className="font-black text-xl text-white">
                  TIFID community
                </div>
              </div>
              <p className="text-sm text-gray-400 leading-relaxed">
                Platform komunitas untuk profesional teknologi Indonesia yang
                ingin berkembang bersama.
              </p>
            </div>
            <div>
              <h4 className="font-black text-white mb-5 text-lg">Community</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#24B6B0] transition-colors flex items-center gap-2"
                  >
                    <span>→</span> About Us
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#24B6B0] transition-colors flex items-center gap-2"
                  >
                    <span>→</span> Events
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#24B6B0] transition-colors flex items-center gap-2"
                  >
                    <span>→</span> Blog
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#24B6B0] transition-colors flex items-center gap-2"
                  >
                    <span>→</span> Forum
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-white mb-5 text-lg">Resources</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#24B6B0] transition-colors flex items-center gap-2"
                  >
                    <span>→</span> Learning Paths
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#24B6B0] transition-colors flex items-center gap-2"
                  >
                    <span>→</span> Projects
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#24B6B0] transition-colors flex items-center gap-2"
                  >
                    <span>→</span> Job Board
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#24B6B0] transition-colors flex items-center gap-2"
                  >
                    <span>→</span> Mentorship
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-black text-white mb-5 text-lg">Legal</h4>
              <ul className="space-y-3 text-sm">
                <li>
                  <a
                    href="#"
                    className="hover:text-[#24B6B0] transition-colors flex items-center gap-2"
                  >
                    <span>→</span> Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#24B6B0] transition-colors flex items-center gap-2"
                  >
                    <span>→</span> Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-[#24B6B0] transition-colors flex items-center gap-2"
                  >
                    <span>→</span> Contact
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="text-sm text-gray-500">
              © {new Date().getFullYear()} TIFID community — All rights
              reserved.
            </div>
            <div className="flex gap-6 items-center">
              <a
                href="https://www.instagram.com/teknikinformatika.id"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-500 hover:text-[#24B6B0] transition-colors transform hover:scale-125"
              >
                <svg
                  className="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm8 3a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
