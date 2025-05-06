"use client"

import { useState, useEffect } from "react"

export function useFeatureNotification() {
  // Initialize with default values
  const [showNotification, setShowNotification] = useState(false)
  const [isClient, setIsClient] = useState(false)

  // Only run client-side effects after component mounts
  useEffect(() => {
    setIsClient(true)
  }, [])

  const showFeatureNotification = () => {
    if (isClient) {
      setShowNotification(true)
    }
  }

  const hideFeatureNotification = () => {
    if (isClient) {
      setShowNotification(false)
    }
  }

  // Return safe values for server-side rendering
  return {
    showNotification: isClient ? showNotification : false,
    showFeatureNotification,
    hideFeatureNotification,
  }
}
