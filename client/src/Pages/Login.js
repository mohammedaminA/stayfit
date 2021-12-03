import React from 'react'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';

const Login = () => {
    const [form, setForm] = React.useState({
        email: "",
        password: ""
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
        e.preventDefault();
        
        axios.post("/api/v1/users/login", form)
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
            <h1 className="text-center">Login </h1>
            <form onSubmit={handleSubmit} className="d-flex align-items-center justify-content-center flex-column mx-auto form">
                <div className="my-1">
                    <p className="m-0 py-1 text-bold">Email : </p>
                    <input type="email" className="form-control" name="email" value={form.email} onChange={handleChangeInput} required />
                </div>
                <div>
                    <p className="m-0 py-1 text-bold">Password : </p>
                    <input type="password" className="form-control" name="password" value={form.password} onChange={handleChangeInput} required />
                </div>
                <div className="my-1" style={{marginTop: '30px'}}>
                    <button type="submit" className="mx-auto px-5 py-1 d-flex btn text-white" style={{background: 'red'}}>Submit</button>
                </div>
            </form>
        </div>
    )
}

export default Login
