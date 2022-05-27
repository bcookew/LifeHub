import React, { useContext, useState } from "react";
import axios from 'axios';
import AuthContext from "../Auth/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

const Login = props => {
    const auth = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/';

    const [form, setForm] = useState({
        email:"",
        password:"",
    })
    const [formErrors, setFormErrors] = useState({});

    const onSubmitHandler = async (e) => {
        e.preventDefault();
        setFormErrors({});
        await auth.login(form, setFormErrors);
        console.log(auth.user);
        setTimeout(() => navigate(from, { replace: true }),3000);
    }

    return (
        <>
            <div className="col col-md-4 col-xl-3">
                <form onSubmit={onSubmitHandler}>
                    <div className="form-floating mb-3">
                        <input type="email" className="form-control" placeholder="eMail" name="email" value={formErrors.email} onChange={(e) => setForm({...form, [e.target.name]:e.target.value})} />
                        {
                            formErrors.emailError 
                            ?<label htmlFor="email" className="form-label text-danger">{formErrors.emailError}</label>
                            :<label htmlFor="email" className="form-label">eMail</label>
                        }
                    </div>
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" placeholder="Password" name="password" value={formErrors.password} onChange={(e) => setForm({...form, [e.target.name]:e.target.value})} />
                        {
                            formErrors.passwordError 
                            ?<label htmlFor="password" className="form-label text-danger">{formErrors.passwordError}</label>
                            :<label htmlFor="password" className="form-label">Password</label>
                        }
                    </div>
                    <input type="submit" value="Login" className="btn btn-success" />
                </form>
            </div>
        </>
    )
}

export default Login;