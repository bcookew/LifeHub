import React, { useContext } from "react";
import AuthContext from "../Auth/AuthContext";
import { useNavigate } from "react-router-dom";

const Logout = props => {
    const navigate = useNavigate();
    const auth = useContext(AuthContext);
    
    const logoutHandler = e => {
        auth.logout();
        navigate('/');
    }
    
    return(
        <span onClick={logoutHandler} className={props.classes}>Logout</span>
    )
}

export default Logout;