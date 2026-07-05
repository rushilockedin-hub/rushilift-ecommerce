import { useNavigate, useSearchParams } from "react-router-dom";
import ProductCard from "../components/ProductCard";

const products = [
  { id: "1", name: "Oversized Tee", image: "/images/Fuaark_Oversized_Tshirts_14.jpg", price: 1299, offerPrice: 899, category: ["Men", "New Arrivals"] },
  { id: "2", name: "Stringer Vest", image: "/images/Fuaark_Club_Sringer_f2b8143b-cda0-44c9-b088-3b54313f7714.jpg", price: 1099, offerPrice: 749, category: ["Men"] },
  { id: "3", name: "Joggers", image: "/images/Fuaark_Thrive_Pullover_Light_Grey_2.jpg", price: 1599, offerPrice: 1199, category: ["Men"] },
  { id: "4", name: "Compression Sleeveless", image: "/images/FuaarkCompressionSleevelessNavy_2.jpg", price: 2499, offerPrice: 1999, category: ["Compression"] },
  { id: "5", name: "Hoodie", image: "/images/FuaarkBlurredOversizedtshirtsBlack_3.jpg", price: 1499, offerPrice: 1099, category: ["Men"] },
  { id: "6", name: "Tshirt", image: "/images/Fuaark_4_6027ff51-8341-49e2-86a5-83bceb5e55c0.jpg", price: 1499, offerPrice: 1099, category: ["Men"] },
  { id: "7", name: "Refined Oversized T-shirt", image: "/images/RefinedOversizedT-shirtOlive_6.jpg", price: 1299, offerPrice: 1099, category: ["Men"] },
  { id: "8", name: "Tshirt", image: "/images/FUAARK-GORRILA-BLACK2.jpg", price: 1199, offerPrice: 999, category: ["Men", "Sale"] },
  { id: "9", name: "Tshirt", image: "/images/FUAARK-GORRILA-BLACK2.jpg", price: 1199, offerPrice: 699, category: ["Men", "Sale"] },
  { id: "10", name: "Tshirt Navy", image: "/images/Fuaark-Sword-Navy-Thsirt_c4b08be5-90f2-4409-901d-d015e311751a.jpg", price: 1199, offerPrice: 999, category: ["Men", "Sale"] },
  { id: "11", name: "Levitating Black Tshirt", image: "/images/Fuaark-Levitating-Black-tshirt_0eb8ba07-ae09-4d04-a665-96e6be72f79a.jpg", price: 1099, offerPrice: 799, category: ["Men"] },
  { id: "12", name: "Grow Oversize Tshirt", image: "/images/Fuaark-Grow-Oversize-Tshirts.jpg", price: 1499, offerPrice: 1199, category: ["Men"] },
  { id: "13", name: "Grow Your Game Brown", image: "/images/FuaarkGrowYourGameBrown_5_53b30dc3-45b0-4bf9-9f2f-a9c7dda84754.jpg", price: 1499, offerPrice: 1199, category: ["Men"] },
  { id: "14", name: "Compression Tshirt", image: "/images/Fuaark-Compression-Tshirts-black-_her.jpg", price: 1499, offerPrice: 1199, category: ["Compression"] },
  { id: "15", name: "Compression Tshirt", image: "/images/Fuaark_138.jpg", price: 1499, offerPrice: 1199, category: ["Compression"] },
  { id: "16", name: "Compression Tshirt", image: "/images/Fuaark_125.jpg", price: 1499, offerPrice: 1199, category: ["Compression"] },
  { id: "17", name: "Compression Tshirt", image: "/images/Fuaark_118.jpg", price: 1499, offerPrice: 1199, category: ["Compression"] },
  { id: "18", name: "Compression Tshirt", image: "/images/259A9726.jpg", price: 1499, offerPrice: 1199, category: ["Compression"] },
  { id: "19", name: "Refined Oversized Tshirt", image: "/images/259A9603.jpg", price: 1499, offerPrice: 1199, category: ["Men"] },
  { id: "20", name: "Oversized Jacket Beige", image: "/images/FuaarkSignatureOversizedCroppedJacketBeige_2.jpg", price: 1499, offerPrice: 1199, category: ["Men", "New Arrivals"] },
  { id: "21", name: "Oversized Sweatshirt Brown", image: "/images/FuaarkSignatureOversizedCroppedSweatshirtBrown_2.jpg", price: 1499, offerPrice: 1199, category: ["Men", "New Arrivals"] },
  { id: "22", name: "Oversized Sweatshirt Black", image: "/images/FuaarkSignatureOversizedCroppedSweatshirtBlack_3.jpg", price: 1499, offerPrice: 1199, category: ["Men", "New Arrivals"] },
  { id: "23", name: "Sports Bra", image: "/images/Fuaark-Sports-bra-7.jpg", price: 1499, offerPrice: 1199, category: ["Women"] },
  { id: "24", name: "Melange Leggings Grey", image: "/images/Fuaark-Essential-Melange-Leggings-Grey-3.jpg", price: 1499, offerPrice: 1199, category: ["Women"] },
  { id: "25", name: "Slate Tshirt Light Blue", image: "/images/SlateTshirtLightBlue_7.jpg", price: 1499, offerPrice: 1199, category: ["Men"] },
  { id: "26", name: "Compression Tshirt Navy", image: "/images/fuaark-compression-tshirt-navy-1-_1.jpg", price: 1499, offerPrice: 1199, category: ["Compression"] },
  { id: "27", name: "Compression Tshirt Teal", image: "/images/Fuaaark-Compression-teal2.jpg", price: 1499, offerPrice: 1199, category: ["Compression"] },
  { id: "28", name: "Melange Leggings Navy", image: "/images/Fuaark_Product-18-08-25-_04_1.jpg", price: 1499, offerPrice: 1199, category: ["Women"] },
  { id: "29", name: "Core Bags", image: "/images/Fuaark-Core-Bags.jpg", price: 1499, offerPrice: 1199, category: ["Accessories"] },
  { id: "30", name: "Baseball Cap Black", image: "/images/FuaarkClassicBaseballCapBlack_1.jpg", price: 1499, offerPrice: 1199, category: ["Accessories"] },
  { id: "31", name: "Baseball Cap", image: "/images/FuaarkClassicBaseballCapBlack_1.jpg", price: 1499, offerPrice: 1199, category: ["Accessories"] },
];

const Shop = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const categoryFilter = searchParams.get("category");
  const searchQuery = searchParams.get("search");

  let filteredProducts = products;

  if (categoryFilter) {
    filteredProducts = filteredProducts.filter((p) => p.category.includes(categoryFilter));
  }

  if (searchQuery) {
    filteredProducts = filteredProducts.filter((p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  const heading = searchQuery
    ? `Search results for "${searchQuery}"`
    : categoryFilter
    ? categoryFilter
    : "Shop All Products";

  return (
    <div className="min-h-screen bg-gray-50 px-6 py-10">
      <h1 className="text-3xl font-bold mb-8">{heading}</h1>
      {filteredProducts.length === 0 ? (
        <p className="text-gray-500">No products found.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {filteredProducts.map((p) => (
            <div key={p.id} onClick={() => navigate(`/product/${p.id}`)} className="cursor-pointer">
              <ProductCard
                image={p.image}
                title={p.name}
                price={`Rs.${p.offerPrice}`}
                oldPrice={`Rs.${p.price}`}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;