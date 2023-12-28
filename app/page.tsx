import Image from 'next/image'
import Link from 'next/link'
import CarouselSize from './myComponents/CarouselSize'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex flex-col items-center justify-center space-y-6">
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
