"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Heart, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useFeatureNotification } from "@/hooks/use-feature-notification"
import { FeatureNotification } from "@/components/feature-notification"

interface FavoriteItem {
  id: number
  title: string
  price: string
  image: string
  supplier: {
    id: number
    name: string
  }
}

export function FavoriteTab() {
  const [isOpen, setIsOpen] = useState(false)
  const [favorites, setFavorites] = useState<FavoriteItem[]>([
    {
      id: 1,
      title: "Lan can bằng sắt không rỉ",
      price: "1.200.000đ - 2.500.000đ",
      image: "https://satmythuatminhphuc.com/wp-content/uploads/2022/07/ban-cong-don-gian-nhung-thu-hut.jpg.webp",
      supplier: {
        id: 1,
        name: "Phùng Hải Nam",
      },
    },
    {
      id: 2,
      title: "Túi đan bằng tre dây phong cách",
      price: "350.000đ",
      image: "https://giamgiaxl.com/wp-content/uploads/2022/04/gio-may-tre-5.jpg",
      supplier: {
        id: 1,
        name: "Phùng Hải Nam",
      },
    },
    {
      id: 3,
      title: "Đan len quần áo theo ý",
      price: "450.000đ - 850.000đ",
      image: "/images/knitted-clothes.jpg",
      supplier: {
        id: 2,
        name: "Nguyễn Trung Kiên",
      },
    },
    {
      id: 4,
      title: "Bình lọ gốm hoa tiết hoa văn sắc sảo",
      price: "580.000đ - 1.200.000đ",
      image: "https://gomphuctaman.com/wp-content/uploads/2022/10/cach-nhan-biet-gom-co-2.jpg",
      supplier: {
        id: 3,
        name: "Bùi Đức Nhật",
      },
    },
    {
      id: 5,
      title: "Sản phẩm tre nứa bền chắc",
      price: "250.000đ - 750.000đ",
      image:
        "https://sieuthitretruc.com/wp-content/uploads/2022/08/rsz_20211221105831-16459314367931232574202-16459314544481653688785_1_1.jpg",
      supplier: {
        id: 3,
        name: "Bùi Đức Nhật",
      },
    },
  ])

  const { showNotification, showFeatureNotification, hideFeatureNotification } = useFeatureNotification()

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  const removeFromFavorites = (id: number, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    showFeatureNotification()
    // Original functionality commented out
    // setFavorites(favorites.filter((item) => item.id !== id))
  }

  const handleItemClick = (e: React.MouseEvent) => {
    e.preventDefault()
    showFeatureNotification()
  }

  // Group favorites by supplier
  const groupedFavorites = favorites.reduce<Record<string, FavoriteItem[]>>((acc, item) => {
    const supplierName = item.supplier.name
    if (!acc[supplierName]) {
      acc[supplierName] = []
    }
    acc[supplierName].push(item)
    return acc
  }, {})

  return (
    <div className="favorite-tab-container relative">
      <Button variant="ghost" size="icon" className="favorite-tab-button text-gray-600 relative" onClick={toggleOpen}>
        <Heart className="favorite-icon h-5 w-5" />
        {favorites.length > 0 && (
          <span className="favorite-count absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
            {favorites.length}
          </span>
        )}
      </Button>

      {isOpen && (
        <div className="favorite-dropdown absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg z-50 border border-gray-200">
          <div className="favorite-header flex justify-between items-center p-3 border-b">
            <h3 className="favorite-title font-medium">Sản phẩm yêu thích</h3>
          </div>

          <ScrollArea className="favorite-items-container h-80">
            <div className="favorite-items p-2">
              {Object.keys(groupedFavorites).length > 0 ? (
                Object.entries(groupedFavorites).map(([supplierName, items]) => (
                  <div key={supplierName} className="favorite-supplier-group mb-4">
                    <h4 className="favorite-supplier-name text-sm font-medium px-3 py-1 bg-gray-50">{supplierName}</h4>
                    {items.map((item) => (
                      <div key={item.id} className="favorite-item p-3 border-b last:border-0">
                        <div className="favorite-item-content flex space-x-3">
                          <div className="favorite-item-image-container relative h-16 w-16 flex-shrink-0">
                            <a href="#" onClick={handleItemClick}>
                              <Image
                                src={item.image || "/placeholder.svg"}
                                alt={item.title}
                                fill
                                className="favorite-item-image object-cover rounded"
                              />
                            </a>
                          </div>
                          <div className="favorite-item-details flex-1 min-w-0">
                            <a href="#" onClick={handleItemClick} className="favorite-item-link hover:text-orange-500">
                              <h5 className="favorite-item-title text-sm font-medium line-clamp-2">{item.title}</h5>
                            </a>
                            <p className="favorite-item-price text-xs text-orange-500 font-bold mt-1">{item.price}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="favorite-remove-button h-8 w-8 text-gray-400 hover:text-red-500"
                            onClick={(e) => removeFromFavorites(item.id, e)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                ))
              ) : (
                <div className="favorite-empty-state p-4 text-center text-gray-500">Chưa có sản phẩm yêu thích</div>
              )}
            </div>
          </ScrollArea>
        </div>
      )}
      <FeatureNotification show={showNotification} onClose={hideFeatureNotification} />
    </div>
  )
}
