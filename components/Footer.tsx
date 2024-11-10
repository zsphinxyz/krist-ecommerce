import { InstagramLogoIcon, TwitterLogoIcon } from "@radix-ui/react-icons";
import { CreditCard, FacebookIcon, MailIcon, MapPin, PhoneCallIcon, Send } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-background mt-10 pt-10 pb-3 px-3 md:px-5 font-gantari">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 pl-5 sm:pl-3 md:pl-0">

        <div className="text-muted-foreground">
          <h1 className="text-white text-3xl font-bold mb-5 font-serif ">Krist</h1>
          <ul className="space-y-2 text-sm">
            <li className=""><PhoneCallIcon className="inline size-5" /> +959 555 555 555</li>
            <li className=""><MailIcon className="inline size-5" /> zkrist@gmail.com</li>
            <li className=""><MapPin className="inline size-5" /> No.66 LanMa St, Yangon, <br /></li>
          </ul>
        </div>

        <div className="">
          <h1 className="text-xl font-bold mb-2">Information</h1>
          <ul className="text-muted-foreground space-y-2 text-sm">
            <li className="">My Account</li>
            <li className="">Login</li>
            <li className="">My Cart</li>
            <li className="">My Whishlist</li>
            <li className="">Checkout</li>
          </ul>
        </div>

        <div className="">
          <h1 className="text-xl font-bold mb-2">Service</h1>
          <ul className="text-muted-foreground space-y-2 text-sm">
            <li className="">About us</li>
            <li className="">Careers</li>
            <li className="">Delivery Information</li>
            <li className="">Privacy Policy</li>
            <li className="">Terms & Conditions</li>
          </ul>
        </div>

        <div className="text-muted-foreground">
          <h1 className="text-xl font-bold mb-2 text-white">Subscribe</h1>
          <p className=" text-sm text-pretty">
            Enter your email below to be the first to know about new collections and product launches.
          </p>
          <div className="border-muted-foreground border max-w-max rounded-md mt-2 flex items-center px-2">
            <MailIcon className="size-5"/>
            <input autoComplete="off" type="email" className="bg-transparent min-w-32 py-1 text-white outline-none border-none pl-2 placeholder-muted-foreground" placeholder="Your Email" />
            <button><Send className="size-5 hover:rotate-12 transition-transform"/></button>
          </div>
        </div>
      </div>

      <div className="flex flex-col gap-2 sm:flex-row items-center justify-around text-muted-foreground mt-5 pt-2  border-t border-muted-foreground/50">
        <div className="flex gap-1 sm:gap-3 *:size-5">
          <CreditCard />
          <CreditCard />
          <CreditCard />
          <CreditCard />
          <CreditCard />
        </div>

        <div className="text-sm">
          &copy;2023 Krist All Rights are reserved
        </div>

        <div className="flex gap-1 sm:gap-3 *:size-5">
          <FacebookIcon />
          <InstagramLogoIcon />
          <TwitterLogoIcon />
        </div>
      </div>
    </footer>
  )
}
