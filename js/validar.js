function validar(f){
    if(f.name.value==""){
        alert("Por favor escriba su Nombre completo");
        f.name.focus();
        return false;
    }
    if(f.email.value==""){
        alert("Por favor escriba su direccion de correo electronico");
        f.email.focus();
        return false;
    }
    if(f.subject .value==""){
        alert("Por favor escriba el asunto de su mensaje");
        f.subject.focus();
        return false;
    }
    if(f.message.value==""){
        alert("Por favor escriba su Mensaje");
        f.message.focus();
        return false;
    }
}

let nombre = document.getElementById('nombre');
let  telefono = document.getElementById('telefono');
let email = document.getElementById('email');
let mensaje = document.getElementById('mensaje');
let error = document.getElementById('error');
error.style.color = 'red';

function enviarFormulario() {
    console.log('enviando formulario...');

    let mensajeError = [];

    if(nombre.value === null || nombre.value === ''){
        mensajeError.push('Ingresa tu nombre');
    }
    if(telefono.value === null || telefono.value === ''){
        mensajeError.push('Ingresa tu telefono');
    }
    if(email.value === null || email.value === ''){
        mensajeError.push('Ingresa tu email');
    }
    if(mensaje.value === null || mensaje.value === ''){
        mensajeError.push('Ingresa tu mensaje');
    }

    error.innerHTML = mensajeError.join(', ');

    return false;
}