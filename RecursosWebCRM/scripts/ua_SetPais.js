function us_setPais(){

    //var pais= Xrm.Page.getAttribute("ua_pais_asesor").getValue();
    var pais=Xrm.Page.getAttribute("ua_pais_asesor").getValue();
    var id = "8D21798D-583C-E711-8111-E0071B6700E1";
    if(pais == null)
   {
    alert("entro pais null");
    var lookupItem= new Object();
    var value = new Array();
   
    lookupItem.id = id;
    lookupItem.name = "99 - México";
    lookupItem.typename = "ua_pais_asesor";
    value[0] = lookupItem;
    alert("valores en variables " +  id  + " " + value[0].name + " " +  value[0].typename);
    Xrm.Page.getAttribute(ua_pais_asesor).setValue(value);
    alert("asignacion de valor al control");
   }
else
   {
    alert(pais);   
    alert(pais[0].id);
    alert(pais[0].name);
    alert(pais[0].typename);
   }
}

function ua_Pais() {
    try {
        if(Xrm.Page.getAttribute("ua_pais_asesor").getValue() != null){
          if(Xrm.Page.getAttribute("ua_codigo_pais").getValue() == null){
          var Pais= Xrm.Page.getAttribute("ua_codigo_pais").getValue();
          var PaisAsesor = Xrm.Page.getAttribute("ua_pais_asesor").getValue();
          var paisDesc =  PaisAsesor[0].name.split("-")[1].trim();
       
          if(paisDesc != null){

           //if (Programa == null) {

               var req = new XMLHttpRequest();

               req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v8.2/ua_paises?$select=*&$filter=contains(ua_desc_pais,'"+paisDesc +"')", true); 
              
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

                          var _ua_programaV2Id_value = result.value[0].ua_paisid;
                        
                          var _ua_programaV2Id_value_formatted = result.value[0].ua_desc_pais; 
                          var lookupcluster = new Array();
                          lookupcluster[0] = new Object();
                          lookupcluster[0].id = _ua_programaV2Id_value;
                          lookupcluster[0].name = _ua_programaV2Id_value_formatted.trim();
                          lookupcluster[0].entityType = "ua_pais";
                       
                          Xrm.Page.getAttribute("ua_codigo_pais").setValue(lookupcluster);
                          ua_Estado();
                       }
                      else{
                             alert(this.statusText);
                           }
                  }
              };
             req.send();
          }
       }
     }
    }
    catch (e) {
        //alert("ua_VPDSET: " + e.message);
        Xrm.Utility.alertDialog("ua_Pais: " + e.message);
    }
} 

function ua_Estado(){
    try {
       
       // var estado = Xrm.Page.getAttribute("ua_codigo_estado ").getValue();
       
        if(Xrm.Page.getAttribute("ua_estado_asesor").getValue() != null){
          if(Xrm.Page.getAttribute("ua_codigo_estado ").getValue() == null){
          var estadoAsesor = Xrm.Page.getAttribute("ua_estado_asesor").getValue();
          var estadoDesc =  estadoAsesor[0].name.split("-")[1].trim();
         
    
         if(estadoDesc != null){

           //if (Programa == null) {

               var req = new XMLHttpRequest();

               req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v8.2/ua_estadoses?$select=*&$filter=contains(ua_desc_estado,'"+estadoDesc+"')", true); 

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

                          var _ua_programaV2Id_value = result.value[0].ua_estadosid.toUpperCase();
                        
                          var _ua_programaV2Id_value_formatted = result.value[0].ua_desc_estado; 
                         
                          var lookupcluster = new Array();
                          lookupcluster[0] = new Object();
                          lookupcluster[0].id = _ua_programaV2Id_value;
                          lookupcluster[0].name = _ua_programaV2Id_value_formatted.trim();
                          lookupcluster[0].entityType = "ua_estados";
                         
                         Xrm.Page.getAttribute("ua_codigo_estado").setValue(lookupcluster);
                         ua_DelgMun();
                       }
                      else{
                             alert(this.statusText);
                           }
                  }
              };
             req.send();
          }
       }
     }
    }
    catch (e) {
        //alert("ua_VPDSET: " + e.message);
        Xrm.Utility.alertDialog("ua_Estado: " + e.message);
    }
} 



function ua_DelgMun(){
    try {
        
        if (Xrm.Page.getAttribute("ua_delegacion_municipio_asesor").getValue() != null) {
            if(Xrm.Page.getAttribute("ua_codigo_delegacion").getValue() == null) {
            var estado = Xrm.Page.getAttribute("ua_codigo_estado").getValue();
            var estadoId = estado[0].id.replace("{", "");
            estadoId = estadoId.replace("}", "");
            var munAsesor = Xrm.Page.getAttribute("ua_delegacion_municipio_asesor").getValue();
            var munDesc = munAsesor[0].name.split("-")[1].trim();
            if (munDesc != null) {
                var req = new XMLHttpRequest();
                var url = Xrm.Page.context.getClientUrl() + "/api/data/v8.2/ua_delegacion_municipios?$select=*&$filter=contains(ua_desc_municipio,'" + munDesc + "') and _ua_desc_estado_value eq " + estadoId;

                req.open("GET", url);
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
                            var _ua_programaV2Id_value = result.value[0].ua_delegacion_municipioid.toUpperCase();
                            var _ua_programaV2Id_value_formatted = result.value[0].ua_desc_municipio;
                            var lookupcluster = new Array();
                            lookupcluster[0] = new Object();
                            lookupcluster[0].id = _ua_programaV2Id_value;
                            lookupcluster[0].name = _ua_programaV2Id_value_formatted.trim();
                            lookupcluster[0].entityType = "ua_delegacion_municipio";
                            Xrm.Page.getAttribute("ua_codigo_delegacion").setValue(lookupcluster);
                        }
                        else {
                            alert(this.statusText);
                        }
                    }
                };
                req.send();
              }
            }
        }
    }
    catch (e) {
        Xrm.Utility.alertDialog("ua_DelgMun: " + e.message);
    }
}


function ua_Colegios(){
    try {
          alert("entro colegios")
        //if(Xrm.Page.getAttribute("ua_colegio_asesor").getValue() != null){
          if(Xrm.Page.getAttribute("ua_colegioguidstr").getValue() != null){
             var colegioAsesor = Xrm.Page.getAttribute("ua_colegioguidstr").getValue();
          //if(Xrm.Page.getAttribute("ua_colegio_procedencia").getValue() == null){
         // var colegioAsesor = Xrm.Page.getAttribute("ua_colegio_asesor").getValue();
         // var colegioDesc =  colegioAsesor[0].name.split("-")[1].trim();

          
         ;
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
       //   }
       }
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
          if(Xrm.Page.getAttribute("ua_colegioguidstr").getValue() != null){
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
                         ua_Colegios2();
                           
                       }
                      else{
                             alert(this.statusText);
                           }
                  }
              };
             req.send();
          }
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






