import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { OrdersList } from "@/components/orders-list"

export default function PurchaseOrdersPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gray-100">
        <OrdersList type="purchase" />
      </main>
      <Footer />
    </div>
  )
}
