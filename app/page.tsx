import Image from 'next/image'
import Link from 'next/link'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

const arrayOfImages = [
  {
    src: '/colorful1.jpg',
    alt: 'Image 1',
  },
  {
    src: '/colorful2.jpg',
    alt: 'Image 2',
  },
  {
    src: '/colorful3.jpg',
    alt: 'Image 3',
  },
  {
    src: '/colorful4.jpg',
    alt: 'Image 4',
  },
  {
    src: '/colorful5.jpg',
    alt: 'Image 5',
  },
]

function CarouselSize() {
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
  )
}

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center gap-3">
        <p className='pb-3 text-indigo-500 text-sm'>Great Business, Great Prices</p>
        <h1 className="lg:text-6xl text-5xl font-bold text-gray-900 text-center">
          We are the Super Duper Good Company
        </h1>
        <p className='text-center text-slate-400 text'>
          We are the Super Duper Good Company. We do super duper good things. Work with us today! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eius quos ut distinctio, excepturi odio voluptate sit quidem atque rem nisi provident aperiam at.
        </p>
        <Link href="/contact" className='mt-2 text-sm bg-indigo-400 p-2 rounded-md text-slate-50 hover:bg-indigo-600 transition-all ease-in-out'>
          Get in touch
        </Link>
      </div>
      <div className='mt-4'>
        <CarouselSize />
      </div>
    </main>
  )
}
