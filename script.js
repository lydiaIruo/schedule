
function reminder(){
	var remind =document.getElementById("remindyear").value ;
	var event2=document.getElementById("eventyear").value ;
	if (remind>event2){
		alert(" Event date has passed");
	}
}
function check(){
	var alarm= document.getElementById("radioalarm").checked;
	var noalarm=document.getElementById("radionoalarm").checked;
	if (alarm==false && noalarm==false){
	alert("check alarm or no alarm");
	}
}
function check2(){
	if (document.getElementById("eventtxt").value==""){
	alert("Fill in the Event name");
	}
}
function alarmcheck(){
	var checked=document.getElementById("radioalarm").checked;
	if(checked==true){
	document.getElementById("alarm4").style.display="block";
	}
}
function alarmuncheck(){
	var unchecked=document.getElementById("radionoalarm").checked;
	if	(unchecked==true){
	document.getElementById("alarm4").style.display="none";
	}
}
function checktoday(){
	
	if(document.getElementsByClassName("d_31").value===2);
	{
		document.getElementsByClassName("ex").style.display="none";
	}
	
}