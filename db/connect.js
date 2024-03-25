const mongoose = require("mongoose");
//  const uri = "mongodb+srv://Aman:gosling0.6@api.n5scmia.mongodb.net/?retryWrites=true&w=majority&appName=API"
const connectDB = (uri) => {
  return mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
};

module.exports = connectDB;
