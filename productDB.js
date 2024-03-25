require("dotenv").config();
const connectdb = require("./db/connect.js")
const productModal = require("./modals/products.js")
const productJson = require("./product.json")

const start = async () => {
    try {
        await connectdb(process.env.MONGODB__URI).catch(console.dir);
        await productModal.deleteMany();
        await productModal.create(productJson)

        console.log("success")
    } catch (error) {
        console.log(error)
    }
}

start();