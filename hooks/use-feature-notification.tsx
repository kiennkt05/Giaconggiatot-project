"use client"

import { useState } from "react"

export function useFeatureNotification() {
  const [showNotification, setShowNotification] = useState(false)

  const showFeatureNotification = () => {
    setShowNotification(true)
  }

  const hideFeatureNotification = () => {
    setShowNotification(false)
  }

  return {
    showNotification,
    showFeatureNotification,
    hideFeatureNotification,
  }
}
