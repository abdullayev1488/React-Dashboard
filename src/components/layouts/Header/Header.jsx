import { useLocation } from "react-router-dom";

export const Header = ({ setQuery, setOpen }) => {
    const location = useLocation();

    return (
<header
  className="
    fixed top-0 
    left-0 lg:left-[16.666%] right-0
    z-20 bg-gray-900 text-white 
    flex items-center justify-between 
    px-4 lg:px-6
    h-16 lg:h-[10vh] 
    shadow
  "
>


            {/* Mobile menu button */}
            <button
                className=" cursor-pointer lg:hidden text-2xl"
                onClick={() => setOpen(true)}
            >
                ☰
            </button>

            <h1 className="text-xl font-semibold tracking-wide hidden lg:block">
                Dashboard Header
            </h1>

            {location.pathname === "/products" && (
                <div className="relative  w-[200px] md:w-[300px]">
                    <input
                        onInput={({ target }) => setQuery(target.value)}
                        placeholder="Search..."
                        className="w-full bg-gray-800 text-gray-200 rounded-md pl-10 py-2"
                    />
                </div>
            )}
        </header>
    )
}
