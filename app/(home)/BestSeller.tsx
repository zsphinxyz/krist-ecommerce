import SellerCard from "./Seller_Card"

export default function BestSeller() {
  return (
    <div className="px-3 mt-10">
      <h1 className="header text-center">Our BestSeller</h1>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 max-w-screen-xl mx-auto">
        <SellerCard img="/seller_tshirt.png" title="Roadstar" desc="Printed Cotton T-Shirt" price1="38.00" price2='40.00' />
        <SellerCard img="/seller_purse.png" title="Allen Solly" desc="Women Textured Handheld Bag" price1="80.00" price2='100.00' />
        <SellerCard img="/seller_longsleeve.png" title="Louis Philippe Sport" desc="Polo Collar T-Shirt" price1="50.00" price2='55.00' />
        <SellerCard img="/seller_adidas.png" title="Adidas" desc="Men Adi-dash Running Shoes" price1="60.00" price2='75.00' />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-5 sm:mt-5 max-w-screen-xl mx-auto">
        <SellerCard img="/seller_dress.png" title="Trendyol" desc="Floral Embroidered Maxi Dress" price1="35.00" price2='45.00' />
        <SellerCard img="/seller_disney.png" title="YK Disney" desc="Girls Pink Moana Printed Dress" price1="80.00" price2='100.00' />
        <SellerCard img="/seller_polo.png" title="US Polo" desc="Tailored Cotton Casual Shirt" price1="40.00" price2='50.00' />
        <SellerCard img="/seller_heel.png" title="Zyla" desc="Women Sandals" price1="35.00" price2='40.00' />
      </div>

    </div>
  )
}
