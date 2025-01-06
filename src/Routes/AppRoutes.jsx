import Home from "../components/home";
import About from "../components/About";
import CreateProducts from "../components/product";
import ProductData from "../components/productdata";
import {Routes, Route} from "react-router-dom";

export const AppRoutes =()=>{
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/ProductData" element={<ProductData />} />
            <Route path="/product" element={<CreateProducts/>} />

        </Routes>
    );
};
export default AppRoutes;