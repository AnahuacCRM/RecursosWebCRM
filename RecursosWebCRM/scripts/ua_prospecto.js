function ua_codigoVPD() {
    try 
       {
        var  codigopro = Xrm.Page.getAttribute("ua_codigo_del_programa").getValue();
        if( codigopro == null)
          {	
	 	var programa1 = Xrm.Page.getAttribute("ua_programav2").getValue();
	 	if (programa1 != null && programa1.length > 0)
                  {
	 		var programa1id = programa1[0].id; 
	 		var programa1name = programa1[0].name; 
			var req = new XMLHttpRequest();
	 		req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v8.0/ua_programav2("+programa1id.slice(1, -1) +")? $select=ua_codigo_del_programa,ua_desc_programa", true);
 			req.setRequestHeader("OData-MaxVersion", "4.0");
 			req.setRequestHeader("OData-Version", "4.0");
 			req.setRequestHeader("Accept", "application/json");
 			req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
 			req.setRequestHeader("Prefer", "odata.include-annotations=\"OData.Community.Display.V1.FormattedValue\"");
 			req.onreadystatechange = function () 
                         {
				 if (this.readyState === 4) 
                                    {
					 req.onreadystatechange = null;
					 if (this.status === 200)
					    {
						var result = JSON.parse(this.response);
						var ua_codigoprograma = result["ua_codigo_del_programa"];
						var ua_name = result["ua_desc_programa"];
						Xrm.Page.getAttribute("ua_programav2").setValue(ua_codigoprograma);
						Xrm.Page.getAttribute("ua_programav2").setSubmitMode("always");
					   }
					else
					  {
						alert(this.statusText);
					  }
				   }
 			};
 			req.send();
 		}
      }	
} catch (e)
    {
        alert("ua_codigoVPDI: " + e.message);
    }
}


function ua_VPD()
{
	try
	{
		var codigo = Xrm.Page.getAttribute("ua_codigo_vpd").getValue();
		var ua_vpdi = Xrm.Page.getAttribute("ua_vpd").getValue();
		if (ua_vpdi != null && ua_vpdi.length > 0)
		{
			var ua_vpdiid = ua_vpdi[0].id;
			var ua_vpdiname = ua_vpdi[0].name;
			var req = new XMLHttpRequest();
			req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v8.0/businessunits(" + ua_vpdiid.slice(1, -1) + ")?$select=ua_codigo_campus", true);
			req.setRequestHeader("OData-MaxVersion", "4.0");
			req.setRequestHeader("OData-Version", "4.0");
			req.setRequestHeader("Accept", "application/json");
			req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
			req.setRequestHeader("Prefer", "odata.include-annotations=\"OData.Community.Display.V1.FormattedValue\"");
			req.onreadystatechange = function ()
			{
				if (this.readyState === 4)
				{
					req.onreadystatechange = null;
					if (this.status === 200)
					{
						var result = JSON.parse(this.response);
						var ua_codigocampus = result["ua_codigo_campus"];
						Xrm.Page.getAttribute("ua_codigo_vpd").setValue(rs_codigocampus);
						Xrm.Page.getAttribute("ua_codigo_vpd").setSubmitMode("always");
					}
					else
					{
						alert(this.statusText);
					}
				}
			};
			req.send();
		}
	}
	catch (e)
	{
		alert("ua_VPD: " + e.message);
	}
}



