const inputbox=document.getElementById('inputbox')
const listcontainer=document.getElementById('listContainer')

function addTask(){
    if(inputbox.value===''){
        alert('You have to write something')
    }else{
        let li=document.createElement('li')
        li.innerHTML=inputbox.value
        listcontainer.appendChild(li)
        let span=document.createElement('span')
        span.innerHTML='\u00d7'
        li.appendChild(span)
    }
    inputbox.value=''
    saveData()
}

listcontainer.addEventListener('click',function(event){
    if(event.target.tagName==='LI'){
        event.target.classList.toggle('checked')
        saveData()
    }else if(event.target.tagName==='SPAN'){
        event.target.parentElement.remove();
        saveData()
    }
})

function saveData(){
    localStorage.setItem('data',listcontainer.innerHTML)
}

function showData(){
    listcontainer.innerHTML=localStorage.getItem('data')
}
showData()
