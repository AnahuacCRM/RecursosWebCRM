function SetProg(){

 var programa = Xrm.Page.getAttribute("ua_codigo_del_programa").getValue();
 var lookupcluster = new Array();
 lookupcluster[0] = new Object();
 lookupcluster[0].id = "";
 lookupcluster[0].name = programa;
 lookupcluster[0].entityType = "ua_programav2";
							
  if(programa != null)
   {
     alert(programa);
     Xrm.Page.getAttribute("ua_programa").SetValue("LC-COMU-16");
   }
}

function ua_ProgramaDesc() {
    try {
      
            // alert('entro metodo ocultar fases4');

           //Xrm.Page.getControl('processActionsContainer').setVisible(false);
    


        var programaDesc = Xrm.Page.getAttribute("ua_codigo_programa").getValue();
        if(programaDesc != null){
              var Programa = Xrm.Page.getAttribute("ua_programa").getValue();
           // if (Programa == null) {

               var req = new XMLHttpRequest();

               req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v8.2/ua_programav2s?$select=*&$filter=contains(ua_codigo_del_programa,'"+programaDesc +"')", true); 

              req.setRequestHeader("OData-MaxVersion", "4.0");
              req.setRequestHeader("OData-Version", "4.0");
              req.setRequestHeader("Accept", "application/json");
              req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
              req.setRequestHeader("Prefer", "odata.include-annotations=\"OData.Community.Display.V1.FormattedValue\"");
              req.onreadystatechange = function () {

                    if (this.readyState === 4) {
                       req.onreadystatechange = null;

                       if (this.status === 200) {

                          var result = JSON.parse(this.response);

                          var _ua_programaV2Id_value = result.value[0].ua_programav2id;
                        
                          var _ua_programaV2Id_value_formatted = result.value[0].ua_codigo_del_programa; 
                          var lookupcluster = new Array();
                          lookupcluster[0] = new Object();
                          lookupcluster[0].id = _ua_programaV2Id_value;
                          lookupcluster[0].name = _ua_programaV2Id_value_formatted.trim();
                          lookupcluster[0].entityType = "ua_programav2";
                       
                          Xrm.Page.getAttribute("ua_programa").setValue(lookupcluster);
                       }
                      else{
                             alert(this.statusText);
                           }
                  }
              };
             req.send();
        //  }
       }
    }
    catch (e) {
        //alert("ua_VPDSET: " + e.message);
        Xrm.Utility.alertDialog("ua_VPDSET: " + e.message);
    }
} 

