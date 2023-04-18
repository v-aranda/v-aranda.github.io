const container = document.querySelector('.paragrafos');
const paragrafos = container.querySelectorAll('p');

const styleDocument = getComputedStyle(document.body);
const backgroundBody = styleDocument.backgroundColor;
console.log(backgroundBody)
const colorparagraph = styleDocument.color;


const body = document.querySelector('.container')
body.style.color=backgroundBody
body.style.backgroundColor=colorparagraph


for (let p of paragrafos){
    console.log(p);
}