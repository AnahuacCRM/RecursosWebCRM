function FilterPartyList() {
       Xrm.Page.getControl("ua_programas_por_campus_asesor").addPreSearch(Filter);
}
 
function Filter() {
  var _viewId = Xrm.Page.getControl("ua_programas_por_campus_asesor").getDefaultView();
  var _entityName = 'ua_programas_por_campus_asesor';
  var _viewDisplayName = 'Programas por campus Asesor';

  var Campus= Xrm.Page.getAttribute("ua_codigo_campus").getValue();
  var VPD= Xrm.Page.getAttribute("ua_codigo_vpd").getValue().trim();

   if(Campus != null)
  {
    var fetchXML = "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>" +
  "<entity name='ua_programas_por_campus_asesor'>" +
    "<attribute name='ua_programaporcampusasesorid' />" +
    "<attribute name='ua_programas_por_campus_asesorid' />" +
    "<attribute name='ua_codigo_vpd' />" +
    "<attribute name='ua_usuario_propietario' />" +
    "<attribute name='ua_programas_por_campus' />" +
    "<attribute name='createdon' />" + 
    "<order attribute='ua_codigo_vpd' descending='false' />" +
    "<filter type='and'>" +
      "<condition attribute='statecode' operator='eq' value='0' />" +
      "<condition attribute='ua_codigo_vpdname' operator='like' value='%"+VPD+"%' />" +
    "</filter>" +
    "<link-entity name='ua_programav2' from='ua_programav2id' to='ua_programaporcampusasesorid' visible='false' link-type='outer' alias='pv2'>" +
      "<attribute name='ua_desc_programa' />" +
    "</link-entity>" +
    "<link-entity name='ua_carreras_web' from='ua_carreras_webid' to='ua_carrera_web' visible='false' link-type='outer' alias='cw'>" +
      "<attribute name='ua_codigo_carrera_web' />" +
    "</link-entity>" +
    "<link-entity name='ua_ppc_programav2' from='ua_ppc_programav2id' to='ua_programas_por_campus' alias='ppc'>" +
      "<attribute name='ua_ppc_programa' />" +
      "<filter type='and'>" +
        "<condition attribute='ua_ppc_programa' operator='like' value='%"+ Campus[0].name.trim() +"%' />" +
      "</filter>" +
    "</link-entity>" +
  "</entity>" +
"</fetch>";

var layoutXML = "<grid name='resultset' object='1' jump='ua_programas_por_campus_asesor' select='1' icon='1' preview='1'>" +
"<row name='result' id='ua_programas_por_campus_asesorid'>" +
"<cell name='ua_programaporcampusasesorid' width='150' />" +
"<cell name='ua_codigo_vpd' width='150' />"+
"<cell name='ua_programas_por_campus' width='150' />" +
//"<cell name='pv2.ua_desc_programa' width='150' />" +
//"<cell name='ppc.ua_ppc_programa' width='150' />" +
//"<cell name='cw.ua_codigo_carrera_web' width='150' />"+
//"<cell name='ua_usuario_propietario' width='150' />"+
"<cell name='createdon' width='150' />"+
"</row>" +
"</grid>";

    Xrm.Page.getControl("ua_programas_por_campus_asesor").addCustomView(_viewId, _entityName, _viewDisplayName, fetchXML, layoutXML, true);

         
       }
       else
       {
          var plist_filter = "<filter type='and'><condition attribute='ua_codigo_vpdname' operator='like' value='%" + VPD +"%' />" +
          //"<condition attribute='ua_codigo_vpdname' operator='like' value='%" +VPD.trim()+"%' />" + 
          "</filter>";
      
          Xrm.Page.getControl("ua_programas_por_campus_asesor").addCustomFilter(plist_filter);
       }
}

function FilterEstadoList() {
       Xrm.Page.getControl("ua_estado_asesor").addPreSearch(FilterEstado);
}
 
function FilterEstado() {
  if( Xrm.Page.getAttribute("ua_pais_asesor").getValue() != null){
  var _viewId = Xrm.Page.getControl("ua_estado_asesor").getDefaultView();
  var _entityName = 'ua_estados_asesor';
  var _viewDisplayName = 'Estados Asesor';
 
  var Pais= Xrm.Page.getAttribute("ua_pais_asesor").getValue();
  var VPD= Xrm.Page.getAttribute("ua_codigo_vpd").getValue().trim();
  Pais = Pais [0].name.split("-")[1].trim();

  if(Pais!= null)
  {
    var fetchXML = "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>"+
    "<entity name='ua_estados_asesor'>"+
    "<attribute name='ua_estados_asesor' />"+
    "<attribute name='ua_estados' />"+
    "<attribute name='ua_codigo_vpd' />"+
    "<attribute name='ua_codigo_pais' />"+
    "<attribute name='ua_estados_asesorid' />"+
    "<order attribute='ua_estados_asesor' descending='false' />"+
    "<filter type='and'>"+
      "<condition attribute='statecode' operator='eq' value='0' />"+
      "<condition attribute='ua_codigo_vpdname' operator='like' value='%"+VPD+"%' />"+
    "</filter>"+
    "<link-entity name='ua_estados' from='ua_estadosid' to='ua_estados' alias='al'>"+
      "<filter type='and'>"+
        "<condition attribute='ua_codigo_paisname' operator='like' value='%"+Pais+"%' />"+
      "</filter>"+
    "</link-entity>"+
    "</entity>"+
    "</fetch>";

var layoutXML = "<grid name='resultset' object='1' jump='ua_estados_asesor' select='1' icon='1' preview='1'>" +
"<row name='result' id='ua_estados_asesorid'>" +
"<cell name='ua_estados_asesor' width='150' />" +
"<cell name='ua_estados' width='150' />" +
"<cell name='ua_codigo_vpd' width='150' />"+
"<cell name='ua_codigo_pais' width='150' />"+
"</row>" +
"</grid>";

    Xrm.Page.getControl("ua_estado_asesor").addCustomView(_viewId, _entityName, _viewDisplayName, fetchXML, layoutXML, true);
      
       }
       else
       {

          var plist_filter = "<filter type='and'><condition attribute='ua_codigo_vpdname' operator='like' value='%" + VPD +"%' />" +
          //"<condition attribute='ua_codigo_vpdname' operator='like' value='%" +VPD.trim()+"%' />" + 
          "</filter>";
      
          Xrm.Page.getControl("ua_estado_asesor").addCustomFilter(plist_filter);
       }
  }
}

