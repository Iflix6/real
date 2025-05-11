"use client"

import { useState } from "react"
import Image from "next/image"

export default function ImageGallery() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const images = [
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
    "/placeholder.svg?height=400&width=400",
  ]

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  return (
    <div className="relative h-[240px]">
      <div className="relative h-full rounded-3xl overflow-hidden">
        {/* Main image */}
        <div className="absolute inset-0 z-30">
          <Image
            src={images[currentIndex] || "/placeholder.svg"}
            alt={`Property image ${currentIndex + 1}`}
            fill
            className="object-cover rounded-3xl"
          />
          <div className="absolute bottom-4 right-4">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 5L5 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M12 5H19V12" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Next image (peeking from the right) */}
        <div
          className="absolute inset-y-0 right-0 w-[20%] z-20 translate-x-[80%]"
          style={{
            backgroundImage: `url(${images[(currentIndex + 1) % images.length]})`,
            backgroundSize: "cover",
            backgroundPosition: "left center",
          }}
        />

        {/* Next next image (peeking from the right) */}
        <div
          className="absolute inset-y-0 right-0 w-[20%] z-10 translate-x-[160%]"
          style={{
            backgroundImage: `url(${images[(currentIndex + 2) % images.length]})`,
            backgroundSize: "cover",
            backgroundPosition: "left center",
          }}
        />
      </div>

      {/* Navigation buttons */}
      <button
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 z-40 bg-black/20 backdrop-blur-sm rounded-full p-2 hover:bg-black/40 transition-colors"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M15 19L8 12L15 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      <button
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 z-40 bg-black/20 backdrop-blur-sm rounded-full p-2 hover:bg-black/40 transition-colors"
      >
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M9 5L16 12L9 19" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>
    </div>
  )
}
