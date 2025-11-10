/* let numbers=['rahul','rahul','rahul','priya','modi']
numbers=[... new Set(numbers)]//spread op
console.log(numbers); */

//create new array based on existing array
let numbers=['rahul','rahul','rahul','priya','modi']
let new_eids=[]
/* for(let num of numbers){
    new_eids.push(num);
} */
let x=0;
while(x<=numbers.length-1){
    new_eids.push(x)
    x++;
}
console.log(new_eids);


/* let new_numbers=numbers;
console.log(new_numbers); */

/* let uids=[101,102,103,104];
//create new array(eids) based on existing
let eids=[...uids]
console.log(uids);
console.log(eids); */

/* let a=[100,200,300,400,400]
let b=[...a]
console.log(b); */
