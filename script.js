// Esperar a que el documento HTML esté completamente cargado antes de ejecutar el código
document.addEventListener("DOMContentLoaded", function () {
    
    // 1. Llenar dinámicamente el <select> con los números del 1 al 100
    var selectEdad = document.getElementById("edad"); // Obtener el elemento select por su ID
    for (var i = 1; i <= 100; i++) { // Bucle para crear opciones del 1 al 100
        var opcion = document.createElement("option"); // Crear un nuevo elemento <option>
        opcion.value = i; // Asignar el valor de la opción
        opcion.text = i;  // Asignar el texto visible de la opción
        selectEdad.appendChild(opcion); // Agregar la opción al select
    }

    // 2. Capturar el evento "submit" del formulario
    document.getElementById("miFormulario").addEventListener("submit", function(event) {
        event.preventDefault(); // Evita que la página se recargue al enviar el formulario

        // 3. Obtener los valores ingresados en los campos del formulario
        var nombre = document.getElementById("nombre").value; 
        var apellido = document.getElementById("apellido").value;
        var password = document.getElementById("password").value; 
        var email = document.getElementById("email").value;
        var edad = document.getElementById("edad").value; 

        // 4. Mostrar los datos ingresados en la página
        document.getElementById("resultado").innerHTML = `
            <strong>Nombre:</strong> ${nombre} <br>
            <strong>Apellido:</strong> ${apellido} <br>
            <strong>Contraseña:</strong> ${password} <br>
            <strong>Correo Electrónico:</strong> ${email} <br>
            <strong>Edad:</strong> ${edad} años
        `;
    });

});
