(async()=>{
    let permission= await Notification.requestPermission();

    if(permission==='granted'){
        const greeting=new Notification('Hi, How are you?',{
            body:'Subscribe my channel',
            icon:'https://yt3.ggpht.com/dZrWJVS5N3R5R-qkneimoPXYLBC-apFge8e8q94jrMur7bLPc7PaOO1fiwPJrVfsando6fP2=s176-c-k-c0x00ffffff-no-rj-mo'
    })
         greeting.onclick=()=>{
         window.open('https://www.youtube.com/@GreatStackDev/about')
    }
         setTimeout(()=>{
         greeting.close()
        },1000)

    }else{
        alert('your notification is blocked')
    }


})()



//---------------------------------------------------------
//create a notification


// const greeting=new Notification('Hi, How are you?',{
//     body:'Subscribe my channel',
//     icon:'https://yt3.ggpht.com/dZrWJVS5N3R5R-qkneimoPXYLBC-apFge8e8q94jrMur7bLPc7PaOO1fiwPJrVfsando6fP2=s176-c-k-c0x00ffffff-no-rj-mo'
    
// });
//----------------------------------------------------------

// greeting.onclick=()=>{
//     window.open('https://www.youtube.com/@GreatStackDev/about')
// }

// setTimeout(()=>{
//     greeting.close()
// },1000)