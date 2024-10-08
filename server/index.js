const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors"); 

const app = express();
app.use(cors());

mongoose.connect("mongodb://localhost:27017/Esar_db", {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("Connected to MongoDB");
})
.catch((err) => {
    console.error("Error connecting to MongoDB:", err);
});

app.get('/', (req, res) => {
    res.send('MongoDB Connection Successful');
});

app.listen(3000, () => {
    console.log("Server is running on port 3000");
});
