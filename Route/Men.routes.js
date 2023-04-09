let {MenModel}=require('../Model/men.model')
let express=require('express')
let menRouter=express.Router()

menRouter.post("/add",async(req,res)=>{
    let payload=req.body
    try{
        let newuser=new MenModel(payload)
        await newuser.save()
            //res.send({mesg:"New user has been added "})
        res.status(200).send({msg:"new data has been added"})
    }catch(err){
        res.status(400).send({"msg":err.message})
    }
  
})
menRouter.get("/",async(req,res)=>{
    let query=req.query
    try{
        let user= await MenModel.find(query)
        res.status(200).send(user)
    }
   catch(err){
    res.status(400).send({"msg":err.message})
   }
})
menRouter.patch("/update/:userID",async(req,res)=>{
    let {ID}=req.params
    let payload=req.body
    try{
        await MenModel.findByIdAndRemove({_id:ID},payload) 
        res.status(200).send(user)
    }catch(err){
       res.status(400).send({"msg":err.message}) 
      }
})
menRouter.delete("/delete/:userID",async(req,res)=>{
    let {ID}=req.params
    try{
await MenModel.findByIdAndDelete({_id:ID})
   res.status(200).send({"msg":"data has been deleted"})
}catch(err){
        res.status(400).send({"msg":err.message})
    
    }
})
module.exports= {menRouter }