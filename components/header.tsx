"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Search, MessageSquare, User } from "lucide-react"
import { LocationDropdown } from "@/components/location-dropdown"
import { NotificationTab } from "@/components/notification-tab"
import { FavoriteTab } from "@/components/favorite-tab"
import { ShoppingTab } from "@/components/shopping-tab"

export function Header() {
  const [selectedCity, setSelectedCity] = useState("Toàn Quốc")

  const cities = [
    "Toàn Quốc",
    "An Giang",
    "Bắc Ninh",
    "Cao Bằng",
    "Cà Mau",
    "Cần Thơ",
    "Gia Lai",
    "Huế",
    "Hà Nội",
    "Hà Tĩnh",
    "Hưng Yên",
    "Hải Phòng",
    "Hồ Chí Minh",
    "Khánh Hòa",
    "Lai Châu",
    "Lào Cai",
    "Lâm Đồng",
    "Lạng Sơn",
    "Nghệ An",
    "Ninh Bình",
    "Phú Thọ",
    "Quảng Ngãi",
    "Quảng Ninh",
    "Quảng Trị",
    "Sơn La",
    "Thanh Hoá",
    "Thái Nguyên",
    "Tuyên Quang",
    "Tây Ninh",
    "Vĩnh Long",
    "Điện Biên",
    "Đà Nẵng",
    "Đắk Lắk",
    "Đồng Nai",
    "Đồng Tháp",
  ]

  return (
    <header className="border-b sticky top-0 bg-white z-40">
      {/* Top navigation bar */}
      <div className="container mx-auto px-4 py-1 border-b hidden md:flex justify-between text-sm text-gray-600">
        <div className="flex space-x-4"></div>
        <div className="flex space-x-4">
          <Link href="/" className="hover:text-orange-500">
            Tải ứng dụng
          </Link>
          <Link href="/" className="hover:text-orange-500">
            Trợ giúp
          </Link>
          <Link href="/" className="hover:text-orange-500">
            Đóng góp ý kiến
          </Link>
        </div>
      </div>

      {/* Main header */}
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between py-3">
          {/* Logo and location */}
          <div className="flex items-center space-x-2">
            <Link href="/" className="flex items-center">
              <div className="relative h-10 w-10 mr-2">
                <Image src="/images/logo.png" alt="GiaCongGiaTot" fill className="object-contain" />
              </div>
              <span className="font-bold text-lg hidden md:inline-block">GiaCongGiaTot</span>
            </Link>

            <LocationDropdown selectedCity={selectedCity} setSelectedCity={setSelectedCity} cities={cities} />
          </div>

          {/* Search bar */}
          <div className="hidden md:flex flex-1 mx-8">
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Tìm kiếm trên GiaCongGiaTot"
                className="w-full rounded-md border border-input bg-background px-3 py-2 pl-10 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              />
              <Search className="absolute left-3 top-2.5 h-4 w-4 text-muted-foreground" />
            </div>
          </div>

          {/* User actions */}
          <div className="flex items-center space-x-2">
            <div className="hidden md:flex items-center space-x-4">
              <NotificationTab />

              <Link href="/chat">
                <Button variant="ghost" size="icon" className="text-gray-600">
                  <MessageSquare className="h-5 w-5" />
                </Button>
              </Link>

              <FavoriteTab />

              <ShoppingTab />

              <Link href={`/supplier/${0}`}>
                <Button variant="ghost" size="icon" className="text-gray-600">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            </div>

            <Link href="/dang-tin">
              <Button className="bg-orange-500 hover:bg-orange-600 text-white">Đăng tin</Button>
            </Link>
          </div>
        </div>

        {/* Category navigation */}
        <nav className="flex space-x-6 py-2 overflow-x-auto scrollbar-hide">
          <Link
            href="/"
            className="text-sm font-medium py-2 border-b-2 border-orange-500 text-orange-500 whitespace-nowrap"
          >
            Trang chủ
          </Link>
          <Link
            href="/kham-pha"
            className="text-sm font-medium py-2 border-b-2 border-transparent hover:border-orange-500 hover:text-orange-500 transition-colors whitespace-nowrap"
          >
            Khám phá
          </Link>
        </nav>
      </div>
    </header>
  )
}
