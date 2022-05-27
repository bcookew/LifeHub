import React, { useState } from "react";
import axios from "axios";
import AuthContext from "./AuthContext";

const AuthProvider = props => {
    const [user, setUser] = useState(null);
    const [authenticated, setAuthenticated] = useState(false);
    const login = (form, setFormErrors) => 
        axios.post('http://localhost:8000/api/users/login', form, {withCredentials:true})
        .then(res => {
            console.log("success", res);
            setUser(res.data.user);
            setAuthenticated(true);
            return true;
        })
        .catch(err => {
            console.log('\n-----Error-----\n',err)
            const errors = err.response.data.errors;
            for (const err in errors) {
                setFormErrors(f => {
                    return {...f, [err + "Error"]:errors[err].message}
                })
            }
            return false;
        })
    const register = (form, setFormErrors) => 
        axios.post('http://localhost:8000/api/users/new', form, {withCredentials:true})
            .then(res => {
                console.log("success", res);
                setUser(res.data.user);
                setAuthenticated(true);
            })
            .catch(err => {
                console.log('\n-----Error-----\n',err)
                const errors = err.response.data.errors;
                for (const err in errors) {
                    setFormErrors(f => {
                        return {...f, [err + "Error"]:errors[err].message}
                    })
                }
            })
    const logout = () => 
        axios.get('http://localhost:8000/api/users/logout', {withCredentials:true})
            .then(res => {
                console.log(res);
                setUser(null);
                setAuthenticated(false);
            })
            .catch(err => console.log(err))
    
    const auth = {register, login, logout, authenticated, user}

    return (
        <AuthContext.Provider value={auth}>
            {props.children}
        </AuthContext.Provider>
    )
}

export default AuthProvider;