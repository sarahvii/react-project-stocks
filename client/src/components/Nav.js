import React from "react";
import { Link } from "react-router-dom"

const Nav = () => {
    return ( 
        <>
        <h2>TRADING APP // This is the navbar</h2>
        <ul>
            <li>
                <Link to="/">Home</Link>
            </li>
            <li>
                <Link to="/portfolio">Portfolio</Link>
            </li>
            <li>
                <Link to="/stocks">Stocks</Link>
            </li>
        </ul>
        </>
    );
}
 
export default Nav;