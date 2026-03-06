import RestoCard from "./RestoCard";
import restList from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [restroList, setRestList] = useState(restList);

  return (
    <div className="body">
      <div className="search">
        <button
          onClick={() => {
            const filterHighRatedRestro = restroList.filter(
              (res) => res.info.avgRating > 4
            );

            setRestList(filterHighRatedRestro);
          }}
          className="filterButton"
        >
          High Rated Restro
        </button>
        <button
          onClick={() => {
            setRestList(restList);
          }}
          className="filterButton"
        >
          Clear Filter
        </button>
      </div>
      <div className="res-container">
        {restroList.map((restaurant) => (
          <RestoCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
