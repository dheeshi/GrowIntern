import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import userRoutes from "./routes/users.js";
import data from './data.js';


const app = express();
app.use(express.json({ limit: "30mb", extended: true }));
app.use(express.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

//test
 app.get('/api/products', (req, res) => {
     res.send(data.products);
});

app.get('/api/products/slug/:slug', (req, res) => {
    const product = data.products.find((x) => x.slug === req.params.slug)
    if (product){
        res.send(product);
    } else {
        res.status(404).send({ message: "product not found"})
    }
});

app.get('/api/products/:id', (req, res) => {
    const product = data.products.find((x) => x._id === req.params.id)
    if (product){
        res.send(product);
    } else {
        res.status(404).send({ message: "product not found"})
    }
});

app.use("/user", userRoutes);


const PORT = process.env.PORT || 5000;

const CONNECTION_URL = "mongodb+srv://furni:furni@e-commerce-website.vecxqdm.mongodb.net/?retryWrites=true&w=majority"

mongoose.connect( CONNECTION_URL, { useNewUrlParser: true, UseUnifiedTopology: true } )
.then(() => app.listen(PORT, () => {console.log(`server running on port ${PORT}`)}))
.catch((err) => console.log(err.message))

