export default function HeroSection() {
  return (
    <div className="relative bg-gradient-to-br from-blue-600 to-blue-400 rounded-3xl p-6 h-[600px]">
      <div className="flex flex-wrap gap-2 mb-4">
        <span className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full">Property</span>
        <span className="bg-white/20 text-white text-xs font-medium px-3 py-1 rounded-full">Web3.0</span>
      </div>

      <h1 className="text-4xl md:text-5xl font-bold mb-4 max-w-md">Buy land, they're not making it anymore. 🏡</h1>

      <div className="absolute top-1/3 right-10 hidden md:block">
        <div className="relative w-24 h-24">
          <div className="absolute inset-0 rounded-full bg-white"></div>
          <div className="absolute inset-0 flex items-center justify-center text-xs text-center text-black">
            <div className="rotate-[30deg]">
              <span>Opportunity • Value • Luxury •</span>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-16 left-6 right-6 max-w-md">
        <div className="h-px bg-white/30 mb-4"></div>
        <p className="text-sm md:text-base">
          Land monopoly is not only monopoly, but it is by far the greatest of monopolies; it is a perpetual monopoly.
        </p>
      </div>

      <div className="absolute bottom-4 right-4">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M19 5L5 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M12 5H19V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </div>
    </div>
  )
}
