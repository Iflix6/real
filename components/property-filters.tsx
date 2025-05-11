export default function PropertyFilters() {
  return (
    <div className="bg-zinc-800 rounded-3xl p-4">
      <div className="flex space-x-2 mb-4">
        <button className="bg-zinc-700 text-white rounded-full px-4 py-1 text-sm font-medium">Buy</button>
        <button className="bg-transparent hover:bg-zinc-700 text-white rounded-full px-4 py-1 text-sm font-medium transition-colors">
          Rent
        </button>
        <button className="bg-transparent hover:bg-zinc-700 text-white rounded-full px-4 py-1 text-sm font-medium transition-colors">
          Sell
        </button>
      </div>

      <div className="grid grid-cols-3 gap-2">
        <div className="bg-zinc-700 rounded-xl p-2">
          <p className="text-xs text-gray-400">City</p>
          <p className="text-sm">New York</p>
        </div>
        <div className="bg-zinc-700 rounded-xl p-2">
          <p className="text-xs text-gray-400">Proprietary</p>
          <p className="text-sm">New York</p>
        </div>
        <div className="bg-zinc-700 rounded-xl p-2">
          <p className="text-xs text-gray-400">Price</p>
          <p className="text-sm">20,000 - 100,000</p>
        </div>
      </div>
    </div>
  )
}
