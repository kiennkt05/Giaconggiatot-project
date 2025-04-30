import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductDetailContent } from "@/components/product-detail-content"

interface ProductDetailProps {
  params: {
    id: string
  }
}

export default function ProductDetail({ params }: ProductDetailProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1">
        <ProductDetailContent id={params.id} />
      </main>
      <Footer />
    </div>
  )
}
