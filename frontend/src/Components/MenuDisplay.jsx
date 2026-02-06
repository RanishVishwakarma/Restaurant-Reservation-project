import React, { useContext, useState } from "react";
import { MenuContext } from "../Context/MenuContext";
import { categoryItem } from "../assets/assets";

const MenuDisplay = () => {
  const { products } = useContext(MenuContext);
  const [category, setCategory] = useState("All");

  // ✅ FILTER LOGIC (ONLY ADDITION)
  const filteredProducts =
    category === "All"
      ? products
      : products.filter(
          (product) => product.category === category
        );

  return (
    <section
      id="menu"
      className="min-h-screen w-full bg-gradient-to-br from-[#0b0b0b] via-[#121212] to-black text-white py-24"
    >
      {/* Header */}
      <div className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold">
          Discover Our Menu
        </h1>
      </div>

      {/* Category selection */}
      <ul className="flex flex-wrap justify-center gap-4 sm:gap-8 mb-12 border-y border-gray py-4 text-gray-300 text-sm sm:text-base">
        {categoryItem.map((item, index) => (
          <li
            key={index}
            className={`cursor-pointer transition ${
              category === item.category_title
                ? "text-amber-400 font-semibold"
                : "hover:text-amber-400"
            }`}
            onClick={() => setCategory(item.category_title)}
          >
            {item.category_title}
          </li>
        ))}
      </ul>

      {/* Menu items */}
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8 px-6">
        {filteredProducts && filteredProducts.length > 0 ? (
          filteredProducts.map((product, index) => (
            <div
              key={product._id || index}
              className="bg-[#0f0f0f] border border-gray-400 rounded-xl p-4 lg:p-3 flex gap-4 hover:border-amber-500/40 transition"
            >
              {/* Image */}
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-20 sm:w-22 sm:h-22 lg:w-16 lg:h-16 object-cover rounded-full shrink-0"
              />

              {/* Content */}
              <div className="flex-1">
                <div className="flex justify-between items-start">
                  <h3 className="text-sm sm:text-base lg:text-sm font-semibold text-gray-100">
                    {product.name}
                  </h3>

                  <span className="text-lg sm:text-xl lg:text-base font-bold text-amber-500 ml-3">
                    ₹ {product.price}
                  </span>
                </div>

                <p className="text-xs sm:text-sm lg:text-xs text-gray-400 mt-1 leading-snug">
                  {product.description || "Deliciously crafted dish"}
                </p>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-400 col-span-full">
            No items available
          </p>
        )}
      </div>
    </section>
  );
};

export default MenuDisplay;
