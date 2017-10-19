function ua_ProgramaDesc() {
    try {


        var programaDesc = Xrm.Page.getAttribute("ua_programa_asesor").getValue();
        if (programaDesc != null) {
            //   var Programa = Xrm.Page.getAttribute("ua_programa").getValue();
            // if (Programa == null) {

            var req = new XMLHttpRequest();

            req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v8.2/ua_programav2s?$select=*&$filter=contains(ua_desc_programa,'" + programaDesc[0].name + "')", true);

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
                    else {
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
