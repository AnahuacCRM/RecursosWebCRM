function calcularEdad(context) {
    var hoy = new Date();
    var fecha_nac = Xrm.Page.getAttribute("ua_fecha_nacimiento").getValue();
    var cumpleanos = new Date(fecha_nac);
    var edad = hoy.getFullYear() - cumpleanos.getFullYear();
    var m = hoy.getMonth() - cumpleanos.getMonth();

     if (m < 0 || (m === 0 && cumpleanos.getDay() < hoy.getDay())) {
         edad = edad-1;
     }
     Xrm.Page.getAttribute("ua_edadv2").setValue(edad);
}

function FechaFlujo() {

var fecha = Xrm.Page.getAttribute("ua_fecha_nacimiento").getValue();

Xrm.Page.getAttribute("ua_fecha_de_nacimiento_flujo").setValue(fecha );

}

function calcularEdadOnload(context) {
    var hoy = new Date();
    if(Xrm.Page.getAttribute("ua_fecha_nacimiento").getValue() != null ){
       var fecha_nac = Xrm.Page.getAttribute("ua_fecha_nacimiento").getValue();
       var cumpleanos = new Date(fecha_nac);
       var edad = hoy.getFullYear() - cumpleanos.getFullYear();
       var m = hoy.getMonth() - cumpleanos.getMonth();

       if (m < 0 || (m === 0 && cumpleanos.getDay() < hoy.getDay())) {
           edad = edad-1;
       }
       Xrm.Page.getAttribute("ua_edadv2").setValue(edad);
    }
}
