import { useEffect, useState } from "react"
// import { MENU_API } from "./constants";


const useRestroMenu = (resId) => {

    // const [menuData, setMenuData] = useState([]);
    // const id = resId;

    // useEffect(() => {
    //     fetchMenu();
    // }, []);

    // const fetchMenu = async () => {
    //     try {
    //         console.log("Fetching menu for restaurant ID:", id);
    //         // console.log("MENU_API + id URL :", MENU_API + id);
    //         // const resData = await fetch(MENU_API + id);
    //         const resData = await fetch(`https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.6448&lng=77.216721&restaurantId=${id}`);
    //         if (!resData.ok) {
    //             throw new Error("API request failed");
    //         }
    //         const data = await resData.json();
    //         console.log(data);
    //         setMenuData(data?.data?.cards[0]?.card?.card?.info?.itemCards ?? []);
    //     } catch (error) {
    //         console.log("Error fetching menu:", error);
    //     }
    // };

    return menuData;
}

export default useRestroMenu;