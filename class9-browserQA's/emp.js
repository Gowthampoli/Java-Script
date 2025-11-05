let employees=[{"eid":1,"ename":"Minni","evehl":"Savana 2500"},
{"eid":2,"ename":"Booth","evehl":"Century"},
{"eid":3,"ename":"Luce","evehl":"Cherokee"},
{"eid":4,"ename":"Cart","evehl":"GX"},
{"eid":5,"ename":"Madlen","evehl":"928"},
{"eid":6,"ename":"Hedda","evehl":"7 Series"},
{"eid":7,"ename":"Mace","evehl":"Odyssey"},
{"eid":8,"ename":"Neile","evehl":"Grand Voyager"},
{"eid":9,"ename":"Templeton","evehl":"350Z"},
{"eid":10,"ename":"Becca","evehl":"GTO"},
{"eid":11,"ename":"Lem","evehl":"200"},
{"eid":12,"ename":"Thorpe","evehl":"Civic"},
{"eid":13,"ename":"Muire","evehl":"960"},
{"eid":14,"ename":"Fran","evehl":"H1"},
{"eid":15,"ename":"Karrah","evehl":"Relay"},
{"eid":16,"ename":"Camey","evehl":"Swift"},
{"eid":17,"ename":"Winifield","evehl":"Freelander"},
{"eid":18,"ename":"Danni","evehl":"Bronco"},
{"eid":19,"ename":"Ivory","evehl":"Lancer Evolution"},
{"eid":20,"ename":"Benedict","evehl":"Seville"},
{"eid":21,"ename":"Victoir","evehl":"Firefly"},
{"eid":22,"ename":"Randene","evehl":"Laser"},
{"eid":23,"ename":"Chloette","evehl":"Pathfinder"},
{"eid":24,"ename":"Carlie","evehl":"Equinox"},
{"eid":25,"ename":"Konstance","evehl":"Laser"}]

function getEmployees(){
//    document.getElementById("emp").innerHTML=employees.map(emp=>`<tr><td>${emp.eid}</td><td>${emp.ename}</td><td>${emp.evehl}</td></tr>`).join("");
    let data="";
    for(let emp of employees){
        data=data+`<tr>
                        <td>${emp.eid}</td>
                        <td>${emp.ename}</td>
                        <td>${emp.evehl}</td>
                    </tr>`
        }
    document.getElementById("emp").innerHTML=data;
}