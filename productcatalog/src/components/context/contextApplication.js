import { createContext, useEffect, useState } from "react";
import ProductService from "../../services/productService";

export const AppContext = createContext();
export const AppContextProvider = ({ children }) => {
  const productService = new ProductService();
  const [isLogin, setIsLogin] = useState(false);
  const [snackbar, setSnackbar] = useState({
    isOpen: false,
    message: "Selam..",
    severity: "success",
  });

  const values = {
    isLogin,
    setIsLogin,
    snackbar,
    setSnackbar,
  };

  return <AppContext.Provider value={values}>{children}</AppContext.Provider>;
};

export default AppContext;
