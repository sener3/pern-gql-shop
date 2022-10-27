import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "@pages/Home";
import Search from "@pages/Search";
import Category from "@pages/Category";

const MyRoutes = (): JSX.Element => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/search" element={<Search />} />
                <Route path="/category/:id" element={<Category />} />
            </Routes>
        </BrowserRouter>
    );
};

export default MyRoutes;
