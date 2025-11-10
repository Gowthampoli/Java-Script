setInterval(() => { // every 1 second
    document.getElementsByTagName('p')[0].innerHTML=new Date().toLocaleTimeString();
}, 1000);