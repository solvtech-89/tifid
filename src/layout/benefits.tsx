export default function Benefits() {
  return (
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
                    Workshop, hackathon, dan meetup dengan expert dari industri
                    teknologi.
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
                    Bimbingan langsung dari senior developer dan tech leaders
                    berpengalaman.
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
                <div className="font-black text-2xl text-gray-900">Career</div>
                <div className="text-sm text-gray-600 mt-2">Job Portal</div>
              </div>
            </div>
            <div className="space-y-5 mt-12">
              <div className="group p-8 bg-gray-100 rounded-3xl shadow-lg hover:shadow-xl hover:scale-105 transition-all cursor-pointer border-2 border-gray-200 hover:border-[#24B6B0]">
                <div className="text-5xl mb-3">💬</div>
                <div className="font-black text-2xl text-gray-900">Forums</div>
                <div className="text-sm text-gray-600 mt-2">Diskusi & Q&A</div>
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
  );
}
