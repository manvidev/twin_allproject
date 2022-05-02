import React, { useState } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    return ( <
        div >
        <
        h1 > Login < /h1> <
        div >
        <
        div > Email < /div> <
        div >
        <
        input type = "email"
        value = { email }
        onChange = {
            (e) => setEmail(e.target.value) }
        /> <
        /div> <
        /div> <
        div >
        <
        div > Password < /div> <
        div >
        <
        input type = "password"
        value = { pass }
        onChange = {
            (e) => setPass(e.target.value) }
        /> <
        /div> <
        /div> <
        div >
        <
        button > submit < /button> <
        /div> <
        /div>
    );
};