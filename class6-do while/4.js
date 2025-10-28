let numbers=[11,31,8,7,232,1055,96,11]
/* //for loop
let evennum=0;
for(let i=0;i<=numbers.length-1;i++){
    if(numbers[i]%2===0){
        evennum++;
    }
}
console.log('no. of even num=',evennum); */


/* //while loop
let i=0;
let evennum=0;
while(i<=numbers.length-1){
    if(numbers[i]%2===0){
        evennum++;
    }
    i++;
}
console.log('no. of even num=',evennum); */

/* //do while
let i=0;
let evennum=0;
do{
    if(numbers[i]%2===0){
        evennum++;
    }
    i++;
}while(i<=numbers.length-1)
console.log('no. of even num=',evennum); */

//for of
let evennum=0;
for(num of numbers){
    if(num%2===0){
        evennum++;
    }
}
console.log('no. of even num=',evennum);
