import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Image from "next/image";

export default function Deal() {
  return (
    <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-5 cursor-default">
      <div className="px-3 md:px-7 lg:px-10">
        <h1 className="header">Deals of the Month</h1>
        <p className="mb-5 text-pretty text-primary/80 text-base/6">
          It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters
        </p>

        <div className="flex gap-2">

          <div className="border p-1 border-primary/20 rounded-md size-16 text-center">
            <p className="text-xl font-black">120</p>
            <p className="text-sm text-primary/70">Days</p>
          </div>

          <div className="border p-1 border-primary/20 rounded-md size-16 text-center">
            <p className="text-xl font-black">180</p>
            <p className="text-sm text-primary/70">Hours</p>
          </div>

          <div className="border p-1 border-primary/20 rounded-md size-16 text-center">
            <p className="text-xl font-black">15</p>
            <p className="text-sm text-primary/70">Mins</p>
          </div>

          <div className="border p-1 border-primary/20 rounded-md size-16 text-center">
            <p className="text-xl font-black">10</p>
            <p className="text-sm text-primary/70">Secs</p>
          </div>

        </div>
        <Button className="py-1 mt-5 px-8">View All Products <ArrowRight /></Button>
      </div>

      <div className="px-3 mx-auto">
        <Image draggable={false} src='/deal.jpg' width={500} height={500} alt="Deals of the Month" className="h-full object-cover object-top max-h-72 select-none"/>
      </div>
    </div>
  )
}
