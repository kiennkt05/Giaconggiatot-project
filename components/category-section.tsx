"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"

const categories = [
  {
    id: 1,
    name: "Kệ sắt",
    icon: "https://i.pinimg.com/736x/c2/41/3c/c2413c1af9958f7a0c16bfa0c026219b.jpg",
  },
  {
    id: 2,
    name: "Bàn ghế khung sắt",
    icon: "https://banghecafegiare.com.vn/upload/images/ban-ghe-nha-hang-quan-nhau-khung-sat%20(2).jpg",
  },
  {
    id: 3,
    name: "Lò nhôm",
    icon: "https://thanhluan.net/wp-content/uploads/2016/10/thung-hoa-vang.png",
  },
  {
    id: 4,
    name: "Tủ nhôm",
    icon: "https://xaydungnoithat.net/wp-content/uploads/2024/11/tu-chan-bat-nhom-kinh-7.jpg",
  },
  {
    id: 5,
    name: "Hàng rào",
    icon: "https://i.pinimg.com/736x/81/4b/0b/814b0b7b6d855158b268b608d05a2ba6.jpg",
  },
  {
    id: 6,
    name: "Cửa sổ",
    icon: "https://i.pinimg.com/736x/a8/ca/90/a8ca9073e5375d72d7083774bb990bbd.jpg",
  },
  {
    id: 7,
    name: "Cửa",
    icon: "https://i.pinimg.com/736x/50/b0/6f/50b06ff72f503c18af9b2e9ac9e0dd6a.jpg",
  },
  {
    id: 8,
    name: "khung tranh",
    icon: "https://pngimg.com/uploads/mirror/mirror_PNG17324.png",
  },
]

export function CategorySection() {
  const handleCategoryClick = (e: React.MouseEvent, category: (typeof categories)[0]) => {
    // Only show notification for categories that aren't implemented yet
    if (category.url !== "/kham-pha") {
      e.preventDefault()
      if (typeof window !== "undefined" && window.showFeatureNotification) {
        window.showFeatureNotification()
      }
    }
  }

  return (
    <div className="category-section bg-white py-4">
      <div className="category-container container mx-auto px-4">
        <h2 className="category-heading text-lg font-semibold mb-4">Khám phá danh mục</h2>
        <div className="category-grid grid grid-cols-4 md:grid-cols-8 gap-4">
          {categories.map((category) => (
            <Link
              key={category.id}
              href={category.url}
              className="category-item flex flex-col items-center justify-center text-center hover:text-orange-500 transition-colors"
              onClick={(e) => handleCategoryClick(e, category)}
            >
              <div className="category-icon-wrapper w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                <Image
                  src={category.icon || "/placeholder.svg"}
                  alt={category.name}
                  width={40}
                  height={40}
                  className="category-icon object-contain"
                />
              </div>
              <span className="category-name text-xs md:text-sm line-clamp-2">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  )
}
