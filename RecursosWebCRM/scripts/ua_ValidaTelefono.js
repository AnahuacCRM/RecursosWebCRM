function validaTelefono(context) {
    var TNumber = Xrm.Page.getAttribute("telephone1").getValue();


    if (TNumber != null) {
        var phone = context.getEventSource().getValue();
        var sTmp = phone.replace(/[^0-9]/g, "");
        phoneRegex = /^\d{10}$/;
        ///phoneRegex = /^\d{{5,12}$/;
        if (!sTmp.match(phoneRegex)) {

            Xrm.Page.ui.setFormNotification("El telefono debe de contar con 10 caracteres numericos.", "ERROR",
           "telephoneFail");
            /// Xrm.Page.ui control.setNotification("El telefono debe de contar con 10 caracteres numericos.");

        }
        else {
            // var sTmpClean =  "(" + sTmp.substr(0, 3) + ")" + sTmp.substr(3, 3) + "-" + sTmp.substr(6, 4);
            // Xrm.Page.getAttribute("telephone1").setValue(sTmpClean);
            Xrm.Page.getAttribute("telephone1").setValue(sTmp);
            //context.getEventSource().setValue(sTmpClean);
            Xrm.Page.ui.clearFormNotification("telephoneFail");
        }
    }
    else {
        Xrm.Page.ui.clearFormNotification("telephoneFail");
    }
}



function validaTelefonoMovil(context) {
    var TNumber = Xrm.Page.getAttribute("mobilephone").getValue();
    var Otigen = Xrm.Page.getAttribute("ua_origen").getValue();
    //if(Origen != 3)
    //  {
    if (TNumber != null) {
        var phone = context.getEventSource().getValue();
        var sTmp = phone.replace(/[^0-9]/g, "");
        phoneRegex = /^\d{10}$/;
        if (!sTmp.match(phoneRegex)) {

            Xrm.Page.ui.setFormNotification("El telefono movil debe de contar con 10 caracteres numericos.", "ERROR",
            "mobilephonefail");

        }
        else {
            //var sTmpClean =  "(" + sTmp.substr(0, 3) + ")" + sTmp.substr(3, 3) + "-" + sTmp.substr(6, 4);
            //Xrm.Page.getAttribute("mobilephone").setValue(sTmpClean);
            Xrm.Page.getAttribute("mobilephone").setValue(sTmp);
            //context.getEventSource().setValue(sTmpClean);
            Xrm.Page.ui.clearFormNotification("mobilephonefail");
        }
    }
    else {
        Xrm.Page.ui.clearFormNotification("mobilephonefail");
    }
    // }
}

function validaTelefonoOtro(context) {
    var TNumber = Xrm.Page.getAttribute("telephone2").getValue();


    if (TNumber != null) {
        var phone = context.getEventSource().getValue();
        var sTmp = phone.replace(/[^0-9]/g, "");
        phoneRegex = /^\d{10}$/;
        if (!sTmp.match(phoneRegex)) {

            Xrm.Page.ui.setFormNotification("El telefono debe de contar con 10 caracteres numericos.", "ERROR",
           "telephone2Fail");

        }
        else {
            // var sTmpClean =  "(" + sTmp.substr(0, 3) + ")" + sTmp.substr(3, 3) + "-" + sTmp.substr(6, 4);
            // Xrm.Page.getAttribute("telephone2").setValue(sTmpClean);
            Xrm.Page.getAttribute("telephone2").setValue(sTmp);
            //context.getEventSource().setValue(sTmpClean);
            Xrm.Page.ui.clearFormNotification("telephone2Fail");
        }
    }
    else {
        Xrm.Page.ui.clearFormNotification("telephone2Fail");
    }
}