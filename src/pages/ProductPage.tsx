import { useEffect, useState } from "react";
import ShowProducts from "../components/ShowProducts";
import Sidebar from "../components/Sidebar";

const ProductPage = () => {
  const [data, setData] = useState([]);

  const getProducts = async (uri: any) => {
    const response = await fetch(
      `https://jemid-warmupapi.azurewebsites.net/api/products?${uri}`
    );
    // save data in global variable to make filters
    const data = await response.json();

    // save products in state
    setData(data);
  };

  useEffect(() => {
    // window onload load all products
    getProducts(`pageSize=10`);
  }, []);

  return (
    <div>
      <div className="main">
        <Sidebar data={data} />
        <ShowProducts data={data} />
      </div>
    </div>
  );
};

export default ProductPage;
