const cors = require("cors");
const express = require("express");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();
con

//configure cors
const corsOptions = {
    origin:'http://localhost:5173',
    credentials:true,
    methods:['GET','POST','PUT','DELETE','OPTIONS'],
}


//configuring express
app.use(cors(corsOptions));
app.use(bodyParser.json());
//false true
app.use(bodyParser.urlencoded({extended:true}));

//Routes
app.use("/api");

app.get("/", (req, res) => {
    res.send("Hello World!");
});

app.listen(port,()=>{
    console.log(`Server is running on port ${port}`);
})