import React from 'react'
import '../styles/loginPage.css'
import axios from 'axios'
import { useState } from "react"

interface ILoginForm {
    username: string,
    password: string
}


const LoginPage: React.FC = () => {
    const [username, setUsername] = useState<string>("");
    const [password, setPassword] = useState<string>("");


    const handleUserame = (e: React.ChangeEvent<HTMLInputElement>) => {
        setUsername(e.target.value)
    }
    const handlePassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setPassword(e.target.value)
    }

    const credentials: ILoginForm = {
        username,
        password
    }
    const submitCredential = () => {
        axios.post<ILoginForm>("http://localhost:3000", credentials)
            .then((response) => {
                console.log(response.data);
            })
    }
    return (
        <div>
            <h1>Login</h1>
            <label>Username</label>
            <input onChange={handleUserame} placeholder="enter username"></input>
            <label>Password</label>
            <input onChange={handlePassword} placeholder="enter password"></input>
            <button onClick={submitCredential}>Sign In</button>
        </div>
    )
}

export default LoginPage