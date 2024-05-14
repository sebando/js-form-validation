const submitFunction = (evento) => {
    if(!validarFormulario()){
        evento.preventDefault();  // hace que se prevenga la actualización de la web

    }else{
        evento.preventDefault()
        alert(
            "Los datos enviados fueron: \n" +
            "Nombre: " + document.getElementById("nombre").value + "\n" +
            "Apellido: " + document.getElementById("apellido").value + "\n" +
            "Documento: " + document.getElementById("documento").value + "\n" +
            "Email: " + document.getElementById("email").value + "\n" +
            "Edad: " + document.getElementById("edad").value + "\n" +
            "Actividad: " + document.getElementById("actividad").value + "\n" +
            "Nivel de estudio: " + document.getElementById("nivelEstudio").value + "\n" 
        )


    }
} 

document.getElementById("formulario").addEventListener("submit", submitFunction); // Escucha el envío del formulario

function validarFormulario(){
    
    //  Esto valida los campos de "text"
    const camposTexto = document.querySelectorAll("input[type='texto']"); 
    let validacionCorrecta = true;

    camposTexto.forEach(campo =>{
        let errorCampo = document.getElementById("error" + campo.id.charAt(0).toUpperCase() + campo.id.slice(1)); // Palabra "error" mas id con  la primera letra en mayúscula
        if(campo.value.length == ""){
            mostrarError(errorCampo, "Este campo es requerido");
            validacionCorrecta = false;


        }else if(campo.value.length > 0 && campo.value.length < 3){
            mostrarError(errorCampo, "Este campo debe tener al menos 3 caracteres");
            validacionCorrecta = false;

        }else{
            ocultarError(errorCampo);
        }

    })

    //  Esto valida el campo "email"

    const email = document.getElementById("email");
    let errorMail = document.getElementById("errorEmail");

    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)){
        ocultarError(errorMail);
    }else{
        mostrarError(errorMail, "Ingrese un correo válido");
    }

    //  Esto valida la edad
    const edad = document.getElementById("edad");
    const errorEdad = document.getElementById("errorEdad");
    if(edad.value < 18){
        mostrarError(errorEdad, "Debes ser mayor de 18 años para registrarte");
        validacionCorrecta = false;
    }else{
        ocultarError(errorEdad);
    }


    // Validación de la actividad

    const actividad = document.getElementById("actividad");
    let errorActividad = document.getElementById("errorActividad");
    if(actividad.value == ''){
        mostrarError(errorActividad, "Debe seleccionar una actividad");
        validacionCorrecta = false;
    }else{
        ocultarError(errorActividad);

    }

    // Validación niveld de estudio

    const nivelEstudio = document.getElementById("nivelEstudio");
    const errorEstudios = document.getElementById("errorNivelEstudio");
    if(nivelEstudio.value == ''){
        mostrarError(errorEstudios, "Debe seleccionar una actividad");
        validacionCorrecta = false;
    }else{
        ocultarError(errorEstudios);

    }

    // Validar "acepto términos"
    const aceptoTerminos = document.getElementById("aceptoTerminos");
    let errorAceptoTerminos = document.getElementById("errorAceptoTerminos");
    if(!aceptoTerminos.checked){
        mostrarError(errorAceptoTerminos, "Debe aceptar los Términos y Condiciones");
        validacionCorrecta = false;
    }else{
        ocultarError(errorAceptoTerminos);

    }



    return validacionCorrecta; //Esto dirá si el formulario completado es, o no,  valido para enviar.



}

const mostrarError = (elemento, mensaje) => {
    elemento.textContent = mensaje;
    elemento.style.display = "block";
}
const ocultarError = (elemento) => {
    elemento.textContent = "";
    elemento.style.display = "none";
}
