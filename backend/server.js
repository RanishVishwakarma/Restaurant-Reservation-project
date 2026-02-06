import express from "express";
import cors from "cors";
import "dotenv/config";
import connectToDatabase from "./config/mongodb.js";
import connectToCloudinary from "./config/cloudinary.js";
import userRouter from "./routes/userRoute.js";
import productRouter from "./routes/productRoute.js";
import reservationRouter from "./routes/reservationRoute.js";

const app = express();
const PORT = process.env.PORT || 4000;

connectToDatabase();
connectToCloudinary();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/user", userRouter);
app.use("/api/product", productRouter);
app.use("/api/reservations", reservationRouter);

app.get("/", (req, res) => {
  res.send("Restaurant Reservation System Backend is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
