import { createContext, useEffect, useState } from "react";
import ProductService from "../../services/productService";

export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const productService = new ProductService();

  const [products, setProducts] = useState([]);

  const values = {
    products,
    setProducts,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppContext;
