import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@pages/Home";
import Cart from "@pages/Cart";
import Search from "@pages/Search";
import Product from "@pages/Product";
import Category from "@pages/Category";

import AdminProduct from "@pages/admin/Product";

const MyRoutes = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/search" element={<Search />} />
                <Route path="/product/:id" element={<Product />} />
                <Route path="/category/:id" element={<Category />} />

                <Route path="/admin/product" element={<AdminProduct />} />
            </Routes>
        </BrowserRouter>
    );
};

export default MyRoutes;
