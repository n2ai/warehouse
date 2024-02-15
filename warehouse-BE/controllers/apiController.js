const bcrypt = require("bcrypt")
const {createJWT} = require("../middleware/JWTActions")
const mysql = require('mysql2/promise')
require("dotenv").config()

const handleLogin = async(req,res)=>{
    try{
        
        let user = {}
        let role = 0
        const password = req.body.password
        const connection = await mysql.createConnection({
            host:"localhost",
            user:"root",
            password:"Luc!el123",
            database:"warehouse"
        })



        try{
            const [results,fields] = await connection.query(
                `SELECT * FROM Users WHERE userName = ?`, [req.body.username],
                
            )
            user = results[0]
        }catch(err){
            console.log(err)
        }

        try{
            const [results, fields] = await connection.query(
                `SELECT * FROM Roles WHERE roleId = ?`,[user.roleId]
            )
            role = results[0].roleName
        }catch(err){
            console.log(err)
        }
        
        const validPassword = bcrypt.compare(password, user.userPassword)

        if(validPassword && role === "admin"){
            let payload = {
                email:user.email,
                role:role,
                expiresIn:process.env.JWT_EXPIRES_IN
            }
            let token=createJWT(payload)
            res.status(200).json({
                id:user.userId,
                username:user.userName,
                role:role,
                accessToken:token,
            })
        }else if(validPassword){
            res.status(400).json('correct login')
        }else{
            res.status(400).json('Wrong login')
        }

    }catch(err){
        res.status(500).json(err)
    }
}

const handleRegister = async(req,res)=>{
    try{
        const salt = await bcrypt.genSalt(10)
        const hashed = await bcrypt.hash(req.body.password,salt)

        //Create new user//
        res.status(200).json(hashed)
    }catch(err){
        res.status(500).json(err)
    }
}


module.exports = {handleLogin,handleRegister}

