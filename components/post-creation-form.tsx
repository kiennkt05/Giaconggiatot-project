"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Upload, Plus, X } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

interface UploadedImage {
  id: string
  url: string
  file: File
}

export function PostCreationForm() {
  const [selectedCategory, setSelectedCategory] = useState<string>("")
  const [uploadedImages, setUploadedImages] = useState<UploadedImage[]>([])
  const [dragActive, setDragActive] = useState<boolean>(false)

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true)
    } else if (e.type === "dragleave") {
      setDragActive(false)
    }
  }

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault()
    e.stopPropagation()
    setDragActive(false)

    if (e.dataTransfer.files && e.dataTransfer.files.length > 0) {
      handleFiles(e.dataTransfer.files)
    }
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      handleFiles(e.target.files)
    }
  }

  const handleFiles = (files: FileList) => {
    const newImages: UploadedImage[] = []

    Array.from(files).forEach((file) => {
      if (file.type.startsWith("image/")) {
        const imageUrl = URL.createObjectURL(file)
        newImages.push({
          id: `img-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
          url: imageUrl,
          file: file,
        })
      }
    })

    setUploadedImages((prev) => [...prev, ...newImages])
  }

  const removeImage = (id: string) => {
    setUploadedImages((prev) => {
      const filtered = prev.filter((img) => img.id !== id)
      return filtered
    })
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-sm p-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left column - Image upload */}
          <div className="md:col-span-1">
            <h5 className="text-lg font-medium mb-2">Hình ảnh và Video sản phẩm</h5>
            <p className="text-sm text-gray-500 mb-4">
              Xem thêm về{" "}
              <Link href="https://trogiup.chotot.com/nguoi-ban/dang-tin/" target="_blank" className="text-blue-600">
                Quy định đăng tin của Chợ Tốt
              </Link>
            </p>

            <div
              className={`border-2 border-dashed rounded-lg p-6 text-center ${
                dragActive ? "border-orange-500 bg-orange-50" : "border-gray-300"
              }`}
              onDragEnter={handleDrag}
              onDragOver={handleDrag}
              onDragLeave={handleDrag}
              onDrop={handleDrop}
            >
              <input
                id="image-upload"
                type="file"
                multiple
                accept="image/*"
                className="hidden"
                onChange={handleFileChange}
              />
              <label htmlFor="image-upload" className="cursor-pointer">
                <div className="mb-3">
                  <Upload className="h-12 w-12 text-orange-500 mx-auto" />
                </div>
                <p className="text-sm font-medium">Kéo thả ảnh vào đây hoặc nhấn để tải lên</p>
                <p className="text-xs text-gray-500 mt-2">Hình có kích thước tối thiểu 240x240</p>
              </label>
            </div>

            {uploadedImages.length > 0 && (
              <div className="mt-6">
                <h6 className="text-sm font-medium mb-3">Ảnh đã tải lên ({uploadedImages.length})</h6>
                <div className="grid grid-cols-3 gap-3">
                  {uploadedImages.map((img) => (
                    <div key={img.id} className="relative aspect-square rounded-md overflow-hidden border">
                      <Image src={img.url || "/placeholder.svg"} alt="Uploaded" fill className="object-cover" />
                      <button
                        type="button"
                        onClick={() => removeImage(img.id)}
                        className="absolute top-1 right-1 bg-black/50 rounded-full p-1 text-white hover:bg-black/70"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                  ))}
                  <label
                    htmlFor="image-upload"
                    className="aspect-square rounded-md border-2 border-dashed border-gray-300 flex items-center justify-center cursor-pointer hover:bg-gray-50"
                  >
                    <Plus className="h-6 w-6 text-gray-400" />
                  </label>
                </div>
              </div>
            )}
          </div>

          {/* Right column - Form fields */}
          <div className="md:col-span-2">
            <div className="space-y-6">
              <div>
                <label htmlFor="category" className="block text-sm font-medium text-gray-700 mb-1">
                  Danh mục tin đăng <span className="text-red-500">*</span>
                </label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="w-full">
                    <SelectValue placeholder="Danh mục tin đăng" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1010">Sắt - Lan can, cầu thang</SelectItem>
                    <SelectItem value="1020">Sắt - Cửa, cổng</SelectItem>
                    <SelectItem value="1030">Sắt - Khung bàn ghế</SelectItem>
                    <SelectItem value="1040">Sắt - Giá kệ, giàn phơi</SelectItem>
                    <SelectItem value="1050">Sắt - Khung nhà, mái tôn</SelectItem>
                    <SelectItem value="2010">Nhôm - Cửa sổ, cửa đi</SelectItem>
                    <SelectItem value="2020">Nhôm - Vách ngăn, tủ kệ</SelectItem>
                    <SelectItem value="2030">Nhôm - Trần, mái che</SelectItem>
                    <SelectItem value="2040">Nhôm - Lan can, hàng rào</SelectItem>
                    <SelectItem value="2050">Nhôm - Khung tranh, gương</SelectItem>
                    <SelectItem value="3010">Inox - Cầu thang, lan can</SelectItem>
                    <SelectItem value="3020">Inox - Bàn ghế, nội thất</SelectItem>
                    <SelectItem value="3030">Inox - Thiết bị bếp</SelectItem>
                    <SelectItem value="3040">Inox - Cửa, cổng</SelectItem>
                    <SelectItem value="4010">Đồng - Đồ trang trí</SelectItem>
                    <SelectItem value="4020">Đồng - Đồ thờ cúng</SelectItem>
                    <SelectItem value="5010">Gia công - Cắt laser, CNC</SelectItem>
                    <SelectItem value="5020">Gia công - Hàn, uốn</SelectItem>
                    <SelectItem value="5030">Gia công - Sơn, mạ</SelectItem>
                    <SelectItem value="5040">Gia công - Đúc, đột dập</SelectItem>
                    <SelectItem value="6010">Vật tư - Phụ kiện, linh kiện</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {selectedCategory && (
                <>
                  <div>
                    <label htmlFor="title" className="block text-sm font-medium text-gray-700 mb-1">
                      Tiêu đề <span className="text-red-500">*</span>
                    </label>
                    <Input id="title" placeholder="Nhập tiêu đề tin đăng" />
                  </div>

                  <div>
                    <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-1">
                      Mô tả chi tiết <span className="text-red-500">*</span>
                    </label>
                    <Textarea
                      id="description"
                      placeholder="Mô tả chi tiết về sản phẩm của bạn"
                      className="min-h-[150px]"
                    />
                  </div>

                  <div>
                    <label htmlFor="price" className="block text-sm font-medium text-gray-700 mb-1">
                      Giá <span className="text-red-500">*</span>
                    </label>
                    <div className="relative">
                      <Input id="price" type="number" placeholder="Nhập giá" className="pl-12" />
                      <div className="absolute inset-y-0 left-0 flex items-center px-3 pointer-events-none text-gray-500 border-r">
                        VND
                      </div>
                    </div>
                  </div>

                  <div>
                    <label htmlFor="location" className="block text-sm font-medium text-gray-700 mb-1">
                      Địa chỉ <span className="text-red-500">*</span>
                    </label>
                    <Select>
                      <SelectTrigger className="w-full">
                        <SelectValue placeholder="Chọn tỉnh/thành phố" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="hcm">TP. Hồ Chí Minh</SelectItem>
                        <SelectItem value="hn">Hà Nội</SelectItem>
                        <SelectItem value="dn">Đà Nẵng</SelectItem>
                        <SelectItem value="ct">Cần Thơ</SelectItem>
                        <SelectItem value="hp">Hải Phòng</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>

                  <div>
                    <label htmlFor="contact" className="block text-sm font-medium text-gray-700 mb-1">
                      Thông tin liên hệ <span className="text-red-500">*</span>
                    </label>
                    <Input id="contact" placeholder="Số điện thoại liên hệ" />
                  </div>

                  <div className="pt-4">
                    <Button className="w-full md:w-auto">Đăng tin</Button>
                  </div>
                </>
              )}

              {!selectedCategory && (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <Image
                    src="https://static.chotot.com/storage/chotot-icons/svg/empty-category.svg"
                    alt="ĐĂNG NHANH - BÁN GỌN"
                    width={120}
                    height={120}
                  />
                  <h4 className="font-medium text-lg mt-4">ĐĂNG NHANH - BÁN GỌN</h4>
                  <p className="text-gray-500 mt-2">Chọn "danh mục tin đăng" để đăng tin</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
