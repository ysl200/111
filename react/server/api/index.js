import express from "express"
import authRoutes from "./routes/auth.js";
import postRouter from "./routes/courseManage.js"
const app = express()

app.use(express.json())
app.use("/api/auth", authRoutes);


app.listen(8001,()=>{
    console.log("Connected!")
})