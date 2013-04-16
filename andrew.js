function fade(one , two){
  	document.getElementById(two).style.display = 'block'; 
		document.getElementById(one).setAttribute("class", "fadeout");
		document.getElementById(two).setAttribute("class", "fadein");
		setTimeout(none, 300, one);
		}
		
function fadeIn(one){
		document.getElementById(one).style.display = 'block'; 
		document.getElementById(one).setAttribute("class", "fadein");
		}
		
		
function slidemein(one){
		document.getElementById(one).style.display = 'block'; 
		document.getElementById(one).setAttribute("class", "slideinreverse");
		}
	
function slidemeout(one){
		document.getElementById(one).setAttribute("class", "slideout");
		setTimeout(none, 300, one);
		}


function fadeininner(one){
		document.getElementById(one).style.display = 'block'; 
		document.getElementById(one).setAttribute("class", "fadeininner");
		}
		
function fadeOut(one){
		document.getElementById(one).style.display = 'block'; 
		document.getElementById(one).setAttribute("class", "fadeout");
		setTimeout(none, 300, one);
		}
	
function fadeoutinner(one){
		document.getElementById(one).style.display = 'block'; 
		document.getElementById(one).setAttribute("class", "fadeoutinner");
		setTimeout(none, 300, one);
		}
		
function none(one){	
		document.getElementById(one).style.display = 'none';
		}
	
function slideleft(one , two){
		document.getElementById(two).style.display = 'block'; 
		document.getElementById(one).setAttribute("class", "slideout");
		document.getElementById(two).setAttribute("class", "slidein");
		}

function slideright(one , two){
	        document.getElementById(two).style.display = 'block'; 
		document.getElementById(one).setAttribute("class", "slideoutreverse");
		document.getElementById(two).setAttribute("class", "slideinreverse");
		 }
		
	
	
function slideup(one , two){
		document.getElementById(two).style.display = 'block'; 
		document.getElementById(one).setAttribute("class", "slideupout");
		document.getElementById(two).setAttribute("class", "slideupin");

		}

function slideoneup(one){
		document.getElementById(one).style.display = 'block'; 
		document.getElementById(one).setAttribute("class", "slideupin");
		}
		
function slidedown(one , two){
	        document.getElementById(two).style.display = 'block'; 
		document.getElementById(one).setAttribute("class", "slidedownout");
		document.getElementById(two).setAttribute("class", "slidedownin");
		 }
		 
function slideonedown(one){ 
		document.getElementById(one).setAttribute("class", "slidedownout");
		setTimeout(none, 300, one);
		 }

			
function flipleft(one,two){
	        document.getElementById(two).style.display = 'block'; 
		document.getElementById(one).setAttribute("class", "flipoutleft");
		document.getElementById(two).setAttribute("class", "flipinleft");
		
		 }
