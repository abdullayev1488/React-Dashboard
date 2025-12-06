// React Router
import { Outlet } from "react-router-dom"
// Components
import { Menu } from "../Menu/Menu";
import { Header } from "../Header/Header";
import { useContext } from "react";
import { DataContext } from "../../../context/DataContext";


export const AdminLayout = ({setQuery}) => {

    return (
        <div className="min-h-screen relative flex bg-gray-50 text-gray-900">
            <Menu />
            <div className="flex-1 flex flex-col h-screen overflow-hidden md:ml-[16.6667%]">
                <Header setQuery={setQuery} />
                <main className="flex-1 overflow-y-auto p-6 pt-[110px] bg-white shadow-inner">
                    <Outlet/>
                </main>
            </div>
        </div>
    )
}
