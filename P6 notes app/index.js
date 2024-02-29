const notesContainer=document.querySelector('.notescontainer');
const createBtn=document.querySelector('.btn');
let notes=document.querySelectorAll('.inputbox');

function showNotes(){
    notesContainer.innerHTML=localStorage.getItem('notes')
}
showNotes();

function updateStorage(){
    localStorage.setItem('notes',notesContainer.innerHTML);
}


createBtn.addEventListener('click',()=>{
    let inputbox=document.createElement('p');
    let img=document.createElement('img');
    inputbox.className='inputbox';
    inputbox.setAttribute('contenteditable','true');
    img.src='delete.png';
    notesContainer.appendChild(inputbox).appendChild(img);
})

notesContainer.addEventListener('click',function(e){
    if(e.target.tagName==='IMG'){
        e.target.parentElement.remove();
        updateStorage();
    }
    else if(e.target.tagName==='P'){
        notes=document.querySelectorAll('.inputbox');
        notes.forEach(nt =>{
            nt.onkeyup=function(){
                updateStorage();
            }
        })
    }
   
})

document.addEventListener('keydown',e=>{
    if(e.key==='Enter'){
        document.execCommand('insertLinebreak');
        e.preventDefault();
    }
})

document.addEventListener('keydown', function(e) {
    if (e.ctrlKey && e.key === 'a') {
        e.preventDefault(); // Prevent selecting all text
    }
    if (e.key === 'Backspace' && e.target.tagName !== 'INPUT' && e.target.tagName !== 'TEXTAREA') {
        e.preventDefault(); // Prevent default backspace behavior if not in an input or textarea
    }
});




