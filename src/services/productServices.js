let products = [
    { id : 1,name:"Laptop",price : 50000,category : "Electronics"},
    { id : 2,name:"Shirt",price : 1500,category : "Clothing"},
    { id : 3,name :"A Kitte Runner",price : 650,category :"Books"},
    { id : 4,name : "Headphones",price : 250 ,category : "Electronics"},
    { id : 5,name : "Skirt",price : 500 ,category : "Clothing"}
]
exports.fetchProducts = () => {
    return products;
}
exports.fetchProductById = (id) => {
    return products.find(product => product.id === id);
};
exports.createProduct = (product) => {
    const newProduct = {
        id : products.length + 1,
        ...product
    };
    products.push(newProduct);
    return newProduct;
};
exports.updateProduct = (id,data) => {
    const prod = products.find(product => product.id === id);
    if(!prod) return null;
    prod.name = data.name || prod.name;
    prod.category = data.category || prod.category;
    prod.price = data.price || prod.price;
    return prod;
};
exports.deleteProduct = (id) => {
    const index = products.findIndex(product => product.id === id);
    if(index === -1) return false;
    products.splice(index,1);
    return true;
};
