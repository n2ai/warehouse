const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();
const router = require("./routes/route")
const adminRouter = require("./routes/adminRoute")
const {createJWT, verifyToken} = require('./middleware/JWTActions')
const cookieParser = require('cookie-parser')
//configure cors
const corsOptions = {
    origin:['http://localhost:5173'],
    credentials:true,
    methods:['GET','POST','PUT','DELETE','OPTIONS'],
}

//testJWT


//configuring express
app.use(cookieParser())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors(corsOptions));
app.use('/api', router)
app.use('/admin',adminRouter)
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