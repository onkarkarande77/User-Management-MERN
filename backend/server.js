const express = require("express");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// IMPORT ROUTES
const userRoutes = require("./routes/userRoutes");

// USE ROUTES
app.use(userRoutes);

app.listen(5000, () => {
    console.log("Server Running on Port 5000");
});