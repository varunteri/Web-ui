var head=document.getElementById("our-head");

var list=document.getElementById("our-list").getElementsByTagName("li");
for(i=0;i<list.length;i++){
    list[i].addEventListener("click",activateItem);
}
function activateItem(){

    head.innerHTML=null;
}
function onclick(){
    alert("hello   world");
}