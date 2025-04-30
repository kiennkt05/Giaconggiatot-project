"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Heart } from "lucide-react"
import { Card } from "@/components/ui/card"

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
  const [showDetails, setShowDetails] = useState(false)

  const toggleFavorite = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsFavorite(!isFavorite)
  }

  return (
    <Card
      className="overflow-hidden group transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:order-primary cursor-pointer"
      onClick={() => setShowDetails(true)}
    >
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

      {showDetails && (
        <div
          className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4"
          onClick={() => setShowDetails(false)}
        >
          <div
            className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-video">
              <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover" />
              <button
                className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/80 flex items-center justify-center"
                onClick={() => setShowDetails(false)}
              >
                &times;
              </button>
            </div>
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{title}</h2>
              <div className="text-orange-500 text-xl font-bold mb-4">{price}</div>

              <div className="flex mb-4">
                <div className="flex-1 border-b-2 border-orange-500 text-center pb-2">
                  <button className="font-medium text-orange-500">Chi tiết</button>
                </div>
                <div className="flex-1 text-center pb-2">
                  <button className="font-medium text-gray-500">Thông tin vận chuyển</button>
                </div>
                <div className="flex-1 text-center pb-2">
                  <button className="font-medium text-gray-500">Đánh giá</button>
                </div>
              </div>

              <div className="mb-4">
                <p className="text-gray-700">{description || "Không có mô tả chi tiết cho sản phẩm này."}</p>
              </div>

              <div className="border-t pt-4">
                <div className="flex items-center mb-2">
                  <div className="w-10 h-10 bg-gray-200 rounded-full mr-3"></div>
                  <div>
                    <p className="font-medium">{seller}</p>
                    <div className="flex items-center">
                      {rating && (
                        <div className="flex items-center text-yellow-500 mr-2">
                          {"★".repeat(Math.floor(rating))}
                          {rating % 1 > 0 ? "☆" : ""}
                          {"☆".repeat(5 - Math.ceil(rating))}
                        </div>
                      )}
                      <span className="text-xs text-gray-500">Đã tham gia: 2 năm</span>
                    </div>
                  </div>
                </div>
                <button className="w-full bg-orange-500 text-white py-3 rounded-lg font-medium hover:bg-orange-600 transition-colors">
                  Liên hệ: {phone}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  )
}
