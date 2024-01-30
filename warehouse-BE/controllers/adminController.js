const fakeUserDatabase = require("../fakeDBs/fakeUserDatabase")
const {createJWT,verifyToken} = require("../middleware/JWTActions")
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

module.exports = {handleAdminLogin}