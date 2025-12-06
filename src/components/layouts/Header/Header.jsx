import { useLocation } from "react-router-dom";

export const Header = ({ setQuery }) => {
    const location = useLocation();

    return (
        <header className="fixed top-0 left-[16%] right-0 z-20 bg-gray-900 text-white flex items-center justify-between px-6 h-16 md:h-[10vh] shadow">
            <h1 className="text-xl font-semibold tracking-wide">Dashboard Header</h1>

            {location.pathname === "/admin/products" && (
                <div className="relative w-[200px] md:w-[300px]">
                    <input
                        onInput={({ target }) => setQuery(target.value)}
                        type="text"
                        placeholder="Search..."
                        className="w-full bg-gray-800 text-gray-200 placeholder-gray-400 text-sm rounded-md pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
                    />

                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="w-5 h-5 text-gray-400 absolute left-3 top-2.5 pointer-events-none"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M21 21l-4.35-4.35m0 0A7.5 7.5 0 104.5 4.5a7.5 7.5 0 0012.15 12.15z"
                        />
                    </svg>
                </div>
            )}
        </header>
    );
};
