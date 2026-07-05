import React from "react";

const ProductCard = ({ image, title, price, oldPrice }) => {
  return (
    <div
      className="bg-white rounded-xl shadow-md hover:shadow-2xl transition duration-500 overflow-hidden 
                 transform hover:-translate-y-2 hover:scale-[1.02] cursor-pointer"
    >
      {/* IMAGE */}
      <div className="overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-[350px] object-cover transition-transform duration-500 hover:scale-110"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-1">{title}</h3>
        <div className="flex items-center gap-3">
          <span className="text-red-600 font-bold">{price}</span>
          <span className="line-through text-gray-400 text-sm">{oldPrice}</span>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
