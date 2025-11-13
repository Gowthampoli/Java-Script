function sum(a,b){
        return a+b;
    }
function multi(a,b){
        return a*b;
    }

function calc(a,b,callback){
    return callback(a,b)  //calling function as a argument
}
console.log(calc(10,20,sum));
console.log(calc(10,20,multi));
