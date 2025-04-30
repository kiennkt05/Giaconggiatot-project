"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { Send, Search, Phone, Info, MoreVertical, Paperclip, ImageIcon, Smile } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ScrollArea } from "@/components/ui/scroll-area"

interface Contact {
  id: string
  name: string
  avatar: string
  lastMessage: string
  time: string
  unread: number
  online: boolean
}

interface Message {
  id: string
  text: string
  time: string
  sender: "me" | "other"
  read: boolean
}

export function ChatInterface() {
  const [contacts, setContacts] = useState<Contact[]>([
    {
      id: "1",
      name: "Phùng Hải Nam",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Sản phẩm còn hàng không bạn?",
      time: "10:30",
      unread: 2,
      online: true,
    },
    {
      id: "2",
      name: "Nguyễn Quốc Minh",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Cảm ơn bạn đã mua hàng",
      time: "Hôm qua",
      unread: 0,
      online: false,
    },
    {
      id: "3",
      name: "Nguyễn Trung Kiên",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Mình sẽ giao hàng vào ngày mai",
      time: "Thứ 2",
      unread: 0,
      online: true,
    },
    {
      id: "4",
      name: "Bùi Đức Nhật",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Bạn có thể gửi thêm hình ảnh không?",
      time: "15/04",
      unread: 0,
      online: false,
    },
    {
      id: "5",
      name: "Nguyễn Như Hiếu",
      avatar: "/placeholder.svg?height=40&width=40",
      lastMessage: "Đã gửi đơn hàng",
      time: "12/04",
      unread: 0,
      online: false,
    },
  ])

  const [selectedContact, setSelectedContact] = useState<Contact | null>(contacts[0])
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Chào bạn, mình muốn hỏi về sản phẩm lan can sắt",
      time: "10:25",
      sender: "me",
      read: true,
    },
    {
      id: "2",
      text: "Chào bạn, bạn cần hỏi thông tin gì ạ?",
      time: "10:26",
      sender: "other",
      read: true,
    },
    {
      id: "3",
      text: "Sản phẩm còn hàng không bạn?",
      time: "10:30",
      sender: "other",
      read: false,
    },
  ])

  const [newMessage, setNewMessage] = useState("")
  const [searchTerm, setSearchTerm] = useState("")

  const handleSendMessage = () => {
    if (newMessage.trim() === "") return

    const message: Message = {
      id: Date.now().toString(),
      text: newMessage,
      time: new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }),
      sender: "me",
      read: false,
    }

    setMessages([...messages, message])
    setNewMessage("")
  }

  const filteredContacts = contacts.filter((contact) => contact.name.toLowerCase().includes(searchTerm.toLowerCase()))

  return (
    <div className="container mx-auto px-4 py-6">
      <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-3 h-[calc(100vh-200px)]">
          {/* Contact list */}
          <div className="border-r">
            <div className="p-3 border-b">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  type="text"
                  placeholder="Tìm kiếm liên hệ"
                  className="pl-9 h-10"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>

            <ScrollArea className="h-[calc(100vh-250px)]">
              {filteredContacts.map((contact) => (
                <div
                  key={contact.id}
                  className={`p-3 border-b cursor-pointer hover:bg-gray-50 ${
                    selectedContact?.id === contact.id ? "bg-gray-50" : ""
                  }`}
                  onClick={() => setSelectedContact(contact)}
                >
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="h-10 w-10 rounded-full overflow-hidden">
                        <Image
                          src={contact.avatar || "/placeholder.svg"}
                          alt={contact.name}
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      </div>
                      {contact.online && (
                        <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></span>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between">
                        <h3 className="text-sm font-medium truncate">{contact.name}</h3>
                        <span className="text-xs text-gray-500">{contact.time}</span>
                      </div>
                      <p className="text-xs text-gray-500 truncate">{contact.lastMessage}</p>
                    </div>
                    {contact.unread > 0 && (
                      <span className="h-5 w-5 bg-orange-500 rounded-full text-white text-xs flex items-center justify-center">
                        {contact.unread}
                      </span>
                    )}
                  </div>
                </div>
              ))}
            </ScrollArea>
          </div>

          {/* Chat area */}
          <div className="col-span-2 flex flex-col">
            {selectedContact ? (
              <>
                {/* Chat header */}
                <div className="p-3 border-b flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <div className="h-10 w-10 rounded-full overflow-hidden">
                        <Image
                          src={selectedContact.avatar || "/placeholder.svg"}
                          alt={selectedContact.name}
                          width={40}
                          height={40}
                          className="object-cover"
                        />
                      </div>
                      {selectedContact.online && (
                        <span className="absolute bottom-0 right-0 h-3 w-3 bg-green-500 rounded-full border-2 border-white"></span>
                      )}
                    </div>
                    <div>
                      <h3 className="text-sm font-medium">{selectedContact.name}</h3>
                      <p className="text-xs text-gray-500">
                        {selectedContact.online ? "Đang hoạt động" : "Không hoạt động"}
                      </p>
                    </div>
                  </div>
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon">
                      <Phone className="h-5 w-5 text-gray-600" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <Info className="h-5 w-5 text-gray-600" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <MoreVertical className="h-5 w-5 text-gray-600" />
                    </Button>
                  </div>
                </div>

                {/* Messages */}
                <ScrollArea className="flex-1 p-4">
                  <div className="space-y-4">
                    {messages.map((message) => (
                      <div
                        key={message.id}
                        className={`flex ${message.sender === "me" ? "justify-end" : "justify-start"}`}
                      >
                        <div
                          className={`max-w-[70%] rounded-lg p-3 ${
                            message.sender === "me"
                              ? "bg-orange-500 text-white rounded-br-none"
                              : "bg-gray-100 rounded-bl-none"
                          }`}
                        >
                          <p className="text-sm">{message.text}</p>
                          <div
                            className={`text-xs mt-1 flex justify-end ${
                              message.sender === "me" ? "text-orange-100" : "text-gray-500"
                            }`}
                          >
                            {message.time}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </ScrollArea>

                {/* Message input */}
                <div className="p-3 border-t">
                  <div className="flex space-x-2">
                    <Button variant="ghost" size="icon">
                      <Paperclip className="h-5 w-5 text-gray-600" />
                    </Button>
                    <Button variant="ghost" size="icon">
                      <ImageIcon className="h-5 w-5 text-gray-600" />
                    </Button>
                    <div className="flex-1 relative">
                      <Input
                        type="text"
                        placeholder="Nhập tin nhắn..."
                        value={newMessage}
                        onChange={(e) => setNewMessage(e.target.value)}
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            handleSendMessage()
                          }
                        }}
                        className="pr-10"
                      />
                      <Button variant="ghost" size="icon" className="absolute right-0 top-0 h-full">
                        <Smile className="h-5 w-5 text-gray-600" />
                      </Button>
                    </div>
                    <Button onClick={handleSendMessage}>
                      <Send className="h-5 w-5" />
                    </Button>
                  </div>
                </div>
              </>
            ) : (
              <div className="flex-1 flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-4">
                    <MessageIcon className="h-16 w-16 text-gray-300 mx-auto" />
                  </div>
                  <h3 className="text-lg font-medium text-gray-700">Chọn một liên hệ để bắt đầu trò chuyện</h3>
                  <p className="text-sm text-gray-500 mt-2">Hoặc bắt đầu một cuộc trò chuyện mới</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

function MessageIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
    </svg>
  )
}
