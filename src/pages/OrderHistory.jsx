import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../api";

const OrderHistory = () => {
  const navigate = useNavigate();
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const { data } = await API.get("/orders/my-orders");
        setOrders(data);
      } catch (err) {
        console.log("Order history error:", err.response?.data || err.message);
        setError("Could not load your orders. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchOrders();
  }, []);

  if (loading) {
    return <div style={{ textAlign: "center", marginTop: "100px" }}>Loading your orders...</div>;
  }

  if (error) {
    return <div style={{ textAlign: "center", marginTop: "100px", color: "red" }}>{error}</div>;
  }

  if (orders.length === 0) {
    return (
      <div style={{ textAlign: "center", marginTop: "100px" }}>
        <h2>No orders yet!</h2>
        <button
          onClick={() => navigate("/shop")}
          style={{ marginTop: "20px", padding: "10px 20px", backgroundColor: "black", color: "white", cursor: "pointer", borderRadius: "5px" }}
        >
          Start Shopping
        </button>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "900px", margin: "50px auto", padding: "20px" }}>
      <h2 style={{ marginBottom: "30px" }}>My Orders</h2>
      {orders.map((order) => (
        <div
          key={order._id}
          style={{
            border: "1px solid #eee",
            borderRadius: "8px",
            padding: "20px",
            marginBottom: "20px",
            boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "10px", flexWrap: "wrap", gap: "8px" }}>
            <span style={{ fontSize: "14px", color: "#666" }}>
              Order ID: {order._id}
            </span>
            <span
              style={{
                fontSize: "13px",
                fontWeight: "bold",
                padding: "3px 10px",
                borderRadius: "12px",
                backgroundColor: "#eef7ee",
                color: "#2e7d32",
              }}
            >
              {order.status}
            </span>
          </div>
          <div style={{ fontSize: "13px", color: "#888", marginBottom: "15px" }}>
            Placed on {new Date(order.createdAt).toLocaleDateString("en-IN", {
              day: "numeric",
              month: "short",
              year: "numeric",
            })}
          </div>

          {order.items.map((item, idx) => (
            <div
              key={idx}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "15px",
                marginBottom: "10px",
                paddingBottom: "10px",
                borderBottom: idx !== order.items.length - 1 ? "1px solid #f2f2f2" : "none",
              }}
            >
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "60px", height: "60px", objectFit: "cover", borderRadius: "6px" }}
              />
              <div style={{ flex: 1 }}>
                <div style={{ fontWeight: "600" }}>{item.name}</div>
                <div style={{ fontSize: "13px", color: "#888" }}>
                  Qty: {item.quantity} {item.size && `| Size: ${item.size}`}
                </div>
              </div>
              <div style={{ fontWeight: "600" }}>Rs.{item.price * item.quantity}</div>
            </div>
          ))}

          <div style={{ textAlign: "right", marginTop: "10px", fontWeight: "bold", fontSize: "16px" }}>
            Total: Rs.{order.totalAmount}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;