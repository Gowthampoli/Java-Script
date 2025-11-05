function display(){
    let cdt = new Date().toDateString(); // get date only
    //let cdt = new Date().toLocaleString(); // get date and time
    console.log(cdt);
    //document.writeln("gm");
    //document.getElementsByTagName
    let ptag_ref=document.getElementById('xyz')
    console.log(ptag_ref);
    ptag_ref.innerHTML=cdt;
    
    //document.getElementsByClassName
    //document.querySelector

        
}