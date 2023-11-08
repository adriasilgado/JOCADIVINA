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
var intents = 5;
var correctos = [false, false, false, false, false]
function generarCeldas(vectorUsuario, vectorAdivinar) {
    for (i = 0; i < 5; i++) {
        div = document.createElement("div");
        div.className = "celdasNuevas";
        div.innerHTML = vectorUsuario[i];
        if (vectorUsuario[i] == vectorAdivinar[i]) {
            console.log(correctos[i])
            if (correctos[i] == false) {
                correctos[i] = true
                ++acertades;
            }
        } 
        document.getElementById("celdas").appendChild(div);
        color(vectorAdivinar, vectorUsuario, i, div);
    }
    --intents
    canviMissatge(acertades, intents);  
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
function canviMissatge(acertades, intents) {
    let missatge = document.getElementById("missatge");
    console.log(acertades)
    if (acertades == 5) {
        missatge.innerHTML = "Has acertado, maquina, tifon, numero 1";
    }
    else if (intents == 0) {
        missatge.innerHTML = "Te has quedado sin intentos";
    }
    else {
        missatge.innerHTML = "Te quedan " + intents + " intentos";
    }
    comprobarEstat(acertades, intents)
}

function comprobarEstat(acertades, intents) {
    let boton = document.getElementById("boton")
    if (acertades == 5 || intents == 0) {
        boton.disabled = true
        boton.style.cursor = "auto"
    }
}



