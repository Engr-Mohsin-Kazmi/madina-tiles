"use client"

import { useCallback, useEffect } from "react"
import Image from "next/image"
import { X, ChevronLeft, ChevronRight } from "lucide-react"
import { useLanguage } from "@/components/language-provider"

export interface GalleryImage {
  src: string
  alt: string
}

interface LightboxProps {
  images: GalleryImage[]
  index: number | null
  onClose: () => void
  onNavigate: (index: number) => void
}

export function Lightbox({ images, index, onClose, onNavigate }: LightboxProps) {
  const { t, dir } = useLanguage()
  const isOpen = index !== null

  const goPrev = useCallback(() => {
    if (index === null) return
    onNavigate((index - 1 + images.length) % images.length)
  }, [index, images.length, onNavigate])

  const goNext = useCallback(() => {
    if (index === null) return
    onNavigate((index + 1) % images.length)
  }, [index, images.length, onNavigate])

  useEffect(() => {
    if (!isOpen) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose()
      // Arrows respect visual direction
      const prevKey = dir === "rtl" ? "ArrowRight" : "ArrowLeft"
      const nextKey = dir === "rtl" ? "ArrowLeft" : "ArrowRight"
      if (e.key === prevKey) goPrev()
      if (e.key === nextKey) goNext()
    }
    document.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      document.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [isOpen, onClose, goPrev, goNext, dir])

  if (index === null) return null
  const current = images[index]
  const PrevIcon = dir === "rtl" ? ChevronRight : ChevronLeft
  const NextIcon = dir === "rtl" ? ChevronLeft : ChevronRight

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={current.alt}
      className="fixed inset-0 z-[100] flex items-center justify-center bg-[rgba(20,18,16,0.94)] p-4 animate-fade-in backdrop-blur-sm"
      onClick={onClose}
    >
      <button
        type="button"
        onClick={onClose}
        aria-label={t.gallery.close}
        className="absolute end-4 top-4 grid size-11 place-items-center rounded-full bg-background/10 text-background transition-colors hover:bg-background/20"
      >
        <X className="size-6" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          goPrev()
        }}
        aria-label={t.gallery.prev}
        className="absolute start-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-background/10 text-background transition-colors hover:bg-background/20 md:start-6"
      >
        <PrevIcon className="size-6" />
      </button>

      <button
        type="button"
        onClick={(e) => {
          e.stopPropagation()
          goNext()
        }}
        aria-label={t.gallery.next}
        className="absolute end-3 top-1/2 grid size-11 -translate-y-1/2 place-items-center rounded-full bg-background/10 text-background transition-colors hover:bg-background/20 md:end-6"
      >
        <NextIcon className="size-6" />
      </button>

      <figure
        className="relative flex max-h-[85vh] w-full max-w-4xl flex-col"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative aspect-[4/3] w-full overflow-hidden rounded-lg">
          <Image
            src={current.src || "/placeholder.svg"}
            alt={current.alt}
            fill
            sizes="(max-width: 896px) 100vw, 896px"
            className="object-contain"
          />
        </div>
        <figcaption className="mt-3 text-center text-sm text-background/80">
          {current.alt}
          <span className="ms-2 text-background/50">
            {index + 1} / {images.length}
          </span>
        </figcaption>
      </figure>
    </div>
  )
}
