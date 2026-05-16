import { CDN_URL } from "../utils/constants";

const RestoCard = ({ resData }) => {
  const { name, cuisines, costForTwo, sla, locality, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="p-2 m-2 w-56 bg-gray-50 rounded-lg hover:bg-pink-100 cursor-pointer">
      <img className="w-full h-48 object-cover rounded-t-lg" src={CDN_URL + cloudinaryImageId} />
      <div className="p-2">
        <h5 className="font-bold font-calibri">{name + " - " + locality}</h5>
        <h6 className="text-wrap">{cuisines.join(", ")}</h6>
        <h6 className="">{costForTwo}</h6>
        <h6 className="">{sla.slaString}</h6>
      </div>
    </div>
  );
};

// higher order component
// input RestoCard and return another component with extra functionality
export const withPromotedRestoCard = (RestoCard) => {
  return (props) => {
    return (
      <div className="relative">
        <div className="absolute top-0 left-0 bg-black text-white text-xs font-bold px-2 py-1 rounded-br-lg">Promoted</div>
        <RestoCard {...props} />
      </div>
    );
  };
};

export default RestoCard;
