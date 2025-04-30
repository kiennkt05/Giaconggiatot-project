"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Phone, Star, Heart, MapPin, Clock, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"

interface Product {
  id: number
  title: string
  seller: string
  phone: string
  image: string
  description?: string
  price?: string
  rating?: number
  location?: string
  publishedAt?: string
  images?: string[]
}

interface ProductDetailContentProps {
  id: string
}

export function ProductDetailContent({ id }: ProductDetailContentProps) {
  const [product, setProduct] = useState<Product | null>(null)
  const [loading, setLoading] = useState(true)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)
  const [isFavorite, setIsFavorite] = useState(false)

  useEffect(() => {
    // Simulate fetching product data
    const fetchProduct = async () => {
      setLoading(true)
      try {
        // This would be replaced with an actual API call
        const products = [
          {
            id: 1,
            title: "Lan can bằng sắt không rỉ",
            seller: "Phùng Hải Nam",
            phone: "0964827315",
            image: "https://satmythuatminhphuc.com/wp-content/uploads/2022/07/ban-cong-don-gian-nhung-thu-hut.jpg.webp",
            price: "1.200.000đ - 2.500.000đ",
            rating: 4.5,
            location: "Quận 7, TP. Hồ Chí Minh",
            publishedAt: "Đăng 3 ngày trước",
            description:
              "Lan can sắt mỹ thuật với thiết kế độc đáo, phù hợp với nhiều không gian kiến trúc. Sản phẩm được làm từ sắt cao cấp, sơn tĩnh điện chống gỉ sét, đảm bảo độ bền đẹp theo thời gian.",
            images: [
              "https://satmythuatminhphuc.com/wp-content/uploads/2022/07/ban-cong-don-gian-nhung-thu-hut.jpg.webp",
              "https://satmythuatminhphuc.com/wp-content/uploads/2022/07/ban-cong-sat-my-thuat-dep.jpg.webp",
              "https://satmythuatminhphuc.com/wp-content/uploads/2022/07/ban-cong-sat-my-thuat-dep-nhat.jpg.webp",
            ],
          },
          {
            id: 2,
            title: "Túi đan bằng tre dây phong cách",
            seller: "Nguyễn Quốc Minh",
            phone: "0817392648",
            image: "https://giamgiaxl.com/wp-content/uploads/2022/04/gio-may-tre-5.jpg",
            price: "350.000đ",
            rating: 4.8,
            location: "Quận 1, TP. Hồ Chí Minh",
            publishedAt: "Đăng 5 ngày trước",
            description:
              "Túi đan thủ công từ tre tự nhiên, thân thiện với môi trường. Thiết kế độc đáo, mang đậm phong cách truyền thống Việt Nam. Thích hợp cho các buổi dạo phố, du lịch.",
            images: [
              "https://giamgiaxl.com/wp-content/uploads/2022/04/gio-may-tre-5.jpg",
              "https://giamgiaxl.com/wp-content/uploads/2022/04/gio-may-tre-1.jpg",
              "https://giamgiaxl.com/wp-content/uploads/2022/04/gio-may-tre-2.jpg",
            ],
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
            location: "Quận 2, TP. Hồ Chí Minh",
            publishedAt: "Đăng hôm qua",
            images: ["/images/knitted-clothes.jpg"],
          },
          {
            id: 4,
            title: "Bình lọ gốm hoa tiết hoa văn sắc sảo",
            seller: "Bùi Đức Nhật",
            phone: "0472619835",
            image: "https://gomphuctaman.com/wp-content/uploads/2022/10/cach-nhan-biet-gom-co-2.jpg",
            price: "580.000đ - 1.200.000đ",
            rating: 4.7,
            location: "Quận 3, TP. Hồ Chí Minh",
            publishedAt: "Đăng 1 tuần trước",
            images: [
              "https://gomphuctaman.com/wp-content/uploads/2022/10/cach-nhan-biet-gom-co-2.jpg",
              "https://gomphuctaman.com/wp-content/uploads/2022/10/cach-nhan-biet-gom-co-1.jpg",
            ],
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
            location: "Quận Tân Bình, TP. Hồ Chí Minh",
            publishedAt: "Đăng 2 tuần trước",
            images: [
              "https://sieuthitretruc.com/wp-content/uploads/2022/08/rsz_20211221105831-16459314367931232574202-16459314544481653688785_1_1.jpg",
            ],
          },
          {
            id: 6,
            title: "Đồ sứ cao cấp trắng men",
            seller: "Nguyễn Việt Quang",
            phone: "0851739264",
            image: "https://gomdaiviet.vn/wp-content/uploads/2021/05/bo-do-an-men-kem-ve-bup-sen-xanh-s4-9384.jpg",
            price: "1.500.000đ - 3.800.000đ",
            rating: 4.9,
            location: "Quận 5, TP. Hồ Chí Minh",
            publishedAt: "Đăng 3 tuần trước",
            images: [
              "https://gomdaiviet.vn/wp-content/uploads/2021/05/bo-do-an-men-kem-ve-bup-sen-xanh-s4-9384.jpg",
              "https://gomdaiviet.vn/wp-content/uploads/2021/05/bo-do-an-men-kem-ve-bup-sen-xanh-s4-9385.jpg",
              "https://gomdaiviet.vn/wp-content/uploads/2021/05/bo-do-an-men-kem-ve-bup-sen-xanh-s4-9386.jpg",
            ],
          },
          {
            id: 7,
            title: "Đồ giấy thủ công trang trí lễ hội",
            seller: "Nguyễn Duy Lâm",
            phone: "0419283746",
            image: "https://mms.img.susercontent.com/vn-11134207-7r98o-loqd3gmyulow36_tn",
            price: "120.000đ - 350.000đ",
            rating: 4.2,
            location: "Quận 6, TP. Hồ Chí Minh",
            publishedAt: "Đăng 1 tháng trước",
            images: ["https://mms.img.susercontent.com/vn-11134207-7r98o-loqd3gmyulow36_tn"],
          },
          {
            id: 8,
            title: "May vải theo yêu cầu",
            seller: "Dương Đình Minh",
            phone: "0647382910",
            image: "https://i.ytimg.com/vi/eBv1uVYl7wc/hqdefault.jpg",
            price: "Theo yêu cầu",
            rating: 4.6,
            location: "Quận 8, TP. Hồ Chí Minh",
            publishedAt: "Đăng 2 tháng trước",
            images: ["https://i.ytimg.com/vi/eBv1uVYl7wc/hqdefault.jpg"],
          },
        ]

        const foundProduct = products.find((p) => p.id === Number(id))
        setProduct(foundProduct || null)
      } catch (error) {
        console.error("Error fetching product:", error)
      } finally {
        setLoading(false)
      }
    }

    fetchProduct()
  }, [id])

  if (loading) {
    return <div className="container mx-auto px-4 py-8">Loading...</div>
  }

  if (!product) {
    return <div className="container mx-auto px-4 py-8">Product not found</div>
  }

  const { title, seller, phone, price, description, rating, location, publishedAt } = product
  const images = product.images || [product.image]

  // Default description if none provided
  const productDescription =
    description ||
    "Sản phẩm chất lượng cao, được làm thủ công bởi nghệ nhân có nhiều năm kinh nghiệm. " +
      "Chúng tôi cam kết mang đến cho khách hàng những sản phẩm độc đáo, tinh tế và bền đẹp theo thời gian. " +
      "Liên hệ ngay để được tư vấn và đặt hàng theo yêu cầu riêng của bạn."

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1))
  }

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1))
  }

  const toggleFavorite = () => {
    setIsFavorite(!isFavorite)
  }

  return (
    <>
      <div className="bg-white py-4 border-b">
        <div className="container mx-auto px-4">
          <div className="flex items-center">
            <span className="text-sm text-gray-500">Trang chủ &gt; Danh mục &gt; Sản phẩm</span>
          </div>
        </div>
      </div>

      <section className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-4">
            <div className="relative aspect-square rounded-lg overflow-hidden border">
              <Image src={images[currentImageIndex] || "/placeholder.svg"} alt={title} fill className="object-cover" />

              {images.length > 1 && (
                <>
                  <button
                    onClick={handlePrevImage}
                    className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white transition-colors"
                    aria-label="Previous image"
                  >
                    <ChevronLeft className="h-5 w-5" />
                  </button>
                  <button
                    onClick={handleNextImage}
                    className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/80 rounded-full p-2 hover:bg-white transition-colors"
                    aria-label="Next image"
                  >
                    <ChevronRight className="h-5 w-5" />
                  </button>
                </>
              )}

              <div className="absolute left-3 bottom-3 bg-black/60 text-white text-xs px-2 py-1 rounded">
                {currentImageIndex + 1}/{images.length}
              </div>
            </div>

            <div className="flex space-x-2 overflow-x-auto pb-2">
              {images.map((img, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentImageIndex(index)}
                  className={`relative w-20 h-20 flex-shrink-0 rounded overflow-hidden border-2 ${
                    currentImageIndex === index ? "border-orange-500" : "border-transparent"
                  }`}
                >
                  <Image src={img || "/placeholder.svg"} alt={`Thumbnail ${index + 1}`} fill className="object-cover" />
                </button>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-6">
              <h2 className="text-xl font-bold mb-2">{title}</h2>
              <div className="flex justify-between items-center mb-4">
                <div></div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={toggleFavorite}
                  className={`${isFavorite ? "text-red-500" : "text-gray-500"}`}
                >
                  <Heart className={`h-6 w-6 ${isFavorite ? "fill-current" : ""}`} />
                </Button>
              </div>

              {price && <p className="text-2xl font-bold text-primary mb-4">{price}</p>}

              <div className="space-y-2 text-sm text-gray-600">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-gray-500" />
                  <span className="text-sm">{location || "TP. Hồ Chí Minh"}</span>
                </div>

                <div className="flex items-center">
                  <Clock className="h-5 w-5 mr-2 text-gray-500" />
                  <span className="text-sm">{publishedAt || "Đăng 3 ngày trước"}</span>
                </div>

                <div className="flex items-center">
                  <Phone className="h-5 w-5 mr-2 text-gray-500" />
                  <span className="text-sm">{phone}</span>
                </div>
              </div>
            </div>

            <Button className="w-full mb-6">LIÊN HỆ NGAY</Button>

            {/* Shop information section */}
            <div className="border rounded-lg p-4 mt-4">
              <div className="flex items-center space-x-4 mb-4">
                <div className="relative w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
                  <Image src="/placeholder.svg?height=48&width=48" alt={seller} fill className="object-cover" />
                  <div className="absolute bottom-0 right-0 bg-gray-800 text-white rounded-full p-1 w-5 h-5 flex items-center justify-center text-xs">
                    +
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex items-center">
                    <span className="font-medium text-sm">{seller}</span>
                    <div className="ml-2 text-orange-500">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M13.1307 10.5241C13.7905 11.4653 14.8399 12.0248 15.9526 12.0248C17.0601 12.0248 18.1054 11.4668 18.7638 10.5287C18.7691 10.5364 18.7748 10.5441 18.7802 10.5519C18.8001 10.5796 18.8214 10.6057 18.8422 10.6308L18.891 10.6922C18.946 10.763 19.0029 10.8362 19.0658 10.9046C19.0923 10.9335 19.1208 10.9607 19.1564 10.9949L19.2182 11.0542C19.2777 11.1136 19.3319 11.1665 19.3905 11.2162C19.4262 11.2464 19.4641 11.2746 19.5019 11.302L19.5617 11.3468C19.6235 11.394 19.6849 11.4408 19.7509 11.4838C19.7912 11.5096 19.8329 11.533 19.8745 11.5562L19.9337 11.5892C20.0021 11.6283 20.071 11.6673 20.1427 11.7013C20.1895 11.7236 20.2374 11.7428 20.2857 11.7618L20.3342 11.7814C20.4143 11.8136 20.4869 11.8423 20.563 11.8664C20.6233 11.8853 20.6847 11.9008 20.7639 11.9204C20.8405 11.9394 20.9221 11.959 21.0058 11.9729C21.0438 11.9798 21.0826 11.9846 21.1254 11.9892V19.6634C21.1254 21.3362 20.8677 21.6521 19.5042 21.6521H16.9965V16.8446C16.9965 15.2168 15.7863 13.9416 14.2414 13.9416H11.7592C10.3238 13.9416 8.72429 15.1341 8.72429 16.8446V21.6521H6.77582C5.30139 21.6521 4.875 21.2062 4.875 19.6634V11.9979C5.24066 11.9584 5.61496 11.8615 6.01984 11.7018C6.15479 11.6391 6.28406 11.5692 6.40552 11.4933L6.42366 11.4814C6.55398 11.3986 6.67671 11.3097 6.79923 11.2091C6.91415 11.1142 7.02128 11.0143 7.1265 10.9038L7.13831 10.8918C7.24544 10.7784 7.34602 10.6575 7.43775 10.5327C7.44555 10.5216 7.45336 10.5108 7.46116 10.5C8.12098 11.4564 9.17873 12.0248 10.3056 12.0248C11.4195 12.0248 12.4701 11.4653 13.1307 10.5241V10.5241Z"
                          fill="currentColor"
                        />
                      </svg>
                    </div>
                  </div>
                  <div className="flex items-center text-sm text-gray-500 mt-1">
                    <span className="mr-3">Phản hồi: 88%</span>
                    <span>479 đã bán</span>
                  </div>
                  <div className="text-xs text-gray-400 mt-1">Hoạt động 2 ngày trước</div>
                </div>
              </div>

              <hr className="my-3" />

              <div className="flex items-center mb-3">
                <span className="text-lg font-medium mr-1">4.5</span>
                <Star className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                <span className="text-sm ml-2">53 đánh giá</span>
              </div>

              <hr className="my-3" />

              <div className="mb-2">
                <div className="flex items-center mb-1">
                  <svg className="w-5 h-5 mr-3 text-gray-700" viewBox="0 0 24 24" fill="none">
                    <g fill="currentColor">
                      <path d="M2.2998 11.7C2.2998 6.55043 6.47524 2.375 11.6248 2.375C16.7744 2.375 20.9498 6.55043 20.9498 11.7C20.9498 16.8496 16.7744 21.025 11.6248 21.025C6.47524 21.025 2.2998 16.8496 2.2998 11.7ZM11.6248 3.775C7.24844 3.775 3.6998 7.32363 3.6998 11.7C3.6998 16.0764 7.24844 19.625 11.6248 19.625C16.0012 19.625 19.5498 16.0764 19.5498 11.7C19.5498 7.32363 16.0012 3.775 11.6248 3.775Z"></path>
                      <path d="M9.6123 10.3875C9.6123 10.0009 9.92571 9.6875 10.3123 9.6875H11.8123C12.1989 9.6875 12.5123 10.0009 12.5123 10.3875V15.825C12.5123 16.2116 12.1989 16.525 11.8123 16.525C11.4257 16.525 11.1123 16.2116 11.1123 15.825V11.0875H10.3123C9.92571 11.0875 9.6123 10.7741 9.6123 10.3875Z"></path>
                      <path d="M9.0498 16.0125C9.0498 15.6259 9.36321 15.3125 9.7498 15.3125H13.8748C14.2614 15.3125 14.5748 15.6259 14.5748 16.0125C14.5748 16.3991 14.2614 16.7125 13.8748 16.7125H9.7498C9.36321 16.7125 9.0498 16.3991 9.0498 16.0125Z"></path>
                      <path d="M11.625 6.16797C11.384 6.16797 11.1483 6.23945 10.9479 6.37337C10.7475 6.50728 10.5913 6.69763 10.499 6.92032C10.4068 7.14302 10.3826 7.38807 10.4297 7.62448C10.4767 7.8609 10.5928 8.07806 10.7632 8.24851C10.9337 8.41895 11.1508 8.53503 11.3872 8.58205C11.6236 8.62908 11.8687 8.60494 12.0914 8.5127C12.3141 8.42045 12.5044 8.26424 12.6384 8.06382C12.7723 7.8634 12.8438 7.62776 12.8438 7.38672C12.8438 7.06349 12.7153 6.75349 12.4868 6.52493C12.2582 6.29637 11.9482 6.16797 11.625 6.16797V6.16797Z"></path>
                    </g>
                  </svg>
                  <span className="text-sm">Chính sách cửa hàng</span>
                </div>
                <div className="pl-8 space-y-3 mt-3">
                  <div className="flex items-center">
                    <img
                      width="24"
                      height="24"
                      alt="Vận chuyển"
                      src="https://static.chotot.com/storage/CT_WEB_GDS_SHOP_SETTINGS/icons/ic_delivery.png"
                      className="mr-3"
                    />
                    <span className="text-sm">Freeship, Ship COD toàn quốc</span>
                  </div>
                  <div className="flex items-center">
                    <img
                      width="24"
                      height="24"
                      alt="Bảo hành"
                      src="https://static.chotot.com/storage/CT_WEB_GDS_SHOP_SETTINGS/icons/ic_guarantee.png"
                      className="mr-3"
                    />
                    <span className="text-sm">Bảo hành 6 tháng phần cứng</span>
                  </div>
                  <div className="flex items-center">
                    <img
                      width="24"
                      height="24"
                      alt="Trả góp"
                      src="https://static.chotot.com/storage/CT_WEB_GDS_SHOP_SETTINGS/icons/ic_payment.png"
                      className="mr-3"
                    />
                    <span className="text-sm">Hỗ trợ trả góp 0% qua thẻ tín dụng, CCCD</span>
                  </div>
                  <div className="flex items-center">
                    <img
                      width="24"
                      height="24"
                      alt="Chính sách khác"
                      src="https://static.chotot.com/storage/CT_WEB_GDS_SHOP_SETTINGS/icons/ic-circlecheck-fill.png"
                      className="mr-3"
                    />
                    <span className="text-sm">Xuất Hóa Đơn VAT Theo Yêu Cầu</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Tabs defaultValue="details" className="mt-8">
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
                {rating ? (
                  <div className="flex flex-col items-center mb-6">
                    <div className="flex items-center mb-2">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className={`h-6 w-6 ${i < rating ? "text-yellow-400 fill-yellow-400" : "text-gray-300"}`}
                        />
                      ))}
                    </div>
                    <span className="text-lg font-medium">{rating}/5</span>
                    <p className="text-sm text-gray-500 mt-1">Dựa trên đánh giá của người mua</p>
                  </div>
                ) : (
                  <p className="text-center text-sm text-gray-500">Chưa có đánh giá nào cho sản phẩm này.</p>
                )}
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </section>
    </>
  )
}
