import { MenuItem } from "@material-ui/core";
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar=()=>{
    return (
    <>
    <div className="Nav">
        <MenuItem>
        <li>
        <NavLink className="product" to="/product">ProductsManagement</NavLink>
        </li>
        <li>
        <NavLink className="order" to="/orders">OrdersManagement</NavLink>
        </li>
        </MenuItem>
    </div>
    </>
)};

export default Navbar;