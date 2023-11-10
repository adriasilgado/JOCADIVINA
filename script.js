let numeroAdivinar = Math.floor(Math.random() * (99999 - 10000 + 1) + 10000);
console.log(numeroAdivinar);
let numeroAdivinarSeparado = numeroAdivinar.toString().split('');

function comprobar() {
    let numeroUsuario = document.getElementById("input").value;
    if (/^\d{5}$/.test(numeroUsuario)) {
        let numeroUsuarioSeparado = numeroUsuario.split('');
        generarCeldas(numeroUsuarioSeparado, numeroAdivinarSeparado, numeroAdivinar);
    }
    else {
        missatge.innerHTML = "Introduce un numero de 5 digitos";
    } 
    document.getElementById("input").value = ""
}

var div;
var acertades = 0;
var intents = 5;
var correctos = [false, false, false, false, false]

async function generarCeldas(vectorUsuario, vectorAdivinar, numeroAdivinar) {
    for (i = 0; i < 5; i++) {
            div = document.createElement("div");
            div.className = "celdasNuevas";
            await delay(300)
            div.innerHTML = vectorUsuario[i];
            if (vectorUsuario[i] == vectorAdivinar[i]) {
            if (correctos[i] == false) {
                correctos[i] = true
                ++acertades;
            }
        } 
        document.getElementById("celdas").appendChild(div);
        color(vectorAdivinar, vectorUsuario, i, div, correctos);
    }
    --intents
    canviMissatge(acertades, intents, vectorAdivinar, numeroAdivinar); 
}

function color(vectorAdivinar, vectorUsuario, i, div, correctos) {
    if (vectorUsuario[i] == vectorAdivinar[i]) {
        div.style.backgroundColor = "#13DF1C";
        correctos[i] = true;
    } else {
        let j = 0;
        let amarillo = false;
        while (j < 5 && !amarillo) {
            if (vectorUsuario[i] == vectorAdivinar[j] && i != j && !correctos[j]) {
                amarillo = true;
            }
            ++j;
        }

        if (amarillo) {
            div.style.backgroundColor = "#F5F51A";
        } else {
            let k = 0
            let repetido = false
            while (k < 5 && !repetido) {
                if (vectorUsuario[i] == vectorAdivinar[k] && !correctos[k]) {
                    amarillo = true;
                    correctos[k] = true;
                    repetido = true;
                }
                ++k
            }
            if (amarillo) {
                div.style.backgroundColor = "#F5F51A"; 
            } else {
                if (!correctos.some((c) => c)) {
                    div.style.backgroundColor = "#71716D";
                }
            }
        }
    }
}

function canviMissatge(acertades, intents, vectorAdivinar, numeroAdivinar) {
    let missatge = document.getElementById("missatge");
    if (acertades == 5) {
        missatge.innerHTML = "Has acertado!!!!";
    }
    else if (intents == 0) {
        missatge.innerHTML = "Te has quedado sin intentos :(";
    }
    else {
        missatge.innerHTML = "Te quedan " + intents + " intentos";
    }
    comprobarEstat(acertades, intents, vectorAdivinar)
}

function comprobarEstat(acertades, intents, vectorAdivinar) {
    let boton = document.getElementById("boton")
    if (acertades == 5 || intents == 0) {
        boton.disabled = true
        boton.style.cursor = "auto"
        document.getElementById("numero1").innerHTML = vectorAdivinar[0]
        document.getElementById("numero2").innerHTML = vectorAdivinar[1] 
        document.getElementById("numero3").innerHTML = vectorAdivinar[2] 
        document.getElementById("numero4").innerHTML = vectorAdivinar[3] 
        document.getElementById("numero5").innerHTML = vectorAdivinar[4]
        if (acertades == 5) {
            win();  
        }
        else if (intents == 0) {
            lose()
        }
    }
}

function win() {
    let gifCR7 = document.createElement("img")
    gifCR7.src = "images/siuuu.gif";
    gifCR7.style.position = "absolute";
    gifCR7.style.marginLeft = "15%";
    gifCR7.style.marginTop = "20%"
    document.getElementById("main").appendChild(gifCR7)
    
}


function lose() {
    let sadPikachu = document.createElement("img");
    sadPikachu.src = "images/XZ9.gif"
    sadPikachu.style.position = "absolute";
    sadPikachu.style.marginLeft = "15%";
    sadPikachu.style.marginTop = "20%"
    document.getElementById("main").appendChild(sadPikachu)
} 

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