function ua_VPDSET()
{
	try
	{
		// get owner Id
                if(Xrm.Page.getAttribute("ownerid").getValue() != null)
                {
                   var owner= Xrm.Page.getAttribute("ownerid").getValue();
                   var ownername = owner[0].name;
                   var ownerId= owner[0].id;
                   var usuario = ownerId;
                

    
		if (usuario != null)
		{
			var ua_vpdi = Xrm.Page.getAttribute("ua_vpd").getValue();
                        var campus = Xrm.Page.getAttribute("ua_codigo_campus").getValue();

			if (ua_vpdi == null)
			{
				///////////////////////////////////////////////////////////////////////////////////
				var req = new XMLHttpRequest();
				req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v8.0/systemusers(" + usuario.slice(1, -1) + ")?$select=_businessunitid_value,domainname", true);
				req.setRequestHeader("OData-MaxVersion", "4.0");
				req.setRequestHeader("OData-Version", "4.0");
				req.setRequestHeader("Accept", "application/json");
				req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
				req.setRequestHeader("Prefer", "odata.include-annotations=\"OData.Community.Display.V1.FormattedValue\"");
				req.onreadystatechange = function ()
				{
					if (this.readyState === 4)
					{
						req.onreadystatechange = null;
						if (this.status === 200)
						{
							var result = JSON.parse(this.response);
							var _businessunitid_value = result["_businessunitid_value"];
							var _businessunitid_value_formatted = result["_businessunitid_value@OData.Community.Display.V1.FormattedValue"];
							var domainname = result["domainname"];
							var lookupcluster = new Array();
							lookupcluster[0] = new Object();
							lookupcluster[0].id = _businessunitid_value;
							lookupcluster[0].name = _businessunitid_value_formatted;
							lookupcluster[0].entityType = "businessunit";
							Xrm.Page.getAttribute("ua_codigo_vpd2").setValue(lookupcluster);
                                                        //Xrm.Page.getAttribute("ua_codigo_vpd").setValue("test2");
Xrm.Page.getAttribute("ua_codigo_vpd").setValue(_businessunitid_value_formatted);
//Xrm.Page.getAttribute("ua_codigo_campus").setValue(lookupcluster);
Xrm.Page.getAttribute("ua_vpd").setValue(lookupcluster);
                                                        
                                                       if(campus== null)
                                                       { 
                                                          Xrm.Page.getAttribute("ua_vpd").setValue(lookupcluster);
//Xrm.Page.getAttribute("ua_codigo_campus").setValue(lookupcluster);
Xrm.Page.getAttribute("ua_codigo_vpd").setValue(_businessunitid_value_formatted);
 //Xrm.Page.getAttribute("ua_codigo_vpd").setValue("test3");    
                                                       
                                                       }
                                                       
                                                        

						}
						else
						{
							alert(this.statusText);
						}
					}
				};
				req.send();
			  }
                        else
                         {
                            var req = new XMLHttpRequest();
				req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v8.0/systemusers(" + usuario.slice(1, -1) + ")?$select=_businessunitid_value,domainname", true);
				req.setRequestHeader("OData-MaxVersion", "4.0");
				req.setRequestHeader("OData-Version", "4.0");
				req.setRequestHeader("Accept", "application/json");
				req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
				req.setRequestHeader("Prefer", "odata.include-annotations=\"OData.Community.Display.V1.FormattedValue\"");
				req.onreadystatechange = function ()
				{
					if (this.readyState === 4)
					{
						req.onreadystatechange = null;
						if (this.status === 200)
						{
							var result = JSON.parse(this.response);
							var _businessunitid_value = result["_businessunitid_value"];
							var _businessunitid_value_formatted = result["_businessunitid_value@OData.Community.Display.V1.FormattedValue"];
							var domainname = result["domainname"];
							var lookupcluster = new Array();
							lookupcluster[0] = new Object();
							lookupcluster[0].id = _businessunitid_value;
							lookupcluster[0].name = _businessunitid_value_formatted;
							lookupcluster[0].entityType = "businessunit";
							Xrm.Page.getAttribute("ua_codigo_vpd2").setValue(lookupcluster);
                                                        Xrm.Page.getAttribute("ua_vpd").setValue(lookupcluster);
//Xrm.Page.getAttribute("ua_codigo_campus").setValue(lookupcluster);
                                                        //Xrm.Page.getAttribute("ua_codigo_vpd").setValue("test");
//Xrm.Page.getAttribute("ua_codigo_campus").setValue(lookupcluster);                                                  


						}
						else
						{
							alert(this.statusText);
						}
					}
				};
				req.send();

                         }
		}
            }
	}
	catch (e)
	{
		//alert("ua_VPDSET: " + e.message);
               Xrm.Utility.alertDialog("ua_VPDSET: " + e.message);

	}
}

function refresh(){

   Xrm.Page.data.refresh();
}
/////////////////////////////////////////////////////////////////////////////////////////////////////////



