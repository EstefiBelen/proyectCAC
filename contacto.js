
function validarEnviar() {
    if (document.fvalida.nombre.value.length  == 0) {
        alert("Tiene que escribir su nombre")
        document.fvalida.nombre.focus()
        return 0
    }
    if (document.fvalida.apellido.value.length  == 0) {
        alert("Tiene que escribir su apellido")
        document.fvalida.apellido.focus()
        return 0
    }
    if (document.fvalida.servicio.selectedIndex == 0) {
        alert("Debe seleccionar un servicio a consultar.")
        document.fvalida.servicio.focus()
        return 0
    }
    alert("Consulta enviada. En breve nos pondremos en contacto contigo.")
    document.fvalida.submit()
}    
