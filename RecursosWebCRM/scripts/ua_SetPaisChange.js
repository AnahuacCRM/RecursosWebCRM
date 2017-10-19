var idPaisAsesor;
function ua_PaisAsesor() {
    try {
       // alert("Entro pais asesor Change");
        if(Xrm.Page.getAttribute("ua_pais_asesor").getValue() != null){
       // var Pais= Xrm.Page.getAttribute("ua_codigo_pais").getValue();
        var PaisAsesor = Xrm.Page.getAttribute("ua_pais_asesor").getValue();
       // var paisDesc =  PaisAsesor[0].name.split("-")[1].trim();
          var paisDesc =  PaisAsesor [0].id.replace("{", "");
          paisDesc = paisDesc .replace("}", ""); 
        
          if(paisDesc != null){

           //if (Programa == null) {

               var req = new XMLHttpRequest();
               req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v8.2/ua_pais_asesors?$select=*&$filter= ua_pais_asesorid eq "+paisDesc , true); 
              
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
                          idPaisAsesor = result.value[0]._ua_pais_value;
                          
                           ua_Pais();
                          /*var _ua_programaV2Id_value = result.value[0].ua_paisid;
                        
                          var _ua_programaV2Id_value_formatted = result.value[0].ua_desc_pais; 
                          var lookupcluster = new Array();
                          lookupcluster[0] = new Object();
                          lookupcluster[0].id = _ua_programaV2Id_value;
                          lookupcluster[0].name = _ua_programaV2Id_value_formatted.trim();
                          lookupcluster[0].entityType = "ua_pais";
                       
                          Xrm.Page.getAttribute("ua_codigo_pais").setValue(lookupcluster);*/
                          
                       }
                      else{
                             alert(this.statusText);
                           }
                  }
              };
             req.send();
         // }
       }
     }
    }
    catch (e) {
        //alert("ua_VPDSET: " + e.message);
        Xrm.Utility.alertDialog("ua_Pais Asesor: " + e.message);
    }
} 
function ua_Pais() {
    try {
       //alert("Entro pais  Change tst message"); 
       if(Xrm.Page.getAttribute("ua_pais_asesor").getValue() != null){
       /* var Pais= Xrm.Page.getAttribute("ua_codigo_pais").getValue();
        var PaisAsesor = Xrm.Page.getAttribute("ua_pais_asesor").getValue();
        var paisDesc =  PaisAsesor[0].name.split("-")[1].trim();*/
        var paisDesc = idPaisAsesor ;
       
        if(paisDesc != null){

           //if (Programa == null) {

               var req = new XMLHttpRequest();
              
               req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v8.2/ua_paises?$select=*&$filter= ua_paisid eq "+paisDesc , true); 
              
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
        Xrm.Utility.alertDialog("ua_Pais: " + e.message);
    }
} 

var idEstadosAsesor;
function ua_EstadoAsesor(){
    try {
       //alert("Entro estado asesor Change");
       // var estado = Xrm.Page.getAttribute("ua_estado_asesor").getValue();
       
        if(Xrm.Page.getAttribute("ua_estado_asesor").getValue() != null){
          //if(Xrm.Page.getAttribute("ua_codigo_estado ").getValue() == null){
          var estadoAsesor = Xrm.Page.getAttribute("ua_estado_asesor").getValue();
          var estadoDesc =  estadoAsesor[0].id.replace("{", "");
          estadoDesc = estadoDesc.replace("}", ""); 
         
         
         if(estadoDesc != null){

          

               var req = new XMLHttpRequest();
               req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v8.2/ua_estados_asesors?$select=*&$filter= ua_estados_asesorid eq "+estadoDesc, true); 

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

                          idEstadosAsesor= result.value[0]._ua_estados_value.toUpperCase();
                         ua_Estado();
                          /*var _ua_programaV2Id_value_formatted = result.value[0].ua_desc_estado; 
                         
                          var lookupcluster = new Array();
                          lookupcluster[0] = new Object();
                          lookupcluster[0].id = _ua_programaV2Id_value;
                          lookupcluster[0].name = _ua_programaV2Id_value_formatted.trim();
                          lookupcluster[0].entityType = "ua_estados";
                         
                         Xrm.Page.getAttribute("ua_codigo_estado").setValue(lookupcluster);*/
                         
                       }
                      else{
                             alert(this.statusText);
                           }
                  }
              };
             req.send();
         // }
       }
     }
    }
    catch (e) {
        //alert("ua_VPDSET: " + e.message);
        Xrm.Utility.alertDialog("ua_Estado Asesor: " + e.message);
    }
} 

function ua_Estado() {
    try {
       // alert("Entro EstadoChange");
        // var estado = Xrm.Page.getAttribute("ua_codigo_estado ").getValue();
       
        if(Xrm.Page.getAttribute("ua_estado_asesor").getValue() != null){
       // var estadoAsesor = Xrm.Page.getAttribute("ua_estado_asesor").getValue();
       // var estadoDesc =  estadoAsesor[0].name.split("-")[1].trim();
       
    
         if(idEstadosAsesor!= null){

           //if (Programa == null) {

               var req = new XMLHttpRequest();
               
               req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v8.2/ua_estadoses?$select=*&$filter= ua_estadosid eq "+idEstadosAsesor , true); 

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
                       
                       }
                      else{
                             alert("Estado:" + this.statusText);
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
        Xrm.Utility.alertDialog("ua_Estado: " + e.message);
    }
} 

function ua_DelgMun() {
    try {
          //alert("Entro Delegacion Change");
          if (Xrm.Page.getAttribute("ua_delegacion_municipio_asesor").getValue() != null ) {
          
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
    catch (e) {
        Xrm.Utility.alertDialog("ua_DelgMun: " + e.message);
    }
}


function ua_Colegios() {
    try {
       //alert("Entro Colegios Change");
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


function ua_ColegiosAsesor() {
    try {
      // alert("Entro Colegiosasesor Change");
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
                        ua_Colegios2();
                           
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
      // alert("Entro Colegios 2 Change");
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
