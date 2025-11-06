/* let clock = new Date().toLocaleTimeString(); // get current time
document.getElementsByTagName('p')[0].innerHTML=clock; */



/* setTimeout(() => { // after 6 seconds
    //console.log('good morning');
    let clock = new Date().toLocaleTimeString(); // get current time
    document.getElementsByTagName('p')[0].innerHTML=clock;
}, 6000); */



setInterval(() => { // every 1 second
    //console.log(new Date().toLocaleTimeString());
    //document.getElementsByTagName('p')[0].innerHTML=new Date().toLocaleTimeString();
    let clock = new Date().toLocaleTimeString(); // get current time
    document.getElementsByTagName('p')[0].innerHTML=clock;
}, 1000);