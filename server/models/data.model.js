const mongoose =require("mongoose")

const dataSchema =mongoose.Schema({
     image: String,
     demo:String ,
     title:String,
     description:String,
     
})

const dataModel =mongoose.model('datas',dataSchema)

module.exports ={dataModel}