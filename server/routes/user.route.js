const express =require("express")
const {userModel} =require("../models/user.model")
require('dotenv').config()

const userRouter=express.Router()

userRouter.post("/register",(req,res)=>{
            const { name, email, phone,message } = req.body;
            if (!name || !email || !message ||!phone) {
              return res.status(400).json({ error: 'Please provide name, email, and contact ' });
            }
            else{
                const user =new userModel({email,name,phone,message})
                console.log(user)
                 user.save()
                res.send("Message send successfully")
               
            }
            res.status(200).json({ message: 'Message send successful' });
          
})

module.exports={userRouter}
