"use client"

import { useState } from "react"
import Link from "next/link"
import { ShoppingBag, Package, ShoppingCart } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ShoppingTab() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative">
      <Button variant="ghost" size="icon" className="text-gray-600" onClick={toggleOpen}>
        <ShoppingBag className="h-5 w-5" />
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-50 border border-gray-200">
          <div className="p-2">
            <Link href="/don-mua" className="flex items-center p-3 hover:bg-gray-50 rounded-md">
              <ShoppingCart className="h-5 w-5 mr-3 text-orange-500" />
              <span className="text-sm">Đơn mua</span>
            </Link>
            <Link href="/don-ban" className="flex items-center p-3 hover:bg-gray-50 rounded-md">
              <Package className="h-5 w-5 mr-3 text-orange-500" />
              <span className="text-sm">Đơn bán</span>
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
