'use client'
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { useState } from "react"
import Card from "./Cate_Card"

export default function Category() {
  const [nextCati, setNextCati] = useState(false)
  return (
    <div className="mx-auto px-3 md:px-10 py-5">
      <div className="flex justify-between">
        <h1 className="header">Shop by Categories</h1>
        <div className="space-x-3 select-none">
          <label htmlFor="next" className="px-3 py-1 rounded-md bg-black hover:bg-black/80 block text-white cursor-pointer">
            <input type="checkbox" id="next" className="peer appearance-none hidden" onClick={() => setNextCati(!nextCati)} />
            <ArrowRight className="peer-checked:scale-[-1] transition-transform" />
          </label>
        </div>

      </div>

      <div className="w-full flex overflow-hidden">
        <div className="grid w-full grid-cols-1 grid-rows-1">
          <motion.div className={`grid grid-cols-1 sm:grid-cols-2 min-[850px]:grid-cols-4 gap-5 sm:gap-10 items-center justify-center mx-auto flex-wrap`} style={{gridColumn: 1, gridRow: 1}}
            initial={{opacity: 1, x:0}}
            animate={nextCati ? {opacity: 0, x: 100}: {opacity: 1, x:0}}
          >
            <Card img="/cate_casual.png" text="Casual Wear" href='' />
            <Card img="/cate_western.png" text="Western Wear" href='' />
            <Card img="/cate_ethnic.png" text="Ethnic Wear" href='' />
            <Card img="/cate_kid.png" text="Kids Wear" href='' />
          </motion.div>

          <motion.div className={`grid grid-cols-1 sm:grid-cols-2 min-[850px]:grid-cols-4 gap-5 sm:gap-10 items-center justify-center mx-auto flex-wrap`} style={{gridColumn: 1, gridRow: 1}}
            initial={{opacity: 0, x: -100}}
            animate={nextCati ? { opacity: 1, x: 0}: {opacity: 0, x: -100}}
          >
            <Card img="/cate_footwear.png" text="Foot Wear" href='' />
            <Card img="/cate_manwear.png" text="Men Wear" href='' />
            <Card img="/cate_feature.png" text="Featured Products" href='' />
            <Card img="/cate_trousers.png" text="Trousers" href='' />
          </motion.div>
        </div>

      </div>

      <div className="mt-3 w-max flex gap-1 mx-auto">
        <div typeof="button" className={`size-3 border border-black cursor-pointer ${nextCati ? 'bg-transparent' : 'bg-black'} p-[1px] bg-clip-content rounded-full mx-auto`} onClick={() => setNextCati(false)} />
        <div typeof="button" className={`size-3 border border-black cursor-pointer ${nextCati ? 'bg-black' : 'bg-transparent'} p-[1px] bg-clip-content rounded-full mx-auto`} onClick={() => setNextCati(true)} />
      </div>
      
    </div>
  )
}
