import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import { About, Contact, Name, Service, Login } from "../Screens";
import { PrivateRoute } from "./PrivateRoutes/PrivateRoute";
import { Navbar } from "../Containers/Navbar";

const routeArray = [
    { path: "/", Component: About },
    { path: "/contact", Component: Contact },
    { path: "/name", Component: Name },
    { path: "/login", Component: Login },
];

export const Routes = () => {
    const isLoggedIn = false;;

    return ( <
        Router >
        <
        Navbar / >
        <
        Switch > {
            routeArray.map((e, index) => {
                return ( <
                    Route key = { index }
                    exact path = { e.path }
                    component = { e.Component }
                    />
                );
            })
        } <
        PrivateRoute path = "/service"
        isLoggedIn = { isLoggedIn }
        component = { Service } >
        < /PrivateRoute> <
        /Switch> <
        /Router>
    );
};