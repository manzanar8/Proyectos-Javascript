document.addEventListener("DOMContentLoaded", function(event) {
    let height = window.innerHeight;
    document.getElementById("div2").style.height = height + "px";
});

let s, body, sub, bodyres, load, img, divImage;

s = document.getElementById('status');
body = document.getElementById('body');
sub = document.getElementById('sub');
bodyres = document.getElementById('main1');
load = document.getElementById('main2');
img = document.getElementById('image');
divImage = document.getElementById('firstImage');

setInterval(function() {
    let response = navigator.onLine;
    img.src = response ? './images/dog_happy.png' : './images/dog_sad.png';
    s.innerHTML = response ? 'Online' : 'Offline';
    body.innerHTML = response ? 'Super! Tienes conexión a Internet' : 'Ouch! Sin conexión a internet'
    sub.innerHTML = response ? 'Puedes navegar por Internet' : 'Revisa tu conexión a Internet'
    s.className = response ? 'onlineClass' : 'offlineClass';
    divImage.classList.remove("display-none");
    divImage.classList.add("display-block");
    bodyres.classList.remove("display-none");
    bodyres.classList.add("display-block");
    load.classList.add("display-none");
    load.classList.remove("display-block");
}, 3000);