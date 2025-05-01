"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

interface FeatureNotificationProps {
  show: boolean
  onClose: () => void
}

export function FeatureNotification({ show, onClose }: FeatureNotificationProps) {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (show) {
      setIsVisible(true)
      const timer = setTimeout(() => {
        setIsVisible(false)
        onClose()
      }, 3000)
      return () => clearTimeout(timer)
    }
  }, [show, onClose])

  if (!show) return null

  return (
    <div
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 bg-gray-800 text-white px-4 py-3 rounded-lg shadow-lg z-50 flex items-center transition-opacity duration-300 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <span>Tính năng này đang được phát triển. Xin vui lòng thử lại sau!</span>
      <button onClick={onClose} className="ml-3 text-white hover:text-gray-300">
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}
