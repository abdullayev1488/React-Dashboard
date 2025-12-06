import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { DataContext } from "../../../context/DataContext";

export const Menu = ({ open, setOpen }) => {
  const { pathname } = useLocation();
  const { basket } = useContext(DataContext)

  const links = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/contact", label: "Contact" },
    { to: "/basket", label: "Basket" }
  ];

  return (
    <aside
      className={`
        fixed top-0 left-0 z-30
        bg-gray-900 text-white h-screen
        flex flex-col items-start p-5
        transition-transform duration-300
        lg:w-2/12 md:w-5/12 w-9/12
        ${open ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}
      `}
    >

      <div className="text-2xl flex items-center justify-between w-full  font-bold mb-8 tracking-wide">
        MyLogo
<span 
  onClick={() => setOpen(false)}
  className="lg:hidden cursor-pointer text-3xl font-bold text-[#fff] hover:text-gray-700 transition-colors duration-200"
>
  ×
</span>

      </div>

      <nav className="w-full">
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                onClick={() => setOpen(false)}
                to={link.to}
                className={`flex items-center px-4 py-2 rounded-md text-lg transition-all duration-200 
                  ${pathname === link.to
                    ? "bg-indigo-600 text-white font-semibold"
                    : "hover:bg-gray-800 text-gray-300 hover:text-white"
                  }`}
              >
                {link.label}

                {link.to === "/basket" && (
                  <span className="bg-red-500 text-white text-xs rounded-full px-2 ml-2">
                    {basket.length}
                  </span>
                )}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}
