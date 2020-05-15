//this code changes the body background color every time the button is clicked
//if the color is white it changes to purple and if purple it changes to white
var button = document.querySelector("button");
var isPurple = false;
button.addEventListener("click", function(){
	if(isPurple){
			document.body.style.background = "white";
			isPurple = false;
	}else {
			document.body.style.background = "purple";
			isPurple = true;

	}


});
