import React from 'react'
import '../styles/loginPage.css'
import axios from 'axios'
import { useState } from "react"
import { useNavigate } from 'react-router'

import { useCookies } from 'react-cookie'
interface ILoginForm {
    username: string,
    password: string
}

const LoginPage: React.FC = () => {

    const navigate = useNavigate()

    const [cookies,setCookies] = useCookies(["token"])
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
                setCookies("token",response.data.accessToken)
                console.log(cookies)
                console.log(response.data)
                if(response.data.role == 'admin'){
                    navigate(`/admin/${response.data.id}/${response.data.username}`)
                }
            })
            .catch(err => alert(err))
    }
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