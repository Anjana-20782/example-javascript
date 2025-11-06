let student = [
  { name: "Name", id: "userName", type: "text" },
  { name: "Password", id: "userPassword",  type: "password" },
  { name: "Profile Picture", id: "userImage",  type: "file" },
  { name: "Submit", id: "submit", type: "submit" }
];

let str=""

let params = window.location.search;
let id =new URLSearchParams(params);
let index = id.get("id");
let arr = JSON.parse(localStorage.getItem("data"));
str+=`
 <label>Name</label>
    <input type="text" id="name" name="names" value="${arr[index].name}"><br><br> 
    <label>Password</label>
    <input type="text" id="password" name="password" value="${arr[index].password}"><br><br>
     <label>Profile</label>
     <img src="${arr[index].picture}" id="preview" width="200px" height="250px">
    <input type="file" id="profile" name="profile"><br><br>
    <input type="submit" id="submit" name="submit" value="Edit"><br><br>
    
`


document.getElementById("form").innerHTML=str

let picture=""
document.getElementById("profile").addEventListener("change",()=>{

    
  let image=document.getElementById("profile").files[0]
  let reader=new FileReader()
  reader.onload=()=>{
     picture=reader.result
     document.getElementById("preview").src=picture
  }
  reader.readAsDataURL(image)
  
})


document.getElementById("submit").addEventListener("click",(e)=>{

e.preventDefault();
let name=document.getElementById("name").value
let password=document.getElementById("password").value
let arr=JSON.parse(localStorage.getItem("data"));
let input={name:name,password:password,picture:picture}
arr.splice(index,1,input)
localStorage.setItem("data",JSON.stringify(arr))
window.location.href="./index.html"
})

