import { useReducer } from "react";
import { CarritoContext } from "./CarritoContext";

const initialState = [];

const comprasReducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case "[Carrito] Agregar compra":
      return [...state, action.payload];
    case "[Carrito] Aumentar Cantidad Compra": //TODO: agregar cantidad y modificar
      break;
    case "[Carrito] Disminuir Cantidad Compra": //TODO: agregar cantidad y modificar
      break;
    case "[Carrito] Eliminar Compra":
      return state.filter((compra) => compra.id !== action.payload);
    default:
      return state;
  }
};

export const CarritoProvider = ({ children }) => {
  const [listaCompras, dispatch] = useReducer(comprasReducer, initialState);

  //Añadiendo las acciones
  const agregarCompra = (compra) => {
    const action = {
      type: "[Carrito] Agregar compra",
      payload: compra,
    };
    dispatch(action);
  };
  const aumentarCantidad = (id) => {
    const action = {
      type: "[Carrito] Aumentar Cantidad Compra",
      payload: id,
    };
    dispatch(action);
  };
  const disminuirCantidad = (id) => {
    const action = {
      type: "[Carrito] Disminuir Cantidad Compra",
      payload: id,
    };
    dispatch(action);
  };
  const eliminarCompra = (id) => {
    const action = {
      type: "[Carrito] Eliminar Compra",
      payload: id,
    };
    dispatch(action);
  };

  //Utima modificación: Viernes 16-01-2026: 19:18pm
  return (
    <CarritoContext.Provider
      value={{
        listaCompras,
        agregarCompra,
        aumentarCantidad,
        disminuirCantidad,
        eliminarCompra,
      }}
    >
      {children}
    </CarritoContext.Provider>
  );
};
