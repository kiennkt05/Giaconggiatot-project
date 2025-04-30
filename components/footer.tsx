import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Download app section */}
          <div>
            <h3 className="font-bold text-gray-700 mb-4">TẢI ỨNG DỤNG GIACONGGIATOT</h3>
            <div className="flex">
              <div className="mr-4">
                <Image src="/images/qr-code.png" alt="QR Code" width={87} height={87} className="border" />
              </div>
              <div>
                <div className="flex flex-col space-y-2">
                  <Link href="https://apps.apple.com" target="_blank" rel="noopener noreferrer">
                    <Image src="/images/app-store.png" alt="App Store" width={120} height={40} className="rounded" />
                  </Link>
                  <Link href="https://play.google.com" target="_blank" rel="noopener noreferrer">
                    <Image
                      src="/images/google-play.png"
                      alt="Google Play"
                      width={120}
                      height={40}
                      className="rounded"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Customer support */}
          <div>
            <h3 className="font-bold text-gray-700 mb-4">Hỗ trợ khách hàng</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/tro-giup" className="text-gray-600 hover:text-orange-500">
                  Trung tâm trợ giúp
                </Link>
              </li>
              <li>
                <Link href="/an-toan" className="text-gray-600 hover:text-orange-500">
                  An toàn mua bán
                </Link>
              </li>
              <li>
                <Link href="/lien-he" className="text-gray-600 hover:text-orange-500">
                  Liên hệ hỗ trợ
                </Link>
              </li>
            </ul>
          </div>

          {/* About us */}
          <div>
            <h3 className="font-bold text-gray-700 mb-4">VỀ GIACONGGIATOT</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/gioi-thieu" className="text-gray-600 hover:text-orange-500">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link href="/quy-che" className="text-gray-600 hover:text-orange-500">
                  Quy chế hoạt động sàn
                </Link>
              </li>
              <li>
                <Link href="/chinh-sach" className="text-gray-600 hover:text-orange-500">
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link href="/giai-quyet-tranh-chap" className="text-gray-600 hover:text-orange-500">
                  Giải quyết tranh chấp
                </Link>
              </li>
              <li>
                <Link href="/tuyen-dung" className="text-gray-600 hover:text-orange-500">
                  Tuyển dụng
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 hover:text-orange-500">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Social links and certification */}
          <div>
            <h3 className="font-bold text-gray-700 mb-4">Liên kết</h3>
            <div className="flex space-x-4 mb-6">
              <Link href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                <Image src="/images/facebook.svg" alt="Facebook" width={32} height={32} />
              </Link>
              <Link href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                <Image src="/images/youtube.svg" alt="Youtube" width={32} height={32} />
              </Link>
              <Link href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                <Image src="/images/linkedin.svg" alt="LinkedIn" width={32} height={32} />
              </Link>
            </div>

            <h3 className="font-bold text-gray-700 mb-4">Chứng nhận</h3>
            <Link href="http://online.gov.vn" target="_blank" rel="noopener noreferrer">
              <Image src="/images/certification.png" alt="Certification" width={130} height={40} />
            </Link>
          </div>
        </div>

        <hr className="my-6" />

        <div className="text-sm text-gray-600">
          <p className="mb-2">
            CÔNG TY TNHH GIACONGGIATOT - Người đại diện theo pháp luật: Nguyễn Văn A; GPDKKD: 0123456789 do sở KH & ĐT
            TP.HCM cấp ngày 01/01/2023
          </p>
          <p className="mb-2">
            Địa chỉ: Tầng 1, Tòa nhà ABC, Số 123 đường XYZ, Phường DEF, Quận GHI, Thành phố Hồ Chí Minh, Việt Nam;
            Email: trogiup@giaconggiatot.vn - Tổng đài CSKH: 1900xxxx (1.000đ/phút)
          </p>
        </div>
      </div>
    </footer>
  )
}
