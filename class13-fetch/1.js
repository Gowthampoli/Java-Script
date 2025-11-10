/* let display = ()=>{
  fetch("https://jsonplaceholder.typicode.com/users")
  .then(response => response.json())
  .then((users)=>{
    let row = '';
    for(let user of users){
         row = row + `<tr>
                   <td>${user.id}</td>
                   <td>${user.name}</td>
                   <td>${user.email}</td>
                   <td>${user.address.city}</td>
                   </tr>`
    }
    document.getElementById("data").innerHTML = row
  })
  .catch((err) => {console.log("error fetching :",err)})
} */


let display =(users)=>{
    let row = '';
    for(let user of users){
         row = row + `<tr>
                   <td>${user.id}</td>
                   <td>${user.name}</td>
                   <td>${user.email}</td>
                   <td>${user.address.city}</td>
                   </tr>`
    }
document.getElementById("data").innerHTML=row
}

fetch("https://jsonplaceholder.typicode.com/users")
  .then(resp =>resp.json())
  .then((users)=>{display(users)})