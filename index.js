let express=require("express")
let app=express()
let cors=require('cors')

let {connection}=require("./db")
app.use(cors())
let {menRouter}=require("./Route/Men.routes")
const { userRouter } = require("./Route/user.routes")
app.use(express.json())
app.use("/men",menRouter)
app.use("/users",userRouter)
app.listen(process.env.port,async()=>{
    try{
        await connection
        console.log("Connected to the DB")
    }catch(err){
        console.log("Cannot connect to DB")
        console.log(err)
    }
    console.log("Server is running at port 8080")
})