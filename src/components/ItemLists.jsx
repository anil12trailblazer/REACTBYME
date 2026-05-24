import { CDN_URL } from "../utils/constants";
import { useContext } from "react";
import UserContext from "../utils/userContext";
const ItemLists = ({ itemCategories }) => {
    const user = useContext(UserContext);
    return (
        <div className="p-8">
            {itemCategories.map((Item) => (
                <div className="flex items-center justify-between gap-4" key={Item.card?.info?.id}>
                    <div className="p-2 border-b border-gray-200 row-6">
                        <span className="text-md font-semibold">{Item.card?.info?.name} - </span>
                        <span className="text-sm bg-gray-400 text-black p-1 w-4 border-r">₹ {(Item.card?.info?.price ? Item.card.info.price / 100 : Item.card.info.defaultPrice / 100)}</span>
                        <h6 className="text-sm font-extralight">{Item.card?.info?.description}</h6>
                        <h6 className="text-sm font-extralight">{user.name}</h6>
                    </div>
                    <div className="relative">
                        <button className="absolute left-4 bottom-4 bg-black text-white rounded-md">add+</button>

                        <img src={CDN_URL + (Item.card?.info?.imageId ? Item.card?.info?.imageId : "")} className="w-32 h-32 p-4 object-cover rounded-md" />
                    </div>
                </div>
            ))}
        </div>
    );
}

export default ItemLists;   