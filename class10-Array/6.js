// Function Overriding or function hoisting
function test(){
    console.log('gm');
}
test();
function test(){ 
    console.log('gn');
} 
test();



// Variable Re-declaration
var wish=()=>{
    console.log('GM');
}
wish();
var wish=()=>{ 
    console.log('GN');
}
wish();