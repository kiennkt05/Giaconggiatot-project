import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { PostCreationForm } from "@/components/post-creation-form"

export default function PostCreationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-gray-100">
        <PostCreationForm />
      </main>
      <Footer />
    </div>
  )
}
