document.addEventListener('DOMContentLoaded', function() {
    const postulacionBecaSelect = document.getElementById('postulacion-a-beca');
    const tipoBecasContainer = document.getElementById('tipo-becas-container');
    const fechaElaboracionInput = document.getElementById('fecha-elaboracion');
    const formulario = document.getElementById('postulacion-form');

    postulacionBecaSelect.addEventListener('change', function() {
        if (postulacionBecaSelect.value === 'si') {
            tipoBecasContainer.style.display = 'block';
        } else {
            tipoBecasContainer.style.display = 'none';
            document.getElementById('tipo-becas-tenido').value = ''; 
        }
    });

    const today = new Date().toISOString().split('T')[0];
    fechaElaboracionInput.setAttribute('min', today);

    formulario.addEventListener('submit', function(event) {
        const nombre = document.getElementById('nombre').value.trim();
        const apellido = document.getElementById('apellido').value.trim();

        const nameRegex = /^[A-Za-z\s]+$/;
        if (!nameRegex.test(nombre) || !nameRegex.test(apellido)) {
            alert('Por favor, ingrese solo letras en los campos de Nombres y Apellidos.');
            event.preventDefault(); 
        }
    });
});
