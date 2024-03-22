
let imgbox=document.getElementById('imagebox')
let qrImage=document.getElementById('qr')
let qrText=document.getElementById('qrtext')

function generateQr(){
   if(qrText.value.length>0){
    qrImage.src='https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=Example'+qrText.value
    imgbox.classList.add('show-img')
   }else{
    setTimeout(()=>{
        qrText.classList.add('error');
    },1000)
   }
  
}
