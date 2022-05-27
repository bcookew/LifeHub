import axios from "axios";

const auth = {
    login: (form, setFormErrors) => 
        axios.post('http://localhost:8000/api/users/login', form, {withCredentials:true})
        .then(res => {
            console.log("success", res);
        })
        .catch(err => {
            console.log('\n-----Error-----\n',err)
            const errors = err.response.data.errors;
            for (const err in errors) {
                setFormErrors(f => {
                    return {...f, [err + "Error"]:errors[err].message}
                })
            }
        }),
    register: (form, setFormErrors) => 
        axios.post('http://localhost:8000/api/users/new', form, {withCredentials:true})
            .then(res => {
                console.log("success", res);
            })
            .catch(err => {
                console.log('\n-----Error-----\n',err)
                const errors = err.response.data.errors;
                for (const err in errors) {
                    setFormErrors(f => {
                        return {...f, [err + "Error"]:errors[err].message}
                    })
                }
            }),
    logout: () => 
        axios.get('http://localhost:8000/api/users/logout', {withCredentials:true})
            .then(res => console.log(res))
            .catch(err => console.log(err))
}

export default auth;