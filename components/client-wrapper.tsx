"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { FeatureNotification } from "@/components/feature-notification"

interface ClientWrapperProps {
  children: React.ReactNode
}

export function ClientWrapper({ children }: ClientWrapperProps) {
  const [showNotification, setShowNotification] = useState(false)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)

    // Expose the notification functions to the window object
    if (typeof window !== "undefined") {
      window.showFeatureNotification = () => setShowNotification(true)
    }

    return () => {
      if (typeof window !== "undefined") {
        delete window.showFeatureNotification
      }
    }
  }, [])

  const hideFeatureNotification = () => {
    if (isClient) {
      setShowNotification(false)
    }
  }

  return (
    <>
      {children}
      {isClient && <FeatureNotification show={showNotification} onClose={hideFeatureNotification} />}
    </>
  )
}

// Add type declaration for the window object
declare global {
  interface Window {
    showFeatureNotification?: () => void
  }
}
