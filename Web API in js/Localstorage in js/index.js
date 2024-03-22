//sessionstorage
sessionStorage.setItem('theme','dark')
console.log(sessionStorage.getItem('theme'));
sessionStorage.removeItem('theme')
sessionStorage.clear();


//---------------------------------------------------------

// const settings={
//     background:'black',
//     color:'white',
//     theme:'dark',
// }

// localStorage.setItem('theme',JSON.stringify(settings))
// let str=localStorage.getItem('theme')
// console.log(JSON.parse(str));


//--------------------------------------------------------
// window.localStorage.setItem('theme','dark')
// window.localStorage.setItem('color','seagreen')
// window.localStorage.setItem('background','black')

// localStorage.clear()
// console.log(localStorage.key(0));
// console.log(localStorage.key(1));
// console.log(localStorage.key(2));
// console.log(localStorage.length);

//-----------------------------------------------------------
//looping 1

// for (let i = 0; i < localStorage.length; i++) {
//     let key=localStorage.key(i)
//     let value=localStorage.getItem(key)
//     console.log(`${key}:${value}`);
// }


//looping 2
// let a=Object.keys(localStorage)
// for(let i of a){
//     console.log(`${i}:${localStorage.getItem(i)}`);
// }
