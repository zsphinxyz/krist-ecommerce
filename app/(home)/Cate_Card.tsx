import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function Card({img, text, href}: {img:string, text:string, href:string}) {
  return (
      <div className="border select-none relative rounded-md overflow-hidden w-full max-w-72 h-36 sm:w-48 sm:h-72 bg-neutral-200 hover:bg-neutral-300 transition-colors">
        <Link className="group" href={href}>
          <Image draggable={false} src={img} width={250} height={250} alt={text} className="rounded-md scale-110 md:scale-100 group-hover:scale-105 transition-transform relative h-full object-contain sm:object-cover object-left-top sm:object-left z-[2]"/>
          <Button variant='secondary' className="absolute bottom-2 left-1/2 font-gantari -translate-x-1/2 z-[2] font-semibold">{text}</Button>
        </Link>
        <div className="absolute left-0 top-0 z-[0]">
          <span className="text-5xl text-white/50 font-black text-nowrap ">{text}</span>
        </div>
      </div>
    )
}
