import { useContext } from "react";
import { CardProducto } from "../components/CardProducto";
import { ProductosContext } from "../context/ProductosContext";
import { CarritoContext } from "../context/CarritoContext";

export const ComprasPage = () => {
  //Llamamos a useContext pasandole el ProductosContext
  const { productos } = useContext(ProductosContext);

  const {
    agregarCompra,
    eliminarCompra,
  } = useContext(CarritoContext);

  const handleAgregar = (compra) => {agregarCompra(compra)};
  const handleQuitar = (id) => {eliminarCompra(id)};

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
            handleAgregar={() => handleAgregar(producto)}
            handleQuitar={() => handleQuitar(producto.id)}
          />
        ))}
      </div>
    </div>
  );
};
