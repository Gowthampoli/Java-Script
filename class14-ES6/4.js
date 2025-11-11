let ename=['rahul','soniya','priya','modi']
let users=[]
for(let names of ename){
    users.push(names.toUpperCase())
}
console.log(users);



let enames=['rahul','soniya','priya','modi']
enames.forEach(ename=>{console.log(ename.toUpperCase())})



let ename1=['rahul','soniya','priya','modi']
let x =ename1.map((ename)=>{return ename.toUpperCase()})
console.log(x);




