import { useState } from "react";

import ItemLists from "./ItemLists";

const RestaurantCategory = ({ showItems, setShowIndex, category }) => {
    // const [showitems, setShowItems] = useState(false);
    const handleclick = () => {
        // console.log("Clicked on category:", category.title);
        // setShowItems(!showitems);
         setShowIndex();
        }
        return (
        <div className="p-4 m-4 bg-gray-200 rounded-md">
            {/* // accordion name and arrow symbol */}
            <div className="flex items-center w-auto justify-between p-2 rounded-md cursor-pointer" onClick={handleclick}>
                <h2 className="p-2 text-lg font-semibold">{category.title} ({category.itemCards.length})</h2>
                <span className="p-2 text-lg">→</span>
            </div>
            {/* //accordion body */}
            <div className="p-2">
                {showItems && <ItemLists itemCategories={category.itemCards} />}
            </div>
        </div>
    );
}

export default RestaurantCategory;
