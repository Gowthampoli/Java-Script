//using spread operator
//create new object
let emp={eid:101,ename:'rahul',esal:45000}
let user={... emp}
console.log(user);

//merge objects
let emp1={eid:101,ename:'priya',esal:65000,email:'lod@gmail.com'}
let details={email:'log@gmail.com',loc:'waynad'}
let new_emp={...emp1, ...details}
console.log(new_emp);
//duplicates are not allowed


//extend object properties
let a={...emp, loc:'delhi'}
console.log(a);


