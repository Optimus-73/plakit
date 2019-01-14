/**
* drawLine - Draw a line between a starting point and a final point.

* @param {object} ctx - Context where its going to be drawn.
* @param {number} initialX - Coordinate X from the initial point.
* @param {number} initialY - Coordinate Y from the initial point.
* @param {number} finalX - Coordinate X from the final point.
* @param {number} finalY - Coordinate Y from the final point.
*/

function drawCanvasLine(ctx, initialX, initialY, finalX, finalY){
	ctx.beginPath();
	ctx.moveTo(initialX, initialY);
	ctx.lineTo(finalX, finalY);
	ctx.stroke();
}

/**
* roundGrid - Round the values entered by the user to a Grid of 10 pixels.

* @param {number} value - The value entered by the user.

* @return {number} The value set to the grid.
*/
let roundGrid = (value => Math.round(value/10) * 10);

/** EDITAR DOCUMENTACIÓN
* Dibuja una rejilla bajo el resto de canvas
*/

function drawGrid(){
	let grid = document.getElementById('grid');
	let gridSize = grid.getAttribute('width');

	for(let i = 0; i < gridSize; i+=100){
		let ctx = grid.getContext('2d');

		ctx.strokeStyle = "#F1F1F1";

		drawCanvasLine(ctx, i, 0, i, gridSize);
		drawCanvasLine(ctx, 0, i, gridSize, i);
	}
}

/**
* drawLine - Define the context and draw the line on it.

* @param {object} canvas - The canvas on which it draws.
* @param {object} data - Array of objects that contain coordinates.
	* @property {number} coorX - The X coordinate.
	* @property {number} coorY - the Y coordinate.
* @PARAM {string} [n='#000000'] color - The color that the line will have.
*/

/* AUMENTAR LA COMPLEJIDAD PARA TRABAJAR CON MÁS TIPOS DE LINEAS */

function drawLine(canvas, data, color = '#000000'){
	let ctx = canvas.getContext('2d');

	ctx.strokeStyle = color;

	drawCanvasLine(ctx, data[0].coorX, data[0].coorY, data[1].coorX, data[1].coorY);
}
