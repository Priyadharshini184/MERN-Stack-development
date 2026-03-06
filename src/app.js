const express = require('express');
const app = express();
const productRoutes = require("./routes/productRoutes");
const loggerMiddleware = require("./middlewares/logger");
app.use(express.json()); 
app.get('/', (req, res) => {
  res.send("Product API is running...");
});
app.use('/products', productRoutes);


app.use(loggerMiddleware);

app.listen(3000,() => {
    console.log("Server running on port 3000");
});
