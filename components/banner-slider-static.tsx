import Image from "next/image"

export function BannerSliderStatic() {
  const banners = [
    {
      id: 1,
      imageUrl: "https://www.quangcaophuchung.com/images/banner-new.png",
      alt: "Banner 1",
    },
  ]

  return (
    <div className="banner-slider-container relative h-[180px] md:h-[335px] rounded-lg overflow-hidden">
      <div className="banner-slider-track flex h-full">
        {banners.map((banner) => (
          <div key={banner.id} className="banner-slide flex-shrink-0 w-full h-full relative">
            <Image
              src={banner.imageUrl || "/placeholder.svg"}
              alt={banner.alt}
              fill
              className="banner-image object-contain"
              priority
            />
          </div>
        ))}
      </div>
    </div>
  )
}
