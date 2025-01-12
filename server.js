import express from "express";
import "express-async-errors";
const app = express();
app.use(express.json());

import dotenv from "dotenv";
dotenv.config();

import connectDB from "./db/connect.js";

//routers
import authRoutes from "./routes/authRoutes.js";

app.use("/api/auth", authRoutes);

// middleware
import notFoundMiddleware from "./middleware/not-found.js";
import errorHandleMiddleware from "./middleware/error-handler.js";

app.use(notFoundMiddleware);
app.use(errorHandleMiddleware);


const port = process.env.PORT || 5000;

const start = async () => {
    try {
        await connectDB(process.env.MONGO_URL);
        app.listen(port, () => {
            console.log(`Server is listening on port ${port}...`);
        });
    } catch (error) {
        console.log(error);
    }
};

start();
