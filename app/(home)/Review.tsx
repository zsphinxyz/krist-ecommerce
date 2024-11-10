'use client'

import { motion } from "framer-motion"
import { Star } from "lucide-react"
import Image from "next/image"

function ReviewCard({name, role, desc, img, mult}: {name:string, role:string, desc:string, img:string, mult:number}) {
  const CARD_WIDTH = 330  //px
  return (
    <motion.div className="shadow-md absolute left-0 top-0 shadow-primary/20 rounded-md px-3 py-5 w-80 mx-auto bg-white"
      style={{left: mult}}
      
      animate = {{left: [...Array.from({length: 8}, (_,i) => mult-(CARD_WIDTH*i) )]}}    // extract to: {{left: [mult, mult-330, mult-(330*2), mult-(330*3), mult-(330*4), mult-(330*5), mult-(330*6), mult-(330*7) ]}}
      transition={{times: [0, 0.17, 0.17*2, 0.17*3, 0.17*4, 0.17*5, 0.99999, 1], duration: 18, repeat: Infinity, repeatType: 'loop', ease: 'easeInOut' }}
    >

      <div className="flex">
        <Star className="fill-amber-500 text-transparent size-5" />
        <Star className="fill-amber-500 text-transparent size-5" />
        <Star className="fill-amber-500 text-transparent size-5" />
        <Star className="fill-amber-500 text-transparent size-5" />
        <Star className="fill-amber-500 text-transparent size-5" />
      </div>

      <p className="my-3 text-primary/80 text-xs sm:text-sm">
        {desc}It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum.
      </p>

      <div className="flex gap-2">
        <Image src={img} alt="profile" width={50} height={50} className=" size-10 object-cover object-top rounded-full" />
        <div className="font-gantari">
          <p className="font-bold">{name}</p>
          <p className="text-xs sm:text-sm text-muted-foreground capitalize">{role}</p>
        </div>
      </div>

    </motion.div>
  )
}

export default function Review() {
  return (
    <div className="py-10 mt-10 bg-neutral-100">
      <h1 className="header px-3 md:px-5">What our Costomers say</h1>

      <div className="relative overflow-hidden gap-5 p-1 h-56">
        <ReviewCard name="Leslie Alexander" img="/cate_ethnic.png" role="model" desc='' mult={330 * 0}/>
        <ReviewCard name="Jack Fluid" img="/cate_casual.png" role="influencer" desc='' mult={330 * 1}/>
        <ReviewCard name="Naomi Scott" img="/deal.jpg" role="model" desc='' mult={330 * 2}/>
        <ReviewCard name="Tom Hanks" img="/ig_4.webp" role="actor" desc='' mult={330 * 3}/>
        <ReviewCard name="Emma Watson" img="/ig_3.webp" role="stylist" desc='' mult={330 * 4}/>
        <ReviewCard name="Zendaya coleman" img="/ig_1.jpg" role="actress" desc='' mult={330 * 5}/>

        <ReviewCard name="Leslie Alexander" img="/cate_ethnic.png" role="model" desc='' mult={330 * 6}/>
        <ReviewCard name="Jack Fluid" img="/cate_casual.png" role="influencer" desc='' mult={330 * 7}/>
        <ReviewCard name="Naomi Scott" img="/deal.jpg" role="model" desc='' mult={330 * 8}/>
        <ReviewCard name="Tom Hanks" img="/ig_4.webp" role="actor" desc='' mult={330 * 9}/>
        <ReviewCard name="Emma Watson" img="/ig_3.webp" role="stylist" desc='' mult={330 * 10}/>

      </div>
    </div>
  )
}
