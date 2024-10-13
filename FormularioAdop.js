// Función para mostrar un mensaje cuando el formulario de adopción es enviado
function enviarFormularioAdopcion() {
    // Obtener el formulario por su clase (ya que en tu HTML no tiene ID, lo modificamos a clase)
    const formulario = document.querySelector('.formulario');
    
    // Añadir un evento de escucha para cuando se envíe el formulario
    formulario.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevenir que se envíe el formulario antes de la validación
        
        // Validar si el formulario tiene campos vacíos
        if (validarFormulario()) {
            alert('Gracias por tu interés en adoptar un gatito. ¡Te contactaremos pronto!');
        } else {
            alert('Por favor, completa todos los campos.');
        }
    });
}

// Función de validación para asegurar que los campos no estén vacíos
function validarFormulario() {
    const nombre = document.getElementById('nombre').value;
    const telefono = document.getElementById('telefono').value;
    const email = document.getElementById('email').value;
    const direccion = document.getElementById('direccion').value;
    const tipoVivienda = document.getElementById('tipo_vivienda').value;
    const mascotasActuales = document.querySelector('input[name="mascotas_actuales"]:checked');
    const experiencia = document.getElementById('experiencia').value;
    const razonAdopcion = document.getElementById('razon_adopcion').value;

    // Verificar que los campos no estén vacíos
    return nombre !== '' && telefono !== '' && email !== '' && direccion !== '' && tipoVivienda !== '' && mascotasActuales && experiencia !== '' && razonAdopcion !== '';
}

// Ejecutar la función al cargar la página
window.onload = function() {
    enviarFormularioAdopcion();
};
