import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart, removeFromCart, totalItems, totalPrice } = useCart();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h2>Your cart is empty!</h2>
        <button
          onClick={() => navigate("/")}
          style={{ marginTop: "20px", padding: "10px 20px", backgroundColor: "black", color: "white", cursor: "pointer", borderRadius: "5px" }}
        >
          Shop Now
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "800px", margin: "50px auto", padding: "20px" }}>
      <h2>Your Cart ({totalItems} items)</h2>
      {cart.map((item) => (
        <div key={item.id} style={{ display: "flex", gap: "20px", marginBottom: "20px", borderBottom: "1px solid #eee", paddingBottom: "20px" }}>
          <img src={item.image} alt={item.name} style={{ width: "120px", borderRadius: "8px" }} />
          <div style={{ flex: 1 }}>
            <h3>{item.name}</h3>
            <p style={{ color: "red", fontWeight: "bold" }}>₹{item.offerPrice}</p>
            <p>Quantity: {item.quantity}</p>
            <button
              onClick={() => removeFromCart(item.id)}
              style={{ padding: "5px 10px", backgroundColor: "red", color: "white", cursor: "pointer", borderRadius: "5px", border: "none" }}
            >
              Remove
            </button>
          </div>
        </div>
      ))}
      <div style={{ textAlign: "right", marginTop: "20px" }}>
        <h3>Total: ₹{totalPrice}</h3>
        <button
          onClick={() => navigate("/checkout")}
          style={{ marginTop: "10px", padding: "12px 30px", backgroundColor: "black", color: "white", cursor: "pointer", borderRadius: "5px", fontSize: "16px" }}
        >
          Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;