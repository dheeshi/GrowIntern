import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import userRoutes from "./routes/users.js";

const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


 app.get('/',(req, res) => {
     res.send("This is a furni e-commerce website API")
})


app.use("/user", userRoutes);


const PORT = process.env.PORT || 5000;

const CONNECTION_URL = "mongodb+srv://furni:furni@e-commerce-website.vecxqdm.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect( CONNECTION_URL, { useNewUrlParser: true, UseUnifiedTopology: true } )
.then(() => app.listen(PORT, () => {console.log(`server running on port ${PORT}`)}))
.catch((err) => console.log(err.message))

