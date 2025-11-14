let employees=[{eid:101,ename:'rahul',esal:45000},
    {eid:102,ename:'modi',esal:55000}
]

let createnewemployee=(emp,callback)=>{
    setTimeout(() => {
        employees.push(emp);
        callback()
    }, 4000);
}
let getemployees=()=>{
    setTimeout(() => {
        let rows=""
        for(let emp of employees){
            rows=rows+`<tr><td>${emp.eid}</td>
                            <td>${emp.ename}</td>
                            <td>${emp.esal}</td>
                        </tr>`
        }
        document.getElementById("data").innerHTML=rows
    }, 1000);
}
createnewemployee({eid:103,ename:'priyanka',esal:90000},getemployees)
