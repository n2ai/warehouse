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
    try{
        const [results, fields] = await connection.query(
            `SELECT * FROM Inventory`
        )
    
        res.status(200).json(results)
    }catch(err){
        res.status(500).json("failed to mine data")
    }
}

const handleUpdateInventory = async(req,res)=>{

    const data = JSON.parse(req.body)
    const {itemId, itemName, brand, itemPrice, size, releaseDate, itemColor, descriptions} = data

    const connection = await mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"Luc!el123",
        database:"warehouse"
    })
    try{
        const [results, fields] = await connection.query(
            `UPDATE SET itemId = ?, itemName = ?, brand = ?, itemPrice = ?, size = ?, releaseDate = ?, itemColor = ?, descriptions = ?`,[
                itemId, itemName, brand, itemPrice, size, releaseDate, itemColor, descriptions
            ]
        )
    }catch(err){
    }
}

module.exports = {handleAdminLogin, handleAdminInventory, handleUpdateInventory}