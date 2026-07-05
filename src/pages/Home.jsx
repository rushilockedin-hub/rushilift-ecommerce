import React from "react";
import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
const products = [
  { id: 1, image: "/images/Fuaark_Oversized_Tshirts_14.jpg", title: "Oversized Tee", price: "₹899", oldPrice: "₹1,299" },
  { id: 2, image: "/images/Fuaark_Club_Sringer_f2b8143b-cda0-44c9-b088-3b54313f7714.jpg", title: "Stringer Vest", price: "₹749", oldPrice: "₹1,099" },
  { id: 3, image: "/images/Fuaark_Thrive_Pullover_Light_Grey_2.jpg", title: "Joggers", price: "₹1,199", oldPrice: "₹1,599" },
  { id: 4, image: "/images/FuaarkCompressionSleevelessNavy_2.jpg", title: "Compression Sleeveless", price: "₹1,999", oldPrice: "₹2,499" },
  { id: 5, image: "/images/FuaarkBlurredOversizedtshirtsBlack_3.jpg", title: "Hoodie", price: "₹1,099", oldPrice: "₹1,499" },
  { id: 6, image: "/images/Fuaark_4_6027ff51-8341-49e2-86a5-83bceb5e55c0.jpg", title: "Tshirt", price: "₹1,099", oldPrice: "₹1,499" },
  { id: 7, image: "/images/RefinedOversizedT-shirtOlive_6.jpg", title: "Refined Oversized T-shirt", price: "₹1,099", oldPrice: "₹1,299" },
  { id: 8, image: "/images/FUAARK-GORRILA-BLACK2.jpg", title: "Tshirt", price: "₹999", oldPrice: "₹1,199" },
  { id: 9, image: "/images/FUAARK-GORRILA-BLACK2.jpg", title: "Tshirt", price: "₹699", oldPrice: "₹1,199" },
  { id: 10, image: "/images/Fuaark-Sword-Navy-Thsirt_c4b08be5-90f2-4409-901d-d015e311751a.jpg", title: "Tshirt Navy", price: "₹999", oldPrice: "₹1,199" },
  { id: 11, image: "/images/Fuaark-Levitating-Black-tshirt_0eb8ba07-ae09-4d04-a665-96e6be72f79a.jpg", title: "Levitating Black Tshirt", price: "₹799", oldPrice: "₹1,099" },
  { id: 12, image: "/images/Fuaark-Grow-Oversize-Tshirts.jpg", title: "Grow Oversize Tshirt", price: "₹1,199", oldPrice: "₹1,499" },
  { id: 13, image: "/images/FuaarkGrowYourGameBrown_5_53b30dc3-45b0-4bf9-9f2f-a9c7dda84754.jpg", title: "Grow Your Game Brown", price: "₹1,199", oldPrice: "₹1,499" },
  { id: 14, image: "/images/Fuaark-Compression-Tshirts-black-_her.jpg", title: "Compression Tshirt", price: "₹1,199", oldPrice: "₹1,499" },
  { id: 15, image: "/images/Fuaark_138.jpg", title: "Compression Tshirt", price: "₹1,199", oldPrice: "₹1,499" },
  { id: 16, image: "/images/Fuaark_125.jpg", title: "Compression Tshirt", price: "₹1,199", oldPrice: "₹1,499" },
  { id: 17, image: "/images/Fuaark_118.jpg", title: "Compression Tshirt", price: "₹1,199", oldPrice: "₹1,499" },
  { id: 18, image: "/images/259A9726.jpg", title: "Compression Tshirt", price: "₹1,199", oldPrice: "₹1,499" },
  { id: 19, image: "/images/259A9603.jpg", title: "Refined Oversized Tshirt", price: "₹1,199", oldPrice: "₹1,499" },
  { id: 20, image: "/images/FuaarkSignatureOversizedCroppedJacketBeige_2.jpg", title: "Fuaark Oversized Jacket", price: "₹1,199", oldPrice: "₹1,499" },
  { id: 21, image: "/images/FuaarkSignatureOversizedCroppedSweatshirtBrown_2.jpg", title: "Oversized Sweatshirt Brown", price: "₹1,199", oldPrice: "₹1,499" },
  { id: 22, image: "/images/FuaarkSignatureOversizedCroppedSweatshirtBlack_3.jpg", title: "Oversized Sweatshirt Black", price: "₹1,199", oldPrice: "₹1,499" },
  { id: 23, image: "/images/Fuaark-Sports-bra-7.jpg", title: "Sports Bra", price: "₹1,199", oldPrice: "₹1,499" },
  { id: 24, image: "/images/Fuaark-Essential-Melange-Leggings-Grey-3.jpg", title: "Melange Leggings Grey", price: "₹1,199", oldPrice: "₹1,499" },
  { id: 25, image: "/images/SlateTshirtLightBlue_7.jpg", title: "Slate Tshirt Light Blue", price: "₹1,199", oldPrice: "₹1,499" },
  { id: 26, image: "/images/fuaark-compression-tshirt-navy-1-_1.jpg", title: "Compression Tshirt Navy", price: "₹1,199", oldPrice: "₹1,499" },
  { id: 27, image: "/images/Fuaaark-Compression-teal2.jpg", title: "Compression Tshirt Teal", price: "₹1,199", oldPrice: "₹1,499" },
  { id: 28, image: "/images/Fuaark_Product-18-08-25-_04_1.jpg", title: "Melange Leggings Navy", price: "₹1,199", oldPrice: "₹1,499" },
  { id: 29, image: "/images/Fuaark-Core-Bags.jpg", title: "Core Bags", price: "₹1,199", oldPrice: "₹1,499" },
  { id: 30, image: "/images/FuaarkClassicBaseballCapBlack_1.jpg", title: "Baseball Cap Black", price: "₹1,199", oldPrice: "₹1,499" },
  { id: 31, image: "/images/FuaarkClassicBaseballCapBlack_1.jpg", title: "Baseball Cap", price: "₹1,199", oldPrice: "₹1,499" },
];
const Home = () => {
  return (
    <>
      <Hero />
      <section className="p-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {products.map((p) => (
          <ProductCard
            key={p.id}
            image={p.image}
            title={p.title}
            price={p.price}
            oldPrice={p.oldPrice}
          />
        ))}
      </section>
    </>
  );
};
export default Home;
