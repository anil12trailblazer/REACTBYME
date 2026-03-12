import RestoCard from "./RestoCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { DATA_API } from "../utils/constants";

const Body = () => {
  const [restroList, setRestList] = useState([]);
  // useEffect(() => {
  //   fetchData();
  // }, []);
  // const fetchData = async () => {
  //   const controller = new AbortController();
  //   const URL =
  //     "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.296";
  //   const data = fetch(URL);
  //   const RestoJsonData = await data.json;
  //   console.log(RestoJsonData);
  //   //optional chaining
  //   setRestList(RestoJsonData?.data?.cards[2]?.data?.data?.cards);
  // };

  // ✅ Call fetchData once after initial render
  useEffect(() => {
    const controller = new AbortController();
    fetchData(controller);
    return () => controller.abort(); // cleanup on unmount
  }, []); // ✅ runs after the component is committed to the DOM
  const fetchData = async (controller) => {
    try {
      // Prefer calling through your proxy to avoid CORS:
      // Original endpoint:
      //   https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.296
      // Proxied path (Express/http-proxy-middleware):
      const url = DATA_API;

      const res = await fetch(url, {
        signal: controller.signal,
        headers: {
          Accept: "application/json",
        },
      });

      if (!res.ok) {
        console.log(`HTTP ${res.status}`);
        return; // keep mock data
      }

      const data = await res.json();
      console.log("Swiggy raw response:", data);

      // Common shape:
      // data.data.cards[?].card.card.gridElements.infoWithStyle.restaurants
      const restaurants =
        data?.data?.cards
          ?.map((c) => c?.card?.card)
          ?.find((card) => card?.gridElements?.infoWithStyle?.restaurants)
          ?.gridElements?.infoWithStyle?.restaurants ?? [];

      if (Array.isArray(restaurants) && restaurants.length) {
        setRestList(restaurants);
      } else {
        console.log("No restaurants found");
      }
    } catch (e) {
      if (e.name !== "AbortError") {
        console.log("Fetch failed:", e?.message || e);
      }
    }
  };
  return restroList.length === 0 ? (
    <Shimmer />
  ) : (
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
