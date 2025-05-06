import Link from "next/link"
import Image from "next/image"

export function FooterStatic() {
  return (
    <footer className="site-footer bg-white border-t">
      <div className="footer-container container mx-auto px-4 py-8">
        <div className="footer-content grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Download app section */}
          <div className="footer-download">
            <h3 className="footer-heading font-bold text-gray-700 mb-4">TẢI ỨNG DỤNG GIACONGGIATOT</h3>
            <div className="footer-download-content flex">
              <div className="footer-qr mr-4">
                <Image src="/images/qr-code.png" alt="QR Code" width={87} height={87} className="border" />
              </div>
              <div className="footer-app-links">
                <div className="flex flex-col space-y-2">
                  <Link href="#" target="_blank" rel="noopener noreferrer" className="footer-app-link">
                    <Image
                      src="https://static.chotot.com/storage/default/ios.svg"
                      alt="App Store"
                      width={120}
                      height={40}
                      className="rounded"
                    />
                  </Link>
                  <Link href="#" target="_blank" rel="noopener noreferrer" className="footer-app-link">
                    <Image
                      src="https://static.chotot.com/storage/default/android.svg"
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
          <div className="footer-support">
            <h3 className="footer-heading font-bold text-gray-700 mb-4">Hỗ trợ khách hàng</h3>
            <ul className="footer-support-links space-y-2">
              <li>
                <Link href="#" className="footer-link text-gray-600 hover:text-orange-500">
                  Trung tâm trợ giúp
                </Link>
              </li>
              <li>
                <Link href="#" className="footer-link text-gray-600 hover:text-orange-500">
                  An toàn mua bán
                </Link>
              </li>
              <li>
                <Link href="#" className="footer-link text-gray-600 hover:text-orange-500">
                  Liên hệ hỗ trợ
                </Link>
              </li>
            </ul>
          </div>

          {/* About us */}
          <div className="footer-about">
            <h3 className="footer-heading font-bold text-gray-700 mb-4">VỀ GIACONGGIATOT</h3>
            <ul className="footer-about-links space-y-2">
              <li>
                <Link href="#" className="footer-link text-gray-600 hover:text-orange-500">
                  Giới thiệu
                </Link>
              </li>
              <li>
                <Link href="#" className="footer-link text-gray-600 hover:text-orange-500">
                  Quy chế hoạt động sàn
                </Link>
              </li>
              <li>
                <Link href="#" className="footer-link text-gray-600 hover:text-orange-500">
                  Chính sách bảo mật
                </Link>
              </li>
              <li>
                <Link href="#" className="footer-link text-gray-600 hover:text-orange-500">
                  Giải quyết tranh chấp
                </Link>
              </li>
              <li>
                <Link href="#" className="footer-link text-gray-600 hover:text-orange-500">
                  Tuyển dụng
                </Link>
              </li>
              <li>
                <Link href="#" className="footer-link text-gray-600 hover:text-orange-500">
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Social links and certification */}
          <div className="footer-social">
            <h3 className="footer-heading font-bold text-gray-700 mb-4">Liên kết</h3>
            <div className="footer-social-links flex space-x-4 mb-6">
              <Link href="#" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <Image
                  src="https://static.chotot.com/storage/default/facebook.svg"
                  alt="Facebook"
                  width={32}
                  height={32}
                />
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <Image
                  src="https://static.chotot.com/storage/default/youtube.svg"
                  alt="Youtube"
                  width={32}
                  height={32}
                />
              </Link>
              <Link href="#" target="_blank" rel="noopener noreferrer" className="footer-social-link">
                <Image
                  src="https://static.chotot.com/storage/default/linkedin.svg"
                  alt="LinkedIn"
                  width={32}
                  height={32}
                />
              </Link>
            </div>

            <h3 className="font-bold text-gray-700 mb-4">Chứng nhận</h3>
            <Link href="#" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://static.chotot.com/storage/default/certificate.webp"
                alt="Certification"
                width={130}
                height={40}
              />
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
