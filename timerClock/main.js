let myVar = setInterval(myTimer, 900);

function format(value) {
    console.log("VALUEE:::", value);
    let valueFinal;
    valueFinal = (value.toString().length == 1) ? ('0' + value) : value;
    return valueFinal;
}

function myTimer() {
    const d = new Date();
    document.getElementById("hours").innerHTML = format(d.getHours());
    document.getElementById("minutes").innerHTML = format(d.getMinutes());
    document.getElementById("seconds").innerHTML = format(d.getSeconds());
    document.getElementById("time").style.display = "flex";

}