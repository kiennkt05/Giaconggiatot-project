"use client"

import { ProductCard } from "@/components/product-card"
import type { ProductData } from "@/services/product-service"

interface GridLayoutProps {
  products: ProductData[]
  contactOnly?: boolean
}

export function GridLayout({ products, contactOnly = false }: GridLayoutProps) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          id={product.id}
          title={product.title}
          seller={product.seller}
          phone={product.phone}
          image={product.image}
          description={product.description}
          price={contactOnly ? undefined : product.price}
          rating={product.rating}
          contactOnly={contactOnly}
        />
      ))}
    </div>
  )
}
