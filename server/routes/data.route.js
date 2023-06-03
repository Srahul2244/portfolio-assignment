const express= require('express')
const dataRouter =express.Router()

const {dataModel}=require("../models/data.model")

dataRouter.post("/",async(req,res)=>{
    const payload =req.body;
    try{
        const data =await dataModel.insertMany(payload)
        res.send(data)
        console.log(data)
    }catch(err){
        console.log(err)
        res.send(err)
    }
})

dataRouter.get("/data",async(req,res)=>{
    try{
        const data =await dataModel.find()
        res.send(data)
        console.log(data)
    }catch(err){
        console.log(err)
        res.send(err)
    }
})

module.exports={dataRouter}