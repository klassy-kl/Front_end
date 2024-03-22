let list=document.querySelector('.list');
let droparea=document.querySelector('.area');


list.addEventListener('drag',(e)=>{
    let selectedItem=e.target

    droparea.addEventListener('dragover',(e)=>{
        e.preventDefault()
    })
    droparea.addEventListener('drop',(e)=>{
        droparea.appendChild(selectedItem)    
    })


})



// droparea.addEventListener('dragenter',(e)=>{
//     e.preventDefault()
//     console.log(e.type);
// })

// droparea.addEventListener('dragover',(e)=>{
//     e.preventDefault()
//     console.log(e.type);
// })

// droparea.addEventListener('dragleave',(e)=>{
//     console.log(e.type);

// })

// droparea.addEventListener('drop',(e)=>{
//     console.log(e.type);

// })


// list.addEventListener('dragstart',(e)=>{
//     console.log(e.type);
//     console.log(e.target);
// })

// list.addEventListener('drag',(e)=>{
//     console.log(e.type);
// })

// list.addEventListener('dragend',(e)=>{
//     console.log(e.type);
// })