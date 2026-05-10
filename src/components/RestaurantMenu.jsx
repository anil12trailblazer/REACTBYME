
// import { useEffect, useState } from "react"
// import mockdata from "../../mock.json";
// import Shimmer from "./shimmer"



// const Restaurantmenu = () => {
//     const [menuList, setMenuList] = useState([]);
//     useEffect(() => {
//         fetchMenu();
//     }, [])

//     const fetchMenu = async () => {
//         const restaurantMenu = mockdata.mockdata.cards?.[3]?.card?.card?.gridElements?.infoWithStyle?.offers;
//         console.log(restaurantMenu);
        
//         setMenuList(restaurantMenu);
//     };
//     return (menuList.length === 0) ? <Shimmer /> : (
//         <div>
//             <h1> </h1>
//             <h2>Below are the Menu's</h2>
//             <ul>
//                 {menuList.map(item => (
//                     <li key={item.id}>{item.name}</li>
//                 ))}
//             </ul>
//         </div>
//     )
// }

// export default Restaurantmenu