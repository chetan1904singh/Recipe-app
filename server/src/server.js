import express from "express"
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import cors from 'cors'
import { userRouter } from "./routes/users.js"


const app=express();
const PORT=8001;
dotenv.config()
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.MONGO_URI)
.then(() => {
    console.log("Mongo Db Connected!");
    console.log("Database:", mongoose.connection.name);
})
.catch((err) => {
    console.log(err);
});
app.use('/auth',userRouter);

app.listen(PORT,()=>{
    console.log('Server Started!')
})