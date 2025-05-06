import { Button } from "@/components/ui/button"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { InfoBox } from "@/components/info-box"
import { GridLayout } from "@/components/grid-layout"
import { getProductsByIds } from "@/services/product-service"

// Force static rendering to avoid authentication issues during build
export const dynamic = "force-static"

export default function KhamPha() {
  // Get products with IDs 9-16 for the Khám phá page
  const products = getProductsByIds([9, 10, 11, 12, 13, 14, 15, 16])

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-gray-100">
        {/* Product listings */}
        <section className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Khám phá sản phẩm</h2>
            <Button variant="link" className="text-orange-500">
              Xem tất cả
            </Button>
          </div>

          <GridLayout products={products} contactOnly={true} />

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
