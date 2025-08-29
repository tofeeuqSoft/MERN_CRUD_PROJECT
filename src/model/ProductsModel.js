const  mongoose = require("mongoose");
const DataSchema = mongoose.Schema({
    productName: {type:String},
    productCode: {type:String},
    img: {type:String},
    unitPrice: {type:String},
    qty: {type:String},
    totalPrice:{type:String},
    createdDate:{type:Date, default: Date.now()},
    },
    {versionKey: false}
);
const ProductsModel = mongoose.model("products", DataSchema )
module.exports = ProductsModel;