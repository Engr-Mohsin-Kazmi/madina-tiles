import React from "react"
import { cn } from "@/lib/utils"

interface TileLogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string
}

export function TileLogo({ className, ...props }: TileLogoProps) {
  return (
    <svg
      viewBox="0 0 80 135"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      className={cn("inline-block shrink-0", className)}
      {...props}
    >
      {/* Diamond 1: Top Ivory / Cream Tile */}
      <polygon points="40,0 60,11 40,22 20,11" fill="#F3EAE1" />
      {/* Diamond 2: Upper Warm Sand Tile */}
      <polygon points="40,24 80,45.5 40,67 0,45.5" fill="#E7D6C4" />
      {/* Diamond 3: Middle Warm Tan Tile */}
      <polygon points="40,58 80,79.5 40,101 0,79.5" fill="#D6B999" />
      {/* Overlap Diamond: Layered Intersection */}
      <polygon points="40,58 47.62,62.5 40,67 32.38,62.5" fill="#CFB089" />
      {/* Diamond 4: Foreground Bronze Tile */}
      <polygon points="40,92 80,113.5 40,135 0,113.5" fill="#C6A175" />
    </svg>
  )
}
