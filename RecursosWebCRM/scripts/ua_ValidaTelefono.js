//Función que valida la longitud y caracteres numéricos para Teléfono Principal.
function validaTelefono(context) {
    var TNumber = Xrm.Page.getAttribute("telephone1").getValue();
    if (TNumber != null) {
        //Recupero valor del Atributo en cuestión.
        var phone = context.getEventSource().getValue();
        //Quitar caracteres distintos a los numéricos
        var sTmp = phone.replace(/[^0-9]/g, "");
        //Validación de longitud del dato.
        phoneRegex = /^\d{8,12}$/;
        if (!sTmp.match(phoneRegex)) {
            //Mensaje de Error.
            Xrm.Page.ui.setFormNotification("El teléfono debe contar de 8 a 12 caracteres numéricos.", "ERROR", "telephoneFail");
        }
        else {
            //Seteo del valor.
            Xrm.Page.getAttribute("telephone1").setValue(sTmp);
            Xrm.Page.ui.clearFormNotification("telephoneFail");
        }
    }
    else {
        Xrm.Page.ui.clearFormNotification("telephoneFail");
    }
}

//Función que valida la longitud y caracteres numéricos para Teléfono Móvil.
function validaTelefonoMovil(context) {
    var TNumber = Xrm.Page.getAttribute("mobilephone").getValue();
    if (TNumber != null) {
        //Recupero valor del Atributo en cuestión.
        var phone = context.getEventSource().getValue();
        //Quitar caracteres distintos a los numéricos
        var sTmp = phone.replace(/[^0-9]/g, "");
        //Validación de longitud del dato.
        phoneRegex = /^\d{10,12}$/;
        if (!sTmp.match(phoneRegex)) {
            //Mensaje de Error.
            Xrm.Page.ui.setFormNotification("El télefono móvil debe contar de 10 a 12 caracteres numéricos.", "ERROR", "mobilephonefail");
        }
        else {
            //Seteo de datos.
            Xrm.Page.getAttribute("mobilephone").setValue(sTmp);
            Xrm.Page.ui.clearFormNotification("mobilephonefail");
        }
    }
    else {
        Xrm.Page.ui.clearFormNotification("mobilephonefail");
    }
}

//Función que valida la longitud y caracteres numéricos para Otro Teléfono.
function validaTelefonoOtro(context) {
    var TNumber = Xrm.Page.getAttribute("telephone2").getValue();
    if (TNumber != null) {
        //Recupero valor del Atributo en cuestión.
        var phone = context.getEventSource().getValue();
        //Quitar caracteres distintos a los numéricos
        var sTmp = phone.replace(/[^0-9]/g, "");
        //Validación de longitud del dato.
        phoneRegex = /^\d{8,12}$/;
        if (!sTmp.match(phoneRegex)) {
            //Mensaje de Error.
            Xrm.Page.ui.setFormNotification("El teléfono debe contar de 8 a 12 caracteres numéricos.", "ERROR", "telephone2Fail");
        }
        else {
            //Seteo de Datos.
            Xrm.Page.getAttribute("telephone2").setValue(sTmp);
            Xrm.Page.ui.clearFormNotification("telephone2Fail");
        }
    }
    else {
        Xrm.Page.ui.clearFormNotification("telephone2Fail");
    }
}
