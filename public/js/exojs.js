//Façon aug

// const changeInput = (event) =>{
//     event.target.style.backgroundColor = 'blue';
// }
// const inputs = document.getElementsByTagName('input');
// for(let i = 0;i < inputs.length; i++){
//     inputs[i].addEventListener('click', () => {
//         changeInput()
//     });
// }


//exo 1
var inpFoc = document.getElementsByTagName('input');
for(let i = 0;i < inpFoc.length; i++){
    inpFoc[i].addEventListener('focus', function (event) {
        event.target.style.background = 'blue';
    }, true);
    
    inpFoc[i].addEventListener('blur', function (event) {
        event.target.style.background = 'pink';
    }, true);
}  
    //exo 2
    

// inpFoc[1].addEventListener('focus', function (event) {
//     event.target.style.background = 'blue';
// }, true);

// inpFoc[1].addEventListener('focusout', function (event) {
//     event.target.style.background = 'none';
// }, true);

//exo 3

var li = document.getElementById('liExo03');
var parLi = li.parentElement;
console.log(parLi);

//Exo 4

var ul04 = document.getElementById('ulExo04');
var fiUlChild = ul04.firstElementChild;
console.log(ul04);
console.log(fiUlChild);

//Exo 05

var ul05 = document.getElementById('ulExo05');
for(let i = 0; i < ul05.childElementCount; i++){
    let liChild = ul05.children;
    console.log(liChild[i]);
}

//Exo 06

var getEl = document.getElementsByClassName('exo06Elem')[0];
var preEl = getEl.previousElementSibling;
console.log(getEl);
console.log(preEl);

//Exo 07

var getEl07 = document.getElementsByClassName('exo07Elem')[0];
var nextEl = getEl07.nextElementSibling;
console.log(nextEl);

//Exo 08

var pa1 = document.getElementsByClassName('premierParagraphe')[0];
var pa2 = document.getElementsByClassName('secondParagraphe')[0];
var pa3 = document.getElementsByClassName('dernierParagraphe')[0];
var btn = document.getElementsByClassName('buttonExo')[0];

btn.addEventListener('click',function(){
    pa1.innerHTML=pa2.innerHTML;
    pa3.innerHTML=pa2.innerHTML;
}, 'once');

//exo 09

var par = document.getElementsByTagName('p');
var btn09 = document.getElementsByClassName('btn')[1];
btn09.addEventListener("click",function(){
    let temp = par[8].innerHTML;
    par[8].innerHTML = par[9].innerHTML;
    par[9].innerHTML = temp;
});