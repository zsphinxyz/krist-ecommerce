import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRightLeft, EyeIcon, Star } from "lucide-react"
import CardLoading from "./CardLoading"
import Link from "next/link"
import { Suspense } from "react"

interface SellearProp {
  img?: string,
  title: string,
  desc: string,
  price1: number,
  price2?: string,
  href: string,
}

export default async function SellerCard({img,title,desc,price1, price2, href}:SellearProp) {
  return(
    <Link href={href} className="w-full max-w-60 mx-auto block overflow-hidden">
      <div className="bg-neutral-100 hover:bg-neutral-200/90 p-2 relative group transition-colors">
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
        <div className="flex flex-col gap-3 items-center justify-center absolute right-2 top-2 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100">
          <Button title="Add to favourites" variant='outline' className="rounded-full size-7 "><Star /></Button>
          <Button title="..." variant='outline' className="rounded-full size-7 "><ArrowRightLeft /></Button>
          <Button title="View Details" variant='outline' className="rounded-full size-7 "><EyeIcon /></Button>
        </div>
        <Button className="w-full bg-white text-primary hover:bg-secondary py-1 font-semibold md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100 relative z-10">Add to Card</Button>
      </div>

      <div className="font-gantari px-3">
        <p className="text-lg font-semibold">{title}</p>
        <p className="font-sans text-base/4 text-primary/80">{desc}</p>
        <p className="font-medium text-base/7 text-primary/80">${price1} <s className="text-primary/50 empty:hidden">{price2 && `$ ${price2}`}</s></p>
      </div>
    </Link>
  )
}