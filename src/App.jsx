import { Routes } from "react-router-dom";
import { Route } from "react-router-dom";
import { Navbar } from "./components/Navbar";
import { ComprasPage } from "./pages/ComprasPage";
import { CarritoPage } from "./pages/CarritoPage";
import { ProductosProvider } from "./context/ProductosProvider";

export const App = () => {
  return (
    <ProductosProvider>
      {/*Importando el navbar aquí */}
      <Navbar />
      {/*Uso de Routes junto con su Route*/}
      <Routes>
        <Route path="/" element={<ComprasPage />}></Route>
        <Route path="/carrito" element={<CarritoPage />}></Route>
      </Routes>
    </ProductosProvider>
  );
};
