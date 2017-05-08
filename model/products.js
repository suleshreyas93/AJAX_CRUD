var products = [
    {
        id : 1,
        name : "laptop"
    },
    {
        id : 2,
        name : "keyboard"
    }
]

var exportedMethod = {

    getProducts : function(){
        return Promise.resolve(products)
    }
}

module.exports = exportedMethod;