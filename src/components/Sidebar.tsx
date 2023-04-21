import { useState } from "react";

type SidebarProps = {
  data: any;
  weatherFilter: Function;
};

const Sidebar = (props: SidebarProps) => {
  const [standingPlaces, setStandingPlaces] = useState([
    "Sun",
    "Partial",
    "Shadow",
  ]);

  return (
    <div className="sidebarContainer">
      <form className="standingPlace">
        <h3>STANDPLAATS</h3>
        {standingPlaces?.map((standingPlace: any) => (
          <div>
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
    </div>
  );
};

export default Sidebar;
