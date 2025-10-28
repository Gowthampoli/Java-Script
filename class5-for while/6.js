//'check & verify given Array is empty or not'
let users = [{id:101},{id:102},{id:103}]

console.log(Array.isArray(users)); //to check if it is array or not
console.log(users.length)

if(users.length > 0){ //to cheack if array is empty or not
    console.log('Not empty'); 
}
else{
    console.log('Empty');
}


