function FilterProgList() {
       Xrm.Page.getControl("ua_programa_asesor").addPreSearch(Filter);
}
 
function Filter() {
  var _viewId = Xrm.Page.getControl("ua_programa_asesor").getDefaultView();
  var _entityName = 'ua_programas_por_campus_asesor';
  var _viewDisplayName = 'Programas por campus Asesor';

  var Campus= Xrm.Page.getAttribute("ua_codigo_campus").getValue();
  var VPD= Xrm.Page.getAttribute("ua_codigo_vpd").getValue().trim();

   if(Campus != null)
  {
    var fetchXML = "<fetch version='1.0' output-format='xml-platform' mapping='logical' distinct='false'>" +
  "<entity name='ua_programas_por_campus_asesor'>" +
    "<attribute name='createdon' />" + 
    "<attribute name='ua_codigo_vpd' />" +
    "<attribute name='ua_usuario_propietario' />" +
    "<attribute name='ua_programaporcampusasesorid' />" +
    "<attribute name='ua_programas_por_campus' />" +
    "<attribute name='ua_programas_por_campus_asesorid' />" +
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

var layoutXML = "<grid name='resultset' object='1' jump='ua_programa_asesor' select='1' icon='1' preview='1'>" +
"<row name='result' id='ua_programas_por_campus_asesorid'>" +
//"<cell name='pv2.ua_desc_programa' width='150' />" +
"<cell name='ua_programaporcampusasesorid' width='150' />" +
"<cell name='ua_programas_por_campus' width='150' />" +
//"<cell name='ppc.ua_ppc_programa' width='150' />" +
//"<cell name='cw.ua_codigo_carrera_web' width='150' />"+
"<cell name='ua_codigo_vpd' width='150' />"+
//"<cell name='ua_usuario_propietario' width='150' />"+
"<cell name='createdon' width='150' />"+
"</row>" +
"</grid>";

    Xrm.Page.getControl("ua_programa_asesor").addCustomView(_viewId, _entityName, _viewDisplayName, fetchXML, layoutXML, true);

         
       }
       else
       {
          var plist_filter = "<filter type='or'><condition attribute='ua_codigo_vpdname' operator='like' value='%" + VPD.trim() +"%' />" +
          //"<condition attribute='ua_codigo_vpdname' operator='like' value='%" +VPD.trim()+"%' />" + 
          "</filter>";
      
          Xrm.Page.getControl("ua_programa_asesor").addCustomFilter(plist_filter);
       }
}
