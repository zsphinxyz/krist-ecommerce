import CardCounter from "@/components/CardCounter"
import CardLoading from "@/components/CardLoading"
import { Button } from "@/components/ui/button"
import { ItemType, ProductType } from "@/lib/products"
import { Star } from "lucide-react"
import Image from "next/image"
import { notFound } from "next/navigation"
import { Suspense } from "react"

export default async function page({params}:{params:Promise<{item:string}>}) {
  let item = (await params).item as string
  item = decodeURIComponent(item)
  item = Buffer.from(item, 'base64').toString('utf-8')
  const [itemName, category] = item.split('|')

  const res = await fetch('https://zkrist.vercel.app/api/products', {cache: 'force-cache'})
  const products:ProductType[] = await res.json()
  let product;
  try {
    product = products.filter((cate:ProductType) => cate.category === category)[0].items.filter((item:ItemType) => item.name === itemName)[0]
  } catch {
    notFound()
  }
  
  return (
    <section className="flex flex-col px-5 bg-neutral-100">
      <h1 className="font-bold">{category} &gt; {itemName}</h1>
      <div className="flex flex-col">
        <div className="flex flex-col items-center justify-center">
          <Suspense fallback={<CardLoading />}>
            <Image src={product.img} width={360} height={360} alt={product.name} className="mx-auto rounded-md" />
          </Suspense>
          <div className="w-full flex flex-row gap-2 items-center justify-center mt-2 *:rounded-md *:animate-pulse">
            <div className="size-20 bg-neutral-500"></div>
            <div className="size-20 bg-neutral-500"></div>
            <div className="size-20 bg-neutral-500"></div>
            <div className="size-20 bg-neutral-500"></div>
          </div>
        </div>
      
        <div className=" mt-5 py-5 px-5 mx-auto w-full">
          <div className="space-y-1">
            <h1 className="text-2xl font-bold">{product.name}</h1>
            <p className="text-lg">{product.description}</p>
            <p className="flex">{Array(product.reviews).fill(0).map( (_,j) => <Star key={j} className="fill-amber-500 mb-1 text-transparent size-6" />)}</p>
            <p className="text-xl font-bold font-gantari">${product.price}</p>

            <div className="">
              <h2 className="text-xl font-bold">Color</h2>
              <div className="">
                {
                  product.color.map((color, i) => (
                    <div key={color} className="inline-block select-none">
                      <input type="radio" defaultChecked={i == 0 ? true : false} name='color' id={color} title={color}  className="appearance-none peer"  />
                      <label title={color} htmlFor={color} className="size-7 cursor-pointer peer-checked:border-2 border-black p-0.5 bg-clip-content rounded-md inline-block ml-1" style={{backgroundColor: color}}>
                      </label>
                    </div>
                  ))
                }
              </div>
            </div>

            <div className="">
              <h2 className="text-xl font-bold mb-1">Sizes</h2>
              <div className="flex gap-1">
                {
                  product.sizes && product.sizes.map( (size, i) => (
                    <div key={size} className="inline-block select-none">
                      <input type="radio" defaultChecked={i == 0 ? true : false} name='size' id={size} title={size}  className="appearance-none peer"  />
                      <label title={size} htmlFor={size} className="size-7 cursor-pointer text-sm/7 text-center border peer-checked:bg-black peer-checked:text-white text-black border-black bg-clip-content rounded-md inline-block ml-1">
                        {size}
                      </label>
                    </div>
                  ))
                }
              </div>
            </div>

            <div className="flex gap-2 py-5">

              <CardCounter />

              <div className="">
                <Button className="py-1 min-w-64">Add to Cart</Button>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  )
}