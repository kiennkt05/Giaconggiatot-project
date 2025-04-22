import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Header() {
  return (
    <header className="border-b">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Link href="/" className="text-xl font-bold">
              Giaconggiatot
            </Link>
          </div>

          <div className="flex items-center">
            <Button variant="ghost" size="sm">
              Đăng nhập
            </Button>
          </div>
        </div>

        <nav className="flex space-x-4 mt-4">
          <Link
            href="/trang-chu"
            className="text-sm font-medium py-2 border-b-2 border-transparent hover:border-primary transition-colors"
          >
            Trang chủ
          </Link>
          <Link href="/" className="text-sm font-medium py-2 border-b-2 border-primary">
            Khám phá
          </Link>
          <Link
            href="/gioi-thieu"
            className="text-sm font-medium py-2 border-b-2 border-transparent hover:border-primary transition-colors"
          >
            Giới thiệu
          </Link>
          <Link
            href="/dich-vu"
            className="text-sm font-medium py-2 border-b-2 border-transparent hover:border-primary transition-colors"
          >
            Dịch vụ
          </Link>
        </nav>
      </div>
    </header>
  )
}
