"use client"

import type React from "react"

import { useState } from "react"
import { Bell, Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { useFeatureNotification } from "@/hooks/use-feature-notification"
import { FeatureNotification } from "@/components/feature-notification"

interface Notification {
  id: string
  title: string
  message: string
  time: string
  read: boolean
  type: "system" | "order" | "chat" | "promotion"
}

export function NotificationTab() {
  const [isOpen, setIsOpen] = useState(false)
  const [notifications, setNotifications] = useState<Notification[]>([
    {
      id: "1",
      title: "Đơn hàng mới",
      message: "Đơn hàng #12345 cho sản phẩm 'Cửa sắt cao đẹp chắc chẵn' đã được xác nhận",
      time: "5 phút trước",
      read: false,
      type: "order",
    },
    {
      id: "2",
      title: "Tin nhắn mới",
      message: "Bạn có tin nhắn mới từ Phùng Hải Nam về sản phẩm 'Mái tôn công trình'",
      time: "30 phút trước",
      read: false,
      type: "chat",
    },
    {
      id: "3",
      title: "Khuyến mãi",
      message: "Giảm 10% cho đơn hàng đầu tiên khi mua sản phẩm 'Cửa gỗ tấm, khung sắt'",
      time: "2 giờ trước",
      read: true,
      type: "promotion",
    },
    {
      id: "4",
      title: "Cập nhật hệ thống",
      message: "Hệ thống sẽ bảo trì vào ngày 15/05/2023",
      time: "1 ngày trước",
      read: true,
      type: "system",
    },
    {
      id: "5",
      title: "Đơn hàng đã giao",
      message: "Đơn hàng #12340 cho sản phẩm 'Mái kính, khung sắt' đã được giao thành công",
      time: "2 ngày trước",
      read: true,
      type: "order",
    },
    {
      id: "6",
      title: "Tin nhắn mới",
      message: "Bạn có tin nhắn mới từ Nguyễn Như Hiếu về sản phẩm 'Lan can nhôm'",
      time: "3 ngày trước",
      read: true,
      type: "chat",
    },
    {
      id: "7",
      title: "Khuyến mãi đặc biệt",
      message: "Giảm 20% cho tất cả sản phẩm khung sắt và nhôm",
      time: "4 ngày trước",
      read: true,
      type: "promotion",
    },
  ])

  const { showNotification, showFeatureNotification, hideFeatureNotification } = useFeatureNotification()

  const toggleOpen = () => {
    setIsOpen(!isOpen)
  }

  const markAsRead = (id: string, e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    showFeatureNotification()
    // Original functionality commented out
    // setNotifications(
    //   notifications.map((notification) => (notification.id === id ? { ...notification, read: true } : notification)),
    // )
  }

  const markAllAsRead = (e: React.MouseEvent) => {
    e.preventDefault()
    showFeatureNotification()
    // Original functionality commented out
    // setNotifications(notifications.map((notification) => ({ ...notification, read: true })))
  }

  const handleNotificationClick = (e: React.MouseEvent) => {
    e.preventDefault()
    showFeatureNotification()
  }

  const unreadCount = notifications.filter((notification) => !notification.read).length

  return (
    <div className="relative">
      <Button variant="ghost" size="icon" className="text-gray-600 relative" onClick={toggleOpen}>
        <Bell className="h-5 w-5" />
        {unreadCount > 0 && (
          <span className="absolute top-0 right-0 h-4 w-4 bg-red-500 rounded-full text-white text-xs flex items-center justify-center">
            {unreadCount}
          </span>
        )}
      </Button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-white rounded-md shadow-lg z-50 border border-gray-200">
          <div className="flex justify-between items-center p-3 border-b">
            <h3 className="font-medium">Thông báo</h3>
            <Button variant="ghost" size="sm" onClick={markAllAsRead} className="text-xs h-8">
              Đánh dấu đã đọc tất cả
            </Button>
          </div>

          <ScrollArea className="h-80">
            <div className="p-2">
              {notifications.length > 0 ? (
                notifications.map((notification) => (
                  <div
                    key={notification.id}
                    className={`p-3 border-b last:border-0 ${notification.read ? "bg-white" : "bg-orange-50"} cursor-pointer`}
                    onClick={handleNotificationClick}
                  >
                    <div className="flex justify-between">
                      <h4 className="text-sm font-medium">{notification.title}</h4>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="h-5 w-5"
                        onClick={(e) => markAsRead(notification.id, e)}
                      >
                        {notification.read ? (
                          <X className="h-3 w-3 text-gray-400" />
                        ) : (
                          <Check className="h-3 w-3 text-gray-400" />
                        )}
                      </Button>
                    </div>
                    <p className="text-xs text-gray-600 mt-1">{notification.message}</p>
                    <div className="flex justify-between items-center mt-2">
                      <span className="text-xs text-gray-500">{notification.time}</span>
                      <span
                        className={`text-xs px-2 py-0.5 rounded-full ${
                          notification.type === "order"
                            ? "bg-blue-100 text-blue-800"
                            : notification.type === "chat"
                              ? "bg-green-100 text-green-800"
                              : notification.type === "promotion"
                                ? "bg-purple-100 text-purple-800"
                                : "bg-gray-100 text-gray-800"
                        }`}
                      >
                        {notification.type === "order"
                          ? "Đơn hàng"
                          : notification.type === "chat"
                            ? "Tin nhắn"
                            : notification.type === "promotion"
                              ? "Khuyến mãi"
                              : "Hệ thống"}
                      </span>
                    </div>
                  </div>
                ))
              ) : (
                <div className="p-4 text-center text-gray-500">Không có thông báo nào</div>
              )}
            </div>
          </ScrollArea>
        </div>
      )}
      <FeatureNotification show={showNotification} onClose={hideFeatureNotification} />
    </div>
  )
}
