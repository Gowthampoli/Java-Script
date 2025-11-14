function calc(a,b,op){  //Without callback
    if(op==='sum'){
        return a+b;
    }
    if(op==='multi'){
        return a*b
    }
}
console.log(calc(10,20,'sum'))
console.log(calc(10,20,'multi'))



function sum(a,b){ //with callback
        return a+b;
    }
function multi(a,b){
        return a*b;
    }

function cal(a,b,callback){
    return callback(a,b)  //calling function as a argument
}
console.log(cal(10,20,sum));
console.log(cal(10,20,multi));

