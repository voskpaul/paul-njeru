"use client"

import Image from "next/image"
import { useState } from "react"

export const profilePhotoSource =
  "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/myself-3YO9llTuXHkZO6H8T7l96jWIXggMFQ.jpg"

const localPhotoFallback = "/images/paul-njeru.jpg"

type ProfilePhotoProps = {
  alt: string
  className: string
  sizes: string
}

export function ProfilePhoto({ alt, className, sizes }: ProfilePhotoProps) {
  const [src, setSrc] = useState(profilePhotoSource)

  return (
    <Image
      src={src}
      alt={alt}
      className={className}
      fill
      sizes={sizes}
      onError={() => setSrc((current) => current === profilePhotoSource ? localPhotoFallback : current)}
    />
  )
}
