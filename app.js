
const query = document.getElementById("query");
const chatarea = document.querySelector(".chatarea");
const heading = document.getElementById("heading");
function sendQuery()
{
    chatarea.classList.remove("center");
    heading.style.display="none";
    newchat = document.createElement("div");
    chatarea.appendChild(newchat);
    newchat.classList.add("massage");
    if(query.value.length<=1)
    {
    newchat.innerHTML="pless Enter a Search Querry"; 
    }
    else
    {
    newchat.innerHTML=query.value; 
    bot();   
    }
    chatarea.scrollTo(0, chatarea.scrollHeight);
}   

function bot()
{
    newchat = document.createElement("div");
    chatarea.appendChild(newchat);
    newchat.classList.add("massage");
    newchat.innerHTML=`lodding <div class="lds-ellipsis"><div></div><div></div><div></div><div></div></div> `; 
    query.value=" ";
}

query.addEventListener("keypress",function(event){
    if(event.key ==="Enter"){
        sendQuery();
    }});
