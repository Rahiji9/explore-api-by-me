function loadData2() {
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(res=>res.json())
  .then(data=>console.log(data));
}

function loadData3() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(res=>res.json())
  .then(data=>disUser(data))
}

function disUser(data){
  // console.log(data);
  for (const user of data){
    console.log(user.name);
  }

}