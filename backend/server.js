const { request } = require("express");
const express=require("express");
const dotenv=require("dotenv");

const { chats } = require("./data/data");


const app=express();
dotenv.config();


app.get('/',(req,res)=>{
    res.send("API is running");
});


app.get('/api/chat',(req,res)=>{

    res.send(chats);
}); 



const PORT=process.env.PORT || 8000

app.listen(PORT,console.log("server started on port ${PORT} "));