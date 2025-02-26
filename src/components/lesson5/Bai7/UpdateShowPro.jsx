import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "./Category";
import Product from "./Product";


function UpdateShowPro() {
  return (
      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/product" element={<Product />} />
      </Routes>
  );
}

export default UpdateShowPro;