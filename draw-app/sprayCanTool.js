function SprayCanTool(){
	
	this.name = "sprayCanTool";
	this.icon = "assets/sprayCan.jpg";

	
//when the mouse is pressed, it takes the value from the slider to determine the points and spread. Then draws to the canvas.
	this.draw = function(){
        strokeWeight(slider2.value()/10);
        var points = slider2.value();
	    var spread = slider2.value();
		var r = random(5,10);
		if(mouseIsPressed && mouseX > 10){
			for(var i = 0; i < points; i++){
				point(random(mouseX-spread, mouseX + spread),
                      random(mouseY-spread, mouseY+spread));
			}
		}
	};
}
