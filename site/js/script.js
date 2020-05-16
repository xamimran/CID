var repote=document.getElementById('repote-result');
var police=document.getElementById('police-result');
var solved=document.getElementById('crime-result');
var ongoing=document.getElementById('going-result');


function refresh(){
repote.textContent=Math.floor((Math.random() * 33));
police.textContent=Math.floor((Math.random() * 41));
solved.textContent=Math.floor((Math.random() * 53));
ongoing.textContent=Math.floor((Math.random() * 77));
}
