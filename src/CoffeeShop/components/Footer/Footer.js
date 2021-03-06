import React from "react";
import "./Footer.scss";
import { NavLink } from "react-router-dom";

const Footer = (props) => {
  return (
    <div className="Footer">
      <div className="Footer__info">
        <div className="Footer__summary">
          {" "}
          Lorem Ipsum has been the industry's standard dummy text ever since the
          1500s, when an unknown printer took a galley of type and scrambled it
          to make a type specimen book.
        </div>
        <div className="Footer__contact">
          <ul>
            <li>333-222-788</li>
            <li>Coffee steet 17, Vilnius, Lithuania</li>
            <li>email@email.com</li>
          </ul>
        </div>
      </div>

      <div className="Footer__nav">
        <ul>
          <li onClick={props.scrollToCoffeeHome}>Home</li>
          <NavLink to="/coffeeShop/MyOrders" style={{ textDecoration: "none" }}>
            {" "}
            <li>Orders</li>{" "}
          </NavLink>
          <li onClick={props.scrollToExploreOurProducts}>Purchase now</li>
          <li onClick={props.scrollToTodaySpecial}>Today's special</li>
        </ul>
      </div>

      <div className="Footer__copyright">&#9400; Renata Šalkevič</div>
    </div>
  );
};

export default Footer;
