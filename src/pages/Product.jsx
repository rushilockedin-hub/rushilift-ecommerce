import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useState } from "react";
const products = [
  { id: "1", name: "Oversized Tee", image: "/images/Fuaark_Oversized_Tshirts_14.jpg", price: 1299, offerPrice: 899, sizes: ["S", "M", "L", "XL"] },
  { id: "2", name: "Stringer Vest", image: "/images/Fuaark_Club_Sringer_f2b8143b-cda0-44c9-b088-3b54313f7714.jpg", price: 1099, offerPrice: 749, sizes: ["S", "M", "L", "XL"] },
  { id: "3", name: "Joggers", image: "/images/Fuaark_Thrive_Pullover_Light_Grey_2.jpg", price: 1599, offerPrice: 1199, sizes: ["S", "M", "L", "XL"] },
  { id: "4", name: "Compression Sleeveless", image: "/images/FuaarkCompressionSleevelessNavy_2.jpg", price: 2499, offerPrice: 1999, sizes: ["S", "M", "L", "XL"] },
  { id: "5", name: "Hoodie", image: "/images/FuaarkBlurredOversizedtshirtsBlack_3.jpg", price: 1499, offerPrice: 1099, sizes: ["S", "M", "L", "XL"] },
  { id: "6", name: "Tshirt", image: "/images/Fuaark_4_6027ff51-8341-49e2-86a5-83bceb5e55c0.jpg", price: 1499, offerPrice: 1099, sizes: ["S", "M", "L", "XL"] },
  { id: "7", name: "Refined Oversized T-shirt", image: "/images/RefinedOversizedT-shirtOlive_6.jpg", price: 1299, offerPrice: 1099, sizes: ["S", "M", "L", "XL"] },
  { id: "8", name: "Tshirt", image: "/images/FUAARK-GORRILA-BLACK2.jpg", price: 1199, offerPrice: 999, sizes: ["S", "M", "L", "XL"] },
  { id: "9", name: "Tshirt", image: "/images/FUAARK-GORRILA-BLACK2.jpg", price: 1199, offerPrice: 699, sizes: ["S", "M", "L", "XL"] },
  { id: "10", name: "Tshirt Navy", image: "/images/Fuaark-Sword-Navy-Thsirt_c4b08be5-90f2-4409-901d-d015e311751a.jpg", price: 1199, offerPrice: 999, sizes: ["S", "M", "L", "XL"] },
  { id: "11", name: "Levitating Black Tshirt", image: "/images/Fuaark-Levitating-Black-tshirt_0eb8ba07-ae09-4d04-a665-96e6be72f79a.jpg", price: 1099, offerPrice: 799, sizes: ["S", "M", "L", "XL"] },
  { id: "12", name: "Grow Oversize Tshirt", image: "/images/Fuaark-Grow-Oversize-Tshirts.jpg", price: 1499, offerPrice: 1199, sizes: ["S", "M", "L", "XL"] },
  { id: "13", name: "Grow Your Game Brown", image: "/images/FuaarkGrowYourGameBrown_5_53b30dc3-45b0-4bf9-9f2f-a9c7dda84754.jpg", price: 1499, offerPrice: 1199, sizes: ["S", "M", "L", "XL"] },
  { id: "14", name: "Compression Tshirt", image: "/images/Fuaark-Compression-Tshirts-black-_her.jpg", price: 1499, offerPrice: 1199, sizes: ["S", "M", "L", "XL"] },
  { id: "15", name: "Compression Tshirt", image: "/images/Fuaark_138.jpg", price: 1499, offerPrice: 1199, sizes: ["S", "M", "L", "XL"] },
  { id: "16", name: "Compression Tshirt", image: "/images/Fuaark_125.jpg", price: 1499, offerPrice: 1199, sizes: ["S", "M", "L", "XL"] },
  { id: "17", name: "Compression Tshirt", image: "/images/Fuaark_118.jpg", price: 1499, offerPrice: 1199, sizes: ["S", "M", "L", "XL"] },
  { id: "18", name: "Compression Tshirt", image: "/images/259A9726.jpg", price: 1499, offerPrice: 1199, sizes: ["S", "M", "L", "XL"] },
  { id: "19", name: "Refined Oversized Tshirt", image: "/images/259A9603.jpg", price: 1499, offerPrice: 1199, sizes: ["S", "M", "L", "XL"] },
  { id: "20", name: "Oversized Jacket Beige", image: "/images/FuaarkSignatureOversizedCroppedJacketBeige_2.jpg", price: 1499, offerPrice: 1199, sizes: ["S", "M", "L", "XL"] },
  { id: "21", name: "Oversized Sweatshirt Brown", image: "/images/FuaarkSignatureOversizedCroppedSweatshirtBrown_2.jpg", price: 1499, offerPrice: 1199, sizes: ["S", "M", "L", "XL"] },
  { id: "22", name: "Oversized Sweatshirt Black", image: "/images/FuaarkSignatureOversizedCroppedSweatshirtBlack_3.jpg", price: 1499, offerPrice: 1199, sizes: ["S", "M", "L", "XL"] },
  { id: "23", name: "Sports Bra", image: "/images/Fuaark-Sports-bra-7.jpg", price: 1499, offerPrice: 1199, sizes: ["S", "M", "L", "XL"] },
  { id: "24", name: "Melange Leggings Grey", image: "/images/Fuaark-Essential-Melange-Leggings-Grey-3.jpg", price: 1499, offerPrice: 1199, sizes: ["S", "M", "L", "XL"] },
  { id: "25", name: "Slate Tshirt Light Blue", image: "/images/SlateTshirtLightBlue_7.jpg", price: 1499, offerPrice: 1199, sizes: ["S", "M", "L", "XL"] },
  { id: "26", name: "Compression Tshirt Navy", image: "/images/fuaark-compression-tshirt-navy-1-_1.jpg", price: 1499, offerPrice: 1199, sizes: ["S", "M", "L", "XL"] },
  { id: "27", name: "Compression Tshirt Teal", image: "/images/Fuaaark-Compression-teal2.jpg", price: 1499, offerPrice: 1199, sizes: ["S", "M", "L", "XL"] },
  { id: "28", name: "Melange Leggings Navy", image: "/images/Fuaark_Product-18-08-25-_04_1.jpg", price: 1499, offerPrice: 1199, sizes: ["S", "M", "L", "XL"] },
  { id: "29", name: "Core Bags", image: "/images/Fuaark-Core-Bags.jpg", price: 1499, offerPrice: 1199, sizes: ["S", "M", "L", "XL"] },
  { id: "30", name: "Baseball Cap Black", image: "/images/FuaarkClassicBaseballCapBlack_1.jpg", price: 1499, offerPrice: 1199, sizes: ["S", "M", "L", "XL"] },
  { id: "31", name: "Baseball Cap", image: "/images/FuaarkClassicBaseballCapBlack_1.jpg", price: 1499, offerPrice: 1199, sizes: ["S", "M", "L", "XL"] },
];
const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState("");
  const [added, setAdded] = useState(false);
  const product = products.find((p) => p.id === id);
  if (!product) return <h2 style={{ textAlign: "center", marginTop: "50px" }}>Product not found!</h2>;
  const handleAddToCart = () => {
    if (!selectedSize) { alert("Please select a size!"); return; }
    addToCart({ ...product, selectedSize });
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };
  return (
    <div style={{ maxWidth: "900px", margin: "50px auto", padding: "20px", display: "flex", gap: "40px" }}>
      <img src={product.image} alt={product.name} style={{ width: "400px", borderRadius: "10px" }} />
      <div>
        <h1>{product.name}</h1>
        <p style={{ color: "red", fontSize: "24px", fontWeight: "bold" }}>Rs.{product.offerPrice}</p>
        <p style={{ textDecoration: "line-through", color: "gray" }}>Rs.{product.price}</p>
        <div style={{ marginTop: "20px" }}>
          <p style={{ fontWeight: "bold" }}>Select Size:</p>
          <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
            {product.sizes.map((size) => (
              <button key={size} onClick={() => setSelectedSize(size)} style={{ padding: "8px 16px", border: selectedSize === size ? "2px solid black" : "1px solid gray", cursor: "pointer", borderRadius: "5px", backgroundColor: selectedSize === size ? "black" : "white", color: selectedSize === size ? "white" : "black" }}>
                {size}
              </button>
            ))}
          </div>
        </div>
        <button style={{ marginTop: "30px", width: "100%", padding: "12px", backgroundColor: added ? "green" : "black", color: "white", fontSize: "16px", cursor: "pointer", borderRadius: "5px" }} onClick={handleAddToCart}>
          {added ? "Added to Cart ?" : "Add to Cart"}
        </button>
        <button style={{ marginTop: "10px", width: "100%", padding: "12px", backgroundColor: "white", color: "black", fontSize: "16px", cursor: "pointer", borderRadius: "5px", border: "1px solid black" }} onClick={() => navigate("/cart")}>
          View Cart
        </button>
      </div>
    </div>
  );
};
export default Product;
