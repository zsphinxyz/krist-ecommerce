import { Button } from "@/components/ui/button"
import Image from "next/image"
import { Heart, Star } from "lucide-react"
import CardLoading from "./CardLoading"
import Link from "next/link"
import { Suspense } from "react"

interface SellearProp {
  img?: string,
  title: string,
  desc: string,
  price1: number,
  href: string,
  review?: number,
  hot?:boolean,
}

export default async function SellerCard({img,title,desc,price1, href, review, hot}:SellearProp) {
  return(
    <Link href={href} className="w-full max-w-60 mx-auto block overflow-hidden bg-neutral-100 p-1">
      <div className="bg-neutral-100 hover:bg-neutral-200/90 relative group transition-colors overflow-hidden">
        { 
        img ? 
          <Suspense fallback={<CardLoading />}>
            <Image priority loading="eager" draggable={false} src={img} alt={title} width={250} height={250} 
              className="select-none aspect-square mx-auto w-full min-h-full object-cover group-hover:scale-105 group-hover:translate-x-2 transition-transform" 
            /> 
          </Suspense>
          :
          <CardLoading />
        }
        <div className="flex flex-col gap-3 items-center justify-center absolute right-2 top-2 transition-opacity duration-500 delay-100">
          <Button title="Add to favourites" variant='secondary' className="rounded-full size-7 "><Heart /></Button>
          {/* <Button title="..." variant='outline' className="rounded-full size-7 "><ArrowRightLeft /></Button>
          <Button title="View Details" variant='outline' className="rounded-full size-7 "><EyeIcon /></Button> */}
        </div>

        { hot &&
          <div className="absolute left-0 top-0 w-8 h-8 px-4flex items-center justify-center">
            <p className="absolute z-10 left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 text-xs text-white">Hot</p>
            <svg className="absolute left-0 top-0" xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="none" viewBox="0 0 59 56" version="1.1"><path fill="rgba(255, 61, 61, 1)" d="M26.2 50.1c-1.2-1.9-3.7-2.5-5.6-1.3l-5.2 3.3-.3-6.2c-.1-2.3-2-4-4.3-3.9l-6.2.3 2.8-5.5c1-2 .3-4.5-1.7-5.6l-5.4-3 5.4-3c2-1.1 2.7-3.6 1.7-5.6L4.5 14l6.2.3c2.3.1 4.2-1.6 4.3-3.9l.3-6.2 5.3 3.3c1.9 1.2 4.4.6 5.6-1.4L29.4.8l3.2 5.3c1.2 1.9 3.7 2.5 5.6 1.3l5.2-3.3.3 6.2c.1 2.3 2 4 4.3 3.9l6.2-.3-2.8 5.5c-1 2-.3 4.5 1.7 5.6l5.4 3-5.4 3c-2 1.1-2.7 3.6-1.7 5.6l2.8 5.5-6.2-.3c-2.3-.1-4.2 1.6-4.3 3.9l-.3 6.2-5.3-3.2c-1.9-1.2-4.4-.6-5.6 1.4l-3.2 5.3-3.1-5.3Z"></path></svg>
          </div>
        }
      </div>

      <div className="font-gantari px-3 space-y-1">
        <div className="flex justify-between mt-1">
          <p className="text-lg font-semibold">{title}</p>
          <p className="">
            <sup className="font-bold">$</sup>
            <span className="font-bold text-lg">{price1.toString().split('.')[0]}.</span>
            <sup className="font-bold">{price1.toString().split('.')[1] || '00'}</sup>
          </p>
        </div>
        <p className="font-sans text-base/5 text-pretty text-primary/80">{desc}</p>
        <p className="flex">{Array(review).fill(0).map( (i,j) => <Star key={j} className="fill-amber-500 mb-1 text-transparent size-4" />)}</p>
        <Button variant='outline' size='sm' className="w-max rounded-full text-primary hover:bg-secondary py-1 font-semibold relative z-10">Add to Card</Button>
      </div>
    </Link>
  )
}