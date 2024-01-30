const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();
const router = require("./routes/route")
const {createJWT, verifyToken} = require('./middleware/JWTActions')

//configure cors
// const corsOptions = {
//     origin:'https://postman-echo.com',
//     credentials:true,
//     methods:['GET','POST','PUT','DELETE','OPTIONS'],
// }

//testJWT


//configuring express
app.use(cors());
app.use(bodyParser.json());
//false true
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/api', router)
//Routes


app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.post("/", (req, res) => {
    console.log(req.body)
    res.send("received");
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
})