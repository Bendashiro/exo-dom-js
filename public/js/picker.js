//Import html
var bgColor = document.getElementsByClassName('bg-tar');
var pickColor = document.getElementById('color');
var borStyle = document.getElementsByClassName('bor-style');
var borWei = document.getElementById('bor-wei');
var borRadius = document.getElementById('bor-rad');
var targetDiv = document.getElementById('target');
console.log(borWei);
console.log(borWei);

//Fonction utilisable


//Ecouteur d'evenement
pickColor.addEventListener('change',function(event) {
    let inputColor = event.target.value;
    bgColor[1].style.backgroundColor = inputColor;
});
for(let i = 0; i < bgColor.length;i++){
    bgColor[i].addEventListener('click',function() {
        let color = bgColor[i].style.backgroundColor;
        targetDiv.style.backgroundColor = color;
    });
}
for(let i2 = 0; i2 < borStyle.length; i2++){
    borStyle[i2].addEventListener('click', function() {
        let border = window.getComputedStyle(borStyle[i2]).borderStyle;//getComputedStyle s'utlise via la fenetre et on précise l'element ciblé
        console.log('le click est prit en compte')
        targetDiv.style.borderStyle = border;
    });
}
borWei.addEventListener('input',function() {
    targetDiv.style.borderWidth = `${borWei.value}px`;
});
borRadius.addEventListener('input',function() {
    targetDiv.style.borderRadius = `${borRadius.value}%`;
});