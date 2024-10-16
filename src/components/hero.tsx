"use client"

import { Button } from "@/components/ui/button"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const images = [
  {
    src: "/placeholder.svg?height=1080&width=1920",
    alt: "Stunning landscape with green cliffs and water"
  },
  {
    src: "/placeholder.svg?height=1080&width=1920",
    alt: "Beautiful mountain range"
  },
  {
    src: "/placeholder.svg?height=1080&width=1920",
    alt: "Serene beach at sunset"
  },
]

export default function Hero() {
  return (
    <div className="relative h-screen w-full overflow-hidden">
      <Carousel className="h-full w-full">
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className="h-full w-full">
              <img
                src={image.src}
                alt={image.alt}
                className="h-full w-full object-cover"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div className="absolute inset-0 bg-black/30" /> {/* Overlay for better text visibility */}
        <div className="absolute inset-0 z-10 flex flex-col justify-between p-6 sm:p-12">
          <div className="max-w-3xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter text-white sm:text-6xl md:text-7xl">
              Discover an Amazing Nature Adventure
            </h1>
            <Button className="bg-white text-black hover:bg-white/90">Get In Touch</Button>
          </div>
          <div className="space-y-4">
            <p className="max-w-2xl text-sm text-white/90 sm:text-base">
              Explore Stunning Landscapes And Connect With Nature On Our Guided Adventures. Experience Breathtaking Vistas And
              Immerse Yourself In The Wild, Embracing The Thrill Of Discovery And Natural Beauty.
            </p>
            <div className="flex space-x-2">
              <Button variant="secondary" className="bg-white/10 text-white hover:bg-white/20">
                Mountain
              </Button>
              <Button variant="secondary" className="bg-white/10 text-white hover:bg-white/20">
                Outdoor
              </Button>
              <Button variant="secondary" className="bg-white/10 text-white hover:bg-white/20">
                Beach
              </Button>
              <Button variant="secondary" className="bg-white/10 text-white hover:bg-white/20">
                Open Sea
              </Button>
            </div>
          </div>
        </div>
        <CarouselPrevious className="absolute left-4 top-1/2 z-20" />
        <CarouselNext className="absolute right-4 top-1/2 z-20" />
      </Carousel>
    </div>
  )
}