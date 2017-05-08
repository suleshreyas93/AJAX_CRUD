var express = require("express");
var router = express.Router();
var model = require("../model");
var productsData = model.products;




//Get Home Page
router.get("/", function (req, res) {

    //res.json({success : true,myProducts : myProducts});
    res.render("home");

});

router.get("/fetch", function (req, res) {

    productsData.getProducts().then((result) => {
        console.log(result);
        res.render("temp", {response: result, layout: false});
    })


});



module.exports = router;
