export default function MapView() {
  return (
    <div className="bg-zinc-800 rounded-3xl p-4 relative h-[200px] overflow-hidden">
      <div className="absolute inset-0 bg-[#e8f0f0]">
        {/* Static map placeholder */}
        <div className="w-full h-full relative">
          {/* Map grid lines */}
          <div className="absolute inset-0 grid grid-cols-8 grid-rows-6 opacity-20">
            {Array.from({ length: 8 }).map((_, i) => (
              <div key={`v-${i}`} className="h-full border-r border-black/30" />
            ))}
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={`h-${i}`} className="w-full border-b border-black/30" />
            ))}
          </div>

          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"
                fill="#FF4136"
                stroke="#FF4136"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <circle
                cx="12"
                cy="10"
                r="3"
                fill="white"
                stroke="#FF4136"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <div className="absolute bottom-4 right-4 flex flex-col space-y-2">
            <button className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-black">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 5V19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5 12H19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button className="bg-white rounded-full w-8 h-8 flex items-center justify-center text-black">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
