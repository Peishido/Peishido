const textArea = document.querySelector(".text-area");
const mensaje = document.querySelector(".mensaje");
const copia = document.querySelector(".copiar");
copia.style.display = "none";


function validarTexto(){
    let textoEscrito = document.querySelector(".text-area").value;
    let validador = textoEscrito.match(/^[a-z]*$/);

    if(!validador || validador === 0) {
        alert("Solo son permitidas letras minúsculas y sin acentos")
        location.reload();
        return true;
    }
}

const btnEncriptador=document.querySelector(".btn-encriptar");
btnEncriptador.addEventListener("click", btnEncriptar);

function btnEncriptar(){
    if(!validarTexto()) {
        const textoEncriptado = encriptar(textArea.value)
        mensaje.value = textoEncriptado;
        mensaje.style.backgroundImage = "none";
        textArea.value = "";
        copia.style.display = "block";
        if(mensaje.value.length==0){
            mensaje.value="Mensaje no encontrado";
            mensaje.style.backgroundImage='url("/images/no-encontrado.png")';
            copia.style.display = "none";

        }
    } 
}

function encriptar(stringEncriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringEncriptada.includes(matrizCodigo[i][0])){
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1])

        }

    }
    return stringEncriptada
}
const btnDesencriptador= document.querySelector(".btn-desencriptar");
btnDesencriptador.addEventListener("click", btnDesencriptar);


function btnDesencriptar(){
    const textoEncriptado = desencriptar(textArea.value);
    console.log(textoEncriptado);
    mensaje.value = textoEncriptado;
    textArea.value = "";
    mensaje.style.backgroundImage='none';
    if(mensaje.value.length==0){
        mensaje.value="Mensaje no encontrado";
        copia.style.display = "none";
        mensaje.style.backgroundImage='url("./assets/Muñeco.png")';
    }
}


function desencriptar(stringDesencriptada){
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase()

    for(let i = 0; i < matrizCodigo.length; i++){
        if(stringDesencriptada.includes(matrizCodigo[i][1])){
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1] , matrizCodigo[i][0])

        }

    }
    return stringDesencriptada;
}

const btnCopy=document.querySelector(".copiar");
btnCopy.addEventListener("click", copiar);

function copiar(){
    mensaje.select();
    navigator.clipboard.writeText(mensaje.value)
    mensaje.value = "";
    alert("Texto Copiado")
}
