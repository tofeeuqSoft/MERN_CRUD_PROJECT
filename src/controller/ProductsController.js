const ProductsModel = require("./../model/ProductsModel");


// C=Create
exports.CreateProduct = async (req, res) => {
  try {
    const product = await ProductsModel.create(req.body); // ✅ fixed model name
    res.status(201).json({ status: "success", data: product });
  } catch (err) {
    res.status(400).json({ status: "failed", error: err.message });
  }
};


// R = Read
exports.ReadProduct = async (req, res) => {
    try {
        let Query = {};
        let Projection = "productName productCode img unitPrice qty totalPrice";

        // Using await instead of callback
        let data = await ProductsModel.find(Query, Projection);

        res.status(200).json({ status: "success", data });
    } catch (err) {
        res.status(400).json({ status: "failed", data: err });
    }
};


// U = Update
exports.UpdateProduct = async (req, res) => {
    try {
        let id = req.params.id;
        let Query = { _id: id };
        let reqBody = req.body;

        // Await instead of callback
        let data = await ProductsModel.updateOne(Query, reqBody);

        res.status(200).json({ status: "success", data });
    } catch (err) {
        res.status(400).json({ status: "failed", data: err });
    }
};


// D= Delete
// D = Delete
exports.DeleteProduct = async (req, res) => {
    try {
        let id = req.params.id;
        let Query = { _id: id };

        // deleteOne instead of remove (remove is deprecated)
        let data = await ProductsModel.deleteOne(Query);

        res.status(200).json({ status: "success", data });
    } catch (err) {
        res.status(400).json({ status: "failed", data: err });
    }
};
