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
    const data = req.body
    const {itemId, itemName, brand, itemPrice, size, releaseDate, itemColor, descriptions} = data
    const connection = await mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"Luc!el123",
        database:"warehouse"
    })
    try{
        const [results, fields] = await connection.query(
            `UPDATE Inventory SET itemId = ?, itemName = ?, brand = ?, itemPrice = ?, size = ?, releaseDate = ?, itemColor = ?, descriptions = ?`,[
                Number(itemId), itemName, brand, Number(itemPrice), Number(size), releaseDate, itemColor, descriptions
            ]
        )
        res.json("Update success")
    }catch(err){
        res.json("Failed to update")
    }
}

const handleCreateInventory = async (req,res)=>{
    const data = req.body
    console.log(data)
    const {itemId, itemName, brand, itemPrice, size, releaseDate, itemColor, descriptions} = data
    const connection = await mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"Luc!el123",
        database:"warehouse"
    })
    try{
        const [results,fields] = await connection.query(
            `INSERT INTO Inventory VALUES(?,?,?,?,?,?,?,?)`,[Number(itemId), itemName, brand, Number(itemPrice), Number(size), releaseDate, itemColor, descriptions]
        )
        res.json("Add item success").status(200)
    }catch(err){
        res.json(err)
    }
    
}

const handleDeleteInventory  = async (req,res)=>{
    const itemId = req.body.itemId
    console.log(itemId)
    const connection = await mysql.createConnection({
        host:"localhost",
        user:"root",
        password:"Luc!el123",
        database:"warehouse"
    })
    try{
        const [results,fields] = await connection.query(
            `DELETE FROM Inventory WHERE itemId = ?`,[itemId]
        )
        res.status(200).send("Delete item success")
    }catch(err){
        res.status(500).send("Failed to delete item")
    }
}

module.exports = {handleAdminLogin, handleAdminInventory, handleUpdateInventory, handleCreateInventory, handleDeleteInventory}