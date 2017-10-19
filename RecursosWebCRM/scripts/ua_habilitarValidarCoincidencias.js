function hideStage() {

//var stageID = Xrm.Page.getAttribute(“stageid”).getValue();

//alert(stageID);
//var stageObj = Xrm.Page.data.process.getActiveStage();
//var stepsCollection = stageObj.getSteps(); // Returns a collection of steps in the stage.
//var stepAttributeName = stepObj.getAttribute(); // Returns the logical name of the attribute associated to the step.
//var attributeValue = Xrm.Page.getAttribute(stepAttributeName).getValue(); // Retrieves the data value for an attribute.
//Xrm.Page.ui control.setNotification(attributeValue );
var stageName=Xrm.Page.data.process.getActiveStage().getName();
Xrm.Page.ui control.setNotification(stageName);
}



function currentstage()
{
var stageID = Xrm.Page.getAttribute(“stageid”).getValue();
Xrm.Page.getAttribute("ua_fase").setValue(stageID);
}

















function btnHide(){

var elem= window.top.document.getElementById("lead|NoRelationship|Form|ua.lead.Button4.Button");

elem.style.display="none";

}


function HideAddRibbonButtons() 
{ 
          // var buttonAddFile = "lead|NoRelationship|Form|ua.lead.Button4.Button";
           //var buttonAddNote = "account|NoRelationship|Form|Mscrm.Form.account.AddNote-Large";
          //var buttonGroup = "account|NoRelationship|Form|Mscrm.Form.account.Related.Document";
            Var ButtonValidar = "lead|NoRelationship|Form|ua.lead.Button4.Button";

          window.top.document.getElementById(ButtonValidar).style.display = 'none';
}