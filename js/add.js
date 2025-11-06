let student = [
  { name: "Name", id: "userName", type: "text" },
  { name: "Password", id: "userPassword",  type: "password" },
  { name: "Profile Picture", id: "userImage",  type: "file" },
  { name: "Submit", id: "submit", type: "submit" }
];

let str=""

student.forEach((ele,index)=>{


  if(ele.type=="submit"){
    str+=` <input type="${ele.type}" id="${ele.id}" name="${ele.name}">`
  }
  else{
    str+=`
    <label>${ele.name}</label>
    <input type="${ele.type}" id="${ele.id}" name="${ele.name}"><br><br>
    `
  }
})
document.getElementById("form").innerHTML=str


let picture=""
document.getElementById("userImage").addEventListener("change",()=>{

  let image=document.getElementById("userImage").files[0]
  let reader=new FileReader()
  reader.onload=()=>{
     picture=reader.result
  }
  reader.readAsDataURL(image)
})



document.getElementById("submit").addEventListener("click",(e)=>{

e.preventDefault();
let name=document.getElementById("userName").value
let password=document.getElementById("userPassword").value
let arr=JSON.parse(localStorage.getItem("data")) || [];
let input={name:name,password:password,picture:picture}
arr.push(input)
localStorage.setItem("data",JSON.stringify(arr))
window.location.href="./index.html"
})

