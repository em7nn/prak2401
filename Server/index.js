const cors = require("cors")
const bodyParser = require("body-parser")
const express = require("express")
const dotenv= require("dotenv")
const mongoose = require("mongoose")

dotenv.config()

const {Schema} = mongoose;

const userSchema = new Schema({
  imgUrl:{type:String,required:true},
  name:{type:String,required:true},
  profession:{type:String,required:true},
  title:{type:String,required:true},
},
{timestamps:true}
)

const Jobs =mongoose.model("jobs",userSchema)

const app = express()
app.use(cors())
app.use(bodyParser.json())


app.get("/",(req,res)=>{
    res.send("<h1>Admin Panel</h1>")
})

app.get("/jobs",(req,res)=>{
    Jobs.find({},(err,docs)=>{
         if(!err){
          res.send(docs)
         }
         else{
          res.status(404).json({message:err})
         }
    })
  })

  app.get("/jobs/:id",(req,res)=>{
    const {id} = req.params
    Jobs.findById(id,(err,doc)=>{
      if(!err){
        if(doc){
          res.send(doc)
        }else{
          res.status(404).json({message:"NOT FOUND"})
        }
      }else{
        res.status(500).json({message:err})
      }
    })
  })

  app.delete("/jobs/:id",(req,res)=>{
    const {id} = req.params
    Jobs.findByIdAndDelete(id,(err)=>{
      if(!err){
        res.send("deleted data")
       
      }else{
          res.status(404).json({message:err})
      }
    })
  })

  app.post("/jobs",(req,res)=>{
    const card= new Jobs({
      imgUrl:req.body.imgUrl,
      name:req.body.name,
      profession:req.body.profession,
      title:req.body.title,
     
    })
    card.save()
    res.json({message:"Card Created"})
  })
const PORT = process.env.PORT

const url = process.env.CONNECTION_URL.replace("<password>",process.env.PASSWORD)

mongoose.set('strictQuery', false)
mongoose.connect(url,(err)=>{
    if(!err){
        console.log("DB connected");
        app.listen(PORT,()=>{
            console.log("Server Start");
        })
    }
})