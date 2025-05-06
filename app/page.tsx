import { HeaderStatic } from "@/components/header-static"
import { FooterStatic } from "@/components/footer-static"
import { BannerSliderStatic } from "@/components/banner-slider-static"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { getProductsByIds } from "@/services/product-service"

export default function Home() {
  // Get products with IDs 1-8 for the homepage
  const products = getProductsByIds([1, 2, 3, 4, 5, 6, 7, 8])

  // Categories data
  const categories = [
    {
      id: 1,
      name: "Kệ sắt",
      icon: "https://i.pinimg.com/736x/c2/41/3c/c2413c1af9958f7a0c16bfa0c026219b.jpg",
    },
    {
      id: 2,
      name: "Bàn ghế khung sắt",
      icon: "https://banghecafegiare.com.vn/upload/images/ban-ghe-nha-hang-quan-nhau-khung-sat%20(2).jpg",
    },
    {
      id: 3,
      name: "Lò nhôm",
      icon: "https://thanhluan.net/wp-content/uploads/2016/10/thung-hoa-vang.png",
    },
    {
      id: 4,
      name: "Tủ nhôm",
      icon: "https://xaydungnoithat.net/wp-content/uploads/2024/11/tu-chan-bat-nhom-kinh-7.jpg",
    },
    {
      id: 5,
      name: "Hàng rào",
      icon: "https://i.pinimg.com/736x/81/4b/0b/814b0b7b6d855158b268b608d05a2ba6.jpg",
    },
    {
      id: 6,
      name: "Cửa sổ",
      icon: "https://i.pinimg.com/736x/a8/ca/90/a8ca9073e5375d72d7083774bb990bbd.jpg",
    },
    {
      id: 7,
      name: "Cửa",
      icon: "https://i.pinimg.com/736x/50/b0/6f/50b06ff72f503c18af9b2e9ac9e0dd6a.jpg",
    },
    {
      id: 8,
      name: "khung tranh",
      icon: "https://pngimg.com/uploads/mirror/mirror_PNG17324.png",
    },
  ]

  return (
    <div className="flex min-h-screen flex-col">
      <HeaderStatic />

      <main className="flex-1 bg-gray-100">
        {/* Banner slider */}
        <div className="home-banner-section bg-white py-4">
          <div className="container mx-auto px-4">
            <BannerSliderStatic />
          </div>
        </div>

        {/* Categories */}
        <div className="category-section bg-white py-4">
          <div className="category-container container mx-auto px-4">
            <h2 className="category-heading text-lg font-semibold mb-4">Khám phá danh mục</h2>
            <div className="category-grid grid grid-cols-4 md:grid-cols-8 gap-4">
              {categories.map((category) => (
                <Link
                  key={category.id}
                  href="/kham-pha"
                  className="category-item flex flex-col items-center justify-center text-center hover:text-orange-500 transition-colors"
                >
                  <div className="category-icon-wrapper w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mb-2">
                    <Image
                      src={category.icon || "/placeholder.svg"}
                      alt={category.name}
                      width={40}
                      height={40}
                      className="category-icon object-contain"
                    />
                  </div>
                  <span className="category-name text-xs md:text-sm line-clamp-2">{category.name}</span>
                </Link>
              ))}
            </div>
          </div>
        </div>

        {/* Product listings */}
        <section className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Tin đăng mới nhất</h2>
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
                    {product.price && <div className="text-orange-500 font-bold">{product.price}</div>}
                    <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                      <span>{product.seller}</span>
                      <span>TP Hồ Chí Minh</span>
                    </div>
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
