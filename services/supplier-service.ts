// Supplier data service
export interface SupplierData {
  id: string
  name: string
  avatar: string
  banner?: string
  rating: number
  reviewCount: number
  followers: number
  following: number
  chatResponseRate: string
  chatResponseTime: string
  joinedDate: string
  location: string
  verifications: string[]
  activeListings: number
  soldItems: number
  online: boolean
}

// Comprehensive supplier data
const suppliers: Record<string, SupplierData> = {
  "0": {
    id: "0",
    name: "Phuong Tuan",
    avatar: "/placeholder.svg?height=96&width=96",
    banner: "/placeholder.svg?height=125&width=375",
    rating: 5.0,
    reviewCount: 17,
    followers: 28,
    following: 26,
    chatResponseRate: "92%",
    chatResponseTime: "Trong một giờ",
    joinedDate: "8 năm 2 tháng",
    location: "Quận Tân Phú, Tp Hồ Chí Minh",
    verifications: ["facebook", "google", "apple", "email"],
    activeListings: 36,
    soldItems: 55,
    online: true,
  },
  "1": {
    id: "1",
    name: "Phùng Hải Nam",
    avatar: "/placeholder.svg?height=96&width=96",
    rating: 4.5,
    reviewCount: 23,
    followers: 42,
    following: 15,
    chatResponseRate: "95%",
    chatResponseTime: "Trong vòng 30 phút",
    joinedDate: "3 năm 5 tháng",
    location: "Quận 7, TP. Hồ Chí Minh",
    verifications: ["facebook", "google", "email"],
    activeListings: 28,
    soldItems: 67,
    online: true,
  },
  "2": {
    id: "2",
    name: "Nguyễn Quốc Minh",
    avatar: "/placeholder.svg?height=96&width=96",
    rating: 4.8,
    reviewCount: 31,
    followers: 56,
    following: 22,
    chatResponseRate: "98%",
    chatResponseTime: "Trong vòng 10 phút",
    joinedDate: "2 năm 8 tháng",
    location: "Quận 1, TP. Hồ Chí Minh",
    verifications: ["facebook", "google", "apple", "email"],
    activeListings: 15,
    soldItems: 43,
    online: false,
  },
  "3": {
    id: "3",
    name: "Nguyễn Trung Kiên",
    avatar: "/placeholder.svg?height=96&width=96",
    rating: 5.0,
    reviewCount: 17,
    followers: 28,
    following: 12,
    chatResponseRate: "92%",
    chatResponseTime: "Trong một giờ",
    joinedDate: "1 năm 11 tháng",
    location: "Quận 2, TP. Hồ Chí Minh",
    verifications: ["facebook", "email"],
    activeListings: 8,
    soldItems: 25,
    online: true,
  },
  "4": {
    id: "4",
    name: "Bùi Đức Nhật",
    avatar: "/placeholder.svg?height=96&width=96",
    rating: 4.7,
    reviewCount: 19,
    followers: 34,
    following: 18,
    chatResponseRate: "90%",
    chatResponseTime: "Trong vòng 2 giờ",
    joinedDate: "2 năm 3 tháng",
    location: "Quận 3, TP. Hồ Chí Minh",
    verifications: ["google", "email"],
    activeListings: 12,
    soldItems: 31,
    online: false,
  },
  "5": {
    id: "5",
    name: "Nguyễn Như Hiếu",
    avatar: "/placeholder.svg?height=96&width=96",
    rating: 4.3,
    reviewCount: 14,
    followers: 21,
    following: 9,
    chatResponseRate: "85%",
    chatResponseTime: "Trong vòng 3 giờ",
    joinedDate: "1 năm 7 tháng",
    location: "Quận Tân Bình, TP. Hồ Chí Minh",
    verifications: ["facebook", "email"],
    activeListings: 7,
    soldItems: 19,
    online: true,
  },
  "6": {
    id: "6",
    name: "Nguyễn Việt Quang",
    avatar: "/placeholder.svg?height=96&width=96",
    rating: 4.9,
    reviewCount: 27,
    followers: 45,
    following: 20,
    chatResponseRate: "97%",
    chatResponseTime: "Trong vòng 15 phút",
    joinedDate: "3 năm 1 tháng",
    location: "Quận 5, TP. Hồ Chí Minh",
    verifications: ["facebook", "google", "email"],
    activeListings: 22,
    soldItems: 58,
    online: true,
  },
  "7": {
    id: "7",
    name: "Nguyễn Duy Lâm",
    avatar: "/placeholder.svg?height=96&width=96",
    rating: 4.2,
    reviewCount: 11,
    followers: 18,
    following: 7,
    chatResponseRate: "80%",
    chatResponseTime: "Trong vòng 5 giờ",
    joinedDate: "1 năm 2 tháng",
    location: "Quận 6, TP. Hồ Chí Minh",
    verifications: ["email"],
    activeListings: 5,
    soldItems: 12,
    online: false,
  },
  "8": {
    id: "8",
    name: "Dương Đình Minh",
    avatar: "/placeholder.svg?height=96&width=96",
    rating: 4.6,
    reviewCount: 15,
    followers: 25,
    following: 11,
    chatResponseRate: "88%",
    chatResponseTime: "Trong vòng 2 giờ",
    joinedDate: "2 năm 5 tháng",
    location: "Quận 8, TP. Hồ Chí Minh",
    verifications: ["facebook", "email"],
    activeListings: 9,
    soldItems: 24,
    online: true,
  },
}

export function getSupplierById(id: string): SupplierData | undefined {
  console.log("Getting supplier with ID:", id)
  console.log("Available suppliers:", Object.keys(suppliers))
  return suppliers[id]
}

export function getAllSuppliers(): SupplierData[] {
  return Object.values(suppliers)
}

export function getSupplierByName(name: string): SupplierData | undefined {
  return Object.values(suppliers).find((supplier) => supplier.name === name)
}

export default suppliers
