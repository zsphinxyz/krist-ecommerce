// import { ItemType, ProductType } from "@/lib/products"
// import { notFound } from "next/navigation"

// export default async function page({params}:{params:Promise<{item:string}>}) {
  // let item = (await params).item as string
  // item = decodeURIComponent(item)
  // item = Buffer.from(item, 'base64').toString('utf-8')
  // const [itemName, category] = item.split('|')

  // const res = await fetch('https://zkrist.vercel.app/api/products')
  // const products:ProductType[] = await res.json()
  // let product;
  // try {
  //   product = products.filter((cate:ProductType) => cate.category === category)[0].items.filter((item:ItemType) => item.name === itemName)
  // } catch {
  //   notFound()
  // }
  // return (
  //   <section className="flex flex-col">
  //     <h1 className="font-bold">{category} &gt; {itemName}</h1>
  //     <div className="size-56 bg-green-400">
        
  //     </div>
  //     <div className="">
  //       {
  //         product.map( (item:ItemType, i:number) => (
  //           <div key={i} className="">
  //             <p className="">{item.name}  {item.description}</p>
  //             <p className="">${item.price} | {item.reviews}⭐</p>
  //           </div>
  //         ) )
  //       }
  //     </div>
  //   </section>
  // )
// }

export default function Page() {
  return(
    <p className="">poop</p>
  )
}
