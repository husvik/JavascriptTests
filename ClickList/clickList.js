/**
 * Created by husvi on 24.11.2017.
 */
window.onload = run;

function run() {
    document.getElementById("country").onchange = getCountry;
}

function getCountry(){
    document.getElementById("message").innerHTML = "Youre from " + document.getElementById("country").value;
}