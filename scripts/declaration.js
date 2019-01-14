/**
* dotMatrix - Array of points:

* @typedef {object} Dot.
* @property {number} id - Unique id.
* @property {number} coorX - Coordinate on the x axis.
* @property {number} coorY - Coordinate on the y axis.
*/

/* EDITAR PARA ELIMINAR LA DECLARACIÓN INICIAL DE VALORES */

let dotMatrix = [{id: 0, coorX: 0, coorY: 0}];

/**
* lineMatrix - Array of lines:

* @typedef {object} Line.
* @property {number} id - Unique id.
* @property {object} dots - Array of points referenced:
	* @property {number} Firds dot id - Indentifier of the point at which the line begins.
	* @property {number} Second dot id - Identifier of the point at which the line ends.
*/

/* EDITAR PARA ELIMINAR LA DECALRACIÓN INICIAL DE VALORES */

let lineMatrix = [{id: 0, dots: [0, 0], lineEquation: [0, 0, 0]}];

/**
* controlData - Control the different user actions.

* @param {string} layerName - Name of the canvas to draw.
* @param {string} typeObject - Type of the object to draw.
* @return {object} dataControl.
	* @property {string} dataLayer - Name of the canvas to draw.
	* @property {object} canvasLayer - Canvas to draw.
	* @property {string} typeObject - Type ogf the object to draw.
*/

let dataControl;

function controlData(layerName, typeObject){
	let data = {
		dataLayer: layerName,
		canvasLayer: document.getElementById(layerName),
		typeObject: typeObject
	};

	return data;
}

/**
* localDot - Array that records the data and activity during the creation of a new line.

* @typedef {object} Point.
* @property {number} coorX.
* @property {number} coorY.
*/

let localDot = [];

/**
* declareLocalDot - Empty the local array of points. To create a new line.
*/

function declareLocalDot(){
	localDot = [];
}