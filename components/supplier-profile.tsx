"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { MoreHorizontal, Plus, MessageSquare, Calendar, CheckCircle, MapPin, Heart, ChevronDown } from "lucide-react"

interface SupplierProfileProps {
  id: string
}

export function SupplierProfile({ id }: SupplierProfileProps) {
  const [isFollowing, setIsFollowing] = useState(false)
  const [activeTab, setActiveTab] = useState("active")
  const [favorites, setFavorites] = useState<number[]>([])
  const [showMore, setShowMore] = useState(false)

  // Mock supplier data
  const supplier = {
    id,
    name: "phương",
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
  }

  // Mock products data
  const products = [
    {
      id: 1,
      title: "nệm giá 5tr pass lại rẻ hơn 1tr mấy",
      price: "1.300.000 đ",
      image: "/placeholder.svg?height=200&width=200",
      location: "Tp Hồ Chí Minh",
      timePosted: "32 phút trước",
      imageCount: 1,
    },
    {
      id: 2,
      title: "Giuong tầng",
      price: "1.000.000 đ",
      image: "/placeholder.svg?height=200&width=200",
      location: "Tp Hồ Chí Minh",
      timePosted: "11 giờ trước",
      imageCount: 1,
    },
    {
      id: 3,
      title: "nệm 5tr pass rẻ",
      price: "1.300.000 đ",
      image: "/placeholder.svg?height=200&width=200",
      location: "Tp Hồ Chí Minh",
      timePosted: "11 giờ trước",
      imageCount: 1,
    },
    {
      id: 4,
      title: "Nuoc hoa nam Dior mới",
      price: "180.000 đ",
      image: "/placeholder.svg?height=200&width=200",
      location: "Tp Hồ Chí Minh",
      timePosted: "hôm qua",
      imageCount: 1,
    },
    {
      id: 5,
      title: "2 mùng bị rách và kệ ván ép",
      price: "",
      image: "/placeholder.svg?height=200&width=200",
      location: "Tp Hồ Chí Minh",
      timePosted: "2 ngày trước",
      imageCount: 2,
    },
    {
      id: 6,
      title: "vali vai size L",
      price: "100.000 đ",
      image: "/placeholder.svg?height=200&width=200",
      location: "Tp Hồ Chí Minh",
      timePosted: "4 ngày trước",
      imageCount: 1,
    },
    {
      id: 7,
      title: "Đầu manocanh học làm tóc",
      price: "120.000 đ",
      image: "/placeholder.svg?height=200&width=200",
      location: "Tp Hồ Chí Minh",
      timePosted: "4 ngày trước",
      imageCount: 1,
    },
    {
      id: 8,
      title: "Nước hoa Lelabo 33",
      price: "160.000 đ",
      image: "/placeholder.svg?height=200&width=200",
      location: "Tp Hồ Chí Minh",
      timePosted: "4 ngày trước",
      imageCount: 1,
    },
    {
      id: 9,
      title: "Kệ ván ép",
      price: "30.000 đ",
      image: "/placeholder.svg?height=200&width=200",
      location: "Tp Hồ Chí Minh",
      timePosted: "2 tuần trước",
      imageCount: 2,
    },
  ]

  const toggleFollow = () => {
    setIsFollowing(!isFollowing)
  }

  const toggleFavorite = (productId: number) => {
    if (favorites.includes(productId)) {
      setFavorites(favorites.filter((id) => id !== productId))
    } else {
      setFavorites([...favorites, productId])
    }
  }

  return (
    <div className="container mx-auto px-4 py-4">
      <div className="grid md:grid-cols-[304px_auto] gap-x-3 gap-y-2 mt-2">
        {/* Left column - Supplier info */}
        <div className="flex flex-col gap-3">
          <div className="bg-white px-3 pb-3 md:rounded-lg md:border md:border-gray-200">
            {/* Banner and avatar */}
            <div className="-mx-3">
              <div className="flex items-center justify-center relative">
                <div className="md:rounded-tl-lg md:rounded-tr-lg overflow-hidden w-full">
                  <svg
                    width="375"
                    height="125"
                    viewBox="0 0 375 125"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-full h-full"
                  >
                    <g clipPath="url(#clip0_2827_39406)">
                      <rect width="375" height="125" fill="#F4F4F4"></rect>
                      <g clipPath="url(#clip1_2827_39406)">
                        <circle cx="188" cy="62" r="120" fill="#EEEEEE"></circle>
                      </g>
                    </g>
                    <defs>
                      <clipPath id="clip0_2827_39406">
                        <rect width="375" height="125" fill="white"></rect>
                      </clipPath>
                      <clipPath id="clip1_2827_39406">
                        <rect width="416" height="125" fill="white" transform="translate(-20)"></rect>
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <div className="absolute w-[72px] h-[72px] md:w-[96px] md:h-[96px] left-4 bottom-0 translate-y-2/4 rounded-full border-4 border-white overflow-hidden bg-gray-200">
                  <Image
                    src={supplier.avatar || "/placeholder.svg"}
                    alt={supplier.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute bottom-1 right-1 md:right-2">
                    <div className="h-4 w-4 rounded-full border-2 border-white bg-green-400"></div>
                  </div>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex pt-4 px-3 md:pt-3 justify-end gap-2 md:min-h-[44px]">
                <div className="relative">
                  <button className="bg-gray-50 h-7 w-7 md:h-[32px] md:w-[40px] rounded">
                    <MoreHorizontal className="h-6 w-6 text-gray-900 mx-auto" />
                  </button>
                </div>
                <div className="md:hidden">
                  <Button
                    onClick={toggleFollow}
                    variant="default"
                    size="sm"
                    className={isFollowing ? "bg-gray-200 text-gray-800 hover:bg-gray-300" : ""}
                  >
                    {isFollowing ? (
                      "Đang theo dõi"
                    ) : (
                      <>
                        <Plus className="h-4 w-4 mr-1" />
                        Theo dõi
                      </>
                    )}
                  </Button>
                </div>
              </div>
            </div>

            {/* Supplier info */}
            <div className="pt-12 md:pt-8">
              <h1 className="text-xl font-bold">{supplier.name}</h1>

              {/* Rating */}
              <div className="flex items-center mt-1">
                <div className="flex items-center">
                  <span className="font-bold mr-1">{supplier.rating}</span>
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5"
                      >
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M11.152 1.88459C11.4005 1.71054 11.6965 1.61719 11.9999 1.61719C12.3033 1.61719 12.5993 1.71055 12.8478 1.88459C13.0931 2.05636 13.2803 2.29853 13.3849 2.57894L15.4442 7.76472L15.45 7.77967C15.4552 7.7939 15.4645 7.80629 15.4767 7.81532C15.4889 7.82434 15.5035 7.82962 15.5187 7.8305L15.523 7.83075L21.0543 8.18702C22.4426 8.27717 22.9193 10.0168 21.9068 10.8582L17.6701 14.3919L17.6678 14.3938C17.651 14.4077 17.6385 14.426 17.6317 14.4467C17.625 14.4671 17.6241 14.4888 17.629 14.5097L17.6293 14.5107L18.997 19.888C19.318 21.1549 17.9506 22.2918 16.7639 21.5433L16.7622 21.5421L12.0372 18.5421C12.0262 18.5351 12.013 18.5312 11.9999 18.5312C11.9868 18.5312 11.974 18.5349 11.963 18.5419L7.56632 21.3261C6.26086 22.1567 4.74821 20.8958 5.10591 19.4941L6.37049 14.5107L6.37073 14.5098C6.37571 14.4889 6.37479 14.4671 6.36808 14.4467C6.36126 14.426 6.34873 14.4077 6.33195 14.3938L6.32965 14.3919L2.09328 10.8584C1.08128 10.017 1.55697 8.27718 2.94515 8.18704L8.4811 7.83049C8.49625 7.82961 8.51082 7.82434 8.52302 7.81532C8.53523 7.80629 8.54454 7.7939 8.54981 7.77967L8.55556 7.76472L10.6149 2.57894C10.7194 2.29853 10.9067 2.05637 11.152 1.88459Z"
                          fill="#FFBA00"
                        />
                      </svg>
                    ))}
                  </div>
                  <Link href="#" className="text-sm text-blue-600 ml-2">
                    ({supplier.reviewCount} đánh giá)
                  </Link>
                </div>
              </div>

              {/* Followers */}
              <p className="text-sm mt-2">
                <Link href="#" className="mr-4">
                  Người theo dõi: <b>{supplier.followers}</b>
                </Link>
                <Link href="#">
                  Đang theo dõi: <b>{supplier.following}</b>
                </Link>
              </p>

              {/* Follow button (desktop) */}
              <div className="hidden md:block mt-4">
                <Button
                  onClick={toggleFollow}
                  variant="default"
                  className={`w-full ${isFollowing ? "bg-gray-200 text-gray-800 hover:bg-gray-300" : ""}`}
                >
                  {isFollowing ? (
                    "Đang theo dõi"
                  ) : (
                    <>
                      <Plus className="h-4 w-4 mr-1" />
                      Theo dõi
                    </>
                  )}
                </Button>
              </div>
            </div>

            <hr className="border-gray-200 my-4 hidden md:block" />

            {/* Supplier stats */}
            <div className="hidden md:block">
              <div className="flex items-center mb-3">
                <MessageSquare className="h-5 w-5 mr-2 text-gray-700" />
                <span className="text-sm">Phản hồi chat:</span>
                <span className="text-sm ml-1">
                  {supplier.chatResponseRate} ({supplier.chatResponseTime})
                </span>
              </div>

              <div className="flex items-center mb-3">
                <Calendar className="h-5 w-5 mr-2 text-gray-700" />
                <span className="text-sm">Đã tham gia:</span>
                <span className="text-sm ml-1">{supplier.joinedDate}</span>
              </div>

              <div className="flex items-center mb-3">
                <CheckCircle className="h-5 w-5 mr-2 text-gray-700" />
                <span className="text-sm">Đã xác thực:</span>
                <div className="flex ml-1">
                  {supplier.verifications.map((platform, index) => (
                    <div key={index} className="w-4 h-4 mr-1 text-gray-400">
                      {platform === "facebook" && (
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M10.0014 1.66797C5.39978 1.66797 1.66895 5.32786 1.66895 9.84202C1.66895 13.9213 4.71561 17.3024 8.69978 17.918V12.2054H6.58311V9.84202H8.69978V8.0411C8.69978 5.99084 9.94394 4.86025 11.8464 4.86025C12.7581 4.86025 13.7131 5.01966 13.7131 5.01966V7.02986H12.6598C11.6264 7.02986 11.3031 7.66096 11.3031 8.3076V9.84038H13.6123L13.2431 12.2037H11.3031V17.9163C15.2873 17.304 18.3339 13.9221 18.3339 9.84202C18.3339 5.32786 14.6031 1.66797 10.0014 1.66797Z" />
                        </svg>
                      )}
                      {platform === "google" && (
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="currentColor">
                          <path
                            d="M15.3504 8.13539C15.3504 7.53247 15.3003 7.09249 15.192 6.63623H8.14648V9.35752H12.282C12.1987 10.0338 11.7484 11.0523 10.7479 11.7366L10.7339 11.8277L12.9615 13.5141L13.1158 13.5292C14.5333 12.25 15.3504 10.3678 15.3504 8.13539Z"
                            fill="#E8E8E8"
                          />
                          <path
                            d="M8.14702 15.3055C10.1731 15.3055 11.874 14.6536 13.1164 13.5293L10.7484 11.7367C10.1148 12.1686 9.26427 12.47 8.14702 12.47C6.16262 12.47 4.47839 11.1909 3.878 9.42285L3.79 9.43015L1.47365 11.1819L1.44336 11.2642C2.67735 13.6596 5.21207 15.3055 8.14702 15.3055Z"
                            fill="#C0C0C0"
                          />
                          <path
                            d="M3.87764 9.42291C3.71922 8.96664 3.62754 8.47775 3.62754 7.97262C3.62754 7.46743 3.71922 6.97859 3.8693 6.52233L3.86511 6.42515L1.51973 4.64526L1.44299 4.68093C0.934407 5.67496 0.642578 6.79121 0.642578 7.97262C0.642578 9.15403 0.934407 10.2702 1.44299 11.2642L3.87764 9.42291Z"
                            fill="#595959"
                          />
                          <path
                            d="M8.14702 3.47501C9.5561 3.47501 10.5066 4.06979 11.0486 4.56683L13.1664 2.5462C11.8657 1.36479 10.1731 0.639648 8.14702 0.639648C5.21207 0.639648 2.67735 2.28546 1.44336 4.68086L3.86967 6.52225C4.47839 4.75421 6.16262 3.47501 8.14702 3.47501Z"
                            fill="#8C8C8C"
                          />
                        </svg>
                      )}
                      {platform === "apple" && (
                        <svg width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                          <path d="M13.6377 4.09766C12.0627 4.09766 11.397 4.84922 10.3002 4.84922C9.17554 4.84922 8.31773 4.10312 6.95289 4.10312C5.61695 4.10312 4.19234 4.91875 3.28765 6.3082C2.01734 8.26758 2.23297 11.9578 4.29039 15.1016C5.02632 16.227 6.00914 17.4891 7.2982 17.5027H7.32164C8.44195 17.5027 8.77476 16.7691 10.3166 16.7605H10.34C11.8587 16.7605 12.1634 17.4984 13.2791 17.4984H13.3025C14.5916 17.4848 15.6271 16.0863 16.363 14.9652C16.8927 14.159 17.0896 13.7543 17.4959 12.8422C14.5197 11.7125 14.0416 7.49336 16.9849 5.87578C16.0865 4.75078 14.824 4.09922 13.6337 4.09922L13.6377 4.09766Z" />
                          <path d="M13.2911 0C12.3536 0.0636719 11.2599 0.660547 10.6193 1.43984C10.038 2.14609 9.5599 3.19375 9.7474 4.20977H9.8224C10.8208 4.20977 11.8427 3.60859 12.4396 2.83828C13.0146 2.10508 13.4505 1.06602 13.2911 0Z" />
                        </svg>
                      )}
                      {platform === "email" && (
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path
                            fillRule="evenodd"
                            d="M4.125 3.8A2.575 2.575 0 001.55 6.377v11.25A2.575 2.575 0 004.125 20.2h15.75a2.575 2.575 0 002.575-2.575V6.376A2.575 2.575 0 0019.875 3.8H4.125zM5.68 6.949a.7.7 0 10-.86 1.105l6.75 5.25a.7.7 0 00.86 0l6.75-5.25a.7.7 0 00-.86-1.105L12 11.864 5.68 6.948z"
                            clipRule="evenodd"
                          />
                        </svg>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex items-center">
                <MapPin className="h-5 w-5 mr-2 text-gray-700" />
                <span className="text-sm">Địa chỉ:</span>
                <span className="text-sm ml-1">{supplier.location}</span>
              </div>
            </div>

            {/* Mobile view more button */}
            <div className="mt-2 md:hidden">
              <Link href="#" className="text-blue-500 flex items-center">
                <MoreHorizontal className="h-6 w-6" />
                <span className="ml-1">Xem thêm</span>
              </Link>
            </div>
          </div>
        </div>

        {/* Right column - Products */}
        <div className="bg-white md:rounded-lg md:border-gray-200 md:border pb-2 h-fit min-h-[344px]">
          <div className="md:pt-4 md:px-4">
            <Tabs defaultValue="active" className="w-full">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="active" onClick={() => setActiveTab("active")}>
                  Đang hiển thị ({supplier.activeListings})
                </TabsTrigger>
                <TabsTrigger value="sold" onClick={() => setActiveTab("sold")}>
                  Đã bán ({supplier.soldItems})
                </TabsTrigger>
              </TabsList>

              <TabsContent value="active" className="mt-4">
                <div className="md:grid md:grid-cols-3 md:gap-4">
                  {products.map((product) => (
                    <div key={product.id} className="mb-4 md:mb-0">
                      <Link href={`/products/${product.id}`}>
                        <div className="relative aspect-square">
                          <Image
                            src={product.image || "/placeholder.svg"}
                            alt={product.title}
                            fill
                            className="object-cover rounded-md"
                          />
                          <div className="absolute top-2 left-2 bg-black/50 text-white text-xs px-2 py-1 rounded flex items-center">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 24 24"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_4852_4660)">
                                <path
                                  opacity="0.5"
                                  d="M17.0607 5.27529L17.1854 5.59227H17.526H20.8092C21.5578 5.59227 22.1776 5.84119 22.7357 6.35717C23.2743 6.85509 23.5 7.4172 23.5 8.13466V18.9077C23.5 19.6345 23.2681 20.243 22.7357 20.7351C22.1776 21.2511 21.5578 21.5 20.8092 21.5H3.19075C2.44845 21.5 1.83284 21.2552 1.27837 20.7481C0.754729 20.1783 0.5 19.6007 0.5 18.9077V8.18454C0.5 7.45781 0.731933 6.8493 1.26427 6.35717L1.27107 6.35089L1.27763 6.34436C1.77873 5.84546 2.38889 5.59227 3.19075 5.59227H6.42775H6.76836L6.89304 5.27529L7.53474 3.6439C7.68433 3.32641 7.89804 3.06515 8.21075 2.87778L8.22868 2.86703L8.24565 2.85483C8.59144 2.6062 8.90758 2.5 9.24856 2.5H14.7052C15.0462 2.5 15.3623 2.6062 15.7081 2.85483L15.7251 2.86703L15.743 2.87778C16.0884 3.08473 16.3162 3.35121 16.4063 3.61059L16.4096 3.62007L16.4133 3.62941L17.0607 5.27529Z"
                                  fill="black"
                                  stroke="white"
                                ></path>
                              </g>
                              <defs>
                                <clipPath id="clip0_4852_4660">
                                  <rect width="24" height="24" fill="white"></rect>
                                </clipPath>
                              </defs>
                            </svg>
                            <span className="ml-1">{product.imageCount}</span>
                          </div>
                          <button
                            onClick={(e) => {
                              e.preventDefault()
                              e.stopPropagation()
                              toggleFavorite(product.id)
                            }}
                            className="absolute top-2 right-2 h-8 w-8 rounded-full bg-white/80 flex items-center justify-center hover:bg-white transition-colors"
                          >
                            <Heart
                              className={`h-5 w-5 ${favorites.includes(product.id) ? "fill-red-500 text-red-500" : "text-gray-700"}`}
                            />
                          </button>
                        </div>
                        <div className="mt-2">
                          <h3 className="text-sm font-medium line-clamp-2">{product.title}</h3>
                          {product.price && <p className="text-orange-500 font-bold mt-1">{product.price}</p>}
                          <div className="flex items-center justify-between mt-2 text-xs text-gray-500">
                            <div className="flex items-center">
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="w-3.5 h-3.5 mr-1"
                              >
                                <g clipPath="url(#clip0_8440_50991)">
                                  <path d="M12 15.375a4.125 4.125 0 100-8.25 4.125 4.125 0 000 8.25z"></path>
                                  <path d="M12 2.25A9.75 9.75 0 1021.75 12 9.769 9.769 0 0012 2.25zm6.169 15.225a7.624 7.624 0 00-2.297-2.156 5.597 5.597 0 01-7.744 0 7.622 7.622 0 00-2.297 2.156 8.25 8.25 0 1112.338 0z"></path>
                                </g>
                              </svg>
                              <span>{product.timePosted}</span>
                              <span className="mx-1">·</span>
                              <span>{product.location}</span>
                            </div>
                          </div>
                        </div>
                      </Link>
                    </div>
                  ))}
                </div>

                {/* Show more button */}
                <div className="flex justify-center mt-6">
                  <button
                    onClick={() => setShowMore(!showMore)}
                    className="text-blue-600 flex items-center font-medium"
                  >
                    Xem thêm <ChevronDown className="h-5 w-5 ml-1" />
                  </button>
                </div>
              </TabsContent>

              <TabsContent value="sold">
                <div className="flex justify-center items-center h-40">
                  <p className="text-gray-500">Không có sản phẩm đã bán</p>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </div>
    </div>
  )
}
