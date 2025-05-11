import Image from "next/image"
import Link from "next/link"
import { MapPin, Plus, Minus } from "lucide-react"

// Add this at the top of your file for the spinning animation
const spinningAnimation = {
  '.animate-spin-slow': {
    animation: 'spin 8s linear infinite',
  },
  '@keyframes spin': {
    '0%': { transform: 'rotate(0deg)' },
    '100%': { transform: 'rotate(360deg)' },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-teal-700">
      <div className="container mx-auto py-6 px-4">
        <div className="bg-black rounded-3xl overflow-hidden p-4 md:p-6 lg:p-8">
          {/* Navigation */}
          <nav className="flex items-center justify-between bg-zinc-900 rounded-full px-4 py-2">
            <div className="flex items-center">
              <div className="bg-zinc-800 rounded-full p-4 mr-4">
                <svg width="30" height="30" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M6 12C6 15.3137 8.68629 18 12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12Z"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path d="M4 20L8 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M20 4L16 8" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <div className="hidden md:flex space-x-8 ml-auto">
                <Link href="#" className="text-white font-medium">
                  Home
                </Link>
                <Link href="#" className="text-white font-medium">
                  Place
                </Link>
                <Link href="#" className="text-white font-medium">
                  Service
                </Link>
                <Link href="#" className="text-white font-medium">
                  About us
                </Link>
                <Link href="#" className="text-white font-medium">
                  Contract us
                </Link>
              </div>
            </div>
            <button className="bg-zinc-700 hover:bg-zinc-600 text-white rounded-full px-6 py-2 transition-colors">
              Log in
            </button>
          </nav>

          {/* Main Content */}
          <div className="mt-6 grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Left Card */}
            <div className="bg-gradient-to-br from-[#3B82F6]  rounded-3xl relative p-6 overflow-hidden">
              <div className="flex space-x-2 mb-4">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-pink-400 via-blue-500 to-pink-500 rounded-full opacity-40 blur-2xl z-0"></div>
                <span className="bg-white text-[#3B82F6] text-sm font-medium px-3 py-1 rounded-full">Property</span>
                <span className="bg-white text-[#EC4899] text-sm font-medium px-3 py-1 rounded-full">Web3.0</span>
              </div>

              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-[300px]">
                Buy land, they&apos;re not making it anymore. <span className="text-3xl">🏡</span>
              </h1>

              {/* Circular rotating badge */}
              <div className="absolute mb-[200px] items-center -right-4 bottom-16 w-32 h-32 mr-6">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 rounded-full text-black text-black bg-white border-2 border-white animate-spin-slow"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <defs>
                        <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                      </defs>
                      <text fill="black" fontSize="12">
                        <textPath xlinkHref="#circle" className="text-center text-black" startOffset="0%">
                        • Your proprietary • Our archive • Your proprietary •
                        </textPath>
                      </text>
                    </svg>
                  </div>
                </div>
              </div>


              <div className="mt-6 border-t border-white/20 my-6"></div>

              <p className="mt-6 ext-white/90 text-lg mb-16">
                Land monopoly is not only monopoly, but it is by far the greatest of monopolies; it is a perpetual
                monopoly.
              </p>


              {/* Arrow icon in the bottom right */}
              <div className="absolute bottom-4 right-4">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7 7H17V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* Right Card */}
            <div className="flex flex-col">
              <div className="relative h-80 mb-6">
                <div className="relative flex items-center">
                  {/* Main image */}
                  <div className="relative w-full h-80 w-[500px] rounded-3xl overflow-hidden z-30">
                    <Image
                      src="/beach.jpg"
                      alt="Property visualization"
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-4 right-4">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          d="M7 17L17 7"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M7 7H17V17"
                          stroke="white"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </div>
                  </div>

                  {/* Second image (peeking from right) */}
                  <div className="absolute left-[300px] h-72 w-full max-w-[280px] rounded-3xl overflow-hidden z-20 transform rotate-2">
                    <Image
                      src="/summer.jpg"
                      alt="Property visualization 2"
                      fill
                      className="object-cover"
                    />
                  </div>

                  {/* Third image (peeking from far right) */}
                  <div className="absolute right-[50px] h-64 w-full max-w-[260px] rounded-3xl overflow-hidden z-10 transform rotate-4">
                    <Image
                      src="/real.jpeg"
                      alt="Property visualization 3"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              <div className="bg-zinc-900 rounded-3xl p-4 mt-12">
                <div className="flex space-x-2 mb-4">
                  <button className="bg-zinc-800 text-white px-4 py-2 rounded-full">Buy</button>
                  <button className="bg-zinc-800 text-white px-4 py-2 rounded-full">Rent</button>
                  <button className="bg-zinc-800 text-white px-4 py-2 rounded-full">Sell</button>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-2 mb-4">
                  <div className="bg-zinc-800 rounded-lg p-2">
                    <div className="text-xs text-gray-400">City</div>
                    <div className="text-white">New York</div>
                  </div>
                  <div className="bg-zinc-800 rounded-lg p-2">
                    <div className="text-xs text-gray-400">Proprietary</div>
                    <div className="text-white">New York</div>
                  </div>
                  <div className="bg-zinc-800 rounded-lg p-2">
                    <div className="text-xs text-gray-400">Price</div>
                    <div className="text-white">20,000 - 100,0000</div>
                  </div>
                </div>

                <div className="relative h-40 bg-gray-200 rounded-lg overflow-hidden">
                  <div className="absolute inset-0 bg-gray-200">
                    {/* Map placeholder */}
                    <div className="w-full h-full relative">
                      <div className="absolute right-2 top-2 flex flex-col space-y-2">
                        <button className="bg-white p-1 rounded-md shadow">
                          <Plus size={16} />
                        </button>
                        <button className="bg-white p-1 rounded-md shadow">
                          <Minus size={16} />
                        </button>
                      </div>
                      <div className="absolute right-2 bottom-2">
                        <button className="bg-white p-1 rounded-md shadow">
                          <MapPin size={16} className="text-orange-500" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom Section */}
          <div className="mt-6">
            <div className="bg-teal-700 rounded-3xl p-6 flex flex-row justify-between items-center w-[700px]">
              <div className="space-x-4 flex flex-row">
                <button className="bg-zinc-800 text-white px-6 py-3 rounded-full">View property</button>
                <div className="flex items-center space-x-2">
                  <span className="text-white">Learn more</span>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    <path
                      d="M12 5L19 12L12 19"
                      stroke="white"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    /> 
                  </svg>
                </div>
              </div>
              <div className="flex space-x-2">
                <div className="bg-white rounded-full px-4 py-2 flex items-center">
                  <span className="text-sm text-black font-bold">💰 200+</span>
                </div>
                <div className="bg-white rounded-full px-4 py-2 flex items-center">
                  <span className="text-sm text-black font-bold">🔥 1k+</span>
                </div>
                <div className="bg-white rounded-full px-4 py-2 flex items-center">
                  <span className="text-sn text-black font-bold">💵 200+</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
