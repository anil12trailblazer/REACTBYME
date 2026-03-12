import { FOOD_URL, CDN_URL } from "../utils/constants";

const RestoCard = ({ resData }) => {
  const { name, cuisines, costForTwo, sla, locality, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="rest-card">
      <img className="food-img" src={CDN_URL + cloudinaryImageId} />
      <h5>{name + " - " + locality}</h5>
      <h6>{cuisines.join(", ")}</h6>
      <h6>{costForTwo}</h6>
      <h6>{sla.slaString}</h6>
      {/* <h6>User : {loggedInUser}</h6> */}
    </div>
  );
};

export default RestoCard;
