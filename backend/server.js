import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import userRouter from "./routes/userRouter.js";

dotenv.config();
connectDB();

const PORT = 5000 || process.env.PORT
const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
app.use("/api/user", userRouter);

app.get("/", (req, res) => {
    res.send("Server is running");
});

app.listen(PORT, () => {
    console.log(`Server is running at http://localhost:${PORT}`);
});