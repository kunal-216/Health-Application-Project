import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import { connectDB } from "./config/db.js";
import userRouter from "./routes/userRouter.js";

dotenv.config();

const PORT = 5000 || process.env.PORT
const app = express();
app.use(cors());

connectDB();

app.use("/api/user", userRouter);

app.get("/",(req,res)=>{
    res.send("Server is running");
})

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
})