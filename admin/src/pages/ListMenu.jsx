import axios from "axios";
import React, { useEffect, useState } from "react";
import { MdDeleteSweep } from "react-icons/md";
import { backendUrl } from "../App";

const ListMenu = () => {
  const [list, setList] = useState([]);
  const token = localStorage.getItem("token");

  const fetchList = async () => {
    try {
      const response = await axios(`${backendUrl}/api/product/list`, {
        headers: { Authorization: `Bearer ${token}` },
      });

      if (response.data.success) {
        setList(response.data.products);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const deleteMenu = async (id) => {
    try {
      await axios.post(
        `${backendUrl}/api/product/remove`,
        { _id: id },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      fetchList();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="flex justify-center px-4 sm:px-6 lg:px-8">
      <div
        className="w-full max-w-6xl bg-[#0f0f0f]/90 backdrop-blur
        border border-amber-700 rounded-2xl shadow-2xl
        p-4 sm:p-6 lg:p-8 space-y-6"
      >
        {/* Header */}
        <div className="text-center border-b border-amber-700 pb-4">
          <h2 className="text-2xl sm:text-3xl font-serif text-amber-400">
            Menu Items
          </h2>
          <p className="text-sm text-gray-400">Manage your restaurant menu</p>
        </div>

        {/* Desktop / Tablet Table Head */}
        <div
          className="hidden sm:grid grid-cols-5 gap-4
          text-amber-400 font-semibold border-b border-amber-700 pb-2"
        >
          <span>Image</span>
          <span>Name</span>
          <span>Category</span>
          <span>Price</span>
          <span>Delete</span>
        </div>

        {/* Content */}
        {list.length === 0 ? (
          <p className="text-center text-gray-500 py-6">No menu items found</p>
        ) : (
          list.map((item, index) => (
            <div
              key={index}
              className="
              grid grid-cols-1 sm:grid-cols-5 gap-4
              items-center p-4 sm:p-0
              border border-gray-800 sm:border-0
              rounded-xl sm:rounded-none
              hover:bg-black/40 transition"
            >
              {/* Image */}
              <div className="flex justify-center sm:justify-start">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 sm:w-16 sm:h-16
                  object-cover rounded-lg border border-amber-700"
                />
              </div>

              {/* Name */}
              <div>
                <p className="text-gray-400 text-xs sm:hidden">Name</p>
                <p className="text-gray-200 font-medium">{item.name}</p>
              </div>

              {/* Category */}
              <div>
                <p className="text-gray-400 text-xs sm:hidden">Category</p>
                <p className="text-gray-400">{item.category}</p>
              </div>

              {/* Price */}
              <div>
                <p className="text-gray-400 text-xs sm:hidden">Price</p>
                <p className="text-amber-400 font-semibold">₹ {item.price}</p>
              </div>

              {/* Action */}
              <div className="flex sm:justify-start">
                <button
                  onClick={() => deleteMenu(item._id)}
                  className="flex items-center gap-2
                   text-red-500 hover:text-red-600 transition"
                >
                  <MdDeleteSweep size={30} />
                  <span className="text-sm sm:hidden">Delete</span>
                </button>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default ListMenu;
