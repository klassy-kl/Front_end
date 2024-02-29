var randomnumber1=Math.floor(Math.random()*6)+1;

var randomImageSource='images/dice' + randomnumber1 + '.png';

document.querySelectorAll('img')[0].setAttribute('src',randomImageSource);



var randomnumber2=Math.floor(Math.random()*6)+1;

var randomImageSource2='images/dice' + randomnumber2 + '.png';


document.querySelectorAll('img')[1].setAttribute('src',randomImageSource2);

if (randomnumber1>randomnumber2){
    document.querySelector('h1').innerHTML='🚩player 1 wins';
}else if (randomnumber1<randomnumber2){
    document.querySelector('h1').innerHTML='player 2 wins 🚩';

}else{
    document.querySelector('h1').innerHTML='Draw';

}