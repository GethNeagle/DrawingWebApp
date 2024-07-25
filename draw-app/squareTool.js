//a tool for drawing squares to the screen. Allows the user to preview
//the square to the current mouse position before drawing the square.
function squareTool(){
	this.icon = "assets/square.jpg";
	this.name = "squareTool";

	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	//draws the square to the screen 
	this.draw = function(){

		//only draw when mouse is clicked
		if(mouseIsPressed){
			//if it's the start of drawing a new square
			if(startMouseX == -1){
				startMouseX = mouseX;
				startMouseY = mouseY;
				drawing = true;
				//save the current pixel Array
				loadPixels();
			}

			else{
				//update the screen with the saved pixels to hide any previous
				//line between mouse pressed and released
				updatePixels();
				//draw the square
                strokeWeight(slider2.value());//updates value from slider.
                noFill();//to make the square empty. This will be changeable.
				rect(startMouseX, startMouseY, mouseX-startMouseX, mouseY-startMouseY);
			}

		}

		else if(drawing){
			//save the pixels with the most recent line and reset the
			//drawing bool and start locations
			loadPixels();
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}
