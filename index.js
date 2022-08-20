import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const PORT = process.env.PORT || 5000;
// Import Routes
import KategoriRoute from "./routes/KategoriRoute.js";
import SubKategoriRoute from "./routes/SubKategoriRoute.js";
import ProdukRoute from "./routes/ProdukRoute.js";
import UserRoute from "./routes/UserRoute.js";
import AuthRoute from "./routes/AuthRoute.js";

const app = express();
mongoose
  .connect(process.env.DB_URL)
  .then(() => console.log("DBConnection Successfull!"))
  .catch((err) => console.log(err));

app.use(cors());
app.use(express.json());
// Use Routes
app.use(KategoriRoute);
app.use(SubKategoriRoute);
app.use(ProdukRoute);
app.use("/users", UserRoute);
app.use("/auth", AuthRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
