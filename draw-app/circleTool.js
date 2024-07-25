//a tool for drawing circles to the screen. Allows the user to preview
//the a cirlce to the current mouse position before drawing the circle to the 
//pixel array.
function circleTool(){
	this.icon = "assets/circle.jpg";
	this.name = "circleTool";

	var startMouseX = -1;
	var startMouseY = -1;
	var drawing = false;

	//draws the circle to the screen 
	this.draw = function(){

		//only draw when mouse is clicked
		if(mouseIsPressed){
			//if it's the start of drawing a new circle
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
				//draw the circle
                strokeWeight(slider2.value());
                noFill();
				ellipse(startMouseX, startMouseY, startMouseX-mouseX, startMouseY-mouseY);
			}

		}

		else if(drawing){
			//save the pixels with the most recent circle and reset the
			//drawing bool and start locations
			loadPixels();
			drawing = false;
			startMouseX = -1;
			startMouseY = -1;
		}
	};


}
