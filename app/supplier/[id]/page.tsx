import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { SupplierProfile } from "@/components/supplier-profile"

interface SupplierPageProps {
  params: {
    id: string
  }
}

export default function SupplierPage({ params }: SupplierPageProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gray-100">
        <SupplierProfile id={params.id} />
      </main>
      <Footer />
    </div>
  )
}
