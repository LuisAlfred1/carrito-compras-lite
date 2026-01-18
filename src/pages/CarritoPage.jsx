import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

export const CarritoPage = () => {
  const { listaCompras, aumentarCantidad, disminuirCantidad, eliminarCompra } =
    useContext(CarritoContext);

  //Funcion que obtiene la suma entre el precio por la cantidad y lo renderiza en el card "Resumen"s
  const subtotal = listaCompras.reduce(
    (total, item) => total + item.price * item.cantidad,
    0,
  );

  const handleImpresion = () => {
    print();
  };
  return (
    <div className="max-w-7xl mx-auto p-6">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="col-span-3">
          {/*Carta de lista de compras */}
          <div className="bg-white rounded-lg shadow-sm p-6">
            <h2 className="text-lg font-semibold mb-4">Mi carrito</h2>
            {/*Si hay productos en la lista: */}
            {listaCompras.length > 0 ? (
              listaCompras.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col md:flex-row md:items-center gap-4 border-b py-4"
                >
                  {/* Imagen */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-10 h-10 object-contain mx-auto md:mx-0"
                  />

                  {/* Información */}
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="font-medium text-lg line-clamp-2">
                      {item.title}
                    </h3>
                    <p className="text-gray-600 mt-1">Q{item.price}</p>
                  </div>

                  {/* Controles */}
                  <div className="flex items-center justify-center md:justify-end gap-4">
                    <div className="flex items-center bg-gray-100 rounded-full px-3 py-1">
                      <button
                        className="px-2 text-lg font-bold cursor-pointer"
                        onClick={() => disminuirCantidad(item.id)}
                      >
                        -
                      </button>
                      <span className="px-2">{item.cantidad}</span>
                      <button
                        className="px-2 text-lg font-bold cursor-pointer"
                        onClick={() => aumentarCantidad(item.id)}
                      >
                        +
                      </button>
                    </div>

                    <button
                      onClick={() => eliminarCompra(item.id)}
                      className="text-red-500 hover:text-red-700 cursor-pointer"
                    >
                      <i className="bi bi-trash text-xl"></i>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              //Si no hay productos en la lista
              <div className="text-center py-12 text-gray-500">
                <i className="bi bi-cart-x text-4xl mb-4 block"></i>
                <p className="text-lg font-medium">Tu carrito está vacío</p>
                <p className="text-sm">Agrega productos para continuar</p>
              </div>
            )}
          </div>
        </div>
        <div className="col-span-1">
          {/*Resumen */}
          <div className="bg-white rounded-lg shadow-sm p-6 sticky top-6">
            <h2 className="text-lg font-semibold mb-4">Resumen</h2>
            <div className="flex justify-between text-sm mb-2">
              <span>Subtotal</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>

            <div className="border-t my-4"></div>

            <div className="flex justify-between font-semibold text-lg">
              <span>Total</span>
              <span>${subtotal.toFixed(2)}</span>
            </div>
            <button
              onClick={() => handleImpresion()}
              className="w-full py-2 bg-green-600 hover:bg-green-700 mt-2 text-white transition cursor-pointer"
            >
              <i className="bi bi-cash-coin"></i> Pagar
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
