"use client"

import type React from "react"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Search, MessageSquare, User } from "lucide-react"
import { LocationDropdown } from "@/components/location-dropdown"
import { NotificationTab } from "@/components/notification-tab"
import { FavoriteTab } from "@/components/favorite-tab"
import { ShoppingTab } from "@/components/shopping-tab"
import { useFeatureNotification } from "@/hooks/use-feature-notification"
import { FeatureNotification } from "@/components/feature-notification"

// Update the Header component to use usePathname
export function Header() {
  const [selectedCity, setSelectedCity] = useState("Toàn Quốc")
  const pathname = usePathname()
  const { showNotification, showFeatureNotification, hideFeatureNotification } = useFeatureNotification()

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

  const handleUtilityLinkClick = (e: React.MouseEvent) => {
    e.preventDefault()
    showFeatureNotification()
  }

  return (
    <header className="site-header border-b sticky top-0 bg-white z-40">
      {/* Top navigation bar */}
      <div className="header-top-nav container mx-auto px-4 py-1 border-b hidden md:flex justify-between text-sm text-gray-600">
        <div className="header-top-left flex space-x-4"></div>
        <div className="header-top-right flex space-x-4">
          <a href="#" onClick={handleUtilityLinkClick} className="header-utility-link hover:text-orange-500">
            Tải ứng dụng
          </a>
          <a href="#" onClick={handleUtilityLinkClick} className="header-utility-link hover:text-orange-500">
            Trợ giúp
          </a>
          <a href="#" onClick={handleUtilityLinkClick} className="header-utility-link hover:text-orange-500">
            Đóng góp ý kiến
          </a>
        </div>
      </div>

      {/* Main header */}
      <div className="header-main container mx-auto px-4">
        <div className="header-main-content flex items-center justify-between py-3">
          {/* Logo and location */}
          <div className="header-left flex items-center space-x-2">
            <Link href="/" className="header-logo flex items-center">
              <div className="header-logo-image relative h-10 w-10 mr-2">
                <Image src="/images/logo.png" alt="GiaCongGiaTot" fill className="object-contain" />
              </div>
              <span className="header-logo-text font-bold text-lg hidden md:inline-block">GiaCongGiaTot</span>
            </Link>

            <LocationDropdown selectedCity={selectedCity} setSelectedCity={setSelectedCity} cities={cities} />
          </div>

          {/* Search bar */}
          <div className="header-search hidden md:flex flex-1 mx-8">
            <div className="header-search-container relative w-full">
              <input
                type="text"
                placeholder="Tìm kiếm trên GiaCongGiaTot"
                className="header-search-input w-full rounded-md border border-input bg-background px-3 py-2 pl-10 text-sm shadow-sm transition-colors placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                onKeyDown={(e) => {
                  if (e.key === "Enter") {
                    e.preventDefault()
                    showFeatureNotification()
                  }
                }}
              />
              <Search
                className="header-search-icon absolute left-3 top-2.5 h-4 w-4 text-muted-foreground cursor-pointer"
                onClick={showFeatureNotification}
              />
            </div>
          </div>

          {/* User actions */}
          <div className="header-right flex items-center space-x-2">
            <div className="header-actions hidden md:flex items-center space-x-4">
              <NotificationTab />

              <Link href="/chat">
                <Button variant="ghost" size="icon" className="header-chat-button text-gray-600">
                  <MessageSquare className="h-5 w-5" />
                </Button>
              </Link>

              <FavoriteTab />

              <ShoppingTab />

              <Link href={`/supplier/${0}`}>
                <Button variant="ghost" size="icon" className="header-profile-button text-gray-600">
                  <User className="h-5 w-5" />
                </Button>
              </Link>
            </div>

            <Link href="/dang-tin">
              <Button className="header-post-button bg-orange-500 hover:bg-orange-600 text-white">Đăng tin</Button>
            </Link>
          </div>
        </div>

        {/* Category navigation - Update to highlight active link */}
        <nav className="header-nav flex space-x-6 py-2 overflow-x-auto scrollbar-hide">
          <Link
            href="/"
            className={`header-nav-link text-sm font-medium py-2 border-b-2 ${
              pathname === "/"
                ? "border-orange-500 text-orange-500"
                : "border-transparent hover:border-orange-500 hover:text-orange-500"
            } transition-colors whitespace-nowrap`}
          >
            Trang chủ
          </Link>
          <Link
            href="/kham-pha"
            className={`header-nav-link text-sm font-medium py-2 border-b-2 ${
              pathname === "/kham-pha"
                ? "border-orange-500 text-orange-500"
                : "border-transparent hover:border-orange-500 hover:text-orange-500"
            } transition-colors whitespace-nowrap`}
          >
            Khám phá
          </Link>
        </nav>
      </div>
      <FeatureNotification show={showNotification} onClose={hideFeatureNotification} />
    </header>
  )
}
