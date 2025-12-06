import { Outlet } from "react-router-dom"
import { Menu } from "../Menu/Menu";
import { Header } from "../Header/Header";
import { useState } from "react";

export const AdminLayout = ({ setQuery }) => {

    const [open, setOpen] = useState(false);

    return (
        <div className="min-h-screen relative flex bg-gray-50 text-gray-900">

            {/* Sidebar */}
            <Menu open={open} setOpen={setOpen} />

            {/* Content */}
            <div className="flex-1 flex flex-col h-screen overflow-hidden lg:ml-[16.666%]">
                <Header setQuery={setQuery} setOpen={setOpen} />

                {/* overlay */}
                {open && (
                    <div
                        onClick={() => setOpen(false)}
                        className="fixed inset-0 bg-black bg-opacity-50 z-20 md:hidden"
                    />
                )}

                <main className="flex-1 overflow-y-auto p-6 pt-[110px] bg-white shadow-inner">
                    <Outlet />
                </main>
            </div>
        </div>
    )
}
