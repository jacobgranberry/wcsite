"use client";

import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { useRef, useState, useEffect } from "react";
import type { CarouselApi } from "@/components/ui/carousel";
import ghosthill from "@/assets/hero/ghost_hill4.jpg";
import kl from "@/assets/hero/kl_render2.webp";
import hg from "@/assets/hero/highgarden2.png";
import winterfell from "@/assets/hero/winterfell.jpeg";
import ButtonAnimatedGradient from "./button-animated-gradient";
import GradualSpacing from "./ui/gradual-spacing";
import ShimmerButton from "./ui/shimmer-button";

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
    src: winterfell.src,
    alt: "Winterfell",
    label: "Winterfell",
  },
  {
    src: ghosthill.src,
    alt: "Ghost Hill",
    label: "Ghost Hill",
  },
];

export default function Hero() {
  const [carouselApi, setCarouselApi] = useState<CarouselApi>();
  const [currentIndex, setCurrentIndex] = useState(0);
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!carouselApi) {
      return;
    }

    const onSelect = () => {
      setCurrentIndex(carouselApi.selectedScrollSnap());
    };

    carouselApi.on("select", onSelect);

    // Cleanup function
    return () => {
      carouselApi.off("select", onSelect);
    };
  }, [carouselApi]);

  const changeSlide = (index: number) => {
    if (carouselApi) {
      carouselApi.scrollTo(index);
      setCurrentIndex(index);
    }
  };

  return (
    <div className=' w-full overflow-hidden'>
      <Carousel
        ref={carouselRef}
        className='h-full w-full'
        setApi={setCarouselApi}
        opts={{
          align: "start",
        }}
      >
        <CarouselContent className='relative '>
          {images.map((image, index) => (
            <CarouselItem key={index}>
              <img
                src={image.src}
                alt={image.alt}
                className='w-full h-4/5 xl:h-[calc(100vh-64px)] object-cover'
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <div
          className='absolute inset-y-0 left-0 w-3/5 bg-gradient-to-r from-black via-black/40 to-transparent'
          aria-hidden='true'
        />
        <div className='absolute inset-0 z-10 flex flex-col justify-between p-6 sm:p-12'>
          <div className='max-w-3xl space-y-8'>
            <h1 className='text-4xl font-medium tracking-tight text-white sm:text-6xl md:text-7xl font-serif'>
              Explore the world of Westeros inside Minecraft
            </h1>
            {/* <GradualSpacing
              className='font-display text-center text-4xl -tracking-widest dark:text-black text-white md:text-7xl md:leading-[5rem] font-serif'
              text='Westeros inside Minecraft'
            /> */}
            {/* <ButtonAnimatedGradient /> */}
            <div className='flex flex-row gap-4'>
              <ShimmerButton className='shadow-2xl'>
                <span className='whitespace-pre-wrap text-center text-sm font-medium leading-none tracking-tight text-white dark:from-white dark:to-slate-900/10 lg:text-lg'>
                  Learn How To Explore
                </span>
              </ShimmerButton>
              <Button size='lg'>Apply to Build</Button>
            </div>
          </div>
          <div className='space-y-4'>
            <p className='max-w-2xl text-lg text-white/90 sm:text-base'>
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
                  className={`bg-white/10 text-white hover:bg-white/20 transition-all duration-200 ${
                    currentIndex === index
                      ? "ring-2 ring-white bg-white/30"
                      : "ring-0 hover:ring-1 hover:ring-white/50"
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
