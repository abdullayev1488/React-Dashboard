import { useContext } from "react";
import { Link, useLocation } from "react-router-dom";
import { DataContext } from "../../../context/DataContext";

export const Menu = () => {
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
      className="
        bg-gray-900 text-white
        fixed top-0 left-0
        h-screen
        w-2/12
        flex flex-col items-start md:items-center
        p-5
        z-30
      "
    >
      <div className="text-2xl font-bold mb-8 tracking-wide">MyLogo</div>

      <nav className="w-full">
        <ul className="space-y-2">
          {links.map((link) => (
            <li key={link.to}>
              <Link
                to={link.to}
                className={`flex items-center px-4 py-2 rounded-md text-lg transition-all duration-200 
                  ${pathname === link.to
                    ? "bg-indigo-600 text-white font-semibold"
                    : "hover:bg-gray-800 text-gray-300 hover:text-white"
                  }`}
              >
                {link.label}
                {link.to == "/admin/basket" && (
                  <span
                    className="
                        inline-flex items-center justify-center
                        min-w-[22px] h-[22px]
                        bg-red-500 text-white text-[12px] font-semibold
                        rounded-full ml-[6px] px-[6px]
                        shadow
                      "
                  >
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
};
