import Link from "next/link"

export default function Header() {
  return (
    <header className="flex flex-col sm:flex-row items-center justify-between gap-4 bg-black/30 backdrop-blur-md rounded-full px-6 py-3 border border-white/10">
      <div className="bg-zinc-900 rounded-full p-4 w-20 h-20 flex items-center justify-center">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M4 12C4 7.58172 7.58172 4 12 4V4C16.4183 4 20 7.58172 20 12V12C20 16.4183 16.4183 20 12 20V20"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            d="M12 20C9.79086 20 8 18.2091 8 16V16C8 13.7909 9.79086 12 12 12V12C14.2091 12 16 10.2091 16 8V8C16 5.79086 14.2091 4 12 4V4"
            stroke="white"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>

      <nav className="hidden md:flex items-center space-x-8">
        <Link href="#" className="hover:text-gray-300 transition-colors">
          Home
        </Link>
        <Link href="#" className="hover:text-gray-300 transition-colors">
          Place
        </Link>
        <Link href="#" className="hover:text-gray-300 transition-colors">
          Service
        </Link>
        <Link href="#" className="hover:text-gray-300 transition-colors">
          About us
        </Link>
        <Link href="#" className="hover:text-gray-300 transition-colors">
          Contact us
        </Link>
      </nav>

      <button className="bg-zinc-700/80 hover:bg-zinc-600/80 transition-colors rounded-full px-6 py-2">Log in</button>
    </header>
  )
}
