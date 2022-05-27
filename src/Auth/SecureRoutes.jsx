import React from "react";
import { Routes, Route, Outlet } from "react-router-dom";
import Messenger from "../Views/Messenger";
import Weather from "../Views/Weather";

const SecureRoutes = props => {
    return (
        <>
            <Outlet />
        </>
    )
}

export default SecureRoutes;