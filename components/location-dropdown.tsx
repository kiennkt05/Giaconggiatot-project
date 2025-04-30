"use client"

import { useState, useEffect, useRef } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { MapPin, ChevronDown, X, Search } from "lucide-react"

interface LocationDropdownProps {
  selectedCity: string
  setSelectedCity: (city: string) => void
  cities: string[]
}

export function LocationDropdown({ selectedCity, setSelectedCity, cities }: LocationDropdownProps) {
  const [isOpen, setIsOpen] = useState(false)
  const [searchTerm, setSearchTerm] = useState("")
  const [filteredCities, setFilteredCities] = useState(cities)
  const dropdownRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (searchTerm) {
      setFilteredCities(cities.filter((city) => city.toLowerCase().includes(searchTerm.toLowerCase())))
    } else {
      setFilteredCities(cities)
    }
  }, [searchTerm, cities])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const handleCitySelect = (city: string) => {
    setSelectedCity(city)
    setIsOpen(false)
    setSearchTerm("")
  }

  const clearSearch = () => {
    setSearchTerm("")
  }

  return (
    <div className="relative" ref={dropdownRef}>
      <Button variant="ghost" className="flex items-center text-sm font-normal" onClick={() => setIsOpen(!isOpen)}>
        <MapPin className="h-4 w-4 mr-1" />
        {selectedCity}
        <ChevronDown className="h-4 w-4 ml-1" />
      </Button>

      {isOpen && (
        <div className="absolute left-0 top-full mt-1 w-64 bg-white rounded-md shadow-lg z-50 border border-gray-200">
          <div className="p-2 border-b">
            <div className="relative">
              <Input
                type="text"
                placeholder="Tìm kiếm địa điểm"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-8 pr-8 py-1 h-9 text-sm"
                autoFocus
              />
              <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
              {searchTerm && (
                <button onClick={clearSearch} className="absolute right-2 top-1/2 transform -translate-y-1/2">
                  <X className="h-4 w-4 text-gray-400" />
                </button>
              )}
            </div>
          </div>

          <div className="max-h-60 overflow-y-auto py-1">
            {filteredCities.length > 0 ? (
              filteredCities.map((city) => (
                <div
                  key={city}
                  className={`px-3 py-2 text-sm cursor-pointer hover:bg-gray-100 ${
                    city === selectedCity ? "bg-gray-50 font-medium" : ""
                  }`}
                  onClick={() => handleCitySelect(city)}
                >
                  {city}
                </div>
              ))
            ) : (
              <div className="px-3 py-2 text-sm text-gray-500 text-center">Không tìm thấy địa điểm</div>
            )}
          </div>
        </div>
      )}
    </div>
  )
}
