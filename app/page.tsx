import Image from "next/image";
import Link from "next/link";
import { Brain, Plus, Minus } from "lucide-react";

// Spinning animation for the badge
const spinningAnimation = {
  ".animate-spin-slow": {
    animation: "spin 8s linear infinite",
  },
  "@keyframes spin": {
    "0%": { transform: "rotate(0deg)" },
    "100%": { transform: "rotate(360deg)" },
  },
};

export default function Home() {
  return (
    <div className="min-h-screen bg-blue-900 flex items-center justify-center">
      <div className="w-full max-w-[1200px] bg-[#B84AEB] rounded-3xl overflow-hidden p-4">
        {/* Navigation */}
        <nav className="flex items-center justify-between bg-gray-800 rounded-full px-4 py-3 mb-6">
          <div className="flex items-center">
            <div className="bg-gray-700 rounded-full p-2 mr-4">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"
                  fill="white"
                />
                <path d="M12 6v12M6 12h12" stroke="white" strokeWidth="2" strokeLinecap="round" />
              </svg>
            </div>
            <div className="hidden md:flex space-x-6">
              <Link href="#" className="text-white font-medium">
                Home
              </Link>
              <Link href="#" className="text-white font-medium">
                Features
              </Link>
              <Link href="#" className="text-white font-medium">
                Pricing
              </Link>
              <Link href="#" className="text-white font-medium">
                About
              </Link>
              <Link href="#" className="text-white font-medium">
                Contact
              </Link>
            </div>
          </div>
          <button className="bg-blue-600 hover:bg-blue-500 text-white rounded-full px-4 py-1.5 transition-colors">
            Sign Up
          </button>
        </nav>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Left Column */}
          <div className="flex flex-col space-y-6">
            {/* Left Card */}
            <div className="bg-gradient-to-br from-blue-500 to-blue-300 rounded-3xl p-6 relative overflow-hidden h-[500px]">
              <div className="flex space-x-2 mb-4 z-10 relative">
                <span className="bg-white text-blue-600 text-sm font-medium px-2 py-1 rounded-full">AI Coaching</span>
                <span className="bg-white text-green-600 text-sm font-medium px-2 py-1 rounded-full">Career Prep</span>
              </div>
              <h1 className="text-white text-5xl font-bold leading-tight mb-4 z-10 relative">
                Ace Your Interview with AI Coaching <span className="text-2xl">🤖</span>
              </h1>
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-gradient-to-br from-green-400 via-blue-400 to-green-500 rounded-full opacity-40 blur-2xl z-0"></div>
              <div className="absolute right-4 bottom-28 w-28 h-28 z-10">
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 rounded-full bg-white border-2 border-white animate-spin-slow"></div>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <svg viewBox="0 0 100 100" className="w-full h-full">
                      <defs>
                        <path id="circle" d="M 50, 50 m -37, 0 a 37,37 0 1,1 74,0 a 37,37 0 1,1 -74,0" />
                      </defs>
                      <text fill="black" fontSize="10">
                        <textPath xlinkHref="#circle" startOffset="0%">
                          • Personalized Feedback • AI Insights • Practice Excellence •
                        </textPath>
                      </text>
                    </svg>
                  </div>
                </div>
              </div>
              <div>
                <div className="mt-6 border-t border-white/20 my-6"></div>
              </div>
              <p className="text-white/90 text-base mt-52 z-10 relative">
                Our AI-powered platform provides personalized interview practice, real-time feedback, and expert strategies to boost your confidence and land your dream job.
              </p>
              <div className="absolute bottom-4 right-4 z-10">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M7 17L17 7" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M7 7H17V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
            </div>

            {/* Bottom Section (Get Started) */}
            <div className="bg-blue-600 rounded-3xl p-8 flex justify-between items-center">
              <div className="flex space-x-4">
                <button className="bg-gray-800 text-white px-4 py-2 rounded-full"><Link href="https://ai-interview-coach-khaki.vercel.app" className="text-white font-medium">
                Start Practicing
              </Link></button>
                <button className="flex items-center text-white space-x-1">
                  <span>Learn More</span>
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
                </button>
              </div>
              <div className="flex space-x-2">
                <div className="bg-white rounded-full px-3 py-1.5 flex items-center">
                  <span className="text-sm text-black font-bold">🚀 500+ Users</span>
                </div>
                <div className="bg-white rounded-full px-3 py-1.5 flex items-center">
                  <span className="text-sm text-black font-bold">⭐ 4.8 Rating</span>
                </div>
                <div className="bg-white rounded-full px-3 py-1.5 flex items-center">
                  <span className="text-sm text-black font-bold">📈 90% Success</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Card */}
          <div className="space-y-6">
            <div className="relative h-80">
              <div className="relative h-80 w-[400px] rounded-3xl overflow-hidden z-30">
                <Image
                  src="/beach.jpg"
                  alt="AI Interview Coach"
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
              <div className="absolute left-[200px] top-4 h-72 w-[280px] rounded-3xl overflow-hidden transform rotate-2 z-20">
                <Image
                  src="/real.jpeg"
                  alt="Mock Interview Session"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute right-4 top-8 h-64 w-[260px] rounded-3xl overflow-hidden transform rotate-4 z-0">
                <Image
                  src="/summer.jpg"
                  alt="Feedback Dashboard"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <div className="bg-gray-800 rounded-3xl p-4 space-y-4">
              <div className="flex space-x-2">
                <button className="bg-gray-700 text-white px-3 py-1.5 rounded-full text-sm">Technical</button>
                <button className="bg-gray-700 text-white px-3 py-1.5 rounded-full text-sm">Behavioral</button>
                <button className="bg-gray-700 text-white px-3 py-1.5 rounded-full text-sm">Case Study</button>
              </div>
              <div className="grid grid-cols-3 gap-2">
                <div className="bg-gray-700 rounded-lg p-2">
                  <div className="text-xs text-gray-400">Industry</div>
                  <div className="text-white text-sm">Tech</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-2">
                  <div className="text-xs text-gray-400">Level</div>
                  <div className="text-white text-sm">Entry to Senior</div>
                </div>
                <div className="bg-gray-700 rounded-lg p-2">
                  <div className="text-xs text-gray-400">Session</div>
                  <div className="text-white text-sm">30-60 min</div>
                </div>
              </div>
              <div className="relative h-40 bg-gray-200 rounded-lg overflow-hidden">
                <div className="absolute inset-0 bg-gray-200">
                  <div className="absolute right-2 top-2 flex flex-col space-y-1">
                    <button className="bg-white p-1 rounded-md shadow">
                      <Plus size={14} />
                    </button>
                    <button className="bg-white p-1 rounded-md shadow">
                      <Minus size={14} />
                    </button>
                  </div>
                  <div className="absolute right-2 bottom-2">
                    <button className="bg-white p-1 rounded-md shadow">
                      <Brain size={14} className="text-blue-500" />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
