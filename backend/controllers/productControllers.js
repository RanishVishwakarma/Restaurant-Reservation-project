import productModel from "../models/productModels.js";
import {v2 as cloudinary } from "cloudinary";

const addProduct = async (req, res) => {
  try {
    const { name, price, description, category } = req.body;
    let imageUrl = "https://via.placeholder.com/150";

    if (req.file && req.file.path) {
      const result = await cloudinary.uploader.upload(req.file.path, {
        resource_type: "image",
      });
      imageUrl = result.secure_url;
    }

    const product = new productModel({
      name,
      description,
      category,
      price: Number(price),
      image: imageUrl,
      date: Date.now(),
    });

    await product.save();

    res.json({ success: true, product });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
};

const listProducts = async (req, res) => {
  try {
  const products = await productModel.find();
  res.json({ success: true, products });
} catch (error) {
  log.error(error);
  res.status(500).json({ success: false, message: error.message });
}
};

const removeProduct = async (req, res) => {
  try {
    await productModel.findByIdAndDelete(req.body._id);
    res.json({ success: true, message: "Product removed" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: error.message });
  }
};


const singleProduct = async (req, res) => {
  const product = await productModel.findById(req.params.id);
  res.json({ success: true, product });
};

export {
  addProduct,
  listProducts,
  removeProduct,
  singleProduct,
};
