let numeroAdivinar = Math.floor(Math.random() * (99999 - 10000 + 1) + 10000);
console.log(numeroAdivinar);
let numeroAdivinarSeparado = numeroAdivinar.toString().split('');

function comprobar() {
    let numeroUsuario = document.getElementById("input").value;
    let numeroUsuarioSeparado = numeroUsuario.split('');
    console.log(numeroUsuarioSeparado);
    color(numeroUsuarioSeparado, numeroAdivinarSeparado)
}

function color(vectorAdivinar, vectorUsuario) {
    let esta = true

    for(i = 0; i < 5; i++) {
        if (vectorUsuario[i] == vectorAdivinar[i]) {
            console.log("verde")
        }
        else {
            let j = 0
            let amarillo = false
            while (j < 5 && !amarillo) {
                if (vectorUsuario[i] == vectorAdivinar[j]) {
                    amarillo = true
                }
                else esta = false
                ++j
            }
            if (!esta && !amarillo) console.log("gris")
            else if (amarillo) console.log("amarillo")   
        }
    }

}

