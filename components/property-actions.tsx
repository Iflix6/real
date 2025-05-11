export default function PropertyActions() {
  return (
    <div className="bg-emerald-700 rounded-3xl p-6">
      <div className="flex flex-col space-y-6">
        <div className="flex justify-between">
          <button className="bg-zinc-900 hover:bg-zinc-800 transition-colors text-white rounded-full px-6 py-3 flex items-center">
            <span>View property</span>
          </button>

          <button className="bg-transparent hover:bg-emerald-600 transition-colors text-white rounded-full px-6 py-3 flex items-center">
            <span>Learn more</span>
            <svg
              className="ml-2"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M5 12H19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 5L19 12L12 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>

        <div className="flex flex-wrap gap-4">
          <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center text-black">
            <div className="text-center">
              <div className="font-bold flex items-center justify-center">
                <svg
                  className="mr-1"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="black"
                  />
                </svg>
                200+
              </div>
              <div className="text-xs">per sq ft</div>
            </div>
          </div>

          <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center text-black">
            <div className="text-center">
              <div className="font-bold flex items-center justify-center">
                <svg
                  className="mr-1"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="2" fill="none" />
                  <path
                    d="M12 6V12L16 14"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                1M+
              </div>
              <div className="text-xs">value</div>
            </div>
          </div>

          <div className="bg-white rounded-full w-20 h-20 flex items-center justify-center text-black">
            <div className="text-center">
              <div className="font-bold flex items-center justify-center">
                <svg
                  className="mr-1"
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect x="3" y="4" width="18" height="18" rx="2" stroke="black" strokeWidth="2" fill="none" />
                  <path d="M16 2V6" stroke="black" strokeWidth="2" strokeLinecap="round" />
                  <path d="M8 2V6" stroke="black" strokeWidth="2" strokeLinecap="round" />
                  <path d="M3 10H21" stroke="black" strokeWidth="2" strokeLinecap="round" />
                </svg>
                200+
              </div>
              <div className="text-xs">per month</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
