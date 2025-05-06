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
    title: "Bàn ghế khung sắt mặt gỗ",
    seller: "Phùng Hải Nam",
    sellerId: "1",
    phone: "0964827315",
    image: "https://inoxhoasen.com/wp-content/uploads/2023/11/bo-ban-ghe-quan-an-gia-re.jpg",
    price: "1.200.000đ - 2.500.000đ",
    rating: 4.5,
    location: "Quận 7, TP. Hồ Chí Minh",
    publishedAt: "Đăng 3 ngày trước",
    description:
      "Bộ bàn ghế khung sắt mặt gỗ là sự kết hợp hoàn hảo giữa sự chắc chắn và vẻ đẹp tự nhiên. Khung sắt sơn tĩnh điện chống gỉ mang lại độ bền cao, trong khi mặt gỗ được xử lý kỹ càng, tạo cảm giác ấm cúng và sang trọng. Thiết kế hiện đại, phù hợp với nhiều không gian như quán cà phê, nhà hàng, văn phòng hay gia đình. Dễ dàng vệ sinh, bền đẹp theo thời gian, đây là lựa chọn lý tưởng cho những ai yêu thích sự tinh tế và tiện dụng.",
    images: ["https://inoxhoasen.com/wp-content/uploads/2023/11/bo-ban-ghe-quan-an-gia-re.jpg"],
  },
  {
    id: 2,
    title: "Bàn học khung sắt giá rẻ",
    seller: "Nguyễn Quốc Minh",
    sellerId: "2",
    phone: "0817392648",
    image: "https://hoaphathanoi.vn/media/product/2443514_ban_ke_hoc_sinh_khung_sat_mat_go_bsk07.jpg",
    price: "350.000đ",
    rating: 4.8,
    location: "Quận 1, TP. Hồ Chí Minh",
    publishedAt: "Đăng 5 ngày trước",
    description:
      "Bàn học khung sắt chắc chắn, mặt gỗ bền đẹp, thiết kế đơn giản nhưng hiện đại. Phù hợp cho học sinh, sinh viên, văn phòng với giá cả phải chăng. Dễ vệ sinh, sử dụng lâu dài, tối ưu không gian.",
    images: ["https://hoaphathanoi.vn/media/product/2443514_ban_ke_hoc_sinh_khung_sat_mat_go_bsk07.jpg"],
  },
  {
    id: 3,
    title: "Cầu dắt xe máy gấp gọn",
    seller: "Nguyễn Trung Kiên",
    sellerId: "3",
    phone: "0538491726",
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-li06f43ws1c1b0.webp",
    description:
      "Cầu dắt xe máy gấp gọn thiết kế chắc chắn, dễ dàng mang theo và sử dụng. Chất liệu bền bỉ, chống trơn trượt, giúp dắt xe lên xuống an toàn, thuận tiện. Phù hợp cho gia đình, cửa hàng sửa xe, bãi đỗ xe.",
    price: "450.000đ - 850.000đ",
    rating: 5,
    location: "Quận 2, TP. Hồ Chí Minh",
    publishedAt: "Đăng hôm qua",
    images: ["https://down-vn.img.susercontent.com/file/vn-11134207-7qukw-li06f43ws1c1b0.webp"],
  },
  {
    id: 4,
    title: "Lò nhôm vàng mã",
    seller: "Bùi Đức Nhật",
    sellerId: "4",
    phone: "0472619835",
    image: "https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lzlfsfn42k6979",
    price: "580.000đ - 1.200.000đ",
    rating: 4.7,
    location: "Quận 3, TP. Hồ Chí Minh",
    publishedAt: "Đăng 1 tuần trước",
    images: ["https://down-vn.img.susercontent.com/file/vn-11134207-7r98o-lzlfsfn42k6979"],
  },
  {
    id: 5,
    title: "Thuyền tôn",
    seller: "Nguyễn Như Hiếu",
    sellerId: "5",
    phone: "0928374651",
    image: "https://bna.1cdn.vn/2022/10/02/uploaded-quanganbna-2022_10_02-_bna-thuyen-2-7477.jpg",
    price: "250.000đ - 750.000đ",
    rating: 4.3,
    location: "Quận Tân Bình, TP. Hồ Chí Minh",
    publishedAt: "Đăng 2 tuần trước",
    images: ["https://bna.1cdn.vn/2022/10/02/uploaded-quanganbna-2022_10_02-_bna-thuyen-2-7477.jpg"],
  },
  {
    id: 6,
    title: "Tủ nhôm kính",
    seller: "Nguyễn Việt Quang",
    sellerId: "6",
    phone: "0851739264",
    image: "https://kinhcuongluc.com.vn/wp-content/uploads/2019/01/20180319_120242-1.jpg",
    price: "1.500.000đ - 3.800.000đ",
    rating: 4.9,
    location: "Quận 5, TP. Hồ Chí Minh",
    publishedAt: "Đăng 3 tuần trước",
    images: ["https://kinhcuongluc.com.vn/wp-content/uploads/2019/01/20180319_120242-1.jpg"],
  },
  {
    id: 7,
    title: "Kệ sắt phản gỗ",
    seller: "Nguyễn Duy Lâm",
    sellerId: "7",
    phone: "0419283746",
    image: "https://homeoffice.com.vn/images/detailed/7/ke_sach_4_tang_1.JPG",
    price: "120.000đ - 350.000đ",
    rating: 4.2,
    location: "Quận 6, TP. Hồ Chí Minh",
    publishedAt: "Đăng 1 tháng trước",
    images: ["https://homeoffice.com.vn/images/detailed/7/ke_sach_4_tang_1.JPG"],
  },
  {
    id: 8,
    title: "Kệ sắt trang trí",
    seller: "Dương Đình Minh",
    sellerId: "8",
    phone: "0647382910",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8oY0MVbcD_YiHTy_B5IEZqTe0l7iqT_e3SA&s",
    price: "Theo yêu cầu",
    rating: 4.6,
    location: "Quận 8, TP. Hồ Chí Minh",
    publishedAt: "Đăng 2 tháng trước",
    images: ["https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8oY0MVbcD_YiHTy_B5IEZqTe0l7iqT_e3SA&s"],
  },
  // Products from kham-pha page
  {
    id: 9,
    title: "Cửa sắt cao đẹp chắc chẵn",
    seller: "Phùng Hải Nam",
    sellerId: "1",
    phone: "0964827315",
    image: "https://i.imgur.com/Bn1XF8D.png",
    price: "1.200.000đ - 2.500.000đ",
    rating: 4.5,
    location: "Quận 7, TP. Hồ Chí Minh",
    publishedAt: "Đăng 4 ngày trước",
    images: ["https://i.imgur.com/Bn1XF8D.png"],
  },
  {
    id: 10,
    title: "Mái tôn công trình theo thiết kế đẹp, chắc chắn",
    seller: "Nguyễn Quốc Minh",
    sellerId: "2",
    phone: "0817392648",
    image: "https://i.imgur.com/jJQ6vA4.png",
    price: "350.000đ",
    rating: 4.8,
    location: "Quận 1, TP. Hồ Chí Minh",
    publishedAt: "Đăng 6 ngày trước",
    images: ["https://i.imgur.com/jJQ6vA4.png"],
  },
  {
    id: 11,
    title: "Cửa gỗ tấm, khung sắt theo thiết kế",
    seller: "Nguyễn Trung Kiên",
    sellerId: "3",
    phone: "0538491726",
    image: "https://i.imgur.com/tXMmSJK.png",
    description:
      "Cửa gỗ tấm với khung sắt chắc chắn, thiết kế theo yêu cầu. Chất liệu gỗ tự nhiên kết hợp với khung sắt bền bỉ, tạo nên sản phẩm vừa đẹp vừa bền. Phù hợp cho nhà ở, văn phòng, cửa hàng.",
    price: "450.000đ - 850.000đ",
    rating: 5,
    location: "Quận 2, TP. Hồ Chí Minh",
    publishedAt: "Đăng 2 ngày trước",
    images: ["https://i.imgur.com/tXMmSJK.png"],
  },
  {
    id: 12,
    title: "Mái kính, khung sắt theo thiêt kế",
    seller: "Bùi Đức Nhật",
    sellerId: "4",
    phone: "0472619835",
    image: "https://i.imgur.com/mlUcQQn.png",
    price: "580.000đ - 1.200.000đ",
    rating: 4.7,
    location: "Quận 3, TP. Hồ Chí Minh",
    publishedAt: "Đăng 1 tuần trước",
    images: ["https://i.imgur.com/mlUcQQn.png"],
  },
  {
    id: 13,
    title: "Lan can nhôm đẹp lắp đặt tại nhà",
    seller: "Nguyễn Như Hiếu",
    sellerId: "5",
    phone: "0928374651",
    image: "https://i.imgur.com/9v6hwVV.png",
    price: "250.000đ - 750.000đ",
    rating: 4.3,
    location: "Quận Tân Bình, TP. Hồ Chí Minh",
    publishedAt: "Đăng 2 tuần trước",
    images: ["https://i.imgur.com/9v6hwVV.png"],
  },
  {
    id: 14,
    title: "Máng xối mái nhật",
    seller: "Nguyễn Việt Quang",
    sellerId: "6",
    phone: "0851739264",
    image: "https://i.imgur.com/B9cwYTn.png",
    price: "1.500.000đ - 3.800.000đ",
    rating: 4.9,
    location: "Quận 5, TP. Hồ Chí Minh",
    publishedAt: "Đăng 3 tuần trước",
    images: ["https://i.imgur.com/B9cwYTn.png"],
  },
  {
    id: 15,
    title: "Xiên hoa inox",
    seller: "Nguyễn Duy Lâm",
    sellerId: "7",
    phone: "0419283746",
    image: "https://i.imgur.com/zusAvzr.png",
    price: "120.000đ - 350.000đ",
    rating: 4.2,
    location: "Quận 6, TP. Hồ Chí Minh",
    publishedAt: "Đăng 1 tháng trước",
    images: ["https://i.imgur.com/zusAvzr.png"],
  },
  {
    id: 16,
    title: "Cửa nhôm xingfa 4 cánh",
    seller: "Dương Đình Minh",
    sellerId: "8",
    phone: "0647382910",
    image: "https://i.imgur.com/spceSFL.png",
    price: "Theo yêu cầu",
    rating: 4.6,
    location: "Quận 8, TP. Hồ Chí Minh",
    publishedAt: "Đăng 2 tháng trước",
    images: ["https://i.imgur.com/spceSFL.png"],
  },
]

export function getProductById(id: string | number): ProductData | undefined {
  const numId = typeof id === "string" ? Number.parseInt(id) : id
  return products.find((product) => product.id === numId)
}

export function getProductsByIds(ids: number[]): ProductData[] {
  return products.filter((product) => ids.includes(product.id))
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
