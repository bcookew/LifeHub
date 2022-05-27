import React from "react";
import { Outlet } from "react-router-dom";

const SecureRoutes = props => {
    return (
        <>
            <Outlet />
        </>
    )
}

export default SecureRoutes;