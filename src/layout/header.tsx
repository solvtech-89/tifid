export default function Header() {
  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg shadow-sm border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3 min-w-0">
          <img
            src="/logo-tifid.png"
            alt="TIF logo"
            className="w-12 h-12 rounded-xl object-cover shadow-lg ring-2 ring-[#24B6B0]/20"
          />
          <div className="hidden md:block">
            <h1 className="text-lg font-bold text-gray-900">TIFID community</h1>
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
          <button className="inline-flex items-center justify-center px-4 sm:px-6 py-2 h-10 min-w-[120px] rounded-lg bg-transparent border-2 border-gray-300 text-sm sm:text-base text-gray-700 hover:border-[#24B6B0] hover:text-[#24B6B0] transition-all duration-200 font-medium">
            Sign in
          </button>
          <button className="inline-flex items-center justify-center px-4 sm:px-6 py-2 h-10 min-w-[120px] rounded-lg bg-gradient-to-r from-[#24B6B0] to-[#0E9E9A] text-white text-sm sm:text-base font-semibold hover:shadow-xl hover:shadow-[#24B6B0]/50 transition-all duration-200 transform hover:scale-105">
            Get Started
          </button>
        </div>
      </div>
    </header>
  );
}
