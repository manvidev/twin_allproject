import React from 'react'
import { Route, Redirect } from "react-router-dom";


export const PrivateRoute = (props) => {
    if (props.isLoggedIn) {
        return ( <
            Route {...props }
            />
        );
    }
    return ( <
        Redirect to = "/login" / >
    )
}