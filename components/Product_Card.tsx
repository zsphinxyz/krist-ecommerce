import { Button } from "@/components/ui/button"
import Image from "next/image"
import { ArrowRightLeft, EyeIcon, Star } from "lucide-react"

interface SellearProp {
  img?: string,
  title: string,
  desc: string,
  price1: string,
}

export default function ProductCard({img,title,desc,price1}:SellearProp) {
  return(
    <div className="w-full max-w-72 mx-auto cursor-default mb-5">
      <div className="bg-neutral-200 hover:bg-neutral-300/90 p-2 relative group transition-colors">
        { img ? <Image draggable={false} src={img} alt="alt" width={250} height={250} className="select-none mx-auto size-40 object-cover group-hover:scale-105 group-hover:translate-x-2 group-hover:[filter:drop-shadow(-5px_5px_2px_#00000025)] [filter:drop-shadow(-2px_2px_1px_#00000025)]  transition-transform" />:
          <div className="size-40 min-h-full min-w-full bg-neutral-500 animate-pulse"></div>
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
        <p className="text-primary/80 font-sans text-base/5">{desc}</p>
        <p className="font-medium text-primary/80 font-sans text-base/5">${price1}</p>
      </div>
    </div>
  )
}