"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

interface BannerSlide {
  id: number
  imageUrl: string
  alt: string
  link: string
}

export function BannerSlider() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  const banners: BannerSlide[] = [
    {
      id: 1,
      imageUrl: "https://www.quangcaophuchung.com/images/banner-new.png",
    },
    {
      id: 2,
      imageUrl: "https://giaconglasercnc.com/wp-content/uploads/2023/07/banner-giaconglasercnc-1.png",
    },
    {
      id: 3,
      imageUrl: "https://cokhiphuocbinh.com/upload/photo/untitled-10006layer-2-2929.png",
    },
    {
      id: 4,
      imageUrl: "https://cokhivietthang.vn/wp-content/uploads/2023/03/banner-cokhivietthang.jpg",
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1))
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? banners.length - 1 : prev - 1))
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  const goToSlide = (index: number) => {
    setCurrentSlide(index)
    setIsAutoPlaying(false)
    setTimeout(() => setIsAutoPlaying(true), 5000)
  }

  useEffect(() => {
    let interval: NodeJS.Timeout

    if (isAutoPlaying) {
      interval = setInterval(() => {
        setCurrentSlide((prev) => (prev === banners.length - 1 ? 0 : prev + 1))
      }, 5000)
    }

    return () => {
      if (interval) clearInterval(interval)
    }
  }, [isAutoPlaying, banners.length])

  return (
    <div className="banner-slider-container relative h-[180px] md:h-[335px] rounded-lg overflow-hidden">
      <div
        className="banner-slider-track flex transition-transform duration-500 ease-in-out h-full"
        style={{
          transform: `translateX(-${currentSlide * 100}%)`,
          transition: "transform 0.5s ease-in-out",
        }}
      >
        {banners.map((banner) => (
          <div key={banner.id} className="banner-slide flex-shrink-0 w-full h-full relative">
            <Image
              src={banner.imageUrl || "/placeholder.svg"}
              alt={banner.alt}
              fill
              className="banner-image object-contain"
              priority
            />
          </div>
        ))}
      </div>

      {/* Navigation arrows */}
      <button
        onClick={prevSlide}
        className="banner-nav-button banner-prev-button absolute left-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 z-10"
        aria-label="Previous banner"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        onClick={nextSlide}
        className="banner-nav-button banner-next-button absolute right-2 top-1/2 transform -translate-y-1/2 bg-black/30 hover:bg-black/50 text-white rounded-full p-2 z-10"
        aria-label="Next banner"
      >
        <ChevronRight className="h-5 w-5" />
      </button>

      {/* Indicators */}
      <div className="banner-indicators absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {banners.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`banner-indicator h-2 w-2 rounded-full transition-all ${
              currentSlide === index ? "bg-white w-4" : "bg-white/50"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  )
}
