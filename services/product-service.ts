// Product data service
export interface ProductData {
  id: number
  title: string
  seller: string
  sellerId: string
  phone: string
  image: string
  description?: string
  price: string
  rating?: number
  location?: string
  publishedAt?: string
  images?: string[]
  timePosted?: string
  imageCount?: number
}

// Comprehensive product data
const products: ProductData[] = [
  // Current user's products (Phuong Tuan)
  {
    id: 101,
    title: "nệm giá 5tr pass lại rẻ hơn 1tr mấy",
    seller: "Phuong Tuan",
    sellerId: "0",
    phone: "0912345678",
    image: "/placeholder.svg?height=200&width=200",
    price: "1.300.000 đ",
    location: "Tp Hồ Chí Minh",
    publishedAt: "Đăng 32 phút trước",
    timePosted: "32 phút trước",
    imageCount: 1,
  },
  {
    id: 102,
    title: "Giuong tầng",
    seller: "Phuong Tuan",
    sellerId: "0",
    phone: "0912345678",
    image: "/placeholder.svg?height=200&width=200",
    price: "1.000.000 đ",
    location: "Tp Hồ Chí Minh",
    publishedAt: "Đăng 11 giờ trước",
    timePosted: "11 giờ trước",
    imageCount: 1,
  },
  {
    id: 103,
    title: "nệm 5tr pass rẻ",
    seller: "Phuong Tuan",
    sellerId: "0",
    phone: "0912345678",
    image: "/placeholder.svg?height=200&width=200",
    price: "1.300.000 đ",
    location: "Tp Hồ Chí Minh",
    publishedAt: "Đăng 11 giờ trước",
    timePosted: "11 giờ trước",
    imageCount: 1,
  },
  {
    id: 104,
    title: "Nuoc hoa nam Dior mới",
    seller: "Phuong Tuan",
    sellerId: "0",
    phone: "0912345678",
    image: "/placeholder.svg?height=200&width=200",
    price: "180.000 đ",
    location: "Tp Hồ Chí Minh",
    publishedAt: "Đăng hôm qua",
    timePosted: "hôm qua",
    imageCount: 1,
  },
  {
    id: 105,
    title: "2 mùng bị rách và kệ ván ép",
    seller: "Phuong Tuan",
    sellerId: "0",
    phone: "0912345678",
    image: "/placeholder.svg?height=200&width=200",
    price: "",
    location: "Tp Hồ Chí Minh",
    publishedAt: "Đăng 2 ngày trước",
    timePosted: "2 ngày trước",
    imageCount: 2,
  },
  {
    id: 106,
    title: "vali vai size L",
    seller: "Phuong Tuan",
    sellerId: "0",
    phone: "0912345678",
    image: "/placeholder.svg?height=200&width=200",
    price: "100.000 đ",
    location: "Tp Hồ Chí Minh",
    publishedAt: "Đăng 4 ngày trước",
    timePosted: "4 ngày trước",
    imageCount: 1,
  },
  {
    id: 107,
    title: "Đầu manocanh học làm tóc",
    seller: "Phuong Tuan",
    sellerId: "0",
    phone: "0912345678",
    image: "/placeholder.svg?height=200&width=200",
    price: "120.000 đ",
    location: "Tp Hồ Chí Minh",
    publishedAt: "Đăng 4 ngày trước",
    timePosted: "4 ngày trước",
    imageCount: 1,
  },
  {
    id: 108,
    title: "Nước hoa Lelabo 33",
    seller: "Phuong Tuan",
    sellerId: "0",
    phone: "0912345678",
    image: "/placeholder.svg?height=200&width=200",
    price: "160.000 đ",
    location: "Tp Hồ Chí Minh",
    publishedAt: "Đăng 4 ngày trước",
    timePosted: "4 ngày trước",
    imageCount: 1,
  },
  {
    id: 109,
    title: "Kệ ván ép",
    seller: "Phuong Tuan",
    sellerId: "0",
    phone: "0912345678",
    image: "/placeholder.svg?height=200&width=200",
    price: "30.000 đ",
    location: "Tp Hồ Chí Minh",
    publishedAt: "Đăng 2 tuần trước",
    timePosted: "2 tuần trước",
    imageCount: 2,
  },
  // Original products
  {
    id: 1,
    title: "Lan can bằng sắt không rỉ",
    seller: "Phùng Hải Nam",
    sellerId: "1",
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
    sellerId: "2",
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
    sellerId: "3",
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
    sellerId: "4",
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
    sellerId: "5",
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
    sellerId: "6",
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
    sellerId: "7",
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
    sellerId: "8",
    phone: "0647382910",
    image: "https://i.ytimg.com/vi/eBv1uVYl7wc/hqdefault.jpg",
    price: "Theo yêu cầu",
    rating: 4.6,
    location: "Quận 8, TP. Hồ Chí Minh",
    publishedAt: "Đăng 2 tháng trước",
    images: ["https://i.ytimg.com/vi/eBv1uVYl7wc/hqdefault.jpg"],
  },
]

export function getProductById(id: string | number): ProductData | undefined {
  const numId = typeof id === "string" ? Number.parseInt(id) : id
  return products.find((product) => product.id === numId)
}

export function getAllProducts(): ProductData[] {
  return products
}

export function getProductsBySupplier(supplierId: string): ProductData[] {
  console.log("Getting products for supplier ID:", supplierId)
  const filteredProducts = products.filter((product) => product.sellerId === supplierId)
  console.log("Found products:", filteredProducts.length)
  return filteredProducts
}

export default products
