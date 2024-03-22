// const url="https://jsonplaceholder.typicode.com/posts"

// const requestHeaders={
//     'content-type':'appplication/json',
//     Authorization:'Access_Token',
// };

// const newPost={
//     title:'New Demo Post' ,
//     description:'New Demo Post Description',
// }
// const p=fetch(url,{
//     method:"POST",
//     headers:requestHeaders,
//     body:JSON.stringify(newPost),
// });

// p.then(res=>{
//     return res.json();
// }).then(data=>{
//     console.log((data));
// }).catch(error=>{
//     console.log(error);
// });

//-----------------------------------------------

//         Fetch using ASYNC & AWAIT

// async function showQuote(){

//     try {
//         let res=await fetch('https://api.quotable.io/quotes/random')
//         if(!res.ok){
//             throw 'Data not found'
//         }
//         let data= await res.json()
//         document.write(data[0].content)
//     } catch (error) {
//         console.log(error);   
//     }
// }
// showQuote()


//-----------------------------------------------------

// let p=fetch('https://api.quotable.io/quotes/random')
// p.then(res=>{
//     if(!res.ok){
//         throw 'data not found'
//     }
//     console.log(res);
//    return res.json();
// }).then(data=>{
//     console.log(data);
// }).catch(error=>{
//     console.log(error);
// })
