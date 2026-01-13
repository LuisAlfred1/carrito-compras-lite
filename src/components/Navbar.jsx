import { NavLink } from "react-router-dom";
import { ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";

export const Navbar = () => {
  return (
    <nav className="bg-white shadow fixed w-full z-20 top-0 start-0">
      <div className="max-w-7xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/*Uso de <NavLink> en vez de <a> para rutear las páginas */}
        {/*Con el atributo "to" le asignamos el nombre */}
        <NavLink to={"/"} className="flex gap-2 items-center">
          <img src="favicon.ico" className="h-6" alt="logoCar" />
          <span className="self-center text-xl text-heading font-semibold whitespace-nowrap">
            Ecommerce
          </span>
        </NavLink>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 mt-4 border border-default rounded-base bg-neutral-secondary-soft md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-neutral-primary">
            <li>
              <NavLink
                to={"/"}
                className="block py-2 px-3 bg-brand rounded md:bg-transparent md:text-fg-brand md:p-0"
              >
                Compras
              </NavLink>
            </li>
            <li>
              <NavLink
                to={"/carrito"}
                className="block py-2 px-3 text-heading rounded hover:bg-neutral-tertiary md:hover:bg-transparent md:border-0 md:hover:text-fg-brand md:p-0 md:dark:hover:bg-transparent"
              >
                {/*Aqui utilicé UI materia para usar el badge del carroto con el contador incluido */}
                <Badge badgeContent={4} color="secondary">
                  {/*Icono del carrito */}
                  <ShoppingCart color="action" />
                </Badge>
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
