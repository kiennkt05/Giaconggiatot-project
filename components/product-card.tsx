"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Heart } from "lucide-react"
import { Card } from "@/components/ui/card"
import Link from "next/link"

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

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsFavorite(!isFavorite)
  }

  return (
    <Link href={`/products/${id}`}>
      <Card className="overflow-hidden group transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:order-primary cursor-pointer">
        <div className="relative aspect-square">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-all duration-300 group-hover:brightness-[1.05]"
          />
          <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/10"></div>
          <button
            className={`absolute top-2 right-2 h-8 w-8 rounded-full ${isFavorite ? "bg-red-50 text-red-500" : "bg-white/80"} flex items-center justify-center hover:bg-white hover:text-primary transition-colors`}
            onClick={toggleFavorite}
            aria-label={isFavorite ? "Bỏ yêu thích" : "Yêu thích"}
          >
            <Heart className={`h-5 w-5 ${isFavorite ? "fill-current" : ""}`} />
          </button>
        </div>
        <div className="p-3">
          <h3 className="font-medium text-sm line-clamp-2 mb-1 group-hover:text-primary transition-colors">{title}</h3>
          <div className="text-orange-500 font-bold">{price}</div>
          <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
            <span>{seller}</span>
            <span>TP Hồ Chí Minh</span>
          </div>
        </div>
      </Card>
    </Link>
  )
}
