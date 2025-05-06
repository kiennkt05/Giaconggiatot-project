"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { FeatureNotification } from "@/components/feature-notification"

interface ClientWrapperProps {
  children: React.ReactNode
}

export function ClientWrapper({ children }: ClientWrapperProps) {
  const [showNotification, setShowNotification] = useState(false)

  const showFeatureNotification = () => {
    setShowNotification(true)
  }

  const hideFeatureNotification = () => {
    setShowNotification(false)
  }

  // Expose the notification functions to the window object
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.showFeatureNotification = showFeatureNotification
    }

    return () => {
      if (typeof window !== "undefined") {
        delete window.showFeatureNotification
      }
    }
  }, [])

  return (
    <>
      {children}
      <FeatureNotification show={showNotification} onClose={hideFeatureNotification} />
    </>
  )
}

// Add type declaration for the window object
declare global {
  interface Window {
    showFeatureNotification?: () => void
  }
}
