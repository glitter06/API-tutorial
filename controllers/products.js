const product = require("../modals/products")

const getAllProducts = async (req, res) =>{
    const {company, name, sort, select} = req.query;
    const queryObject = {};

    if(company){
        queryObject.company = { $regex : company, $options: "i" }
    }

    if(name){
        queryObject.name = { $regex : name, $options: "i" }
    }

    let page = req.query.page || 1;
    let limit = req.query.limit || 3;
    let skip = (page - 1) * limit;
    let apiData = product.find(queryObject).skip(skip).limit(limit);


    if(sort){
        let sortFix = sort.split(",").join(" ");
        apiData = apiData.sort(sortFix);
    }
    if(select){
        let selectFix = select.split(",").join(" ")
        apiData = apiData.select(selectFix);
    }

    const myData = await apiData;
    res.json(myData)
}

const getAllProductsTesting = async (req, res) =>{
    res.json({msg: "product testing"})
}

module.exports = { getAllProducts, getAllProductsTesting};