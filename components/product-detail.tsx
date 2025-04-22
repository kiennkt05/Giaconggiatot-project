"use client"

import Image from "next/image"
import { X, Phone, User, Star } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

interface ProductDetailProps {
  product: {
    id: number
    title: string
    seller: string
    phone: string
    image: string
    description?: string
    price?: string
    rating?: number
  }
  onClose: () => void
}

export function ProductDetail({ product, onClose }: ProductDetailProps) {
  const { title, seller, phone, image, description, price, rating } = product

  // Default description if none provided
  const productDescription =
    description ||
    "Sản phẩm chất lượng cao, được làm thủ công bởi nghệ nhân có nhiều năm kinh nghiệm. " +
      "Chúng tôi cam kết mang đến cho khách hàng những sản phẩm độc đáo, tinh tế và bền đẹp theo thời gian. " +
      "Liên hệ ngay để được tư vấn và đặt hàng theo yêu cầu riêng của bạn."

  return (
    <div className="fixed inset-0 bg-black/50 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-4xl max-h-[90vh] overflow-auto">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-bold">{title}</h2>
          <button onClick={onClose} className="p-1 rounded-full hover:bg-gray-100" aria-label="Đóng">
            <X className="h-6 w-6" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
          <div className="relative aspect-square">
            <Image src={image || "/placeholder.svg"} alt={title} fill className="object-cover rounded-md" />
          </div>

          <div>
            <div className="mb-4">
              {price && <p className="text-2xl font-bold text-primary mb-2">{price}</p>}

              <div className="flex items-center mb-4">
                <User className="h-4 w-4 mr-2 text-gray-500" />
                <span className="text-sm">{seller}</span>
              </div>

              <div className="flex items-center mb-4">
                <Phone className="h-4 w-4 mr-2 text-gray-500" />
                <span className="text-sm">{phone}</span>
              </div>

              {rating && (
                <div className="flex items-center mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-4 w-4 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                    />
                  ))}
                  <span className="ml-2 text-sm text-gray-600">{rating}/5</span>
                </div>
              )}
            </div>

            <Button className="w-full mb-4">LIÊN LẠC NGAY</Button>
          </div>
        </div>

        <Tabs defaultValue="details" className="px-6 pb-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="details">Chi tiết sản phẩm</TabsTrigger>
            <TabsTrigger value="shipping">Vận chuyển</TabsTrigger>
            <TabsTrigger value="reviews">Đánh giá</TabsTrigger>
          </TabsList>

          <TabsContent value="details" className="mt-4">
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm leading-relaxed">{productDescription}</p>

                <div className="mt-4">
                  <h4 className="font-medium mb-2">Đặc điểm sản phẩm:</h4>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Chất liệu cao cấp</li>
                    <li>Thiết kế độc đáo</li>
                    <li>Sản xuất thủ công</li>
                    <li>Bảo hành 12 tháng</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="shipping" className="mt-4">
            <Card>
              <CardContent className="pt-6">
                <p className="text-sm leading-relaxed">
                  Chúng tôi cung cấp dịch vụ vận chuyển toàn quốc. Thời gian giao hàng từ 3-5 ngày làm việc tùy thuộc
                  vào khu vực. Phí vận chuyển sẽ được tính dựa trên khoảng cách và kích thước sản phẩm.
                </p>

                <div className="mt-4">
                  <h4 className="font-medium mb-2">Chính sách vận chuyển:</h4>
                  <ul className="list-disc pl-5 text-sm space-y-1">
                    <li>Miễn phí vận chuyển cho đơn hàng trên 1.000.000đ</li>
                    <li>Đóng gói cẩn thận, an toàn</li>
                    <li>Có thể theo dõi đơn hàng trực tuyến</li>
                    <li>Hỗ trợ đổi trả trong vòng 7 ngày</li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews" className="mt-4">
            <Card>
              <CardContent className="pt-6">
                <p className="text-center text-sm text-gray-500">Chưa có đánh giá nào cho sản phẩm này.</p>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
