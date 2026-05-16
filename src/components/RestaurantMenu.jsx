
import { useEffect, useState } from "react"
import mockdata from "../../mock.json";
import Shimmer from "./shimmer"
import { useParams } from "react-router-dom";
import useRestroMenu from "../utils/useRestroMenu";


const Restaurantmenu = () => {
    // const [menuList, setMenuList] = useState([]);
    useEffect(() => {
        fetchMenu();
    }, [])
    const { resId } = useParams();
    const menuList = useRestroMenu(resId);
    return (menuList.length === 0) ? <Shimmer /> : (
        <div className="p-8">
            <h1 className="text-2xl font-bold">Restaurant Menu</h1>
            <h2 className="text-lg">Below are the Menu's</h2>
            <ul>
                {menuList.map(item => (
                    <li key={item.id}>{item.name}</li>
                ))}
            </ul>
        </div>
    )
}

export default Restaurantmenu