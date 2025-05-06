"use client"

import { useState } from "react"
import Image from "next/image"
import { ShoppingBag, X, Plus, Minus, Trash2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useFeatureNotification } from "@/hooks/use-feature-notification"
import { FeatureNotification } from "@/components/feature-notification"

interface CartItem {
  id: number
  title: string
  price: string
  image: string
  quantity: number
  seller: string
}

export function ShoppingCart() {
  const [isOpen, setIsOpen] = useState(false)
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 1,
      title: "Bàn ghế khung sắt mặt gỗ",
      price: "1.200.000đ",
      image: "https://inoxhoasen.com/wp-content/uploads/2023/11/bo-ban-ghe-quan-an-gia-re.jpg",
      quantity: 1,
      seller: "Phùng Hải Nam",
    },
    {
      id: 2,
      title: "Bàn học khung sắt giá rẻ",
      price: "350.000đ",
      image: "https://hoaphathanoi.vn/media/product/2443514_ban_ke_hoc_sinh_khung_sat_mat_go_bsk07.jpg",
      quantity: 2,
      seller: "Nguyễn Quốc Minh",
    },
    {
      id: 4,
      title: "Lò nhôm vàng mã",
      price: "580.000đ",
      image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lzlfsfn42k6979",
      quantity: 1,
      seller: "Bùi Đức Nhật",
    },
  ])

  const { showNotification, showFeatureNotification, hideFeatureNotification } = useFeatureNotification()

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  const updateQuantity = (id: number, change: number) => {
    setCartItems((items) =>
      items.map((item) => (item.id === id ? { ...item, quantity: Math.max(1, item.quantity + change) } : item)),
    )
  }

  const removeItem = (id: number) => {
    showFeatureNotification()
    // Original functionality commented out
    // setCartItems(items => items.filter(item => item.id !== id))
  }

  const checkout = () => {
    showFeatureNotification()
  }

  const totalItems = cartItems.reduce((sum, item) => sum + item.quantity, 0)

  return (
    <div className="relative">
      <Button variant="ghost" size="icon" className="text-gray-600 relative" onClick={toggleOpen}>
        <ShoppingBag className="h-5 w-5" />
        {totalItems > 0 && (
          <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
            {totalItems}
          </span>
        )}
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg z-50 border border-gray-200">
          <div className="flex justify-between items-center p-3 border-b">
            <h3 className="font-medium">Giỏ hàng ({totalItems})</h3>
            <Button variant="ghost" size="icon" onClick={toggleOpen}>
              <X className="h-4 w-4" />
            </Button>
          </div>

          <ScrollArea className="max-h-80">
            <div className="p-2">
              {cartItems.length > 0 ? (
                <div className="space-y-3">
                  {cartItems.map((item) => (
                    <div key={item.id} className="flex p-2 border-b last:border-0">
                      <div className="relative h-16 w-16 flex-shrink-0">
                        <Image
                          src={item.image || "/placeholder.svg"}
                          alt={item.title}
                          fill
                          className="object-cover rounded-md"
                        />
                      </div>
                      <div className="ml-3 flex-1">
                        <h4 className="text-sm font-medium line-clamp-1">{item.title}</h4>
                        <p className="text-xs text-gray-500">{item.seller}</p>
                        <p className="text-sm font-bold text-orange-500 mt-1">{item.price}</p>
                        <div className="flex justify-between items-center mt-2">
                          <div className="flex items-center border rounded-md">
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6 p-0"
                              onClick={() => updateQuantity(item.id, -1)}
                            >
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="w-8 text-center text-sm">{item.quantity}</span>
                            <Button
                              variant="ghost"
                              size="icon"
                              className="h-6 w-6 p-0"
                              onClick={() => updateQuantity(item.id, 1)}
                            >
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            className="h-6 w-6 text-gray-400 hover:text-red-500"
                            onClick={() => removeItem(item.id)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="py-8 text-center text-gray-500">
                  <ShoppingBag className="h-12 w-12 mx-auto text-gray-300 mb-2" />
                  <p>Giỏ hàng của bạn đang trống</p>
                </div>
              )}
            </div>
          </ScrollArea>

          {cartItems.length > 0 && (
            <div className="p-3 border-t">
              <div className="flex justify-between mb-3">
                <span className="font-medium">Tổng cộng:</span>
                <span className="font-bold text-orange-500">2.130.000đ</span>
              </div>
              <Button className="w-full" onClick={checkout}>
                Thanh toán
              </Button>
            </div>
          )}
        </div>
      )}
      <FeatureNotification show={showNotification} onClose={hideFeatureNotification} />
    </div>
  )
}
