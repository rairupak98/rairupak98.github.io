// var API_URL='https://api.github.com/users/rairupak98/repos'

// function getData()
// {
//     fetch(,{
//         method='GET'
//     })
    

// }

window.onload=function () {
    getdata();
};
let API='https://api.github.com/users/rairupak98/repos';
function getdata()
{
fetch(API)
.then((res)=>res.json())
.then((res)=>displayData(res))
}

function displayData(data){
    let tbody=document.getElementById("dataBody");
    console.log(data);
    
    data.map((item,index)=>{


var row=tbody.insertRow(index);
var name=row.insertCell(0);
var fullname=row.insertCell(1);
var url=row.insertCell(2);
var language=row.insertCell(3);



name.innerHTML=item.name;
fullname.innerHTML=item.full_name;
name.innerHTML=item.name;
url.innerHTML=item.html_url;
language.innerHTML=`<a href="$val.html_url}" target="_blank">Repo name</a>`;
        
    });
    





}