/**
* straightLine - Control the interaction in the creation of straight lines during the click event.

* @notice: The function only control the value of the variable 'localDot'. The rest of the funcionality is defined outside the function.
*/

function straightLine(){
	switch(localDot.length){
		case 0:
			localDot.push(setCoor(event));

			break;
		case 1:
			localDot.push(setCoor(event));

			if(localDot[0].coorX === localDot[1].coorX && localDot[0].coorY === localDot[1].coorY){
				localDot = [];

				break;
			}

		default:
			drawLine(dataControl.canvasLayer, localDot);
			saveLine(localDot);

			declareLocalDot();
	}
}


/**
* _straightLine - Control the interaction in the creation of straight lines during the mouse move event.

* @notice: The function only control the value of the variable 'localDot'. The rest of the funcionality is defined outside the function.
*/

function _straightLine(){
	let ctx = document.getElementById('reference').getContext('2d');
	let eventDot = setCoor(event);

	if(localDot[0]){
		drawCanvasLine(ctx, localDot[0].coorX, localDot[0].coorY, eventDot.coorX, eventDot.coorY);
	}
}