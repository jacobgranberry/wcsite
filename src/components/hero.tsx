"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useRef, useState } from "react";
import type { CarouselApi } from "@/components/ui/carousel";
import ghosthill from "@/assets/ghost_hill4.jpg";
import kl from "@/assets/kl_render2.webp";
import hg from "@/assets/highgarden2.png";

const images = [
  {
    src: hg.src,
    alt: "Highgarden",
    label: "Highgarden",
  },
  {
    src: kl.src,
    alt: "Kings Landing",
    label: "King's Landing",
  },
  {
    src: ghosthill.src,
    alt: "Ghost Hill",
    label: "Ghost Hill",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const carouselRef = useRef<HTMLDivElement>(null);

  const changeSlide = (index: number) => {
    if (carouselApi) {
      carouselApi.scrollTo(index);
    }
  };

  return (
    <div className='relative h-4/5 xl:h-[calc(100vh-64px)] w-full overflow-hidden'>
      <Carousel
        ref={carouselRef}
        className='h-full w-full'
        // current={currentSlide}
        // onCurrentChange={setCurrentSlide}
        setApi={setCarouselApi}
      >
        <CarouselContent>
          {images.map((image, index) => (
            <CarouselItem key={index} className='w-full'>
              <img
                src={image.src}
                alt={image.alt}
                className='w-full object-cover'
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div
          className='absolute inset-y-0 left-0 w-3/5 bg-gradient-to-r from-black via-black/40 to-transparent '
          aria-hidden='true'
        />
        <div className='absolute inset-0 z-10 flex flex-col justify-between p-6 sm:p-12'>
          <div className='max-w-3xl space-y-4'>
            <h1 className='text-4xl font-medium tracking-tight text-white sm:text-6xl md:text-7xl font-serif '>
              Explore the world of Westeros inside Minecraft
            </h1>
            <Button className='bg-white text-black hover:bg-white/90'>
              Learn How To Join
            </Button>
          </div>
          <div className='space-y-4'>
            <p className='max-w-2xl text-sm text-white/90 sm:text-base'>
              Explore a meticulously crafted virtual realm inspired by George
              R.R. Martin's epic fantasy world. From King's Landing to
              Winterfell, our immersive Minecraft server offers a stunning,
              player-driven recreation of the Seven Kingdoms.
            </p>
            <div className='flex space-x-2'>
              {images.map((image, index) => (
                <Button
                  key={index}
                  variant='secondary'
                  className={`bg-white/10 text-white hover:bg-white/20 ${
                    currentSlide === index ? "ring-2 ring-white" : ""
                  }`}
                  onClick={() => changeSlide(index)}
                >
                  {image.label}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  );
}
