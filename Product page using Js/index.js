let productImage=document.getElementById('img');
let btn=document.getElementsByClassName('btn');

btn[0].onclick=function(){
    productImage.src='frontimg.jpg'

    for(bt of btn){
        bt.classList.remove('active')
    }
    this.classList.add('active');
}

btn[1].onclick=function(){
    productImage.src='sideimg.jpg'
    for(bt of btn){
        bt.classList.remove('active')
    }
    this.classList.add('active');
}

btn[2].onclick=function(){
    productImage.src='backimg.jpg'
    for(bt of btn){
        bt.classList.remove('active')
    }
    this.classList.add('active');
}


















