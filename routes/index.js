var homeRoutes = require("./home");
//var productRoutes = require("./showProducts");

var constructorMethod = function(app){
    app.use("/",homeRoutes);
  //  app.use("/showProducts",productRoutes);
}

module.exports = constructorMethod;