import React, { ReactEventHandler } from 'react'
import '../styles/loginPage.css'
import axios from 'axios'
import { useState } from "react"
import PasswordValidation from '../helper functions/PasswordValidation'

interface IRegisterForm {
    newUsername: string,
    newPassword: string,
    checkPassword: string,
    email: string,
    sex: string,
    country: string
}

const RegisterPage: React.FC = () => {

    const [RegisterForm, setRegisterForm] = useState<IRegisterForm>({
        newUsername: "",
        newPassword: "",
        checkPassword: "",
        email: "",
        sex: "",
        country: ""
    });

    const handleNewUser = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegisterForm((prev) => {
            return (
                { ...prev, newUsername: e.target.value }
            )
        })
    }
    const handleNewPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegisterForm((prev) => {
            return (
                { ...prev, newPassword: e.target.value }
            )
        })
    }
    const handleReenterPassword = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegisterForm((prev) => {
            return (
                { ...prev, checkPassword: e.target.value }
            )
        })
    }
    const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegisterForm((prev) => {
            return (
                { ...prev, email: e.target.value }
            )
        })
    }
    const handleSex = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegisterForm((prev) => {
            return (
                { ...prev, sex: e.target.value }
            )
        })
    }
    const handleCountry = (e: React.ChangeEvent<HTMLInputElement>) => {
        setRegisterForm((prev) => {
            return (
                { ...prev, country: e.target.value }
            )
        })
    }

    const submitCredential = () => {
        if (!PasswordValidation(RegisterForm.checkPassword)) {
            alert("Password must contain at least one uppercase letter, one number, and one special character")
        }
        else {
            if (RegisterForm.newPassword !== RegisterForm.checkPassword) {
                alert("Passwords do not match")
                return
            }
            else {
                axios.post<IRegisterForm>("http://localhost:3000", RegisterForm)
                    .then((response) => {
                        console.log(response.data);
                    })
            }
        }
    }
    return (
        <div>
            <h1>Register</h1>
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