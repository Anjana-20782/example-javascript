function display()
{
    let arr=JSON.parse(localStorage.getItem("data"));
    let str=""
    arr.forEach((ele,index) => {
        str+=`
        <a href="./card.html?id=${index}"><div class="card"><img src="${ele.picture}" id="image" width="200px" height="250px"><br><p>${ele.name}</p><p>${ele.password}</p></div></a>
        `
});

document.getElementById("contain").innerHTML=str

}
display()