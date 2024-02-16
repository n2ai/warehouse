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
        <div className='loginPage_container'>
            <div className='loginPage_mainContent'>
                <div className='loginPage_title center'>
                    <h1>Login</h1>
                </div>
                <div className='loginPage_username center'>
                    <label>Username</label>
                    <input onChange={handleLogin} placeholder="enter username" name="username"></input>
                </div>
                <div className='loginPage_password center'>
                    <label>Password</label>
                    <input onChange={handleLogin} placeholder="enter password" name="password"></input>
                </div>
                <div className='loginPage_button center'>
                    <button onClick={submitCredential}>Sign In</button>
                </div>
            </div>
        </div>
    )
}

export default LoginPage