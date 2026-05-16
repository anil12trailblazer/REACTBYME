import RestoCard, {withPromotedRestoCard} from "./RestoCard";
import { useEffect, useState } from "react";
import Shimmer from "./shimmer";
import { DATA_API } from "../utils/constants";
import useOnlinesStatus from "../utils/useOnlineStatus";
import { Link } from "react-router-dom";
const Body = () => {
  const [restroList, setRestList] = useState([]);
  const [filterRestroList, setFilterRestList] = useState([]);
  const [searchText, setSearchText] = useState("");
  console.log(searchText);
  const PromotedRestoCard = withPromotedRestoCard(RestoCard);
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

    const isOnline = useOnlinesStatus();
    if(!isOnline){
        return <h1>Offline, Please check your internet connection!!</h1>
    }

  return restroList.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="p-8">
      <h1 className="text-2xl font-bold">Restaurants to explore</h1>
      <h2 className="text-lg">Indulge with the best of cuisines</h2>
      <div className="flex items-center gap-4 my-4">
        <div className="search-container flex items-center gap-2">
          <input type="text" className="text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300" onChange={(e) => setSearchText(e.target.value)} />
          <button onClick={(res) => {
            const filterRestro = restroList.filter(
              (res) => res.info.name.toLowerCase().includes(searchText.toLowerCase())
            );

            setFilterRestList(filterRestro);
          }} className="bg-slate-300">search</button>
        </div>
        <button
          onClick={() => {
            const filterHighRatedRestro = restroList.filter(
              (res) => res.info.avgRating > 4
            );

            setFilterRestList(filterHighRatedRestro);
          }}
          className="bg-slate-300"
        >
          High Rated Restro
        </button>
        <button
          onClick={() => {
            setFilterRestList(restroList);
          }}
         className="bg-slate-300"
        >
          Clear Filter
        </button>
      </div>
      <div className="flex flex-wrap">
        {filterRestroList.map((restaurant) => (
          <Link key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}>
            {restaurant.info.promoted ? (<PromotedRestoCard key={restaurant.info.id} resData={restaurant} />) : (
              <RestoCard key={restaurant.info.id} resData={restaurant} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
