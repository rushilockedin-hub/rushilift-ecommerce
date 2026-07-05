import { FaSearch, FaUser, FaShoppingBag } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const { totalItems } = useCart();

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 border-b border-gray-200 shadow-sm bg-white">
      <div className="flex items-center space-x-2">
        <img
          src="/images/e06a1c28-7411-4b79-bef4-0d2564224ad6.png"
          alt="Rushilift Logo"
          className="h-12"
        />
      </div>

      <ul className="hidden md:flex gap-8 text-[#003049] font-semibold text-base">
        <li className="cursor-pointer hover:text-red-500 transition">Men</li>
        <li className="cursor-pointer hover:text-red-500 transition">Women</li>
        <li className="cursor-pointer hover:text-red-500 transition">Compression</li>
        <li className="cursor-pointer hover:text-red-500 flex items-center gap-1 transition">
          New Arrivals <span>🔥</span>
        </li>
        <li className="cursor-pointer hover:text-red-500 transition">Sale</li>
        <li className="cursor-pointer hover:text-red-500 transition">Accessories</li>
      </ul>

      <div className="flex items-center gap-6 text-[#003049] text-lg">
        <FaSearch className="cursor-pointer text-xl hover:text-red-500 transition" />
        {user ? (
          <div className="flex items-center gap-3">
            <span className="text-sm font-semibold">{user.name}</span>
            <button
              onClick={handleLogout}
              className="text-sm bg-black text-white px-3 py-1 rounded-full hover:bg-red-500 transition"
            >
              Logout
            </button>
          </div>
        ) : (
          <FaUser
            className="cursor-pointer hover:text-red-500 transition"
            onClick={() => navigate("/login")}
          />
        )}
        <div className="relative cursor-pointer" onClick={() => navigate("/cart")}>
          <FaShoppingBag className="hover:text-red-500 transition text-xl" />
          {totalItems > 0 && (
            <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
              {totalItems}
            </span>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;