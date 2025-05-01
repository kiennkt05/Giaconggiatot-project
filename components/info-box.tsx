"use client"

import type React from "react"

import { useFeatureNotification } from "@/hooks/use-feature-notification"
import { FeatureNotification } from "@/components/feature-notification"
import Link from "next/link"

export function InfoBox() {
  const { showNotification, showFeatureNotification, hideFeatureNotification } = useFeatureNotification()

  const handleLinkClick = (e: React.MouseEvent) => {
    e.preventDefault()
    showFeatureNotification()
  }

  return (
    <div className="bg-white py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-bold mb-4">
          GiaCongGiaTot - Chợ Mua Bán, Rao Vặt Trực Tuyến Hàng Đầu Của Người Việt
        </h2>

        <div className="prose max-w-none">
          <p>
            GiaCongGiaTot chính thức gia nhập thị trường Việt Nam với mục đích tạo ra cho bạn một kênh rao vặt trung
            gian, kết nối người mua với người bán lại với nhau bằng những giao dịch cực kỳ đơn giản, tiện lợi, nhanh
            chóng, an toàn, mang đến hiệu quả bất ngờ.
          </p>

          <p>
            Đến nay, GiaCongGiaTot tự hào là Website rao vặt được ưa chuộng hàng đầu Việt Nam cho các sản phẩm thủ công
            mỹ nghệ. Hàng ngàn món hời từ{" "}
            <Link href="#" onClick={handleLinkClick}>
              Lan can bằng sắt
            </Link>
            ,{" "}
            <Link href="#" onClick={handleLinkClick}>
              Túi đan bằng tre
            </Link>
            ,{" "}
            <Link href="#" onClick={handleLinkClick}>
              Đan len quần áo
            </Link>
            ,{" "}
            <Link href="#" onClick={handleLinkClick}>
              Bình lọ gốm
            </Link>
            ,{" "}
            <Link href="#" onClick={handleLinkClick}>
              Sản phẩm tre nứa
            </Link>
            ,{" "}
            <Link href="#" onClick={handleLinkClick}>
              Đồ sứ cao cấp
            </Link>
            ,{" "}
            <Link href="#" onClick={handleLinkClick}>
              Điêu khắc gỗ
            </Link>{" "}
            và nhiều sản phẩm thủ công khác được đăng tin, rao bán trên GiaCongGiaTot.
          </p>

          <p>
            Với GiaCongGiaTot, bạn có thể dễ dàng mua bán, trao đổi bất cứ một loại sản phẩm thủ công nào, dù đó là đồ
            cũ hay đồ mới với nhiều lĩnh vực khác nhau.
          </p>

          <p>
            Mỗi người trong chúng ta đều có những sản phẩm đã qua sử dụng và không cần dùng tới nữa. Vậy còn chần chừ gì
            nữa mà không để nó trở nên giá trị hơn với người khác. Rất đơn giản, bạn chỉ cần chụp hình lại, mô tả cụ thể
            về sản phẩm và sử dụng ứng dụng{" "}
            <Link href="#" onClick={handleLinkClick}>
              Đăng tin miễn phí
            </Link>{" "}
            của GiaCongGiaTot là đã có thể đến gần hơn với người cần nó.
          </p>

          <p>Chúc các bạn có những trải nghiệm mua bán tuyệt vời trên GiaCongGiaTot.</p>
        </div>
      </div>
      <FeatureNotification show={showNotification} onClose={hideFeatureNotification} />
    </div>
  )
}
