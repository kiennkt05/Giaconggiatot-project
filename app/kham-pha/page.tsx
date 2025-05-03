"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { CategorySection } from "@/components/category-section"
import { InfoBox } from "@/components/info-box"
import { useFeatureNotification } from "@/hooks/use-feature-notification"
import { FeatureNotification } from "@/components/feature-notification"
import { BannerSlider } from "@/components/banner-slider"

export default function KhamPha() {
  const { showNotification, showFeatureNotification, hideFeatureNotification } = useFeatureNotification()

  const products = [
    {
      id: 1,
      title: "Lan can bằng sắt không rỉ",
      seller: "Phùng Hải Nam",
      phone: "0964827315",
      image: "https://satmythuatminhphuc.com/wp-content/uploads/2022/07/ban-cong-don-gian-nhung-thu-hut.jpg.webp",
      price: "1.200.000đ - 2.500.000đ",
      rating: 4.5,
    },
    {
      id: 2,
      title: "Túi đan bằng tre dây phong cách",
      seller: "Nguyễn Quốc Minh",
      phone: "0817392648",
      image: "https://giamgiaxl.com/wp-content/uploads/2022/04/gio-may-tre-5.jpg",
      price: "350.000đ",
      rating: 4.8,
    },
    {
      id: 3,
      title: "Đan len quần áo theo ý",
      seller: "Nguyễn Trung Kiên",
      phone: "0538491726",
      image: "/images/knitted-clothes.jpg",
      description:
        "Bộ sản phẩm đan len cho trẻ em với thiết kế hình gấu đáng yêu, bao gồm mũ, túi xách và giày. Sản phẩm được làm từ len tự nhiên, mềm mại, an toàn cho làn da nhạy cảm của trẻ. Có thể đặt hàng theo kích thước và màu sắc yêu cầu.",
      price: "450.000đ - 850.000đ",
      rating: 5,
    },
    {
      id: 4,
      title: "Bình lọ gốm hoa tiết hoa văn sắc sảo",
      seller: "Bùi Đức Nhật",
      phone: "0472619835",
      image: "https://gomphuctaman.com/wp-content/uploads/2022/10/cach-nhan-biet-gom-co-2.jpg",
      price: "580.000đ - 1.200.000đ",
      rating: 4.7,
    },
    {
      id: 5,
      title: "Sản phẩm tre nứa bền chắc",
      seller: "Nguyễn Như Hiếu",
      phone: "0928374651",
      image:
        "https://sieuthitretruc.com/wp-content/uploads/2022/08/rsz_20211221105831-16459314367931232574202-16459314544481653688785_1_1.jpg",
      price: "250.000đ - 750.000đ",
      rating: 4.3,
    },
    {
      id: 6,
      title: "Đồ sứ cao cấp trắng men",
      seller: "Nguyễn Việt Quang",
      phone: "0851739264",
      image: "https://gomdaiviet.vn/wp-content/uploads/2021/05/bo-do-an-men-kem-ve-bup-sen-xanh-s4-9384.jpg",
      price: "1.500.000đ - 3.800.000đ",
      rating: 4.9,
    },
    {
      id: 7,
      title: "Đồ giấy thủ công trang trí lễ hội",
      seller: "Nguyễn Duy Lâm",
      phone: "0419283746",
      image: "https://mms.img.susercontent.com/vn-11134207-7r98o-loqd3gmyulow36_tn",
      price: "120.000đ - 350.000đ",
      rating: 4.2,
    },
    {
      id: 8,
      title: "May vải theo yêu cầu",
      seller: "Dương Đình Minh",
      phone: "0647382910",
      image: "https://i.ytimg.com/vi/eBv1uVYl7wc/hqdefault.jpg",
      price: "Theo yêu cầu",
      rating: 4.6,
    },
  ]

  const handleButtonClick = (e: React.MouseEvent) => {
    e.preventDefault()
    showFeatureNotification()
  }

  return (
    <div className="flex min-h-screen flex-col">
      <Header />

      <main className="flex-1 bg-gray-100">
{/*         {/* Banner slider */}
        <div className="explore-banner-section bg-white py-4">
          <div className="container mx-auto px-4">
            <BannerSlider />
          </div>
        </div>

        {/* Categories */}
        <CategorySection />
 */}
        {/* Product listings */}
        <section className="container mx-auto px-4 py-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-bold">Tin đăng mới nhất</h2>
            <Button variant="link" className="text-orange-500" onClick={handleButtonClick}>
              Xem tất cả
            </Button>
          </div>

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
                price={product.price}
                rating={product.rating}
              />
            ))}
          </div>

          <div className="flex justify-center mt-8">
            <Button variant="outline" className="rounded-full px-8" onClick={handleButtonClick}>
              Xem thêm
            </Button>
          </div>
        </section>

        {/* Info box */}
        <InfoBox />
      </main>

      <Footer />
      <FeatureNotification show={showNotification} onClose={hideFeatureNotification} />
    </div>
  )
}
