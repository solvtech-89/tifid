export default function Footer() {
  return (
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
            <h4 className="font-black text-white mb-5 text-lg">Kontak Kami</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-[#24B6B0] flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M20 4H4a2 2 0 00-2 2v12a2 2 0 002 2h16a2 2 0 002-2V6a2 2 0 00-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
                <a
                  href="mailto:Teknikinformatikaindonesia@gmail.com"
                  className="text-gray-300 hover:text-[#24B6B0] transition-colors"
                >
                  Teknikinformatikaindonesia@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-[#24B6B0] flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5.5A2.5 2.5 0 015.5 3h1A2.5 2.5 0 019 5.5v1A2.5 2.5 0 016.5 9h-1A2.5 2.5 0 013 6.5v-1zM15 3h3a2 2 0 012 2v3"
                  />
                </svg>
                <a
                  href="tel:+6281261828159"
                  className="text-gray-300 hover:text-[#24B6B0] transition-colors"
                >
                  +62 812-6182-8159
                </a>
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="w-5 h-5 text-[#24B6B0] flex-shrink-0"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M12 2C8.14 2 5 5.14 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.86-3.14-7-7-7zm0 9.5A2.5 2.5 0 1112 6a2.5 2.5 0 010 5.5z" />
                </svg>
                <span className="text-gray-300">Riau, Indonesia</span>
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
            © {new Date().getFullYear()} TIFID community — All rights reserved.
          </div>
          <div className="flex gap-6 items-center">
            <a
              href="https://www.instagram.com/teknikinformatika.id"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-[#24B6B0] transition-colors transform hover:scale-125"
            >
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 2C4.243 2 2 4.243 2 7v10c0 2.757 2.243 5 5 5h10c2.757 0 5-2.243 5-5V7c0-2.757-2.243-5-5-5H7zm8 3a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
