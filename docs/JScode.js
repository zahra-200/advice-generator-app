const btn = document.getElementById('btn');
const adviceID = document.getElementById('adviceID');
const adviceText = document.getElementById('adviceText');

btn.addEventListener('click' , ()=>{
    fetch('https://api.adviceslip.com/advice')
    .then((response)=>response.json())
    .then((value)=>{
        adviceID.innerHTML = value.slip.id;
        adviceText.innerHTML = `"${value.slip.advice}"`;
    })
})