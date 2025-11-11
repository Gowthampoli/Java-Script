/* //for loop
let numbers = [11,7,8,232,1055,41,8,12]
let even_no = []
for(num of numbers){
    if(num%2===0){
        even_no.push(num);
    }
}
console.log(numbers);
console.log(even_no);


//fat arrow function
let evens=numbers.filter((num)=>{
    return num%2===0;
})
console.log(numbers);
console.log(evens);


//implicite return
let even=numbers.filter(num=>num%2===0)
console.log(numbers);
console.log(even); */


let ename2=['rahul','soniya','priya','gowtham','modi']
let y = ename2.filter((enam)=>{return enam.length>5})
console.log(y);


let ename3=['rahul','soniya','priya','gowtham','modi']
console.log(ename3.filter(enam=>enam.length>=5))


let ename4=['rahul','soniya','priya','gowtham','modi']
console.log(ename4.find(enam=>enam.length===7))