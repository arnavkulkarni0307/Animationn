function movestraight() {
var man=document.getElementById('man');

man.style.transitionProperty='transform' ;
man.style.transitionDelay='1s'; 	
man.style.transform='translateX(400px)'
// man.height='300px'
}
currentY=0
     currentX=0
function moveman(direction) {
     

     var man=document.getElementById('man');//var man is holding the img tag.- step 1
man.style.transitionProperty='transform' ;//similar to css style
man.style.transitionDuration='2s';
// man.style.transitionTimingFunction="ease-in-out";
man.style.transitionDelay='0.3s';
if (direction=='l') {
	if (currentX>0) {
		currentX=0
	}
	else{
		currentX=-80
	}
	man.style.transform='translateX(0px)'
}

else if (direction=='r') {
	if (currentX<0) {
		currentX=0
	}
	else{
		currentX=90
	}
	man.style.transform='translateX(400px)'
}

else if (direction=='u') {
console.log(currentY)
if (currentY>0) {
	currentY= 0
}
else {
	currentY=-60
}
man.style.transform='translateY('+currentY+'px)'
}

else if (direction=='d') {
console.log(currentY)
if (currentY<0) {
	currentY=0
} else{
	currentY=100
}
	man.style.transform='translateY('+currentY+'px)'
}
}























































