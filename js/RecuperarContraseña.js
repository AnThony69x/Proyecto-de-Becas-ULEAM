const form = document.getElementById('formulario-recuperacion');
const mensajeDiv = document.getElementById('mensaje');

function esCorreoValido(correo) {
    const patronCorreo = /^e[0-9]{10}@live\.uleam\.edu\.ec$/;
    return patronCorreo.test(correo);
}

function validarInicioSesion(event) {
    event.preventDefault(); 

    const correo = document.getElementById('correo').value;

    if (esCorreoValido(correo)) {
        mensajeDiv.textContent = ''; 
        form.submit(); 
    } else {
        mensajeDiv.textContent = 'Por favor, ingrese un correo válido';
    }
}

form.addEventListener('submit', validarInicioSesion);