function FilterDelegList() {
       Xrm.Page.getControl("ua_delegacion_municipio_asesor").addPreSearch(FilterDelegacion);
}
 
function FilterDelegacion() {

  if(Xrm.Page.getAttribute("ua_pais_asesor").getValue() != null &&  Xrm.Page.getAttribute("ua_estado_asesor").getValue() != null){
  var Pais = Xrm.Page.getAttribute("ua_pais_asesor").getValue();
  var Estado = Xrm.Page.getAttribute("ua_estado_asesor").getValue();
  var VPD = Xrm.Page.getAttribute("ua_codigo_vpd").getValue();
  Estado = Estado[0].name.split("-")[1].trim();
  Pais = Pais [0].name.split("-")[1].trim();

  var _viewId = Xrm.Page.getControl("ua_delegacion_municipio_asesor").getDefaultView();
  var _entityName = 'ua_delegacion_municipio_asesor';
  var _viewDisplayName = 'Delegaciones'

  var fetchXML ="<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='true'>" +
"<entity name='ua_delegacion_municipio_asesor'>"+
"<attribute name='ua_delegacion_municipio_asesor' />"+
"<attribute name='createdon' />"+
"<attribute name='ua_delegacion_municipio' />"+
"<attribute name='ua_codigo_vpd' />"+
"<attribute name='ua_usuario_propietario' />"+
"<attribute name='ua_delegacion_municipio_asesorid' />"+
"<attribute name='ua_delegacion_municipio_asesor' />"+
"<order attribute='ua_delegacion_municipio_asesor' descending='false' />" +
"<filter type='and'>" +
"<condition attribute='statecode' operator='eq' value='0' />" +
"<condition attribute='ua_codigo_vpdname' operator='like' value='%"+VPD.trim() +"%' />" +
"</filter>" + 
"<link-entity name='ua_delegacion_municipio' from='ua_delegacion_municipioid' to='ua_delegacion_municipio' alias='ah'> " +
"<filter type='and'>"+
"<condition attribute='ua_desc_estadoname' operator='like' value='%"+Estado+"%' />" +
"<condition attribute='ua_desc_paisname' operator='like' value='%"+Pais+"%' />" +
"</filter>"+
"</link-entity>"+
"</entity>" +
"</fetch>";

  var layoutXML = "<grid name='resultset' object='1' jump='ua_delegacion_municipio_asesor' select='1' icon='1' preview='1'>" +
"<row name='result' id='ua_delegacion_municipio_asesorid'>" +
"<cell name='ua_delegacion_municipio_asesor' width='150' />" +
//"<cell name='createdon' width='150' />" +
"<cell name='ua_delegacion_municipio' width='150' />" +
"<cell name='ua_codigo_vpd' width='150' />"+
"<cell name='ua_usuario_propietario' width='150' />" +
//"<cell name='ua_delegacion_municipio_asesorid' width='150' />" +
//"<cell name='ua_delegacion_municipio_asesor' width='150' />" +
"</row>" +
"</grid>";

//in this call, true sets the custom view to the default view.
Xrm.Page.getControl("ua_delegacion_municipio_asesor").addCustomView(_viewId, _entityName, _viewDisplayName, fetchXML, layoutXML, true);
}
}



function FilterPartyMovilList() {
       Xrm.Page.getControl("ua_programas_por_campus_asesor").addPreSearch(FilterMovil);
}
 
function FilterMovil() {
  
  if(Xrm.Page.getAttribute("ua_codigo_campus").getValue() != null){
  var Campus= Xrm.Page.getAttribute("ua_codigo_campus").getValue();
  var VPD= Xrm.Page.getAttribute("ua_codigo_vpd").getValue().trim();

  

        var plist_filter = "<filter type='and'><condition attribute='ua_codigo_vpdname' operator='like' value='%" + VPD + "%' />" +
       "<condition attribute='ua_programa_campus_asesor_desc' operator='like' value='%" + Campus[0].name+ "%' />"+
       "</filter>";
      // alert(plist_filter);
       Xrm.Page.getControl("ua_programas_por_campus_asesor").addCustomFilter(plist_filter);
   
   }      
      
}


function FilterUNlList() {
       Xrm.Page.getControl("ua_codigo_campus").addPreSearch(FilterUN);
}
 
function FilterUN() {
  
        var plist_filter = "<filter type='and'><condition attribute='name' operator='not-like' value='%anahua%' />" +
       "<condition attribute='name' operator='not-like' value='%Méx%' />"+
       "</filter>";
      // alert(plist_filter);
       Xrm.Page.getControl("ua_codigo_campus").addCustomFilter(plist_filter);
}


