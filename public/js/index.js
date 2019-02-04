// var ti = document.getElementsByTagName('h1');//n'oublie pas le s d'element de plus
// console.dir(ti)
var ti = document.getElementById('title');
// ti[0].style.color = 'green';
 ti.style.color = 'green';
ti.style.fontSize = '50px';
// ti.innerText = 'Initiation DOM'
ti.innerHTML = '&nbsp Initiation <br> au DOM'//innerHTML permet l'ajout de modification avec les balise comme br ou des codes comme &nbsp
ti.style.borderBottom = '2px solid red'
// console.log(ti);

var underTi = document.getElementById('subti')//.classList.add('maClass');
underTi.classList.add('maClass');
console.dir(underTi);