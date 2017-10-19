function CurrentStage() {
 

  var isCrmForMobile = (Xrm.Page.context.client.getClient() != "Mobile")
  //alert(isCrmForMobile);
  if (isCrmForMobile)
  {
      var activeStage = Xrm.Page.data.process.getActiveStage();
      if(activeStage.getName() == "Preoportunidad")
       {
     
        return true;
      
       }
      else
      {
         return false;
      }
  }
  else
 {
        //alert("entro movil current stage");
         return false;
      
 }

  
}

function refreshRibbonOnChange()
{
    var isCrmForMobile = (Xrm.Page.context.client.getClient() != "Mobile")
 //alert(isCrmForMobile);
  if (isCrmForMobile)
  {
    //alert("entro refresh ribbon");
    Xrm.Page.ui.refreshRibbon();
  }
}

function CoincidenciasBandera(){
 
 var isCrmForMobile = (Xrm.Page.context.client.getClient() != "Mobile")
  if (isCrmForMobile)
  {
     Xrm.Page.getAttribute("ua_valida_coincidencias").setValue(1);
//  Xrm.Page.getAttribute("ua_habilitarcalificar").setvalue(1);
     Xrm.Page.ui.refreshRibbon();
  }
  

}


function HabilitarCalificar(){

   var isCrmForMobile = (Xrm.Page.context.client.getClient() != "Mobile")
  //alert(isCrmForMobile);
  if (isCrmForMobile)
  {
   if(Xrm.Page.getAttribute("ua_valida_coincidencias").getValue() == 1)
      {
         return true;
      }
     else
     {
        return false;
     }
  }
  else
  {
     // alert("entro movil habilitar calificar");
      return false;
    
  }
}


var CalificarBand;
function CalificarBandera(){
 var men= 'Estamos procesando la calificación … por favor espere a que la fase de prospecto sea activada (no se vea con candado),  IMPORTANTE : Si oprime aceptar para calificar nuevamente o refresca la página F5 el sistema generara un nuevo id banner para el prospecto y el registro quedará duplicado o con errores';

 alert(men);
 //var isCrmForMobile = (Xrm.Page.context.client.getClient() != "Mobile")
 // if (isCrmForMobile)
 // {
 //    Xrm.Page.getAttribute("ua_clickcaliicar").setValue(1);
 // CalificarBand = 1;
 // alert(CalificarBand);
 //  Xrm.Page.getAttribute("ua_habilitarcalificar").setvalue(1);
 //    Xrm.Page.ui.refreshRibbon();
 // }
  

}


function HabilitarCalificar2(){
   //alert("entro Habilitar calificar");
   var isCrmForMobile = (Xrm.Page.context.client.getClient() != "Mobile")
  //alert(isCrmForMobile);
  if (isCrmForMobile)
  {
   if(Xrm.Page.getAttribute("ua_clickcaliicar").getValue() == 1)
      {
         return false;
      }
     else
     {
        return true;
     }
  }
  else
  {
     // alert("entro movil habilitar calificar");
      return false;
    
  }
}

function Form_onsave(executionObj)
{
    var shouldSave = true;

    if (shouldSave)
    {
        alert("Unable to save because of some reason or the other.");

        //executionObj.getEventArgs().preventDefault();
    }
}