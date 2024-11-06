import { Button } from '@/components/ui/button'
import { ArrowRight } from 'lucide-react'
import React from 'react'

export default function Hero() {
  return (
    <section className="w-full h-[720px] p-2 md:p-4 lg:p-5 overflow-hidden">
      <div className="bg-[url('../public/hero.png'),linear-gradient(rgb(222,222,222),rgb(211,211,211))] bg-contain bg-no-repeat bg-right h-full flex items-center relative">

        <div className="pl-10 w-max z-10 md:mx-0 mx-auto cursor-default">
          <p className="text-2xl xl:text-3xl font-gantari font-medium">Classic Exclusive</p>
          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-black font-serif my-3">Women&apos;s Collection</h1>
          <p className="font-gantari text-lg xl:text-xl font-medium ml-2">UPTO 40% OFF</p>

          <Button className='mt-5'>Shop Now <ArrowRight /></Button>

          <div className="select-none text-[120px] sm:text-[220px] font-black leading-tight text-white/30 absolute -bottom-2 sm:-bottom-10 left-20 bg-blend-soft-light">
            <span className="">BEST</span>
          </div>
        </div>
        
          {/* <Image src='/hero.png' alt='hero' width={500} height={500} className='absolute right-0 top-0 h-full w-auto object-cover z-0 ' /> */}
      </div>
    </section>
  )
}
