/**
 * Created by husvi on 24.11.2017.
 */
window.onload = oppstart;

var list = [];
var text = "";
function oppstart() {
    document.getElementById("melding").style.visibility = "hidden";
    document.getElementById("chkVisMelding").onchange = visMelding;
}

function visMelding() {
    if(document.getElementById("chkVisMelding").checked === true){
        document.getElementById("melding").style.visibility ="visible";

    }else{
        document.getElementById("melding").style.visibility = "hidden";
    }
}

