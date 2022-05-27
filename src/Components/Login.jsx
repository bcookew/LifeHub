import React, { useContext, useState } from "react";
import AuthContext from "../Auth/AuthContext";
import { useLocation, useNavigate } from "react-router-dom";

const Login = props => {
    const auth = useContext(AuthContext);
    const nav = useNavigate();
    const loc = useLocation();
    const from = loc.state?.from?.pathname || '/';

    const [form, setForm] = useState({
        email:"",
        password:"",
    })
    const [formErrors, setFormErrors] = useState({});

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setFormErrors({});
        auth.login(form, setFormErrors)
            .then(res => {
                if(res) nav(from,{replace:true});
            })
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