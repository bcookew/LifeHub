import React, { useContext } from "react";
import AuthContext from "./AuthContext";
import { Navigate, useLocation } from 'react-router-dom';

const AuthorizedRoutes = ({ children }) => {

    const auth = useContext(AuthContext);
    const location = useLocation();
    
    if(!auth.authenticated) return <Navigate to='/login' state={{from: location}} replace />;

    return children;
}

export default AuthorizedRoutes;