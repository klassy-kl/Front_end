const form=document.getElementById('form')
const btn=document.getElementById('btn')

btn.addEventListener('click',(e)=>{
    e.preventDefault()
    const formdata=new FormData(form)
    for(let i of formdata.entries()){
        console.log(i[0],i[1]);
    }
})


//const formdata=new FormData(form)

// formdata.append('name','sivareddy');
// formdata.append('email','siva@sg.com');
// formdata.append('phone','123456789');

// formdata.delete('ph.no')

// for(let kv of formdata.entries()){
//         console.log(kv[0],kv[1]);
// }

// for(let k of formdata.values()){
//         console.log(k);
// }

//formdata.set('name','sivareddy');
// formdata.set('name','siva');

// for(let k of formdata.keys()){
//     console.log(k);
// }

// console.log(formdata.has('phonenumber'));
// console.log(formdata.getAll('name'));
// console.log(formdata.get('name'));