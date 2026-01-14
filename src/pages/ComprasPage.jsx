import { useEffect, useState } from "react";
import { CardProducto } from "../components/CardProducto";

export const ComprasPage = () => {
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
    <div>
      <h1 className="text-xl tracking-tight font-medium ml-4">Productos</h1>
      <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 justify-items-center">
        {/*Mapeando los producto en el componente CardProducto */}
        {productos.map((producto) => (
          <CardProducto
            key={producto.id}
            imagen={producto.image}
            titulo={producto.title}
            descripcion={producto.description}
            precio={producto.price}
          />
        ))}
      </div>
    </div>
  );
};
