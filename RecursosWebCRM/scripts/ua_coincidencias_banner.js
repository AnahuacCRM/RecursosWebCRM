function AlertaCalificaLead()
{
	alert('Se esta calificando el registro, espere un momento . . .');
}

function AbrirValidacionBanner()
{
    var id = Xrm.Page.data.entity.getId()
   
      var url = "https://crmbanner2.azurewebsites.net/VerCoincidencias?id=" + id;
     // var url="https://www.w3schools.com";
	window.open(url);
      //window.open(url,"tinyWindow", "width=1500,height=1000");
	//GetUrlForValidate()
	//alert('Validando en Banner');
	//Xrm.Utility.openWebResource(webResourceName,webResourceData,width, height);
	//Xrm.Utility.openWebResource("rs_ConsultaCoincidencia");
	//var id = Xrm.Page.data.entity.getId();
	//	var url1 = GetUrlForValidate();
	//	var url = "http://crmbanner2.azurewebsites.net/VerCoincidencias?id=" + id;
	//	window.open(url);
}

function GetUrlForValidate()
{
	var req = new XMLHttpRequest();
	var clientURL = getWebAPIPath();
	var consulta = "rs_variablesistemas?$select=ua_valortexto&$filter=ua_name eq 'urlValidaBanner'";
	req.open("GET", encodeURI(clientURL + consulta), true);
	req.setRequestHeader("Accept", "application/json");
	req.setRequestHeader("Content-Type", "application/json; charset=utf-8");
	req.setRequestHeader("OData-MaxVersion", "4.0");
	req.setRequestHeader("OData-Version", "4.0");
	req.onreadystatechange = function ()
	{
		if (this.readyState == 4 /* complete */ )
		{
			req.onreadystatechange = null;
			if (this.status == 200)
			{
				var data = JSON.parse(this.response);
				var dat = data.value;
				if (dat.length > 0)
				{
					var urlretorno = dat[0].rs_valortexto;
					sucessCallback(urlretorno)
				}
				else
				{
					alert("Error al consultar CRM, No esta configurada la validacion de Banner");
				}
				//console.log("Resultado: " + result.rs_name);
			}
			else
			{
				var error = JSON.parse(this.response).error;
				alert("Error al consultar CRM" + error.message);
				console.log(error.message);
			}
		}
	};
	req.send();
}

function sucessCallback(data)
{
	var id = Xrm.Page.data.entity.getId();
	var url = data + id;
	window.open(url);
}

function getClientUrl()
{
	//Get the organization URL
	if (typeof GetGlobalContext == "function" && typeof GetGlobalContext().getClientUrl == "function")
	{
		return GetGlobalContext().getClientUrl();
	}
	else
	{
		//If GetGlobalContext is not defined check for Xrm.Page.context;
		if (typeof Xrm != "undefined" && typeof Xrm.Page != "undefined" && typeof Xrm.Page.context != "undefined" && typeof Xrm.Page.context.getClientUrl == "function")
		{
			try
			{
				return Xrm.Page.context.getClientUrl();
			}
			catch (e)
			{
				throw new Error("Xrm.Page.context.getClientUrl is not available.");
			}
		}
		else
		{
			throw new Error("Context is not available.");
		}
	}
}

function getWebAPIPath()
{
	return getClientUrl() + "/api/data/v8.0/";
}