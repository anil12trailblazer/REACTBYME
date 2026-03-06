import { FOOD_URL } from "../utils/constants";

const RestoCard = ({ resData }) => {
  const { name, cuisines, costForTwo, sla, locality } = resData?.info;
  return (
    <div className="rest-card">
      <img className="food-img" src={FOOD_URL} />
      <h4>{name + " - " + locality}</h4>
      <h5>{cuisines[0]}</h5>
      <h5>{costForTwo}</h5>
      <h5>{sla.slaString}</h5>
    </div>
  );
};

export default RestoCard;
