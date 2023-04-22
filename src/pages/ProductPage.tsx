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

  const weatherFilter = (weatherType: any) => {
    // get all products by weather type using fetch request
    getProducts(`pageSize=10&standingPlaceFilters=${weatherType}`);
  };

  const diameterFilter = (diameterSize: any) => {
    // get all products by diameter size useing fetch request
    getProducts(
      `pageSize=10&diameterMinimumFilter=${diameterSize}&diameterMaximumFilter=${diameterSize}`
    );
  };

  const heightFilter = (heightSize: any) => {
    getProducts(
      `pageSize=10&heightMinimumFilter=${heightSize}&heightMaximumFilter=${heightSize}`
    );
  };

  return (
    <div>
      <div className="main">
        <Sidebar
          data={data}
          weatherFilter={weatherFilter}
          diameterFilter={diameterFilter}
          heightFilter={heightFilter}
        />
        <ShowProducts data={data} />
      </div>
    </div>
  );
};

export default ProductPage;
