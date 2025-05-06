"use client"

import { useState } from "react"
import Image from "next/image"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { MessageSquare, Package, Truck, CheckCircle, AlertCircle } from "lucide-react"

interface Order {
  id: string
  productName: string
  productImage: string
  price: string
  quantity: number
  status: "pending" | "processing" | "shipping" | "delivered" | "cancelled"
  date: string
  seller?: {
    id: string
    name: string
  }
  buyer?: {
    id: string
    name: string
  }
}

interface OrdersListProps {
  type: "purchase" | "sales"
}

export function OrdersList({ type }: OrdersListProps) {
  const [orders, setOrders] = useState<Order[]>([
    {
      id: "ORD-001",
      productName: "Cửa sắt cao đẹp chắc chẵn",
      productImage: "https://i.imgur.com/Bn1XF8D.png",
      price: "1.500.000đ",
      quantity: 1,
      status: "delivered",
      date: "15/04/2023",
      seller: {
        id: "1",
        name: "Phùng Hải Nam",
      },
      buyer: {
        id: "2",
        name: "Nguyễn Văn A",
      },
    },
    {
      id: "ORD-002",
      productName: "Mái tôn công trình theo thiết kế đẹp, chắc chắn",
      productImage: "https://i.imgur.com/jJQ6vA4.png",
      price: "350.000đ",
      quantity: 2,
      status: "shipping",
      date: "20/04/2023",
      seller: {
        id: "2",
        name: "Nguyễn Quốc Minh",
      },
      buyer: {
        id: "2",
        name: "Nguyễn Văn A",
      },
    },
    {
      id: "ORD-003",
      productName: "Cửa gỗ tấm, khung sắt theo thiết kế",
      productImage: "https://i.imgur.com/tXMmSJK.png",
      price: "650.000đ",
      quantity: 1,
      status: "processing",
      date: "25/04/2023",
      seller: {
        id: "3",
        name: "Nguyễn Trung Kiên",
      },
      buyer: {
        id: "2",
        name: "Nguyễn Văn A",
      },
    },
    {
      id: "ORD-004",
      productName: "Mái kính, khung sắt theo thiêt kế",
      productImage: "https://i.imgur.com/mlUcQQn.png",
      price: "780.000đ",
      quantity: 1,
      status: "pending",
      date: "28/04/2023",
      seller: {
        id: "4",
        name: "Bùi Đức Nhật",
      },
      buyer: {
        id: "2",
        name: "Nguyễn Văn A",
      },
    },
    {
      id: "ORD-005",
      productName: "Lan can nhôm đẹp lắp đặt tại nhà",
      productImage: "https://i.imgur.com/9v6hwVV.png",
      price: "450.000đ",
      quantity: 3,
      status: "cancelled",
      date: "10/04/2023",
      seller: {
        id: "5",
        name: "Nguyễn Như Hiếu",
      },
      buyer: {
        id: "2",
        name: "Nguyễn Văn A",
      },
    },
  ])

  const getStatusBadge = (status: Order["status"]) => {
    switch (status) {
      case "pending":
        return (
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            Chờ xác nhận
          </Badge>
        )
      case "processing":
        return (
          <Badge variant="outline" className="bg-yellow-50 text-yellow-700 border-yellow-200">
            Đang xử lý
          </Badge>
        )
      case "shipping":
        return (
          <Badge variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
            Đang giao hàng
          </Badge>
        )
      case "delivered":
        return (
          <Badge variant="outline" className="bg-green-50 text-green-700 border-green-200">
            Đã giao hàng
          </Badge>
        )
      case "cancelled":
        return (
          <Badge variant="outline" className="bg-red-50 text-red-700 border-red-200">
            Đã hủy
          </Badge>
        )
    }
  }

  const getStatusIcon = (status: Order["status"]) => {
    switch (status) {
      case "pending":
        return <AlertCircle className="h-5 w-5 text-blue-500" />
      case "processing":
        return <Package className="h-5 w-5 text-yellow-500" />
      case "shipping":
        return <Truck className="h-5 w-5 text-purple-500" />
      case "delivered":
        return <CheckCircle className="h-5 w-5 text-green-500" />
      case "cancelled":
        return <AlertCircle className="h-5 w-5 text-red-500" />
    }
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6">{type === "purchase" ? "Đơn mua" : "Đơn bán"}</h1>

      <Tabs defaultValue="all" className="w-full">
        <TabsList className="grid grid-cols-5 mb-6">
          <TabsTrigger value="all">Tất cả</TabsTrigger>
          <TabsTrigger value="pending">Chờ xác nhận</TabsTrigger>
          <TabsTrigger value="processing">Đang xử lý</TabsTrigger>
          <TabsTrigger value="shipping">Đang giao</TabsTrigger>
          <TabsTrigger value="completed">Hoàn thành</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow-sm p-4 border">
              <div className="flex justify-between items-center border-b pb-3">
                <div className="flex items-center">
                  {getStatusIcon(order.status)}
                  <span className="ml-2 text-sm font-medium">
                    {type === "purchase" ? order.seller?.name : order.buyer?.name}
                  </span>
                </div>
                <div className="flex items-center">{getStatusBadge(order.status)}</div>
              </div>

              <div className="py-4 flex">
                <div className="relative h-20 w-20 flex-shrink-0">
                  <Image
                    src={order.productImage || "/placeholder.svg"}
                    alt={order.productName}
                    fill
                    className="object-cover rounded-md"
                  />
                </div>
                <div className="ml-4 flex-1">
                  <h3 className="font-medium">{order.productName}</h3>
                  <p className="text-sm text-gray-500">x{order.quantity}</p>
                  <p className="text-orange-500 font-bold mt-1">{order.price}</p>
                </div>
              </div>

              <div className="border-t pt-3 flex justify-between items-center">
                <div className="text-sm text-gray-500">Ngày đặt hàng: {order.date}</div>
                <div className="flex space-x-2">
                  <Button variant="outline" size="sm">
                    <MessageSquare className="h-4 w-4 mr-2" />
                    Liên hệ
                  </Button>
                  {order.status === "delivered" && <Button size="sm">Đánh giá</Button>}
                  {order.status === "pending" && (
                    <Button variant="destructive" size="sm">
                      Hủy đơn
                    </Button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </TabsContent>

        <TabsContent value="pending" className="space-y-4">
          {orders
            .filter((order) => order.status === "pending")
            .map((order) => (
              <div key={order.id} className="bg-white rounded-lg shadow-sm p-4 border">
                {/* Same content structure as above */}
                <div className="flex justify-between items-center border-b pb-3">
                  <div className="flex items-center">
                    {getStatusIcon(order.status)}
                    <span className="ml-2 text-sm font-medium">
                      {type === "purchase" ? order.seller?.name : order.buyer?.name}
                    </span>
                  </div>
                  <div className="flex items-center">{getStatusBadge(order.status)}</div>
                </div>

                <div className="py-4 flex">
                  <div className="relative h-20 w-20 flex-shrink-0">
                    <Image
                      src={order.productImage || "/placeholder.svg"}
                      alt={order.productName}
                      fill
                      className="object-cover rounded-md"
                    />
                  </div>
                  <div className="ml-4 flex-1">
                    <h3 className="font-medium">{order.productName}</h3>
                    <p className="text-sm text-gray-500">x{order.quantity}</p>
                    <p className="text-orange-500 font-bold mt-1">{order.price}</p>
                  </div>
                </div>

                <div className="border-t pt-3 flex justify-between items-center">
                  <div className="text-sm text-gray-500">Ngày đặt hàng: {order.date}</div>
                  <div className="flex space-x-2">
                    <Button variant="outline" size="sm">
                      <MessageSquare className="h-4 w-4 mr-2" />
                      Liên hệ
                    </Button>
                    <Button variant="destructive" size="sm">
                      Hủy đơn
                    </Button>
                  </div>
                </div>
              </div>
            ))}
        </TabsContent>

        {/* Similar structure for other tabs */}
        <TabsContent value="processing" className="space-y-4">
          {orders.filter((order) => order.status === "processing").length > 0 ? (
            orders
              .filter((order) => order.status === "processing")
              .map((order) => (
                <div key={order.id} className="bg-white rounded-lg shadow-sm p-4 border">
                  {/* Order content */}
                  <div className="flex justify-between items-center border-b pb-3">
                    <div className="flex items-center">
                      {getStatusIcon(order.status)}
                      <span className="ml-2 text-sm font-medium">
                        {type === "purchase" ? order.seller?.name : order.buyer?.name}
                      </span>
                    </div>
                    <div className="flex items-center">{getStatusBadge(order.status)}</div>
                  </div>

                  <div className="py-4 flex">
                    <div className="relative h-20 w-20 flex-shrink-0">
                      <Image
                        src={order.productImage || "/placeholder.svg"}
                        alt={order.productName}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="font-medium">{order.productName}</h3>
                      <p className="text-sm text-gray-500">x{order.quantity}</p>
                      <p className="text-orange-500 font-bold mt-1">{order.price}</p>
                    </div>
                  </div>

                  <div className="border-t pt-3 flex justify-between items-center">
                    <div className="text-sm text-gray-500">Ngày đặt hàng: {order.date}</div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Liên hệ
                      </Button>
                      {order.status === "delivered" && <Button size="sm">Đánh giá</Button>}
                      {order.status === "pending" && (
                        <Button variant="destructive" size="sm">
                          Hủy đơn
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">Không có đơn hàng nào đang xử lý</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="shipping" className="space-y-4">
          {orders.filter((order) => order.status === "shipping").length > 0 ? (
            orders
              .filter((order) => order.status === "shipping")
              .map((order) => (
                <div key={order.id} className="bg-white rounded-lg shadow-sm p-4 border">
                  {/* Order content */}
                  <div className="flex justify-between items-center border-b pb-3">
                    <div className="flex items-center">
                      {getStatusIcon(order.status)}
                      <span className="ml-2 text-sm font-medium">
                        {type === "purchase" ? order.seller?.name : order.buyer?.name}
                      </span>
                    </div>
                    <div className="flex items-center">{getStatusBadge(order.status)}</div>
                  </div>

                  <div className="py-4 flex">
                    <div className="relative h-20 w-20 flex-shrink-0">
                      <Image
                        src={order.productImage || "/placeholder.svg"}
                        alt={order.productName}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="font-medium">{order.productName}</h3>
                      <p className="text-sm text-gray-500">x{order.quantity}</p>
                      <p className="text-orange-500 font-bold mt-1">{order.price}</p>
                    </div>
                  </div>

                  <div className="border-t pt-3 flex justify-between items-center">
                    <div className="text-sm text-gray-500">Ngày đặt hàng: {order.date}</div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Liên hệ
                      </Button>
                      {order.status === "delivered" && <Button size="sm">Đánh giá</Button>}
                      {order.status === "pending" && (
                        <Button variant="destructive" size="sm">
                          Hủy đơn
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">Không có đơn hàng nào đang giao</p>
            </div>
          )}
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          {orders.filter((order) => order.status === "delivered").length > 0 ? (
            orders
              .filter((order) => order.status === "delivered")
              .map((order) => (
                <div key={order.id} className="bg-white rounded-lg shadow-sm p-4 border">
                  {/* Order content */}
                  <div className="flex justify-between items-center border-b pb-3">
                    <div className="flex items-center">
                      {getStatusIcon(order.status)}
                      <span className="ml-2 text-sm font-medium">
                        {type === "purchase" ? order.seller?.name : order.buyer?.name}
                      </span>
                    </div>
                    <div className="flex items-center">{getStatusBadge(order.status)}</div>
                  </div>

                  <div className="py-4 flex">
                    <div className="relative h-20 w-20 flex-shrink-0">
                      <Image
                        src={order.productImage || "/placeholder.svg"}
                        alt={order.productName}
                        fill
                        className="object-cover rounded-md"
                      />
                    </div>
                    <div className="ml-4 flex-1">
                      <h3 className="font-medium">{order.productName}</h3>
                      <p className="text-sm text-gray-500">x{order.quantity}</p>
                      <p className="text-orange-500 font-bold mt-1">{order.price}</p>
                    </div>
                  </div>

                  <div className="border-t pt-3 flex justify-between items-center">
                    <div className="text-sm text-gray-500">Ngày đặt hàng: {order.date}</div>
                    <div className="flex space-x-2">
                      <Button variant="outline" size="sm">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Liên hệ
                      </Button>
                      {order.status === "delivered" && <Button size="sm">Đánh giá</Button>}
                      {order.status === "pending" && (
                        <Button variant="destructive" size="sm">
                          Hủy đơn
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-500">Không có đơn hàng nào đã hoàn thành</p>
            </div>
          )}
        </TabsContent>
      </Tabs>
    </div>
  )
}
