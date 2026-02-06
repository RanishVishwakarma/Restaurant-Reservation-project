import React, { useState } from "react";
import upload_img from "../assets/upload_img.png";
import axios from "axios";
import { toast } from "react-toastify";
import { backendUrl } from "../App";

const AddMenu = () => {
  const [image, setImage] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");

  // required to avoid runtime error
  const token = localStorage.getItem("token");
  console.log("TOKEN:", token);


  const OnSbubmitHandler = async (e) => {
    e.preventDefault();

    try {
      const formData = new FormData();
      formData.append("name", name);
      formData.append("description", description);
      formData.append("category", category);
      formData.append("price", price);
      if (image) formData.append("image", image);

      const response = await axios.post(
        `${backendUrl}/api/product/add`,
        formData,
        { headers: { Authorization: `Bearer ${token}` } },
      );

      if (response.data.success) {
        toast.success("Menu item added successfully!");
        setName("");
        setDescription("");
        setCategory("");
        setPrice("");
        setImage(null);
      } else {
        toast.error(response.data.message || "Failed to add menu item.");
      }
    } catch (error) {
      console.log(error.response?.data);
      toast.error("An error occurred while adding the menu item.");
    }
  };

  return (
    <div className="flex justify-center">
      <form
        onSubmit={OnSbubmitHandler}
        className="w-full max-w-4xl bg-[#0f0f0f]/90 backdrop-blur
        border border-amber-700 rounded-2xl shadow-2xl
        p-6 sm:p-8 space-y-8"
      >
        {/* Header */}
        <div className="text-center border-b border-amber-700 pb-4">
          <h2 className="text-2xl sm:text-3xl font-serif text-amber-400">
            Add Menu Item
          </h2>
          <p className="text-sm text-gray-400">Fine Dining Menu Management</p>
        </div>

        {/* Image Upload */}
        <div className="flex flex-col sm:flex-row items-center gap-6">
          <label
            htmlFor="image"
            className="w-40 h-40 flex items-center justify-center
            border-2 border-dashed border-amber-700 rounded-xl
            cursor-pointer hover:bg-amber-800/10 transition"
          >
            <img
              src={!image ? upload_img : URL.createObjectURL(image)}
              alt="Upload"
              className="w-24 object-contain"
            />
            <input
              type="file"
              id="image"
              onChange={(e) => setImage(e.target.files[0])}
              className="hidden"
            />
          </label>

          <p className="text-gray-400 text-sm text-center sm:text-left">
            Upload high-quality dish image (JPG / PNG)
          </p>
        </div>

        {/* Name */}
        <div>
          <label className="text-sm text-amber-400">Dish Name</label>
          <input
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Truffle Alfredo Pasta"
            className="w-full mt-1 px-4 py-3 rounded-lg
            bg-black/60 border border-amber-700 text-gray-200
            focus:ring-2 focus:ring-amber-600 outline-none"
          />
        </div>

        {/* Description */}
        <div>
          <label className="text-sm text-amber-400">Description</label>
          <textarea
            rows="4"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            placeholder="Describe ingredients and preparation style"
            className="w-full mt-1 px-4 py-3 rounded-lg
            bg-black/60 border border-amber-700 text-gray-200
            focus:ring-2 focus:ring-amber-600 outline-none resize-none"
          />
        </div>

        {/* Category & Price */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="text-sm text-amber-400">Category</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full mt-1 px-4 py-3 rounded-lg
              bg-black/60 border border-amber-700 text-gray-200
              focus:ring-2 focus:ring-amber-600 outline-none"
            >
              <option value="">Select category</option>
              <option>Spaghetti</option>
              <option>Pizza</option>
              <option>Rice</option>
              <option>Noodles</option>
              <option>Chicken</option>
              <option>Drinks</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-amber-400">Price</label>
            <input
              type="number"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="₹ 499"
              className="w-full mt-1 px-4 py-3 rounded-lg
              bg-black/60 border border-amber-700 text-gray-200
              focus:ring-2 focus:ring-amber-700 outline-none"
            />
          </div>
        </div>

        {/* Submit */}
        <div className="flex justify-center pt-4">
          <button
            type="submit"
            className="px-10 py-3 rounded-lg font-semibold
            tracking-wide bg-amber-700 hover:bg-amber-800
            text-white transition shadow-lg"
          >
            Add Menu Item
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddMenu;
