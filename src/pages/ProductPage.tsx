import { useEffect, useState } from "react";
import ShowProducts from "../components/ShowProducts";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";

type ProductPageProps = {
  setProduct: Function;
  product: any;
};

const ProductPage = (props: ProductPageProps) => {
  const [data, setData] = useState([]);

  const getProducts = async (uri: any) => {
    const response = await fetch(
      `https://jemid-warmupapi.azurewebsites.net/api/products?${uri}`
    );
    const data = await response.json();

    // save products in state
    setData(data.products);
  };

  useEffect(() => {
    // window onload load all products
    getProducts(`pageSize=10`);
  }, []);

  // check which option button is clicked
  const filterItems = (e: any) => {
    let click = e.target.value;

    if (click === "Relevantie") {
      getProducts("pageSize=10");
    } else if (click === "Prijs laag-hoog") {
      priceFilter(click);
    } else if (click === "Prijs hoog-laag") {
      priceFilter(click);
    } else if (click === "Naam a-z") {
      alphabeticFilter(1, -1);
    } else if (click === "Naam z-a") {
      alphabeticFilter(-1, 1);
    }
  };

  // sort products on price
  const priceFilter = (clickedTarget: any) => {
    if (clickedTarget === "Prijs laag-hoog") {
      setData(
        [...data].sort((first: any, second: any) => first.price - second.price)
      );
    } else {
      setData(
        [...data].sort((first: any, second: any) => second.price - first.price)
      );
    }
  };

  // sort products on alphabet
  const alphabeticFilter = (first: any, second: any) => {
    setData(
      [...data].sort((a: any, b: any) => (a.name > b.name ? first : second))
    );
  };

  const weatherFilter = (weatherType: any) => {
    // get all products by weather type using fetch request
    getProducts(`pageSize=10&standingPlaceFilters=${weatherType}`);
  };

  const diameterFilter = (diameterSize: any) => {
    // get all products by diameter size using fetch request
    getProducts(
      `pageSize=10&diameterMinimumFilter=${diameterSize}&diameterMaximumFilter=${diameterSize}`
    );
  };

  const heightFilter = (heightSize: any) => {
    // get all products by height size using fetch request
    getProducts(
      `pageSize=10&heightMinimumFilter=${heightSize}&heightMaximumFilter=${heightSize}`
    );
  };

  const clickHandler = (id: any) => {
    props.setProduct(data[id - 1]);
  };

  return (
    <div>
      <Header />
      <div className="topFilter"></div>
      <div className="main">
        <Sidebar
          data={data}
          weatherFilter={weatherFilter}
          diameterFilter={diameterFilter}
          heightFilter={heightFilter}
        />
        <ShowProducts
          data={data}
          filterItems={filterItems}
          clickHandler={clickHandler}
        />
      </div>
    </div>
  );
};

export default ProductPage;
