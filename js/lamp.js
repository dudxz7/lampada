const lamp = document.getElementById("apagada");
let contador = 0;

function acender() {
    contador++;
    if (contador <= 10) {
        if (lamp.src.endsWith("lamp-off.png")) {
            lamp.src = "img/lamp-on.png";
            document.getElementById("btn").innerHTML = "Apagar";
            document.body.style.backgroundColor = "white"
        } else {
            lamp.src = "img/lamp-off.png";
            document.getElementById("btn").innerHTML = "Acender";
            document.body.style.backgroundColor = "black"
        }
    } else {
        lamp.src = "img/lamp-break2.png";
        document.getElementById("btn").innerHTML = "Quebrou";
    }
}
