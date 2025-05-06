"use client"

import type React from "react"

import { useFeatureNotification } from "@/hooks/use-feature-notification"
import { FeatureNotification } from "@/components/feature-notification"

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
          GiaCongGiaTot – Nền Tảng Mua Bán Trực Tuyến Hàng Đầu Cho Ngành Cơ Khí Việt
        </h2>

        <div className="prose max-w-none">
          <p>
            GiaCongGiaTot chính thức có mặt trên thị trường Việt Nam với sứ mệnh xây dựng một nền tảng kết nối giao
            thương uy tín, giúp người mua và người bán trong lĩnh vực gia công cơ khí – từ sắt, thép, inox đến nhôm,
            đồng – dễ dàng giao dịch một cách nhanh chóng, an toàn và hiệu quả.
          </p>

          <p>
            Tự hào là nền tảng được đông đảo cá nhân và doanh nghiệp cơ khí tin tưởng, GiaCongGiaTot chuyên hỗ trợ mua
            bán và trao đổi đa dạng các sản phẩm như: lan can sắt, khung cửa nhôm kính, kết cấu thép, bàn ghế inox, phụ
            kiện cơ khí, sản phẩm gia công CNC, máy móc thiết bị và nhiều mặt hàng cơ khí dân dụng – công nghiệp khác.
          </p>

          <p>
            Dù bạn là thợ cơ khí, chủ xưởng, nhà cung ứng vật tư hay đang tìm mua những sản phẩm cơ khí đã qua sử dụng,
            GiaCongGiaTot chính là nơi giúp bạn tiếp cận đối tác và khách hàng tiềm năng một cách dễ dàng. Việc đăng tin
            hoàn toàn miễn phí, chỉ cần chụp ảnh sản phẩm, mô tả chi tiết và đăng lên nền tảng.
          </p>

          <p>
            Chúc bạn có những giao dịch thành công và trải nghiệm tuyệt vời tại GiaCongGiaTot – Nền tảng kết nối đam mê
            cơ khí Việt!
          </p>
        </div>
      </div>
      <FeatureNotification show={showNotification} onClose={hideFeatureNotification} />
    </div>
  )
}
