'use client'

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import Image from "next/image"

function ReviewCard() {

  return (
    <motion.div className="shadow-md shadow-primary/20 rounded-md px-3  py-5 w-full max-w-80 mx-auto bg-white"
      style={{}}
      animate = {{x: [0,-340, 0]}}
      transition={{times: [0, 0.999,1], duration: 7, repeat: Infinity, repeatType: 'loop', ease: 'linear' }}
    >

      <div className="flex">
        <Star className="fill-amber-500 text-transparent size-5" />
        <Star className="fill-amber-500 text-transparent size-5" />
        <Star className="fill-amber-500 text-transparent size-5" />
        <Star className="fill-amber-500 text-transparent size-5" />
        <Star className="fill-amber-500 text-transparent size-5" />
      </div>

      <p className="my-3 text-primary/80 text-xs sm:text-sm">
        It is a long established fact thta a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.
      </p>

      <div className="flex gap-2">
        <Image src='/deal.jpg' alt="profile" width={50} height={50} className="rounded-full" />
        <div className="font-gantari">
          <p className="font-bold">Leslie Alexander</p>
          <p className="text-xs sm:text-sm text-muted-foreground">Model</p>
        </div>
      </div>

    </motion.div>
  )
}

export default function Review() {
  return (
    <div className="py-10 mt-10 bg-neutral-100">
      <h1 className="header px-3 md:px-5">What our Costomer say's</h1>

      <div className="flex *:flex-shrink-0 overflow-hidden gap-5 p-2">
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
        <ReviewCard />
      </div>
    </div>
  )
}
