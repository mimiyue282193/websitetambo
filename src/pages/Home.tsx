import Hero from "@/components/Header/Hero";
import Overview from "@/components/Overview/Overview";
import Product from "@/components/Product/Product";
import Partner from "@/components/Partner/Partner";


function Home() {
  return (
    <div className="home-section">
      <Hero />
      <Overview />
      <Product />
      <Partner />
    </div>
  );
}

export default Home;
