/* eslint-disable react/prop-types */
import { useState } from "react";
import { ShoppingCart } from "lucide-react";

export default function Card({ amount, img, title, checkOutFun }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="bg-slate-900 rounded-lg shadow-md overflow-hidden transition-all duration-300 transform hover:scale-105"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative w-[150px] h-[150px] mx-auto mt-4">
        <img
          src={img}
          alt={title}
          className="object-cover w-[120px] h-[120px] transition-opacity duration-300"
          style={{ opacity: isHovered ? 0.8 : 1 }}
        />
        {isHovered && (
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-opacity duration-300">
            <button
              onClick={() => checkOutFun(amount)}
              className="bg-white text-blue-600 font-semibold py-2 px-4 rounded-full hover:bg-blue-100 transition-colors duration-300 flex items-center space-x-2"
            >
              <ShoppingCart size={20} />
              <span>Buy Now</span>
            </button>
          </div>
        )}
      </div>
      <div className="p-4">
        <h2 className="text-xl font-semibold text-gray-200 mb-2">{title}</h2>
        <p className="text-2xl font-bold text-blue-100">
          ₹{amount.toLocaleString()}
        </p>
      </div>
    </div>
  );
}
