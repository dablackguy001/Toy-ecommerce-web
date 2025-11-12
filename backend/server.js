import express from "express"
import cors from "cors"
import { connectDB } from "./config/db.js"
import toyRouter from "./routes/ToyRoute.js"

//app config
const app=express()
const port = 4000

//middleware
app.use(express.json())
app.use(cors())


//db connection
connectDB();

//api endpoint
app.use("/api/Toy",toyRouter)



app.get("/",(req,res)=>{
    res.send("API Working")
})
app.listen(port,()=>{
    console.log(`server started on http://localhost:${port}`)
})

