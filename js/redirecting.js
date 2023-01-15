const url = document.getElementById('url');
const countdown = document.getElementById('countdown');
let countdownValue = 5;
countdown.textContent = countdownValue;
const urlValue = "https://luksaraujo.github.io/lucasaraujo";
url.textContent = urlValue;
setInterval(function(){
    countdownValue--;
    countdown.textContent = countdownValue;
}, 1000);
setTimeout(function(){
    window.location.replace(urlValue);
}, 5*1000)