const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();


app.listen(process.env.PORT || 4000, ()=>{
    console.log(`Server is running on ${process.env.PORT || 4000}`);
})