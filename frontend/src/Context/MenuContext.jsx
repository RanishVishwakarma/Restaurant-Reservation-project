import { createContext, useEffect, useState } from "react";
import { product } from "../assets/assets";
import axios from "axios";
import { backendUrl } from "../App";
import { toast } from "react-toastify";


export const MenuContext = createContext();

const MenuContextProvider = ({ children }) => {
  const [products, setProducts] = useState(product);

  const getProductData = async () => {
    try {
      const response = await axios.get(`${backendUrl}/api/product/list`);
      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        Toast.error("response.data.message");
      }
      
    } catch (error) {
      
    }
  };

  useEffect(() => {
    getProductData();
  }, []);

  return (
    <MenuContext.Provider value={{ products, setProducts }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
