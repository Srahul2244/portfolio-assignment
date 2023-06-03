const express= require("express")
const app =express()
const {connection} =require('./config/db')
var cors = require('cors')
require('dotenv').config()
const {dataRouter}=require('./routes/data.route')
const {userRouter}=require("./routes/user.route")
app.use(express.json())
app.use(cors())



app.use("/data",dataRouter)
app.use("/users",userRouter)


app.listen(4500,async()=>{
    try{
        await connection
        console.log(`port runing mine at 4500`)
        console.log("connected to db") 
    }catch(err){
        console.log(err)
        console.log("trouble in connected to db")
    }
  
})