import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const links = [
    { name: "About", url: "/" },
    { name: "Contact", url: "/contact" },
    { name: "Name", url: "/name" },
    { name: "Service", url: "/service" },
    { name: "Login", url: "/login" },
];

export const Navbar = () => {
    return ( <
        div className = "navbar" > {
            links.map((e, index) => {
                return ( <
                    NavLink key = { index }
                    className = "navtab"
                    to = { e.url } > { e.name } <
                    /NavLink>
                );
            })
        } <
        /div>
    );
};