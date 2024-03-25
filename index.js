require("dotenv").config();
const express = require('express')
const Product_router = require("./routes/product.js")
const connectDB = require("./db/connect.js")


const PORT = process.env.PORT || 5000;
const app = express();

app.use('/api/product', Product_router)

app.get('/', (req, res)=>{
    res.send("this is home page")
})

const start =  async () => {
    try {
        await connectDB(process.env.MONGODB__URI);
        app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
    } catch (error) {
        console.log(error)
    }
}
start();