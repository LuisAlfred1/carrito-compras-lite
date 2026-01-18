import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

export const CarritoPage = () => {
  const { listaCompras, aumentarCantidad, disminuirCantidad, eliminarCompra } =
    useContext(CarritoContext);
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="col-span-3">
          {/*Carta de lista de compras */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Mi carrito</h2>
            {/*Aqui debería ir el map */}
            {listaCompras.map((item) => (
              <div
                key={item.id}
                className="flex items-center justify-between border-b py-4"
              >
                <img src="" alt="logoProduct" className="w-20" />
                <h3 className="flex-1 ml-4 font-medium text-xl">
                  {item.title}
                </h3>
                <p className="text-gray-700">{item.price}</p>
                <div className="flex items-center gap-2 bg-gray-100 px-3 py-1 rounded-full">
                  <button>-</button>
                  <span>1</span>
                  <button>+</button>
                  <button onClick={() => eliminarCompra(item.id)}>
                    <i className="bi bi-trash"></i>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="col-span-1">
          {/*Resumen */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Resumen</h2>
            <div className="flex justify-between text-sm mb-2">
              <span>Subtotal</span>
              <span>Q0</span>
            </div>

            <div className="border-t my-4"></div>

            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>Q0</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
