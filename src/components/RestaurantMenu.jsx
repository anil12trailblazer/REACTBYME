
import { useEffect, useState } from "react"
import mockdata from "../../mock.json";
import Shimmer from "./shimmer"
import { useParams } from "react-router-dom";
import useRestroMenu from "../utils/useRestroMenu";
import RestaurantCategory from "./RestaurantCategory";


const Restaurantmenu = () => {
    // const [menuList, setMenuList] = useState([]);
    // useEffect(() => {
    //     fetchMenu();
    // }, [])
    // const { resId } = useParams();
    // const menuList = useRestroMenu(resId);

    const [showIndex, setShowIndex] = useState(null);

    const menuList = mockdata;
    const itemCards = menuList?.mockdata?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards || [];
    const itemCategories = menuList?.mockdata?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(item => item.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory") || [];
    
    // useEffect(() => {
    //     const previousShowIndex = showIndex;
    // }, [showIndex]);

    return (menuList.length === 0) ? <Shimmer /> : (
        <div className="p-8">
            <h1 className="text-2xl font-bold">Restaurant Menu</h1>
            <h2 className="text-lg">Below are the Menu's</h2>
            <div>
                {itemCategories.map((item, index) => (
                    // {item.card?.card?.title}
                    <RestaurantCategory key={item.card?.card?.title} category={item.card?.card}
                     showItems={index === showIndex ? true : false}
                     setShowIndex={() => setShowIndex(index)}
                     />
                ))}
            </div>
        </div>
    )
}

export default Restaurantmenu