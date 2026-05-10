import RestoCard from "./RestoCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { DATA_API } from "../utils/constants";
import e from "cors";

const Body = () => {
  const [restroList, setRestList] = useState([]);
  const [filterRestroList, setFilterRestList] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log(searchText);

  useEffect(() => {
    fetchData();
  }, []);
  const fetchData = async () => {
    const URL = DATA_API;
    const data = await fetch(URL);
    const RestoJsonData = await data.json();
    const restaurants =
      RestoJsonData?.data?.cards
        ?.map((c) => c?.card?.card)
        ?.find((card) => card?.gridElements?.infoWithStyle?.restaurants)
        ?.gridElements?.infoWithStyle?.restaurants ?? [];
    console.log(restaurants);
    setRestList(restaurants);
    setFilterRestList(restaurants);
  };
  return restroList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      
        <h1>Restaurants to explore</h1>
        <h2>Indulge with the best of cuisines</h2>
      <div className="search">
        <div className="search-filter">
          <input type="text" className="search-text" onChange={(e) => setSearchText(e.target.value)} />
          <button onClick={(res) => {
            const filterRestro = restroList.filter(
              (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );

            setFilterRestList(filterRestro);
          }} className="seach-btn">search</button>
        </div>
        <button
          onClick={() => {
            const filterHighRatedRestro = restroList.filter(
              (res) => res.info.avgRating > 4
            );

            setFilterRestList(filterHighRatedRestro);
          }}
          className="filterButton"
        >
          High Rated Restro
        </button>
        <button
          onClick={() => {
            setFilterRestList(restroList);
          }}
          className="filterButton"
        >
          Clear Filter
        </button>
      </div>
      <div className="res-container">
        {filterRestroList.map((restaurant) => (
          <RestoCard key={restaurant.info.id} resData={restaurant} />
        ))}
      </div>
    </div>
  );
};

export default Body;
