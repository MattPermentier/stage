import { useState } from "react";

type SidebarProps = {
  data: any;
  weatherFilter: Function;
  diameterFilter: Function;
  heightFilter: Function;
};

const Sidebar = (props: SidebarProps) => {
  const [standingPlace, setStandingPlace] = useState<string[]>([]);
  const [productDiameter, setProductDiameter] = useState<number[]>([]);
  const [productHeight, setProductHeight] = useState<number[]>([]);

  const setStandingValues = async () => {
    await props.data?.map((product: any) => {
      if (!standingPlace.includes(product.standingPlace)) {
        setStandingPlace([...standingPlace, product.standingPlace]);
      }
    });
  };
  setStandingValues();

  const setDiameterValues = async () => {
    // check if diameter is unique in state and add it to the state
    await props.data?.map((product: any) => {
      if (!productDiameter.includes(product.diameter)) {
        setProductDiameter([...productDiameter, product.diameter]);
      }
    });
  };
  setDiameterValues();

  const setHeightValues = async () => {
    await props.data?.map((product: any) => {
      if (!productHeight.includes(product.height)) {
        setProductHeight([...productHeight, product.height]);
      }
    });
  };
  setHeightValues();

  return (
    <div className="sidebarContainer">
      <div className="sidebarItems">
        <form className="standingPlace">
          <h3 className="sidebarHeader">STANDPLAATS</h3>
          {standingPlace?.map((standingPlace: any, index: number) => (
            <div className="radioBtns" key={index++}>
              <input
                type="radio"
                className="weatherInput"
                id="sunBtn"
                name="standingPlace"
                onChange={() => props.weatherFilter(standingPlace)}
              />
              {/* <label htmlFor="sunBtn">{standingPlace}</label> */}
              <label htmlFor="sunBtn">
                {(() => {
                  switch (standingPlace) {
                    case "Sun":
                      return "Zon";
                    case "Partial":
                      return "Halfschaduw";
                    case "Shadow":
                      return "Schaduw";
                    default:
                  }
                })()}
              </label>
            </div>
          ))}
        </form>
        <form className="diameter">
          <h3 className="sidebarHeader">Diameter</h3>
          {productDiameter?.map((productDiameter: any, index: number) => (
            <div className="radioBtns" key={index++}>
              <input
                type="radio"
                className="weatherInput"
                id="sunBtn"
                name="standingPlace"
                onChange={() => props.diameterFilter(productDiameter)}
              />
              <label htmlFor="sunBtn">{productDiameter} cm</label>
            </div>
          ))}
        </form>
        <form className="diameter">
          <h3 className="sidebarHeader">Hoogte</h3>
          {productHeight?.map((productHeight: any, index: number) => (
            <div className="radioBtns" key={index++}>
              <input
                type="radio"
                className="weatherInput"
                id="sunBtn"
                name="standingPlace"
                onChange={() => props.heightFilter(productHeight)}
              />
              <label htmlFor="sunBtn">{productHeight} cm</label>
            </div>
          ))}
        </form>
      </div>
    </div>
  );
};

export default Sidebar;
