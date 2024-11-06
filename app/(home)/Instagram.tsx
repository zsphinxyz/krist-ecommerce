import { CreditCardIcon, DollarSignIcon, HeadphonesIcon, Package } from 'lucide-react'
import Image from 'next/image'
import React from 'react'

export default function Instagram() {
  return (
    <div className="mt-10">
      <h1 className="header pl-3">Our Instagram Stories</h1>

      <div className="grid grid-cols-1 w-max md:w-auto lg:w-max mx-auto sm:grid-cols-2 md:grid-cols-4 place-items-center gap-2 px-2">
        <Image src='/ig_1.jpg' alt='ig1' width={400} height={400} className='w-60 aspect-square object-top object-cover h-full' />
        <Image src='/ig_2.jpg' alt='ig1' width={400} height={400} className='w-60 aspect-square object-top object-cover h-full' />
        <Image src='/ig_3.webp' alt='ig1' width={400} height={400} className='w-60 aspect-square object-top object-cover h-full' />
        <Image src='/ig_4.webp' alt='ig1' width={400} height={400} className='w-60 aspect-square object-top object-cover h-full' />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 max-w-max mx-auto md:grid-cols-4 mt-10 gap-6 sm:gap-5 px-3 font-gantari">
        <div className="flex gap-1 items-center md:block">
          <Package className='size-8 mb-3 text-primary/90' />
          <p className="font-bold text-lg/6">Free Shipping <br />
            <span className="text-sm text-primary/70 font-medium">Free shipping for order above $150</span>
          </p>
          
        </div>
        <div className="flex gap-1 items-center md:block">
          <DollarSignIcon className='size-8 mb-3 text-primary/90' />
          <p className="font-bold text-lg/6">Money Guarantee <br />
            <span className="text-sm text-primary/70 font-medium">Within 30 days for an exchange</span>
          </p>
          
        </div>
        <div className="flex gap-1 items-center md:block">
          <HeadphonesIcon className='size-8 mb-3 text-primary/90' />
          <p className="font-bold text-lg/6">Online Support <br />
            <span className="text-sm text-primary/70 font-medium">24 hours a day, 7 days a week</span>
          </p>
        
        </div>
        <div className="flex gap-1 items-center md:block">
          <CreditCardIcon className='size-8 mb-3 text-primary/90' />
          <p className="font-bold text-lg/6">Flexible Payment <br />
            <span className="text-sm text-primary/70 font-medium">Pay with multiple credit cards</span>
          </p>
        </div>
      </div>
    </div>
  )
}
