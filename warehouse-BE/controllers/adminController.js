const fakeUserDatabase = require("../fakeDBs/fakeUserDatabase")
const {createJWT,verifyToken} = require("../middleware/JWTActions")
const mysql = require("mysql2/promise")
require("dotenv").config()

const handleAdminLogin = async(req,res)=>{
    try{
        const decoded = verifyToken(req.cookies.token)
        if(decoded.role == 'admin'){
            res.json({test:'correct'})
        }
        
    }catch(err){
        res.status(400).json(err)
    }

}

const handleAdminInventory = async(req,res)=>{
    const connection = await mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"Luc!el123",
        database:"warehouse"
    })
}

module.exports = {handleAdminLogin, handleAdminInventory}