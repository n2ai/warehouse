import React, { ReactEventHandler } from 'react'
import '../styles/loginPage.css'
import axios from 'axios'
import { useState } from "react"

interface IRegisterForm {
    newUsername: string,
    newPassword: string,
    email: string,
    sex: string,
    country: string
}

const RegisterPage: React.FC = () => {

    const [newUsername, setNewUsername] = useState<string>("");
    const [newPassword, setNewPassword] = useState<string>("");
    const [reenterPassword, setReenterPassword] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [sex, setSex] = useState<string>("");
    const [country, setCountry] = useState<string>("");
    const passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[A-Z]).*$/

    const handleNewUser = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewUsername(e.target.value)
    }
    const handleNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setNewPassword(e.target.value)
    }
    const handleReenterPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setReenterPassword(e.target.value)
    }
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }
    const handleSex = (e: React.ChangeEvent<HTMLInputElement>) => {
        setSex(e.target.value)
    }
    const handleCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCountry(e.target.value)
    }

    const credentials: IRegisterForm = {
        newUsername,
        newPassword,
        email,
        sex,
        country
    }
    const submitCredential = () => {
        if (!newPassword.match(passwordRegex)) {
            alert("Password must contain at least one uppercase letter, one number, and one special character")
            return
        }
        else {
            if (newPassword !== reenterPassword) {
                alert("Passwords do not match")
                return
            }
            else {
                axios.post<IRegisterForm>("http://localhost:3000", credentials)
                    .then((response) => {
                        console.log(response.data);
                    })
            }
        }
    }
    return (
        <div>
            <h1>Login</h1>
            <label>Email</label>
            <input onChange={handleEmail} placeholder="enter email"></input>
            <label>Username</label>
            <input onChange={handleNewUser} placeholder="enter username"></input>
            <label>Password</label>
            <input onChange={handleNewPassword} placeholder="enter password"></input>
            <label>Reenter Password</label>
            <input onChange={handleReenterPassword} placeholder="reenter password"></input>
            <label>Sex</label>
            <input onChange={handleSex} placeholder="enter sex"></input>
            <label>Country</label>
            <input onChange={handleCountry} placeholder="enter country"></input>
            <button onClick={submitCredential}>Register</button>
        </div>
    )
}

export default RegisterPage