let gotoGoa=(success,failure)=>{
    let acc_bal=28000;
    if(acc_bal>=15000){
        success("Hotel")
    }
    else{
        failure("PG")
    }
}
gotoGoa((msg)=>{console.log(msg)},(err)=>{console.log(err)})


let gotoGoaa=(Resolve,Reject)=>{
    let acc_bal=8000;
    acc_bal>=15000 ? Resolve("Car"): Reject("Bike");
}
gotoGoaa((msg)=>{console.log(msg)},(err)=>{console.log(err)})