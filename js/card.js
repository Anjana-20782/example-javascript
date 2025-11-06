function display()
{
    let str = "";

let params = window.location.search;
let id =new URLSearchParams(params);
let index = id.get("id");
let arr = JSON.parse(localStorage.getItem("data"));

str += `
       <div class="card"><img src="${arr[index].picture}" id="image" width="200px" height="250px"><br><p>${arr[index].name}</p><p>${arr[index].password}</p>
      <a href="./edit.html?id=${index}"> <button>Edit</button></a>
       <button onclick="deletetask(${index})">Delete</button>
       </div>
        `;

        document.getElementById("cards").innerHTML=str
}
display()

function deletetask(index)
{

   let arr = JSON.parse(localStorage.getItem("data")); 
   arr.splice(index,1)
   localStorage.setItem("data",JSON.stringify(arr))
   window.location.href="./index.html"
}
