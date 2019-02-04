//Exo DOM 1
var titEx1 = document.getElementById('titre1');
var tit2Ex1 = document.getElementsByClassName('titre2');
var parEx1 = document.getElementsByTagName('p');
var spEx1 = parEx1[2].firstElementChild;
console.log(titEx1);
console.log(tit2Ex1[0]);
console.log(parEx1[2]);
console.log(spEx1);

//Exo DOM 2

// var titEx2 = document.querySelectorAll('#titre3, #titre4')

let btn = document.getElementsByTagName('button')

var changeStyle = () =>{
    var titEx2 = document.getElementById('titre3');
    var tit2Ex2 = document.getElementById('titre4');
    var parEx2 = document.getElementsByTagName('p');
    var spEx2 = parEx1[3].firstElementChild;
    titEx2.innerHTML = 'Il était une fois le Javascript';
    tit2Ex2.innerHTML = "J'aime les tartines";
    titEx2.style.border = 'solid red 1px';
    tit2Ex2.style.color = 'green';
    parEx1[2].style.fontSize = '12px';
    spEx2.style.color = 'red';
    spEx2.style.fontSize = '18px';
    
    let span = document.querySelector('#titre4 + p > span');
    span.style.backgroundColor = 'green';
}
btn[0].addEventListener('click', changeStyle, 'once');