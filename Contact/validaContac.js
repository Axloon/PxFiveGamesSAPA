$(document).ready(function () {
    $("#myForm").submit(function (event) {
        event.preventDefault();

        var nombre = $("#nombre").val();
        var email = $("#email").val();
        var telefono = $("#telefono").val();
        var comentario = $("#comentario").val();

        if (nombre == "") {
            alert("El campo nombre es requerido.");
            return;
        }

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            alert("El campo email debe ser un email válido.");
            return;
        }

        if (telefono == "") {
            alert("El campo teléfono es requerido.");
            return;
        }

        if (comentario == "") {
            alert("El campo comentario es requerido.");
            return;
        }

        alert("Formulario enviado correctamente.");
        $("#myForm")[0].reset();
    });
});