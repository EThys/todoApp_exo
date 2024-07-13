const input=document.getElementById('input');
const listContainer=document.getElementById('list-container')

const addTask=()=>{
    if(input.value==''){
        alert('entrer une valeur')
    }
    else{
        let li=document.createElement('li')
        li.innerHTML=input.value;
        listContainer.appendChild(li);
        let span=document.createElement('span')
        span.innerHTML="\u00d7"
        li.appendChild(span)
    }
    input.value='';
    save();
} 
const save=()=>{
    localStorage.setItem("data",listContainer.innerHTML)
}
const showTask=()=>{
     listContainer.innerHTML=localStorage.getItem("data")
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle('checked')
        save();
    }
    else if(e.target.tagName==="SPAN"){
        e.target.parentElement.remove();
        save();
    }
},false)

document.addEventListener('DOMContentLoaded', () => {
    const text = "AliceTodo App";
    let index = 0;
    const typingSpeed = 150; 
    const pauseDuration = 1000;

    function typing() {
        if (index < text.length) {
            document.getElementById('typing-text').innerHTML += text.charAt(index);
            index++;
            setTimeout(typing, typingSpeed);
        } else {
            setTimeout(() => {
                document.getElementById('typing-text').innerHTML = '';
                index = 0;
                setTimeout(typing, typingSpeed);
            }, pauseDuration);
        }
    }

    typing();
});

showTask()
