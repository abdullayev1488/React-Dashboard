// React Router Dom
import { BrowserRouter, Routes, Route } from "react-router-dom";

// React
import { useState } from "react";

// Utils
import { AdminLayout } from "../components/layouts/MainLayout/AdminLayout";

// Admin Pages
import { HomePage } from "../pages/IndexPage";
import { BasketPage } from "../pages/basket/BasketPage";
import { ContactPage } from "../pages/contact/ContactPage";
import { ProductPage } from "../pages/product/ProductPage";

// User Pages
import { ErrorPage } from "../pages/error/ErrorPage";


export const AppRouter = () => {
    const [query, setQuery] = useState("");


    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<AdminLayout setQuery={setQuery} />}>
                    <Route index element={<HomePage />} />
                    <Route path="contact" element={<ContactPage />} />
                    <Route path="products" element={<ProductPage query={query}/>} />
                    <Route path="basket" element={<BasketPage/>} />
                </Route>
                <Route path="*" element={<ErrorPage />} />
            </Routes>
        </BrowserRouter>
    )
}