import React from "react";
import logoHenry from "../../assets/logo-henry.png";
import styleNav from "./NavBar.module.css";
import { NavLink } from "react-router-dom"

const className = ({isActive}) => {
if ({isActive} === true) {
  return styleNav.active
}else{
  return styleNav.disable
}
} 


export default function NavBar() {
  return (
    <div className={styleNav.container}>
      <ul className={styleNav.menu}>
        <NavLink to="/">
        <li>
          <img src={logoHenry} alt="logo-henry" />
        </li>
        </NavLink>
        <li>
          <h1>Central de Cruceros</h1>
        </li>
        <div className={styleNav.options}>
          <NavLink to="/shipping">
          <li>
            <span>Navieras</span>
          </li>
          </NavLink>
          <NavLink to="/discounts" className={className}>
          <li>
            <span>Promociones</span>
          </li>
          </NavLink>
        </div>
      </ul>
    </div>
  );
}
