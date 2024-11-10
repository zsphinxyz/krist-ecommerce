// import CardLoading from "@/components/CardLoading"
// import SellerCard from "@/components/Seller_Card"
// import { ItemType, ProductType } from "@/lib/products"
// import Link from "next/link"
// import { Suspense } from "react"

// export default async function Page({searchParams}:{searchParams:Promise<{ [c: string]: string | string[] | undefined }>}) {
  // const res = await fetch('https://zkrist.vercel.app/api/products', {cache: 'force-cache'})
  // const products = await res.json()
  // const c = (await searchParams).c || "Men's Wear"

  // return (
  //   <section className="flex bg-white min-h-dvh">

  //     <div className="bg-neutral-200 basis-1/3 max-w-44 pt-3">
  //       <p className="font-bold mb-2">Product Categories</p>
  //       {
  //         products.map((product:ProductType) => (
  //           <div key={product.category} className="">
  //             <Link href={`?c=${product.category}`} className={`pl-1 mb-1 ${product.category == c ? 'text-primary font-bold': 'font-medium text-primary/70'}`}>{product.category}</Link>
  //           </div>
  //         ))
  //       }
  //     </div>

  //     <div className="basis-full">
  //       <h1 className="text-2xl font-medium">{c}</h1>
  //       {
  //         products.filter((product:ProductType) => product.category == c)[0].items.map( (item:ItemType) => (
  //           <div className="" key={item.name} >
  //             <Suspense fallback={<CardLoading />}>
  //               <SellerCard img={item.img} title={item.name} desc={item.description} price1={item.price} href={`products/${Buffer.from(item.name+'|'+c).toString('base64')}`}   />
  //             </Suspense>
  //           </div>
  //         ) )
  //       }
  //     </div>

  //     <div className="">
  //     {/* https://drive.google.com/file/d/1fN-X0rPeV14563HjxWPZTVH9-EoJ3vG-/view?usp=drive_link */}
  //       {/* <Image src='https://lh3.googleusercontent.com/d/1fN-X0rPeV14563HjxWPZTVH9-EoJ3vG-' alt="" width={500} height={500} /> */}
  //     </div>

  //   </section>
  // )
// }

export default function Page() {
  return(
    <p className="">poop</p>
  )
}
