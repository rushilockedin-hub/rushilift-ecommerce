import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import API from "../api";

const Checkout = () => {
  const { cart, totalPrice, clearCart } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    fullName: "",
    phone: "",
    street: "",
    city: "",
    state: "",
    pincode: "",
  });
  const [placing, setPlacing] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    setPlacing(true);
    setError("");
    try {
      const items = cart.map((item) => ({
        productId: item.id,
        name: item.name,
        image: item.image,
        price: item.offerPrice,
        quantity: item.quantity,
        size: item.selectedSize || "",
      }));
      await API.post("/orders", {
        items,
        totalAmount: totalPrice,
        address: form,
      });
      clearCart();
      navigate("/order-success");
    } catch (err) {
      console.log("Order error:", err.response?.data || err.message);
      setError("Could not place order. Please try again.");
    } finally {
      setPlacing(false);
    }
  };

  if (cart.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h2>Your cart is empty!</h2>
        <button
          onClick={() => navigate("/shop")}
          style={{ marginTop: "20px", padding: "10px 20px", backgroundColor: "black", color: "white", cursor: "pointer", borderRadius: "5px" }}
        >
          Shop Now
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "900px", margin: "50px auto", padding: "20px", display: "flex", gap: "40px", flexWrap: "wrap" }}>
      <form onSubmit={handlePlaceOrder} style={{ flex: 1, minWidth: "300px" }}>
        <h2>Shipping Address</h2>
        {error && <p style={{ color: "red" }}>{error}</p>}
        {["fullName", "phone", "street", "city", "state", "pincode"].map((field) => (
          <div key={field} style={{ marginBottom: "12px" }}>
            <input
              type="text"
              name={field}
              placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
              value={form[field]}
              onChange={handleChange}
              style={{ width: "100%", padding: "10px", fontSize: "15px" }}
              required
            />
          </div>
        ))}
        <button
          type="submit"
          disabled={placing}
          style={{ width: "100%", padding: "12px", backgroundColor: "black", color: "white", fontSize: "16px", cursor: "pointer", borderRadius: "5px", marginTop: "10px" }}
        >
          {placing ? "Placing Order..." : "Place Order"}
        </button>
      </form>

      <div style={{ flex: 1, minWidth: "280px" }}>
        <h2>Order Summary</h2>
        {cart.map((item) => (
          <div key={item.id} style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", borderBottom: "1px solid #eee", paddingBottom: "10px" }}>
            <span>{item.name} x{item.quantity}</span>
            <span>Rs.{item.offerPrice * item.quantity}</span>
          </div>
        ))}
        <h3 style={{ marginTop: "20px" }}>Total: Rs.{totalPrice}</h3>
      </div>
    </div>
  );
};

export default Checkout;