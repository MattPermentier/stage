import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProductPage from "./pages/ProductPage";
import ProductDetails from "./pages/ProductDetails";
import { useEffect, useState } from "react";

const App = () => {
  const [product, setProduct] = useState([]);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<ProductPage setProduct={setProduct} product={product} />}
        />
        <Route
          path={`/product`}
          element={<ProductDetails product={product} />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
