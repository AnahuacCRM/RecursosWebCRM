//Funci�n que valida la longitud y caracteres num�ricos para Tel�fono Principal.
function validaTelefono(context) {
    var TNumber = Xrm.Page.getAttribute("telephone1").getValue();
    if (TNumber != null) {
        //Recupero valor del Atributo en cuesti�n.
        var phone = context.getEventSource().getValue();
        //Quitar caracteres distintos a los num�ricos
        var sTmp = phone.replace(/[^0-9]/g, "");
        //Validaci�n de longitud del dato.
        phoneRegex = /^\d{8,12}$/;
        if (!sTmp.match(phoneRegex)) {
            //Mensaje de Error.
            Xrm.Page.ui.setFormNotification("El tel�fono debe contar de 8 a 12 caracteres num�ricos.", "ERROR", "telephoneFail");
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

//Funci�n que valida la longitud y caracteres num�ricos para Tel�fono M�vil.
function validaTelefonoMovil(context) {
    var TNumber = Xrm.Page.getAttribute("mobilephone").getValue();
    if (TNumber != null) {
        //Recupero valor del Atributo en cuesti�n.
        var phone = context.getEventSource().getValue();
        //Quitar caracteres distintos a los num�ricos
        var sTmp = phone.replace(/[^0-9]/g, "");
        //Validaci�n de longitud del dato.
        phoneRegex = /^\d{10,12}$/;
        if (!sTmp.match(phoneRegex)) {
            //Mensaje de Error.
            Xrm.Page.ui.setFormNotification("El t�lefono m�vil debe contar de 10 a 12 caracteres num�ricos.", "ERROR", "mobilephonefail");
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

//Funci�n que valida la longitud y caracteres num�ricos para Otro Tel�fono.
function validaTelefonoOtro(context) {
    var TNumber = Xrm.Page.getAttribute("telephone2").getValue();
    if (TNumber != null) {
        //Recupero valor del Atributo en cuesti�n.
        var phone = context.getEventSource().getValue();
        //Quitar caracteres distintos a los num�ricos
        var sTmp = phone.replace(/[^0-9]/g, "");
        //Validaci�n de longitud del dato.
        phoneRegex = /^\d{8,12}$/;
        if (!sTmp.match(phoneRegex)) {
            //Mensaje de Error.
            Xrm.Page.ui.setFormNotification("El tel�fono debe contar de 8 a 12 caracteres num�ricos.", "ERROR", "telephone2Fail");
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
