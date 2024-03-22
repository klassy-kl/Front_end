//Function to set cookie

function getCookie(cName){
        let cString=document.cookie;
        let carray=cString.split(';')
        console.log(carray);
        let cNameValue;
        for (let ele of carray) {
            if(ele.includes(cName)){
                cNameValue=ele
            }
        }let cValue=cNameValue.substring(cNameValue.indexOf('=')+1)
        return cValue
}

function setCookie(cName,cValue,maxAge){
    document.cookie=`${cName}=${cValue};max-age=${maxAge};path=/`
}
function checkCookie(){
    try {
        alert(`welcome again  ${getCookie('username')}`)
    } catch (error) {
        let input=prompt('please enter username')
        setCookie('username',input,3600)
    }
   
}
checkCookie();



//---------------------------------------------------------

//how to get cookie value

// document.cookie='username=SivaReddy; max-age=3600 path=/';
// document.cookie='userid=abcd; max-age=3600; path=/';


// function getCookie(cName){
//     let cString=document.cookie;
//     let carray=cString.split(';')
//     console.log(carray);
//     let cNameValue;
//     for (let ele of carray) {
//         if(ele.includes(cName)){
//             cNameValue=ele
//         }
//     }let cValue=cNameValue.substring(cNameValue.indexOf('=')+1)
//     console.log(cValue);
// }
// getCookie('username')

//----------------------------------------------------------------

//how to get cookie element

// document.cookie='username=SivaReddy; max-age=3600 path=/';
// document.cookie='userid=abcd; max-age=3600; path=/';


// function getCookie(cName){
//     let cString=document.cookie;
//     let carray=cString.split(';')
//     console.log(carray);
//     let cNameValue;
//     for (let ele of carray) {
//         if(ele.includes(cName)){
//             cNameValue=ele
//             console.log(cNameValue);
//         }
//     }
// }
// getCookie('userid')

//------------------------------------------------------------------------------------------

// document.cookie='username=SivaReddy; max-age=0; path=/;secure';
// document.cookie='userid=abcd; max-age=0; path=/;secure';
// document.cookie='email=xyz@gamil.com; max-age=0; path=/; secure' ;

// let str=document.cookie
// console.log(str);