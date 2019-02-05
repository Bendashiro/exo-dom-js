//Import html
/*
var bgColor = document.getElementsByClassName('bg-tar');
var pickColor = document.getElementById('color');
var borStyle = document.getElementsByClassName('bor-style');
var borWei = document.getElementsByClassName('bor-wei');
var borRadius = document.getElementsByClassName('bor-rad');
*///variable sans utilisation de data-set
//pour data-set
var buttons = document.getElementsByTagName('button');
var inputs = document.getElementsByTagName('input');
var targetDiv = document.getElementById('target');

//Fonction utilisable

const clickStyle = (elem) => {
    let prop = elem.dataset.style;//on recupere les propriété css avec le data-set
    let cssElem = window.getComputedStyle(elem);//on recupere la la valeur de la prop assigné
    let value = cssElem[prop];
    targetDiv.style[prop] = value;
}
const inputStyle = (elem) => {
    let prop = elem.dataset.style;
    let cssElem = window.getComputedStyle(elem);
    let value = cssElem[prop];
    targetDiv.style[prop] = isNaN(elem.value) ? elem.value : `${elem.value}px`
}

//Ecouteur d'evenement
for(let i = 0; i < buttons.length;i++){
    buttons[i].addEventListener('click',(event) => {
        clickStyle(event.target);
    });
};
for(let i2 = 0;i2< inputs.length;i2++){
    inputs[i2].addEventListener('input',(event) => {
        inputStyle(event.target);
    })
}
// borWei.addEventListener('input',function() {
//     targetDiv.style.borderWidth = `${borWei.value}px`;
// });
// borRadius.addEventListener('input',function() {
//     targetDiv.style.borderRadius = `${borRadius.value}%`;
// });