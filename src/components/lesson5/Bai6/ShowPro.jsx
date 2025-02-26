import { BrowserRouter, Routes, Route } from "react-router-dom";
import Category from "./Category";
import Product from "./Product";


function ShowPro() {
  return (
      <Routes>
        <Route path="/" element={<Category />} />
        <Route path="/product/:categoryId" element={<Product />} />
      </Routes>
  );
}
export default ShowPro;