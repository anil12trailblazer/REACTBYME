import { CDN_URL } from "../utils/constants";

const RestoCard = ({ resData }) => {
  const { name, cuisines, costForTwo, sla, locality, cloudinaryImageId } =
    resData?.info;
  return (
    <div className="rest-card">
      <img className="food-img" src={CDN_URL + cloudinaryImageId} />
      <div className="card-content">
        <h5>{name + " - " + locality}</h5>
        <h6>{cuisines.join(", ")}</h6>
        <h6>{costForTwo}</h6>
        <h6>{sla.slaString}</h6>
      </div>
    </div>
  );
};

export default RestoCard;
