const input=document.getElementById("inputfield");
const tasks=document.getElementById("tasks");

function add(){
    if(input.value===''){
        alert("enter any task");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML=input.value;
        tasks.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML="\u00d7"
        li.appendChild(span);
        input.value="";
    }
    save();
    
}

tasks.addEventListener('click',function(e){
    if(e.target.tagName==='LI'){
        e.target.classList.toggle('checked');
        save();
    }
    if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        save();
    }
},false);

function save(){
    localStorage.setItem('data',tasks.innerHTML);
}

function retrieve(){
    tasks.innerHTML=localStorage.getItem("data");
}

retrieve();