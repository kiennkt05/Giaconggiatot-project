"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Heart } from "lucide-react"
import { Card } from "@/components/ui/card"
import Link from "next/link"
import { useFeatureNotification } from "@/hooks/use-feature-notification"
import { FeatureNotification } from "@/components/feature-notification"

interface ProductCardProps {
  id: number
  title: string
  seller: string
  phone: string
  image: string
  price: string
  rating?: number
  description?: string
}

export function ProductCard({ id, title, seller, phone, image, price, rating, description }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const { showNotification, showFeatureNotification, hideFeatureNotification } = useFeatureNotification()

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation()
    e.preventDefault()
    setIsFavorite(!isFavorite)
    showFeatureNotification()
  }

  const handleProductClick = (e: React.MouseEvent) => {
    // We'll allow navigation to product detail pages
    // No need to prevent default or show notification
  }

  return (
    <>
      <Link href={`/products/${id}`} onClick={handleProductClick} className="product-card-link">
        <Card className="product-card overflow-hidden group transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-primary cursor-pointer">
          <div className="product-image-container relative aspect-square">
            <Image
              src={image || "/placeholder.svg"}
              alt={title}
              fill
              className="product-image object-cover transition-all duration-300 group-hover:brightness-[1.05]"
            />
            <div className="product-overlay absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/10"></div>
            <button
              className={`product-favorite-button absolute top-2 right-2 h-8 w-8 rounded-full ${isFavorite ? "bg-red-50 text-red-500" : "bg-white/80"} flex items-center justify-center hover:bg-white hover:text-primary transition-colors`}
              onClick={toggleFavorite}
              aria-label={isFavorite ? "Bỏ yêu thích" : "Yêu thích"}
            >
              <Heart className={`h-5 w-5 ${isFavorite ? "fill-current" : ""}`} />
            </button>
          </div>
          <div className="product-details p-3">
            <h3 className="product-title font-medium text-sm line-clamp-2 mb-1 group-hover:text-primary transition-colors">
              {title}
            </h3>
            <div className="product-price text-orange-500 font-bold">{price}</div>
            <div className="product-meta flex items-center justify-between mt-2 text-xs text-gray-500">
              <span className="product-seller">{seller}</span>
              <span className="product-location">TP Hồ Chí Minh</span>
            </div>
          </div>
        </Card>
      </Link>
      <FeatureNotification show={showNotification} onClose={hideFeatureNotification} />
    </>
  )
}
