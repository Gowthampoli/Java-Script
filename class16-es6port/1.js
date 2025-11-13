let pname="marker pen"

class product{
    constructor(){
        console.log("product class constructor");
    }
    get_product_details(){
        console.log("getting details");
    }
}
 
//module.exports = pname; //default export
module.exports={pname,product} //named export