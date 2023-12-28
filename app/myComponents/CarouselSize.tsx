"use client";
import React from "react";
import Image from "next/image";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const arrayOfImages = [
  {
    src: "/colorful1.jpg",
    alt: "Image 1",
  },
  {
    src: "/colorful2.jpg",
    alt: "Image 2",
  },
  {
    src: "/colorful3.jpg",
    alt: "Image 3",
  },
  {
    src: "/colorful4.jpg",
    alt: "Image 4",
  },
  {
    src: "/colorful5.jpg",
    alt: "Image 5",
  },
];

const CarouselSize = () => {
  return (
    <Carousel
      opts={{
        align: "start",
      }}
      className="w-full"
    >
      <CarouselContent>
        {arrayOfImages.map((img, index) => (
          <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
            <div className="p-1">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-0">
                  <Image
                    src={img.src}
                    alt={img.alt}
                    className="object-cover w-full h-full rounded-md"
                    width={500}
                    height={500}
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
};

export default CarouselSize;
