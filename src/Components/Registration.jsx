import React, { useContext, useState } from "react";
import AuthContext from "../Auth/AuthContext";
const Registration = props => {

    const auth = useContext(AuthContext);
    
    const [form, setForm] = useState({
        firstName:"",
        lastName:"",
        email:"",
        password:"",
        confirmPassword:""
    })
    const [formErrors, setFormErrors] = useState({})

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setFormErrors({});
        auth.register(form, setFormErrors);
    }

    return (
        <>
            <div className="col col-md-4 col-xl-3">
                <form onSubmit={onSubmitHandler}>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" placeholder="First Name" name="firstName" value={form.firstName} onChange={(e) => setForm({...form, [e.target.name]:e.target.value})} />
                        {
                            formErrors.firstNameError 
                            ?<label htmlFor="firstName" className="form-label text-danger">{formErrors.firstNameError}</label>
                            :<label htmlFor="firstName" className="form-label">First Name</label>
                        }
                    </div>
                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" placeholder="Last Name" name="lastName" value={formErrors.lastName} onChange={(e) => setForm({...form, [e.target.name]:e.target.value})} />
                        {
                            formErrors.lastNameError 
                            ?<label htmlFor="lastName" className="form-label text-danger">{formErrors.lastNameError}</label>
                            :<label htmlFor="lastName" className="form-label">Last Name</label>
                        }
                    </div>
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
                    <div className="form-floating mb-3">
                        <input type="password" className="form-control" placeholder="Confirm Password" name="confirmPassword" value={formErrors.confirmPassword} onChange={(e) => setForm({...form, [e.target.name]:e.target.value})} />
                        {
                            formErrors.confirmPasswordError 
                            ?<label htmlFor="confirmPassword" className="form-label text-danger">{formErrors.confirmPasswordError}</label>
                            :<label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
                        }
                    </div>
                    <input type="submit" value="Register" className="btn btn-success" />
                </form>
            </div>
        </>
    )
}

export default Registration;