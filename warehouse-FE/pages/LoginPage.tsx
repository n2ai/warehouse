import React from 'react'
import '../styles/loginPage.css'
import axios from 'axios'
import { useState } from "react"
import { useNavigate } from 'react-router'

interface ILoginForm {
    username: string,
    password: string
}

const LoginPage: React.FC = () => {
    const [loginForm, setLoginForm] = useState<ILoginForm>({
        username: "",
        password: ""
    });

    // const navigate = useNavigate()

    const handleLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLoginForm((prev) => {
            return (
                { ...prev, [e.target.name]: e.target.value }
            )
        })
    }



    const submitCredential = (event: React.MouseEvent<HTMLButtonElement>) => {
        event?.preventDefault()
        axios.post("http://localhost:3000/api/login", loginForm)
            .then((response) => {
                console.log(response.data.role);
                const role = response.data.role
                if (role === 'admin') {
                    navigate("/admin")
                }
            })
            .catch(err => alert(err))
    }
    console.log(loginForm)
    return (
        <div>
            <h1>Login</h1>
            <label>Username</label>
            <input onChange={handleLogin} placeholder="enter username" name="username"></input>
            <label>Password</label>
            <input onChange={handleLogin} placeholder="enter password" name="password"></input>
            <button onClick={submitCredential}>Sign In</button>
        </div>
    )
}

export default LoginPage