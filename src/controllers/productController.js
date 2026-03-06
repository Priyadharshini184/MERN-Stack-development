const productService = require("../sevices/productService");

const getAllProducts = (req, res) => {
  const products = productService.fetchProducts();
  res.json(products);
};

const getProductById = (req, res) => {
  const productId = parseInt(req.params.id);
  const product = productService.fetchProductById(productId);
  res.json(product);
};

const createProduct = (req, res) => {
  const createdProduct = productService.createProduct(req.body);
  res.json(201).json(createdProduct);
};

const updateProduct = (req, res) => {
  const updatedProduct = productService.updateProduct(
    req.params.id,req.body);
    if(!updateProduct){
        return res.status(404).send("Product not found");
    }
  res.json(updatedProduct);
};

const deleteProduct = (req, res) => {
  const productId =productService.deleteProduct(re.params.productId);
  if(!productId){
    return res.status(404).send("Product not found");
  }
  res.send("Product deleted successfully");
};
module.exports = {getAllProducts, getProductById, createProduct, updateProduct, deleteProduct};