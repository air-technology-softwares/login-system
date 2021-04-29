// JavaScript Document


var x=document.getElementById("nft");
	var z=document.getElementById("nrt");
var f=document.getElementById("email");
var d=document.getElementById("next");
var current=0;
var n;

var t=document.getElementsByClassName("tab");
var tt=document.getElementsByClassName("tab1")

var e=0;
		
		function show(){
			if(x.type === "password"){
				x.type = "text"
			}
			else{
				x.type = "password"
			}
			
			if(z.type === "password"){
				z.type = "text"
			}
			
			else{
				z.type = "password"
			}
		}
	
		
var currentTab = 0;
showTab(currentTab); 


function showTab(n) {
 
  var x = document.getElementsByClassName("tab");
	console.log(x)
  x[n].style.display = "block";
	
	console.log("Working")
	
	currentTab+1;
	
}



function shift(){
	
	 var x = document.getElementsByClassName("tab1");
	console.log(x)
  x[currentTab].style.display = "block";
	
	var r = document.getElementsByClassName("tab");
		r[currentTab].style.display = "none";
	
	if(currentTab===1){
		console.log("Working")
		
  var x = document.getElementsByClassName("tab1");
  x.style.display = "block";
	
		var r = document.getElementsByClassName("tab");
		r.style.display = "none";
		
		
	}
	else{
		console.log("Not Working")
		
		
	}
	
	
}



