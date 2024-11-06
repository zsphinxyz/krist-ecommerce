import BestSeller from "./BestSeller";
import Category from "./Category";
import Deal from "./Deal";
import Footer from "./Footer";
import Hero from "./Hero";
import Instagram from "./Instagram";
import Review from "./Review";

export default function Home() {

  return (
    <main className="py-10">
      <Hero />
      <Category />
      <BestSeller />
      <Deal />
      <Review />
      <Instagram />
      <Footer />
    </main>
  );
}
