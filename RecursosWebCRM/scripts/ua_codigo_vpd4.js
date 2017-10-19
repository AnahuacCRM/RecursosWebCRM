		}
     }	
} catch (e) {
        alert("ua_codigo_VPD: " + e.message);
    }
}

function ua_VPD() {
    try {
		var codigo = Xrm.Page.getAttribute("ua_codigo_vpd").getValue();
		if(codigo == null){
		var ua_vpd = Xrm.Page.getAttribute("ua_vpd").getValue();
		if (ua_vpd != null && ua_vpd.length > 0) {
			var ua_vpd = ua_vpd[0].id; 
			var rs_vpdiname = ua_vpd[0].name; 
			var req = new XMLHttpRequest();
			req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v8.0/businessunits("+ua_vpd.slice(1, -1) +")?$select=ua_codigo_campus", true);
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
						var ua_codigo_campus = result["ua_codigo_campus"];
						Xrm.Page.getAttribute("ua_codigo_vpd").setValue(ua_codigo_campus);			
						}
						else {
							alert(this.statusText);
							}
							}
							};
							req.send();
							}
		}

} catch (e) {
        alert("ua_VPD: " + e.message);
    }
}