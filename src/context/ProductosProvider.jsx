import { ProductosContext } from "../context/ProductosContext";
import { useState, useEffect } from "react";

export const ProductosProvider = ({ children }) => {
  const [productos, setProductos] = useState([]);

  //Utilzando el fetch para obtener los productos
  const fetchProductos = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      const data = await response.json();
      setProductos(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchProductos();
  }, []);
  return (
    <ProductosContext.Provider value={{productos}}>
      {children}
    </ProductosContext.Provider>
  );
};
