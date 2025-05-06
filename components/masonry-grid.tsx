"use client"

import { useEffect, useState } from "react"
import { ProductCard } from "@/components/product-card"
import type { ProductData } from "@/services/product-service"

interface MasonryGridProps {
  products: ProductData[]
  contactOnly?: boolean
}

export function MasonryGrid({ products, contactOnly = false }: MasonryGridProps) {
  const [columns, setColumns] = useState(4)

  // Adjust columns based on screen size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setColumns(1)
      } else if (window.innerWidth < 768) {
        setColumns(2)
      } else if (window.innerWidth < 1024) {
        setColumns(3)
      } else {
        setColumns(4)
      }
    }

    handleResize()
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  // Distribute products into columns
  const getColumnProducts = () => {
    const columnProducts: ProductData[][] = Array.from({ length: columns }, () => [])

    products.forEach((product, index) => {
      const columnIndex = index % columns
      columnProducts[columnIndex].push(product)
    })

    return columnProducts
  }

  const columnProducts = getColumnProducts()

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
      {columnProducts.map((column, columnIndex) => (
        <div key={columnIndex} className="flex flex-col gap-3">
          {column.map((product) => (
            <div
              key={product.id}
              className="break-inside-avoid"
              style={{
                // Random heights for visual variety
                marginBottom: `${Math.floor(Math.random() * 8) + 8}px`,
              }}
            >
              <ProductCard
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
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}
