let outputOne = document.getElementById('input-one'); 
let outputtwo = document.getElementById('input-two'); 
let outputthree = document.getElementById('input-three'); 

let maxoutput = document.getElementById('max-id');
let minioutput = document.getElementById('mini-id');

function randomNumbers(){
outputOne.value = Math.floor(Math.random()*21);
outputtwo.value = Math.floor(Math.random()*21);
outputthree.value = Math.floor(Math.random()*21);

}
function maxnumber(){
   maxoutput.innerText = Math.max(outputOne.value,outputtwo.value,outputthree.value);

}

function mininumber(){
    minioutput.innerText = Math.min(outputOne.value,outputtwo.value,outputthree.value);

}
