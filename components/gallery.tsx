"use client"

import { useState } from "react"
import Image from "next/image"
import { Expand, Info } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { Reveal } from "@/components/reveal"
import { Lightbox, type GalleryImage } from "@/components/lightbox"

type GalleryKey =
  | "bathroom"
  | "floor"
  | "wall"
  | "porcelain"
  | "marble"
  | "kitchen"
  | "interior"
  | "finishing"

// To swap in the owner's real photos later, just replace these files in
// /public/images/projects/ (keep the same filenames) — no code changes needed.
const GALLERY: { key: GalleryKey; src: string }[] = [
  { key: "bathroom", src: "/images/projects/bathroom-tiles.png" },
  { key: "marble", src: "/images/projects/marble.png" },
  { key: "floor", src: "/images/projects/floor-installation.png" },
  { key: "porcelain", src: "/images/projects/porcelain.png" },
  { key: "kitchen", src: "/images/projects/kitchen-tiles.png" },
  { key: "wall", src: "/images/projects/wall-tiles.png" },
  { key: "interior", src: "/images/projects/modern-interior.png" },
  { key: "finishing", src: "/images/projects/finishing-detail.png" },
]

export function Gallery() {
  const { t } = useLanguage()
  const [active, setActive] = useState<number | null>(null)

  const images: GalleryImage[] = GALLERY.map(({ key, src }) => ({
    src,
    alt: t.gallery.items[key],
  }))

  return (
    <section id="work" className="scroll-mt-20 bg-background py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Reveal className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
            {t.gallery.label}
          </span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            {t.gallery.title}
          </h2>
          <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
            {t.gallery.subtitle}
          </p>
        </Reveal>

        {/* Mobile: Horizontal scroll gallery */}
        <Reveal className="mt-12 block md:hidden">
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
            {images.map((img, i) => (
              <button
                key={GALLERY[i].key}
                type="button"
                onClick={() => setActive(i)}
                className="group relative flex-shrink-0 w-full max-w-xs h-72 overflow-hidden rounded-xl border border-border focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 snap-center"
                aria-label={img.alt}
              >
                <Image
                  src={img.src || "/placeholder.svg"}
                  alt={img.alt}
                  fill
                  sizes="(max-width: 640px) 90vw, 400px"
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  loading={i < 4 ? "eager" : "lazy"}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-[rgba(20,18,16,0.55)] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute bottom-3 start-3 flex items-center gap-2 text-sm font-medium text-background opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Expand className="size-4" aria-hidden="true" />
                  {img.alt}
                </span>
              </button>
            ))}
          </div>
          <style jsx>{`
            .scrollbar-hide {
              -ms-overflow-style: none;
              scrollbar-width: none;
            }
            .scrollbar-hide::-webkit-scrollbar {
              display: none;
            }
          `}</style>
        </Reveal>

        {/* Desktop: Column layout */}
        <Reveal className="mt-12 hidden md:block">
          <div className="[column-fill:_balance] gap-4 sm:columns-2 lg:columns-3">
            {images.map((img, i) => (
              <button
                key={GALLERY[i].key}
                type="button"
                onClick={() => setActive(i)}
                className="group relative mb-4 block w-full overflow-hidden rounded-xl border border-border focus:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
                aria-label={img.alt}
              >
                <Image
                  src={img.src || "/placeholder.svg"}
                  alt={img.alt}
                  width={800}
                  height={i % 3 === 0 ? 1000 : 640}
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  loading={i < 6 ? "eager" : "lazy"}
                />
                <span className="absolute inset-0 bg-gradient-to-t from-[rgba(20,18,16,0.55)] via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <span className="absolute bottom-3 start-3 flex items-center gap-2 text-sm font-medium text-background opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                  <Expand className="size-4" aria-hidden="true" />
                  {img.alt}
                </span>
              </button>
            ))}
          </div>
        </Reveal>

        <p className="mt-8 flex items-center justify-center gap-2 text-center text-sm text-muted-foreground">
          <Info className="size-4 shrink-0" aria-hidden="true" />
          {t.gallery.note}
        </p>
      </div>

      <Lightbox
        images={images}
        index={active}
        onClose={() => setActive(null)}
        onNavigate={setActive}
      />
    </section>
  )
}
