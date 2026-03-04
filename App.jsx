import React from "react";
import ReactDOM from "react-dom/client";

const Header = () => {
  return (
    <div className="header">
      <div className="logo-container">
        <img
          className="logo"
          src="https://www.creativefabrica.com/wp-content/uploads/2023/06/10/Fast-Food-Burger-Logo-Graphics-71757839-1.jpg"
        />
        {/* <h1>logo</h1> */}
      </div>
      <div className="nav-items">
        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  );
};
const RestoCard = () => {
  return (
    <div className="rest-card">
      <img />
      <h4> Meghana Restro</h4>
    </div>
  );
};
const Body = () => {
  return <div></div>;
};
const AppLayout = () => {
  return (
    <div className="app">
      <Header />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout />);
