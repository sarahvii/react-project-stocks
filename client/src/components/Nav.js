import React from "react";
import { Link } from "react-router-dom"
import styled from "styled-components";

const Nav = () => {
    return ( 


                <NavHeader>
                    <h2>UNITY TRADING</h2>
                    <NavLinks>
                        <NavListItems>
                    <NavLink to="/">Home</NavLink>
                        </NavListItems>
                        <NavListItems>
                    <NavLink to="/portfolio">Portfolio</NavLink>
                        </NavListItems>
                        <NavListItems>
                    <NavLink to="/stocks">Stocks</NavLink>
                        </NavListItems>
                    </NavLinks>
                </NavHeader>

    );
}


const NavHeader = styled.h2`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0px 50px;
    box-shadow: 0 1px 8px #ddd;
`

const NavLinks = styled.ul`
    display: flex;
    justify-content: space-between;
    list-style: none;
    padding: 20px;
`

const NavListItems = styled.li`
    display: inline-block;
    justify-content: space-between;
    padding: 20px;
`

const NavLink = styled(Link)`
    text-decoration: none;
    color: #555;
    transition: all 0.3s ease 0s;

    &:hover {
        color: #b2dfdb;
    }
    `
 
export default Nav;