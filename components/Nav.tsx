import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"


import Link from "next/link"
import { Button } from "./ui/button"
import { Heart, Search, ShoppingCartIcon } from "lucide-react"
import { Men,Indian,Women,Western,Footwear,Product,Kids } from "@/lib/shopNav"

export default function Nav() {


  return (
    <nav className="flex justify-between px-5 md:px-10 bg-white items-center py-2 fixed top-0 w-full z-50 shadow-sm">

      <div className="select-none cursor-default">
        <span className="text-3xl font-bold font-serif">Krist</span>
      </div>

      <NavigationMenu className="hidden md:block ">
        <NavigationMenuList>

          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Home
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <NavigationMenuTrigger>Shop</NavigationMenuTrigger>
            <NavigationMenuContent>
              <div className="font-gantari">

                <div className="grid w-max gap-3 p-4 md:grid-cols-4 text-sm tracking-tight">

                  <ul className="space-y-2">
                    <li className="font-bold">Men</li>
                    {Men.map((men) => (
                      <ListItem key={men.title} {...men} />
                    ))}

                    <li className="font-bold pt-3">Indian & Festive Wear</li>
                    {Indian.map(indian => (
                      <ListItem key={indian.title} {...indian} />
                    ))}
                  </ul>

                  <ul className="space-y-2">
                    <li className="font-bold">Women</li>
                    {Women.map( women => (
                      <ListItem key={women.title} {...women} />
                    ))}

                    <li className="font-bold pt-3">Western Wear</li>
                    {Western.map( western => (
                      <ListItem key={western.title} {...western} />
                    ))}
                  </ul>

                  <ul className="space-y-2">
                    <li className="font-bold">Footwear</li>
                    {Footwear.map( footwear => (
                      <ListItem key={footwear.title} {...footwear} />
                    ))}

                    <li className="font-bold pt-3">Product Features</li>
                    {Product.map(product => (
                      <ListItem key={product.title} {...product} />
                    ))}

                  </ul>

                  <ul className="space-y-2">
                    <li className="font-bold">Kids</li>
                    {Kids.map(kids => (
                      <ListItem key={kids.title} {...kids} />
                    ))}
                  </ul>


                </div>

              </div>

            </NavigationMenuContent>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Our Story
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Blog
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

          <NavigationMenuItem>
            <Link href="/docs" legacyBehavior passHref>
              <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                Contact Us
              </NavigationMenuLink>
            </Link>
          </NavigationMenuItem>

        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center gap-3">
        <ul className="contents">
          <li className=""><Link href=''><Search className="size-5 text-primary/70 hover:fill-primary/10 hover:text-primary" /></Link></li>
          <li className=""><Link href=''><Heart className="size-5 text-primary/70 hover:fill-primary/10 hover:text-primary" /></Link></li>
          <li className=""><Link href=''><ShoppingCartIcon className="size-5 text-primary/70 hover:fill-primary/10 hover:text-primary" /></Link></li>
        </ul>
        <Button className="ml-2 md:ml-5"> <Link href='/login'>Login</Link></Button>
      </div>

    </nav>
  )
}


function ListItem({title, href}: {title: string, href:string}) {
  return(
    <li className="text-muted-foreground hover:text-foreground hover:font-medium w-max">
      <Link href={href}>{title}</Link>      
    </li>
  )
}