function ua_ColegiosAsesor() {
    try {
       
       // Xrm.Page.getAttribute("ua_colegioguidstr").setValue(null);
        Xrm.Page.getAttribute("ua_colegio_procedencia").setValue(null);
      
        if(Xrm.Page.getAttribute("ua_colegio_asesor").getValue() != null){
        var colegioAsesor = Xrm.Page.getAttribute("ua_colegio_asesor").getValue();
        var colegioid =  colegioAsesor[0].id.replace("{", "");
        colegioid = colegioid.replace("}", ""); 
       
        if(colegioid != null){

           //if (Programa == null) {

               var req = new XMLHttpRequest();
       
               req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v8.2/ua_colegios_asesors?$select=*&$filter= ua_colegios_asesorid eq%20" + colegioid , true); 

              req.setRequestHeader("OData-MaxVersion", "4.0");
              req.setRequestHeader("OData-Version", "4.0");
              req.setRequestHeader("Accept", "application/json");
              req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
              req.setRequestHeader("Prefer", "odata.include-annotations=\"OData.Community.Display.V1.FormattedValue\"");
              req.onreadystatechange = function () {

                    if (this.readyState === 4) {
                       req.onreadystatechange = null;

                       if (this.status === 200) {
                          var result = JSON.parse(this.response);

                          var _ua_programaV2Id_value = result.value[0]._ua_colegio_procedencia_value.toUpperCase();
                        
                          //var _ua_programaV2Id_value_formatted = result.value[0].ua_desc_colegios; 
                         Xrm.Page.getAttribute("ua_colegioguidstr").setValue(_ua_programaV2Id_value);
                        ua_Colegios2() ;
                           
                       }
                      else{
                             alert(this.statusText);
                           }
                  }
              };
             req.send();
        //  }
       }
     }
    }
    catch (e) {
        //alert("ua_VPDSET: " + e.message);
        Xrm.Utility.alertDialog("ua_VPDSET: " + e.message);
    }
} 
function ua_Colegios() {
    try {
       
        if(Xrm.Page.getAttribute("ua_colegio_asesor").getValue() != null){
        var colegioAsesor = Xrm.Page.getAttribute("ua_colegio_asesor").getValue();
        var colegioDesc =  colegioAsesor[0].name.split("-")[1].trim();


         if(colegioDesc != null){

           //if (Programa == null) {

               var req = new XMLHttpRequest();

               req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v8.2/ua_colegioses?$select=*&$filter=contains(ua_desc_colegios,'"+colegioDesc +"')", true); 

              req.setRequestHeader("OData-MaxVersion", "4.0");
              req.setRequestHeader("OData-Version", "4.0");
              req.setRequestHeader("Accept", "application/json");
              req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
              req.setRequestHeader("Prefer", "odata.include-annotations=\"OData.Community.Display.V1.FormattedValue\"");
              req.onreadystatechange = function () {

                    if (this.readyState === 4) {
                       req.onreadystatechange = null;

                       if (this.status === 200) {
                          var result = JSON.parse(this.response);

                          var _ua_programaV2Id_value = result.value[0].ua_colegiosid.toUpperCase();
                        
                          var _ua_programaV2Id_value_formatted = result.value[0].ua_desc_colegios; 
                         
                          var lookupcluster = new Array();
                          lookupcluster[0] = new Object();
                          lookupcluster[0].id = _ua_programaV2Id_value;
                          lookupcluster[0].name = _ua_programaV2Id_value_formatted.trim();
                          lookupcluster[0].entityType = "ua_colegios";
                         
                         Xrm.Page.getAttribute("ua_colegio_procedencia").setValue(lookupcluster);
                         
                       }
                      else{
                             alert(this.statusText);
                           }
                  }
              };
             req.send();
        //  }
       }
     }
    }
    catch (e) {
        //alert("ua_VPDSET: " + e.message);
        Xrm.Utility.alertDialog("ua_VPDSET: " + e.message);
    }
} 

function ua_Colegios2() {
    try {
       
       if(Xrm.Page.getAttribute("ua_colegioguidstr").getValue() != null){
        var colegioAsesor = Xrm.Page.getAttribute("ua_colegioguidstr").getValue();
       // var colegioDesc =  colegioAsesor[0].name.split("-")[1].trim();
        

         if(colegioAsesor != null){

           //if (Programa == null) {

               var req = new XMLHttpRequest();
             
               req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v8.2/ua_colegioses?$select=*&$filter= ua_colegiosid eq%20"+colegioAsesor , true); 

              req.setRequestHeader("OData-MaxVersion", "4.0");
              req.setRequestHeader("OData-Version", "4.0");
              req.setRequestHeader("Accept", "application/json");
              req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
              req.setRequestHeader("Prefer", "odata.include-annotations=\"OData.Community.Display.V1.FormattedValue\"");
              req.onreadystatechange = function () {

                    if (this.readyState === 4) {
                       req.onreadystatechange = null;

                       if (this.status === 200) {
                          var result = JSON.parse(this.response);

                          var _ua_programaV2Id_value = result.value[0].ua_colegiosid.toUpperCase();
                        
                          var _ua_programaV2Id_value_formatted = result.value[0].ua_desc_colegios; 
                         
                          var lookupcluster = new Array();
                          lookupcluster[0] = new Object();
                          lookupcluster[0].id = _ua_programaV2Id_value;
                          lookupcluster[0].name = _ua_programaV2Id_value_formatted.trim();
                          lookupcluster[0].entityType = "ua_colegios";
                         
                         Xrm.Page.getAttribute("ua_colegio_procedencia").setValue(lookupcluster);
                         
                       }
                      else{
                             alert(this.statusText);
                           }
                  }
              };
             req.send();
        //  }
       }
     }
    }
    catch (e) {
        //alert("ua_VPDSET: " + e.message);
        Xrm.Utility.alertDialog("ua_VPDSET: " + e.message);
    }
} 
