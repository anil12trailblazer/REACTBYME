import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlinesStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/userContext";

export const Header = () => {
  const [btnNemeReact, setBtnNameReact] = useState("Login"); //login is inital value
  const isonline = useOnlinesStatus();
  console.log("Header render");
  const user = useContext(UserContext);
  return (
    <div className="flex justify-between shadow-lg">
      <div className="p-2 m-2">
        <img className="w-40" src={LOGO_URL} />
      </div>
      <div className="nav-items">
        <ul className="flex p-5 m-5">
          <li className="p-2">{isonline ? "Online 🟢" : "Offline 🔴"}</li>
          <li className="p-2"><Link to="/">Home</Link></li>
          <li className="p-2"><Link to="/about">About</Link></li>
          <li className="p-2"><Link to="/contact">Contact</Link></li>
          <li className="p-2"><Link to="/cart">Cart</Link></li>
          <li className="p-2"><Link to="/grosery">Grosery</Link></li>
          <li className="p-2">{user.name}</li>
          <li className="p-2">
            <button
              className="login"
              onClick={() => {
                btnNemeReact === "Login"
                  ? setBtnNameReact("Logout")
                  : setBtnNameReact("Login");
              }}
            >
              {btnNemeReact}
            </button>
          </li>
        </ul>
      </div>
    </div>
  );
};
