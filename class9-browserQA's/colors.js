function changecolor(){
    document.getElementById('x').style.backgroundColor='yellow'
}
function changecolor1(){
    document.getElementsByTagName('button')[1].style.backgroundColor='green'
}
function changecolor2(){
    //alert('Button clicked')
    document.querySelector('.btn').style.backgroundColor='blue'
}
function changecolor3(){
    document.getElementsByClassName('btn1')[0].style.backgroundColor='orange'
}
function changecolor4(){
    document.getElementById('xy').style.backgroundColor='pink'
}
function changecolor5(){
    //document.getElementById('xyz').style.backgroundColor='purple'
    let input = document.getElementById('xyz')
    input.value=input.value.toUpperCase();
    input.style.backgroundColor='grey'
}