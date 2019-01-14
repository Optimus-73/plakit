
/**
* setCoor - Returns an object with the coordinates originated from an event.

* @param {object} event - The envent that racives the coordinates.

* @return {object}
	* @property {number} coorX - The X coordinate.
	* @property {number} coorY - The Y coordinate.
*/

let setCoor = (event => ({coorX: roundGrid(event.clientX + scrollRectification.gapX), coorY: roundGrid(event.clientY + scrollRectification.gapY)}));

/*
function setCoor(event){
	let coorX = roundGrid(event.clientX + scrollRectification.gapX);
	let coorY = roundGrid(event.clientY + scrollRectification.gapY);

	return {coorX: coorX, coorY: coorY};
}*/

/**
* pointer - Draw the pointer while the mouse is on the canvas.

* @param {number} x - Coordinate X.
* @param {number} y - Coordinate Y.
* @param {number} r - Circle radius to draw.

* @notice: In painted on the reference canvas previously delcared.
*/

function pointer(x, y, r){
	let ctx = reference.getContext('2d');

	x += scrollRectification.gapX;
	y += scrollRectification.gapY;

	ctx.beginPath();
	ctx.arc(x, y, r, 0, 2*Math.PI);
	ctx.stroke();
}

/**
* clearCanvas - Remove the content of a full canvas.

* @param {object} [n=reference] canvas - The canvas on which the deletion will be made.
*/

function clearCanvas(canvas = document.getElementById('reference')){
	let ctx = canvas.getContext('2d');
	ctx.clearRect(0, 0, canvas.getAttribute('width'), canvas.getAttribute('height'));
}

/**
* setAtributes - Set a list of attributes for a given DOM element.

* @param {object} element - The element on which the modification will be made.
* @param {object} attribute - Array of the names and values of the attributes.
	@property {string} Name of the attribute.
	@property {string} Value of the atribute.
*/

function setAttributes(element, attribute){
	attribute.forEach(function(attribute){
		element.setAttribute(attribute[0], attribute[1]);
	});
}

/**
* setStyles - Set a lis of styles for a given DOM element.

* @param {object} element - The element on which the modification will be made.
* @param {object} cssStyles - Array of the names and values of the CSS propertys.
	@property {string} Name of the CSS property.
	@property {string} Value of the CSS property.
*/

function setStyles(element, cssStyles){
	let cssStyleSentence = "";

	cssStyles.forEach(function(cssStyles){
		cssStyleSentence += `${cssStyles[0]}:${cssStyles[1]};`;
	});

	element.setAttribute('style', cssStyleSentence);
}

/* CREAR UNA FUNCION PARA CONVERTIR {coorX: ..., coorY: ...} => [coorX + "|" + coorY] */