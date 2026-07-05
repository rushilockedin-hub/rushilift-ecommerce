import { useState } from "react";
import { FaSearch, FaUser, FaShoppingBag, FaTimes } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem("user"));
  const { totalItems } = useCart();
  const [showSearch, setShowSearch] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleLogout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    navigate("/login");
  };

  const goToCategory = (category) => {
    navigate(`/shop?category=${encodeURIComponent(category)}`);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (searchTerm.trim() === "") return;
    navigate(`/shop?search=${encodeURIComponent(searchTerm.trim())}`);
    setShowSearch(false);
    setSearchTerm("");
  };

  return (
    <nav className="w-full flex justify-between items-center px-6 py-4 border-b border-gray-200 shadow-sm bg-white relative">
      <div className="flex items-center space-x-2">
        <img
          src="/images/e06a1c28-7411-4b79-bef4-0d2564224ad6.png"
          alt="Rushilift Logo"
          className="h-12"
        />
      </div>

      <ul className="hidden md:flex gap-8 text-[#003049] font-semibold text-base">
        <li className="cursor-pointer hover:text-red-500 transition" onClick={() => goToCategory("Men")}>Men</li>
        <li className="cursor-pointer hover:text-red-500 transition" onClick={() => goToCategory("Women")}>Women</li>
        <li className="cursor-pointer hover:text-red-500 transition" onClick={() => goToCategory("Compression")}>Compression</li>
        <li className="cursor-pointer hover:text-red-500 flex items-center gap-1 transition" onClick={() => goToCategory("New Arrivals")}>
          New Arrivals <span>🔥</span>
        </li>
        <li className="cursor-pointer hover:text-red-500 transition" onClick={() => goToCategory("Sale")}>Sale</li>
        <li className="cursor-pointer hover:text-red-500 transition" onClick={() => goToCategory("Accessories")}>Accessories</li>
      </ul>

      <div className="flex items-center gap-6 text-[#003049] text-lg">
        {showSearch ? (
          <FaTimes className="cursor-pointer text-xl hover:text-red-500 transition" onClick={() => setShowSearch(false)} />
        ) : (
          <FaSearch className="cursor-pointer text-xl hover:text-red-500 transition" onClick={() => setShowSearch(true)} />
        )}
        {user ? (
          <div className="flex items-center gap-3">
            <span
              className="text-sm font-semibold cursor-pointer hover:text-red-500 transition"
              onClick={() => navigate("/orders")}
            >
              {user.name}
            </span>
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

      {showSearch && (
        <form
          onSubmit={handleSearchSubmit}
          className="absolute top-full left-0 w-full bg-white border-b border-gray-200 shadow-md px-6 py-3 flex items-center gap-3 z-50"
        >
          <FaSearch className="text-gray-400" />
          <input
            type="text"
            autoFocus
            placeholder="Search products..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-1 outline-none text-base"
          />
          <button type="submit" className="bg-black text-white px-4 py-1 rounded-full text-sm hover:bg-red-500 transition">
            Search
          </button>
        </form>
      )}
    </nav>
  );
};
export default Navbar;