"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Search, MapPin, ChevronDown, Bell, MessageSquare, Heart, User, ShoppingBag } from "lucide-react"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"

export function Header() {
  const [selectedCity, setSelectedCity] = useState("Toàn Quốc")

  const cities = ["Toàn Quốc", "TP. Hồ Chí Minh", "Hà Nội", "Đà Nẵng", "Cần Thơ", "Hải Phòng", "Nha Trang", "Biên Hòa"]

  return (
    <header className="border-b sticky top-0 bg-white z-40">
      {/* Top navigation bar */}
      <div className="container mx-auto px-4 py-1 border-b hidden md:flex justify-between text-sm text-gray-600">
        <div className="flex space-x-4">
          <Link href="/" className="hover:text-orange-500">
            Chợ Tốt
          </Link>
          <Link href="/nha-tot" className="hover:text-orange-500">
            Nhà Tốt
          </Link>
          <Link href="/xe-tot" className="hover:text-orange-500">
            Xe Tốt
          </Link>
          <Link href="/viec-lam-tot" className="hover:text-orange-500">
            Việc Làm Tốt
          </Link>
        </div>
        <div className="flex space-x-4">
          <Link href="/tai-app" className="hover:text-orange-500">
            Tải ứng dụng
          </Link>
          <Link href="/tro-giup" className="hover:text-orange-500">
            Trợ giúp
          </Link>
          <Link href="/dong-gop" className="hover:text-orange-500">
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

            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center text-sm font-normal">
                  <MapPin className="h-4 w-4 mr-1" />
                  {selectedCity}
                  <ChevronDown className="h-4 w-4 ml-1" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="w-48">
                {cities.map((city) => (
                  <DropdownMenuItem key={city} onClick={() => setSelectedCity(city)} className="cursor-pointer">
                    {city}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
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
              <Button variant="ghost" size="icon" className="text-gray-600">
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-600">
                <MessageSquare className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-600">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-600">
                <ShoppingBag className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" className="text-gray-600">
                <User className="h-5 w-5" />
              </Button>
            </div>

            <Button className="bg-orange-500 hover:bg-orange-600 text-white">Đăng tin</Button>
          </div>
        </div>

        {/* Category navigation */}
        <nav className="flex space-x-6 py-2 overflow-x-auto scrollbar-hide">
          <Link
            href="/"
            className="text-sm font-medium py-2 border-b-2 border-orange-500 text-orange-500 whitespace-nowrap"
          >
            Chợ Tốt
          </Link>
          <Link
            href="/nha-tot"
            className="text-sm font-medium py-2 border-b-2 border-transparent hover:border-orange-500 hover:text-orange-500 transition-colors whitespace-nowrap"
          >
            Nhà Tốt
          </Link>
          <Link
            href="/xe-tot"
            className="text-sm font-medium py-2 border-b-2 border-transparent hover:border-orange-500 hover:text-orange-500 transition-colors whitespace-nowrap"
          >
            Xe Tốt
          </Link>
          <Link
            href="/viec-lam-tot"
            className="text-sm font-medium py-2 border-b-2 border-transparent hover:border-orange-500 hover:text-orange-500 transition-colors whitespace-nowrap"
          >
            Việc Làm Tốt
          </Link>
          <Link
            href="/dich-vu-tot"
            className="text-sm font-medium py-2 border-b-2 border-transparent hover:border-orange-500 hover:text-orange-500 transition-colors whitespace-nowrap"
          >
            Dịch Vụ Tốt
          </Link>
        </nav>
      </div>
    </header>
  )
}
