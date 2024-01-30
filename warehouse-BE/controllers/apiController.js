const bcrypt = require("bcrypt")
const fakeUserDatabase = require("../fakeDBs/fakeUserDatabase")
const {createJWT} = require("../middleware/JWTActions")
require("dotenv").config()
const handleLogin = async(req,res)=>{
    try{
        const user = fakeUserDatabase[0]
        const password = user.password
        const validPassword = await bcrypt.compare(req.body.password,password)
        if(validPassword && user.role === "admin"){
            let payload = {
                email:user.email,
                role:user.role,
                expiresIn:process.env.JWT_EXPIRES_IN
            }
            let token=createJWT(payload)
            res.status(200).json({
                id:user.id,
                username:user.username,
                role:user.role,
                accessToken:token
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

