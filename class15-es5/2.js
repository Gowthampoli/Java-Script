/* let a=1;
let b=2;
[a,b]=[b,a]
console.log(a,b) */
let emp={
    eid:101,
    ename:"rahul",
    esal:45000,
    details:{
        email:"rg@gmail.com",
        loc:"wayanad",
    }
} 
let {ename,details} = emp;
let {loc} = details;
console.log(ename);
console.log(loc);
console.log(details);
console.log(emp);



