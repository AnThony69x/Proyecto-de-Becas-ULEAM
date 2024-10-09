const comentarioTextarea = document.getElementById('postulante');
const mensajeDiv = document.getElementById('mensaje');

document.getElementById('aceptar').addEventListener('click', function() {
    const comentario = comentarioTextarea.value;

    if (comentario.trim() !== "") {
        mensajeDiv.innerHTML = "Comentario enviado: " + comentario + " (Aceptado)";
        mensajeDiv.style.color = "green"; 
        comentarioTextarea.value = ""; 
    } else {
        mensajeDiv.innerHTML = "Por favor, escribe un comentario antes de enviar.";
        mensajeDiv.style.color = "red"; 
    }
});

document.getElementById('rechazar').addEventListener('click', function() {
    const comentario = comentarioTextarea.value;

    if (comentario.trim() !== "") {
        mensajeDiv.innerHTML = "Comentario enviado: " + comentario + " (Rechazado)";
        mensajeDiv.style.color = "red"; 
        comentarioTextarea.value = ""; 
    } else {
        mensajeDiv.innerHTML = "Por favor, escribe un comentario antes de enviar.";
        mensajeDiv.style.color = "red"; 
    }
});
