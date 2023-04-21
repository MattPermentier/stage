import { useState } from "react";

type SidebarProps = {
  data: any;
  weatherFilter: Function;
};

const Sidebar = (props: SidebarProps) => {
  const [standingPlace, setStandingPlace] = useState<string[]>([]);
  const [productDiameter, setProductDiameter] = useState<number[]>([]);
  const [productHeight, setProductHeight] = useState<number[]>([]);

  const setStandingValues = async () => {
    await props.data.products?.map((product: any) => {
      if (!standingPlace.includes(product.standingPlace)) {
        setStandingPlace([...standingPlace, product.standingPlace]);
      }
    });
  };
  setStandingValues();

  const setDiameterValues = async () => {
    // check if diameter is unique in state and add it to the state
    await props.data.products?.map((product: any) => {
      if (!productDiameter.includes(product.diameter)) {
        setProductDiameter([...productDiameter, product.diameter]);
      }
    });
  };
  setDiameterValues();

  const setHeightValues = async () => {
    await props.data.products?.map((product: any) => {
      if (!productHeight.includes(product.height)) {
        setProductHeight([...productHeight, product.height]);
      }
    });
  };
  setHeightValues();

  return (
    <div className="sidebarContainer">
      <form className="standingPlace">
        <h3>STANDPLAATS</h3>
        {standingPlace?.map((standingPlace: any, index: number) => (
          <div key={index++}>
            <input
              type="radio"
              className="weatherInput"
              id="sunBtn"
              name="standingPlace"
              onChange={() => props.weatherFilter(standingPlace)}
            />
            <label htmlFor="sunBtn">{standingPlace}</label>
          </div>
        ))}
      </form>
      <form action="" className="diameter">
        <h3>Diameter</h3>
        {productDiameter?.map((productDiameter: any, index: number) => (
          <div key={index++}>
            <input
              type="radio"
              className="weatherInput"
              id="sunBtn"
              name="standingPlace"
              // onChange={() => props.weatherFilter(standingPlace)}
            />
            <label htmlFor="sunBtn">{productDiameter}</label>
          </div>
        ))}
      </form>
      <form action="" className="diameter">
        <h3>Hoogte</h3>
        {productHeight?.map((productHeight: any, index: number) => (
          <div key={index++}>
            <input
              type="radio"
              className="weatherInput"
              id="sunBtn"
              name="standingPlace"
              // onChange={() => props.weatherFilter(standingPlace)}
            />
            <label htmlFor="sunBtn">{productHeight}</label>
          </div>
        ))}
      </form>
    </div>
  );
};

export default Sidebar;
