//'check & verify given Object is empty or not'
let users={uid:101, uname:'Rahul', loc: 'Delhi', sal: 55000}

console.log(users.constructor===Object) //to check if it is object or not 

console.log(Object.keys(users).length)


if(Object.keys(users).length>0){  //to check if object is empty or not
    console.log('Not empty'); 
}
else{
    console.log('empty');
}


/*
console.log(users.uid);
console.log(users.uname);
console.log(users.loc);
console.log(users.email);
console.log(users.sal);
console.log(Object.keys(users).length);*/

//console.log(sal);
//console.log(uname);
