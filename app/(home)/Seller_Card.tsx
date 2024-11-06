import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRightLeft, EyeIcon, Star } from "lucide-react"

interface SellearProp {
  img: string,
  title: string,
  desc: string,
  price1: string,
  price2: string
}

export default function SellerCard({img,title,desc,price1, price2}:SellearProp) {
  return(
    <div className="w-full max-w-72 mx-auto cursor-default">
      <div className="bg-neutral-200 hover:bg-neutral-300/90 p-2 relative group transition-colors">
        <Image draggable={false} src={img} alt="alt" width={250} height={250} className="select-none mx-auto size-40 object-cover group-hover:scale-105 group-hover:translate-x-2 group-hover:[filter:drop-shadow(-5px_5px_2px_#00000025)] [filter:drop-shadow(-2px_2px_1px_#00000025)]  transition-transform" />

        <div className="flex flex-col gap-3 items-center justify-center absolute right-2 top-2 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100">
          <Button variant='outline' className="rounded-full size-7 "><Star /></Button>
          <Button variant='outline' className="rounded-full size-7 "><ArrowRightLeft /></Button>
          <Button variant='outline' className="rounded-full size-7 "><EyeIcon /></Button>
        </div>
        <Button className="w-full bg-white text-primary hover:bg-secondary py-1 font-semibold md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500 delay-100 relative z-10">Add to Card</Button>
      </div>

      <div className="font-gantari px-3">
        <p className="text-lg font-semibold">{title}</p>
        <p className="font-medium text-sm text-primary/80">{desc}</p>
        <p className="font-medium text-sm text-primary/80">${price1} <s className="text-primary/50">${price2}</s></p>
      </div>
    </div>
  )
}