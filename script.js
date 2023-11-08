let numeroAdivinar = Math.floor(Math.random() * (99999 - 10000 + 1) + 10000);
console.log(numeroAdivinar);
let numeroAdivinarSeparado = numeroAdivinar.toString().split('');

function comprobar() {
    let numeroUsuario = document.getElementById("input").value;
    let numeroUsuarioSeparado = numeroUsuario.split('');
    console.log(numeroUsuarioSeparado);
    generarCeldas(numeroUsuarioSeparado, numeroAdivinarSeparado);
}

var div;
var acertades = 0;
function generarCeldas(vectorUsuario, vectorAdivinar) {
    for (i = 0; i < 5; i++) {
        div = document.createElement("div");
        div.className = "celdasNuevas";
        div.innerHTML = vectorUsuario[i];
        if (vectorUsuario[i] == vectorAdivinar[i]) ++acertades;
        document.getElementById("celdas").appendChild(div);
        color(vectorAdivinar, vectorUsuario, i, div);
        canviMissatge(acertades);
    }
    
}

function color(vectorAdivinar, vectorUsuario, i, div) {
    let esta = true;
    if (vectorUsuario[i] == vectorAdivinar[i]) {
        div.style.backgroundColor = "#13DF1C";
    }
    else {
        let j = 0;
        let amarillo = false;
        while (j < 5 && !amarillo) {
            if (vectorUsuario[i] == vectorAdivinar[j]) {
                amarillo = true;
            }
            else {
                esta = false;
                ++j;
            }
        }
        if (!esta && !amarillo) div.style.backgroundColor = "#71716D";
        else if (amarillo) div.style.backgroundColor = "#F5F51A";   
    }
}
var intents = 5;
function canviMissatge(acertades) {
    let missatge = document.getElementById("missatge");
    if (acertades == 5) {
        missatge.innerHTML = "Has acertado, maquina, tifon, numero 1";
    }
    else {
        intents--;
        missatge.innerHTML = "Te quedan " + intents + " intents";
    }
}



