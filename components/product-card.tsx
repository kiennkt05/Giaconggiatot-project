"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Heart } from "lucide-react"
import { ProductDetail } from "@/components/product-detail"

interface ProductCardProps {
  id: number
  title: string
  seller: string
  phone: string
  image: string
  description?: string
  price?: string
  rating?: number
}

export function ProductCard({ id, title, seller, phone, image, description, price, rating }: ProductCardProps) {
  const [isFavorite, setIsFavorite] = useState(false)
  const [showDetails, setShowDetails] = useState(false)

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsFavorite(!isFavorite)
  }

  const handleCardClick = () => {
    setShowDetails(true)
  }

  const handleCloseDetails = () => {
    setShowDetails(false)
  }

  return (
    <>
      <Card
        className="overflow-hidden transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-primary/50 cursor-pointer"
        onClick={handleCardClick}
      >
        <div className="relative aspect-square group">
          <Image
            src={image || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-all duration-300 group-hover:brightness-[1.05]"
          />
          <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/10"></div>
          <button
            className={`absolute top-2 right-2 h-8 w-8 rounded-full flex items-center justify-center transition-colors ${
              isFavorite ? "bg-red-50 text-red-500" : "bg-white/80 hover:bg-white hover:text-primary"
            }`}
            onClick={toggleFavorite}
            aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
          >
            <Heart className={`h-5 w-5 ${isFavorite ? "fill-current" : ""}`} />
          </button>
        </div>
        <CardContent className="p-4">
          <h3 className="font-medium line-clamp-2 min-h-[48px]">{title}</h3>
          <p className="text-sm text-muted-foreground mt-1">{seller}</p>
          <p className="text-sm mt-1">{phone}</p>
        </CardContent>
        <CardFooter className="p-4 pt-0">
          <Button variant="outline" className="w-full hover:bg-primary hover:text-primary-foreground transition-colors">
            LIÊN LẠC
          </Button>
        </CardFooter>
      </Card>

      {showDetails && (
        <ProductDetail
          product={{ id, title, seller, phone, image, description, price, rating }}
          onClose={handleCloseDetails}
        />
      )}
    </>
  )
}
