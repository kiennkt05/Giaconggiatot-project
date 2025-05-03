"use client"

import type React from "react"

import Image from "next/image"
import Link from "next/link"
import { useFeatureNotification } from "@/hooks/use-feature-notification"
import { FeatureNotification } from "@/components/feature-notification"

const categories = [
  {
    id: 1,
    name: "Lan can bằng sắt",
    icon: "/images/categories/iron.png",
    url: "/mua-ban-lan-can-bang-sat",
  },
  {
    id: 2,
    name: "Túi đan bằng tre",
    icon: "/images/categories/bamboo.png",
    url: "/mua-ban-tui-dan-bang-tre",
  },
  {
    id: 3,
    name: "Đan len quần áo",
    icon: "/images/categories/wool.png",
    url: "/mua-ban-dan-len-quan-ao",
  },
  {
    id: 4,
    name: "Bình lọ gốm",
    icon: "/images/categories/pottery.png",
    url: "/mua-ban-binh-lo-gom",
  },
  {
    id: 5,
    name: "Sản phẩm tre nứa",
    icon: "/images/categories/bamboo.png",
    url: "/mua-ban-san-pham-tre-nua",
  },
  {
    id: 6,
    name: "Đồ sứ cao cấp",
    icon: "/images/categories/pottery.png",
    url: "/mua-ban-do-su-cao-cap",
  },
  {
    id: 7,
    name: "Điêu khắc gỗ",
    icon: "/images/categories/wooden.png",
    url: "/mua-ban-dieu-khac-go",
  },
  {
    id: 8,
    name: "Tất cả danh mục",
    icon: "/images/categories/all.png",
    url: "/mua-ban",
  },
]

export function CategorySection() {
  const { showNotification, showFeatureNotification, hideFeatureNotification } = useFeatureNotification()

  const handleCategoryClick = (e: React.MouseEvent, category: (typeof categories)[0]) => {
    // Only show notification for categories that aren't implemented yet
    if (category.url !== "/kham-pha") {
      e.preventDefault()
      showFeatureNotification()
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
      <FeatureNotification show={showNotification} onClose={hideFeatureNotification} />
    </div>
  )
}