function ua_VPDSETOportunidad()
{
	try
	{
		// get owner Id
                var owner= Xrm.Page.getAttribute("ownerid").getValue();
                var ownername = owner[0].name;
                var ownerId= owner[0].id;
                var usuario = ownerId;
//Xrm.Page.context.getUserId();
 //Xrm.Page.context.getOwnerId();
//Xrm.Page.getAttribute("ownerid").getValue();
///////Xrm.Page.context.getUserId();
    
		if (usuario != null)
		{
			var ua_vpdi = Xrm.Page.getAttribute("ua_codigo_vpd").getValue();
                      
			if (ua_vpdi == null)
			{
				///////////////////////////////////////////////////////////////////////////////////
				var req = new XMLHttpRequest();
				req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v8.0/systemusers(" + usuario.slice(1, -1) + ")?$select=_businessunitid_value,domainname", true);
				req.setRequestHeader("OData-MaxVersion", "4.0");
				req.setRequestHeader("OData-Version", "4.0");
				req.setRequestHeader("Accept", "application/json");
				req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
				req.setRequestHeader("Prefer", "odata.include-annotations=\"OData.Community.Display.V1.FormattedValue\"");
				req.onreadystatechange = function ()
				{
					if (this.readyState === 4)
					{
						req.onreadystatechange = null;
						if (this.status === 200)
						{
							var result = JSON.parse(this.response);
							var _businessunitid_value = result["_businessunitid_value"];
							var _businessunitid_value_formatted = result["_businessunitid_value@OData.Community.Display.V1.FormattedValue"];
							var domainname = result["domainname"];
							var lookupcluster = new Array();
							lookupcluster[0] = new Object();
							lookupcluster[0].id = _businessunitid_value;
							lookupcluster[0].name = _businessunitid_value_formatted;
							lookupcluster[0].entityType = "businessunit";
							//Xrm.Page.getAttribute("ua_codigo_vpd2").setValue(lookupcluster);
                                                        //Xrm.Page.getAttribute("ua_codigo_vpd").setValue("test2");
Xrm.Page.getAttribute("ua_codigo_vpd").setValue(_businessunitid_value_formatted);
//Xrm.Page.getAttribute("ua_codigo_campus").setValue(lookupcluster);
//Xrm.Page.getAttribute("ua_vpd").setValue(lookupcluster);
                                                        
                                                      
                                                        //  Xrm.Page.getAttribute("ua_codigo_vpd").setValue(lookupcluster);
//Xrm.Page.getAttribute("ua_codigo_campus").setValue(lookupcluster);
Xrm.Page.getAttribute("ua_codigo_vpd").setValue(_businessunitid_value_formatted);
 //Xrm.Page.getAttribute("ua_codigo_vpd").setValue("test3");    
                                                       
                                                       
                                                       
                                                        

						}
						else
						{
							alert(this.statusText);
						}
					}
				};
				req.send();
			  }
                        else
                         {
                            var req = new XMLHttpRequest();
				req.open("GET", Xrm.Page.context.getClientUrl() + "/api/data/v8.0/systemusers(" + usuario.slice(1, -1) + ")?$select=_businessunitid_value,domainname", true);
				req.setRequestHeader("OData-MaxVersion", "4.0");
				req.setRequestHeader("OData-Version", "4.0");
				req.setRequestHeader("Accept", "application/json");
				req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
				req.setRequestHeader("Prefer", "odata.include-annotations=\"OData.Community.Display.V1.FormattedValue\"");
				req.onreadystatechange = function ()
				{
					if (this.readyState === 4)
					{
						req.onreadystatechange = null;
						if (this.status === 200)
						{
							var result = JSON.parse(this.response);
							var _businessunitid_value = result["_businessunitid_value"];
							var _businessunitid_value_formatted = result["_businessunitid_value@OData.Community.Display.V1.FormattedValue"];
							var domainname = result["domainname"];
							var lookupcluster = new Array();
							lookupcluster[0] = new Object();
							lookupcluster[0].id = _businessunitid_value;
							lookupcluster[0].name = _businessunitid_value_formatted;
							lookupcluster[0].entityType = "businessunit";
							Xrm.Page.getAttribute("ua_codigo_vpd").setValue(businessunitid_value_formatted);
                                                       // Xrm.Page.getAttribute("ua_vpd").setValue(lookupcluster);
//Xrm.Page.getAttribute("ua_codigo_campus").setValue(lookupcluster);
                                                        //Xrm.Page.getAttribute("ua_codigo_vpd").setValue("test");
//Xrm.Page.getAttribute("ua_codigo_campus").setValue(lookupcluster);                                                  


						}
						else
						{
							alert(this.statusText);
						}
					}
				};
				req.send();

                         }
		}
        
	}
	catch (e)
	{
		//alert("ua_VPDSETOportunidad: " + e.message);
               Xrm.Utility.alertDialog("ua_VPDSETOportunidad: " + e.message);

	}
}