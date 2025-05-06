"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CategorySection } from "@/components/category-section"
import { InfoBox } from "@/components/info-box"
import { useFeatureNotification } from "@/hooks/use-feature-notification"
import { FeatureNotification } from "@/components/feature-notification"
import { BannerSlider } from "@/components/banner-slider"
import { GridLayout } from "@/components/grid-layout"
import { getProductsByIds } from "@/services/product-service"

export default function Home() {
  const { showNotification, showFeatureNotification, hideFeatureNotification } = useFeatureNotification()

  // Get products with IDs 1-8 for the homepage
  const products = getProductsByIds([1, 2, 3, 4, 5, 6, 7, 8])

  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault()
    showFeatureNotification()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-gray-100">
        {/* Banner slider */}
        <div className="home-banner-section bg-white py-4">
          <div className="container mx-auto px-4">
            <BannerSlider />
          </div>
        </div>

        {/* Categories */}
        <CategorySection />

        {/* Product listings */}
        <section className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Tin đăng mới nhất</h2>
            <Button variant="link" className="text-orange-500" onClick={handleButtonClick}>
              Xem tất cả
            </Button>
          </div>

          <GridLayout products={products} contactOnly={false} />

          <div className="flex justify-center mt-8">
            <Button variant="outline" className="rounded-full px-8" onClick={handleButtonClick}>
              Xem thêm
            </Button>
          </div>
        </section>

        {/* Info box */}
        <InfoBox />
      </main>

      <Footer />
      <FeatureNotification show={showNotification} onClose={hideFeatureNotification} />
    </div>
  )
}
