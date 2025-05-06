import { Button } from "@/components/ui/button"
import { HeaderStatic } from "@/components/header-static"
import { FooterStatic } from "@/components/footer-static"
import { getProductsByIds } from "@/services/product-service"
import Image from "next/image"
import Link from "next/link"

export default function KhamPha() {
  // Get products with IDs 9-16 for the Khám phá page
  const products = getProductsByIds([9, 10, 11, 12, 13, 14, 15, 16])

  return (
    <div className="flex min-h-screen flex-col">
      <HeaderStatic />

      <main className="flex-1 bg-gray-100">
        {/* Product listings */}
        <section className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Khám phá sản phẩm</h2>
            <Button variant="link" className="text-orange-500">
              Xem tất cả
            </Button>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Link href={`/products/${product.id}`} key={product.id} className="product-card-link">
                <div className="overflow-hidden group transition-all duration-300 hover:shadow-lg hover:scale-[1.02] hover:border-primary cursor-pointer h-full flex flex-col bg-white rounded-lg border">
                  <div className="relative aspect-square">
                    <Image
                      src={product.image || "/placeholder.svg"}
                      alt={product.title}
                      fill
                      className="object-cover transition-all duration-300 group-hover:brightness-[1.05]"
                    />
                    <div className="absolute inset-0 bg-black/0 transition-all duration-300 group-hover:bg-black/10"></div>
                  </div>
                  <div className="p-3 flex flex-col flex-grow">
                    <h3 className="font-medium text-sm line-clamp-2 mb-1 group-hover:text-primary transition-colors">
                      {product.title}
                    </h3>
                    <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                      <span>{product.seller}</span>
                      <span>TP Hồ Chí Minh</span>
                    </div>

                    <div className="flex-grow"></div>

                    <Button
                      variant="outline"
                      size="sm"
                      className="w-full mt-2 text-primary border-primary hover:bg-primary/10"
                    >
                      Liên hệ
                    </Button>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button variant="outline" className="rounded-full px-8">
              Xem thêm
            </Button>
          </div>
        </section>

        {/* Info box */}
        <div className="bg-white py-8">
          <div className="container mx-auto px-4">
            <h2 className="text-xl font-bold mb-4">
              GiaCongGiaTot – Nền Tảng Mua Bán Trực Tuyến Hàng Đầu Cho Ngành Cơ Khí Việt
            </h2>

            <div className="prose max-w-none">
              <p>
                GiaCongGiaTot chính thức có mặt trên thị trường Việt Nam với sứ mệnh xây dựng một nền tảng kết nối giao
                thương uy tín, giúp người mua và người bán trong lĩnh vực gia công cơ khí – từ sắt, thép, inox đến nhôm,
                đồng – dễ dàng giao dịch một cách nhanh chóng, an toàn và hiệu quả.
              </p>

              <p>
                Tự hào là nền tảng được đông đảo cá nhân và doanh nghiệp cơ khí tin tưởng, GiaCongGiaTot chuyên hỗ trợ
                mua bán và trao đổi đa dạng các sản phẩm như: lan can sắt, khung cửa nhôm kính, kết cấu thép, bàn ghế
                inox, phụ kiện cơ khí, sản phẩm gia công CNC, máy móc thiết bị và nhiều mặt hàng cơ khí dân dụng – công
                nghiệp khác.
              </p>

              <p>
                Dù bạn là thợ cơ khí, chủ xưởng, nhà cung ứng vật tư hay đang tìm mua những sản phẩm cơ khí đã qua sử
                dụng, GiaCongGiaTot chính là nơi giúp bạn tiếp cận đối tác và khách hàng tiềm năng một cách dễ dàng.
                Việc đăng tin hoàn toàn miễn phí, chỉ cần chụp ảnh sản phẩm, mô tả chi tiết và đăng lên nền tảng.
              </p>

              <p>
                Chúc bạn có những giao dịch thành công và trải nghiệm tuyệt vời tại GiaCongGiaTot – Nền tảng kết nối đam
                mê cơ khí Việt!
              </p>
            </div>
          </div>
        </div>
      </main>

      <FooterStatic />
    </div>
  )
}
