import React from 'react'
import axios from 'axios'
import {useNavigate} from 'react-router-dom';

const Register = () => {
    const [form, setForm] = React.useState({
        name: "",
        email: "",
        password: "",
        passwordConfirm: ""
    });
    const navigate = useNavigate();

    React.useEffect(() => {
        const login = localStorage.getItem("login");
        if (login) {
            navigate("/")
        }
    }, [])

    const handleChangeInput = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        const {name, email, password, passwordConfirm} = form;
        e.preventDefault();
        if (password != passwordConfirm) return alert("Confirm Password is not matched!");
        
        axios.post("/api/v1/users/signup", form)
        .then(res => {
            if (res.data.status ==  "success") {
                localStorage.setItem("login", true);
                localStorage.setItem("token", res.data.token);
                localStorage.setItem("user", JSON.stringify(res.data.data.user));
                navigate("/")
            }else {
                alert(res.data.message);
            }
        }).catch(err => {
            console.log(err);
            alert(err);
        }) 
    }

    return (
        <div>
            <h1 className="text-center">Register </h1>
            <form onSubmit={handleSubmit} className="d-flex align-items-center justify-content-center flex-column mx-auto form">
                <div>
                    <p className="m-0 py-1 text-bold">Name : </p>
                    <input type="name" className="form-control" name="name" value={form.name} onChange={handleChangeInput} required />
                </div>
                <div>
                    <p className="m-0 py-1 text-bold">Email : </p>
                    <input type="email" className="form-control" name="email" value={form.email} onChange={handleChangeInput} required />
                </div>
                <div>
                    <p className="m-0 py-1 text-bold">Password : </p>
                    <input type="password" minLength="8" className="form-control" name="password" value={form.password} onChange={handleChangeInput} required />
                </div>
                <div>
                    <p className="m-0 py-1 text-bold">Confirm Password : </p>
                    <input type="password" minLength="8" className="form-control" name="passwordConfirm" value={form.passwordConfirm} onChange={handleChangeInput} required />
                </div>
                <div className="my-1" style={{marginTop: '30px'}}>
                    <button type="submit" className="mx-auto px-5 py-1 d-flex btn text-white" style={{background: 'red'}}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Register
