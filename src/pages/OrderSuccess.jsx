import { useNavigate } from "react-router-dom";
const OrderSuccess = () => {
  const navigate = useNavigate();
  return (
    <div style={{ textAlign: "center", marginTop: "100px" }}>
      <h1 style={{ color: "green" }}>Order Placed Successfully!</h1>
      <p style={{ marginTop: "10px", color: "gray" }}>Thank you for shopping with Rushilift.</p>
      <button
        onClick={() => navigate("/")}
        style={{ marginTop: "30px", padding: "12px 30px", backgroundColor: "black", color: "white", cursor: "pointer", borderRadius: "5px", fontSize: "16px" }}
      >
        Continue Shopping
      </button>
    </div>
  );
};
export default OrderSuccess;
