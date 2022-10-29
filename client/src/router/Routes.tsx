import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@pages/Home";
import Search from "@pages/Search";
import Category from "@pages/Category";
import Product from "@pages/Product";

import AdminProduct from "@pages/admin/Product";

const MyRoutes = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/category/:id" element={<Category />} />
                <Route path="/product/:id" element={<Product />} />

                <Route path="/admin/product" element={<AdminProduct />} />
            </Routes>
        </BrowserRouter>
    );
};

export default MyRoutes;
