import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CategorySection } from "@/components/category-section"
import { InfoBox } from "@/components/info-box"
import { BannerSlider } from "@/components/banner-slider"
import { GridLayout } from "@/components/grid-layout"
import { getProductsByIds } from "@/services/product-service"
import { Button } from "@/components/ui/button"

export const dynamic = "force-static"

export default function Home() {
  // Get products with IDs 1-8 for the homepage
  const products = getProductsByIds([1, 2, 3, 4, 5, 6, 7, 8])

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
            <Button variant="link" className="text-orange-500">
              Xem tất cả
            </Button>
          </div>

          <GridLayout products={products} contactOnly={false} />

          <div className="flex justify-center mt-8">
            <Button variant="outline" className="rounded-full px-8">
              Xem thêm
            </Button>
          </div>
        </section>

        {/* Info box */}
        <InfoBox />
      </main>

      <Footer />
    </div>
  )
}
