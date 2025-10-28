let employees=[{"eid":1,"ename":"Joshua","gender":"Male"},
{"eid":2,"ename":"Antons","gender":"Male"},
{"eid":3,"ename":"Madge","gender":"Female"},
{"eid":4,"ename":"Walton","gender":"Male"},
{"eid":5,"ename":"Mavis","gender":"Female"},
{"eid":6,"ename":"Elvina","gender":"Female"},
{"eid":7,"ename":"Roosevelt","gender":"Male"},
{"eid":8,"ename":"Kylynn","gender":"Female"},
{"eid":9,"ename":"Hinze","gender":"Male"},
{"eid":10,"ename":"Gerrilee","gender":"Female"},
{"eid":11,"ename":"Theressa","gender":"Female"},
{"eid":12,"ename":"Zeke","gender":"Male"},
{"eid":13,"ename":"Donovan","gender":"Male"},
{"eid":14,"ename":"Neile","gender":"Female"},
{"eid":15,"ename":"Harlene","gender":"Female"},
{"eid":16,"ename":"Gay","gender":"Male"},
{"eid":17,"ename":"Morgan","gender":"Male"},
{"eid":18,"ename":"Reed","gender":"Male"},
{"eid":19,"ename":"Silvan","gender":"Male"},
{"eid":20,"ename":"Carlina","gender":"Female"},
{"eid":21,"ename":"John","gender":"Male"},
{"eid":22,"ename":"Sergeant","gender":"Male"},
{"eid":23,"ename":"Nigel","gender":"Male"},
{"eid":24,"ename":"Elias","gender":"Male"},
{"eid":25,"ename":"Grantley","gender":"Male"},
{"eid":26,"ename":"Wallis","gender":"Female"},
{"eid":27,"ename":"Mathew","gender":"Male"},
{"eid":28,"ename":"Kellen","gender":"Male"},
{"eid":29,"ename":"Tannie","gender":"Male"},
{"eid":30,"ename":"Tarrance","gender":"Male"},
{"eid":31,"ename":"Talbert","gender":"Male"},
{"eid":32,"ename":"Hadlee","gender":"Male"},
{"eid":33,"ename":"Eyde","gender":"Female"},
{"eid":34,"ename":"Perkin","gender":"Male"},
{"eid":35,"ename":"Victoir","gender":"Male"},
{"eid":36,"ename":"Olivier","gender":"Male"},
{"eid":37,"ename":"Danni","gender":"Female"},
{"eid":38,"ename":"Linnea","gender":"Female"},
{"eid":39,"ename":"Vi","gender":"Female"},
{"eid":40,"ename":"Morgun","gender":"Male"},
{"eid":41,"ename":"Fayina","gender":"Female"},
{"eid":42,"ename":"Veriee","gender":"Female"},
{"eid":43,"ename":"Rich","gender":"Male"},
{"eid":44,"ename":"Sasha","gender":"Female"},
{"eid":45,"ename":"Lee","gender":"Male"},
{"eid":46,"ename":"Sisely","gender":"Female"},
{"eid":47,"ename":"Andrea","gender":"Female"},
{"eid":48,"ename":"Galina","gender":"Female"},
{"eid":49,"ename":"Mauricio","gender":"Male"},
{"eid":50,"ename":"Pia","gender":"Female"}]

/* //for fo
let maleemp = 0;
for(emp of employees){
    if(emp.gender==='Male'){        
        maleemp++;
    }
}
console.log(maleemp); */


/* //for loop
let maleemp1 = 0;
for(i=0;i<=employees.length-1;i++){
    if(employees[i].gender==='Male'){
        maleemp1++;
    }
}
console.log(maleemp1); */

/* //while loop
let i=0;
let maleemp2=0;
while(i<=employees.length-1){
    if(employees[i].gender==='Male'){
        maleemp2++;
    }
    i++;
}
console.log(maleemp2); */

//do  while
let i=0;
let maleemp3=0;
do{
    if(employees[i].gender==='Male'){
        maleemp3++;
    }
    i++;
}while(i<=employees.length-1)
console.log(maleemp3);
