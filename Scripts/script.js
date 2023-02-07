let nombref = document.getElementById('nombre');
let email = document.getElementById('email');
let empresa = document.getElementById('empresa');
let mensaje = document.getElementById('mensaje');
let error = document.getElementById('error');
error.style.color = 'red';
const form = document.getElementById('formulario');


form.addEventListener('submit',function(evt){
    evt.preventDefault();
    console.log("enviando formulario...");
    let mensajeserror =[];

    if (nombref.value === null || nombref.value === '') {
        mensajeserror.push('Ingresa por favor tu nombre');
    }

    if (email.value === null || email.value === '') {
        mensajeserror.push('Ingresa por favor tu email');
    }

    if (empresa.value === null || empresa.value === '') {
        mensajeserror.push('Ingresa el nombre de la empresa');
    }

    if (mensaje.value === null || mensaje.value === '') {
        mensajeserror.push('Ingresa el motivo delmensaje');
    }
    error.innerHTML = mensajeserror.join(', ');
    
})