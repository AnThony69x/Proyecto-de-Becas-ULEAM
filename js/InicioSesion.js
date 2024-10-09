const form = document.querySelector('form');
const mensajeDiv = document.getElementById('mensaje'); 
async function cargarUsuarios() {
    try {
        const response = await fetch('../data/usuarios.json'); 
        const usuarios = await response.json();
        return usuarios;
    } catch (error) {
        console.error('Error al cargar el archivo JSON:', error);
        mensajeDiv.textContent = 'Error al cargar usuarios.';
    }
}

function esCorreoValido(correo) {
    const patronCorreo = /^e[0-9]{10}@live\.uleam\.edu\.ec$/;
    return patronCorreo.test(correo);
}

function validarContraseña(contraseña) {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
    return regex.test(contraseña);
}

async function validarInicioSesion(event) {
    event.preventDefault();  

    const useroot = document.getElementById('usuario').value;
    const password = document.getElementById('contraseña').value;

    mensajeDiv.textContent = ''; 

    if (!esCorreoValido(useroot)) {
        mensajeDiv.textContent = 'Por favor, ingrese un correo válido';
        return;
    }

    if (password.length < 8) {
        mensajeDiv.textContent = 'La contraseña debe tener al menos 8 caracteres';
        return;
    }

    const usuarios = await cargarUsuarios();
    
    const usuarioEncontrado = usuarios.find(
        user => user.usuario === useroot && user.contraseña === password
    );

    if (usuarioEncontrado) {
        if (usuarioEncontrado.rol === 'admin') {
            window.location.href = 'InicioAdministrador.html';
        } else if (usuarioEncontrado.rol === 'estudiante') {
            window.location.href = 'InicioEstudiante.html';
        }
    } else {
        mensajeDiv.textContent = 'Usuario o contraseña incorrectos';
    }
}

form.addEventListener('submit', validarInicioSesion);
