/**
* drawDotIcons - Obtain the points on which the structure is built and generate icons on them to allow the user to perform actions on each point individually.

* @notice: The deleteIcons function is necessary to no rewrite the icons when performing the action again.
*/

/* AÑADIR FUNCIONALIDAD PARA DIBUJAR ELEMENTOS EN TODAS LAS CAPAS QUE CONTENGAN ICONOS */
/* INCLUIR COMO ARGUMENTO LA DEFINICION DE 'referenceIcon' */
/* REVISAR ENTERO ... */

function drawDotIcons(){

	let referenceIcon = document.getElementById('iconReference');

	deleteIcons(referenceIcon);

	idDot = dotMatrix.map((element) => element.id);
	coorsDot = dotMatrix.map((element) => [element.coorX, element.coorY]);
	coorsDotFind = dotMatrix.map((element) => element.coorX + '|' + element.coorY);

	coorsDot.forEach(function(element){
		let dotIcon = document.createElement('img');
		let dotId = idDot[coorsDotFind.indexOf(element[0] + "|" + element[1])];
		setAttributes(dotIcon, [
			['src', 'img/origin.png'],
			['dotid', dotId],
			['onclick', 'dotOptions(this)'],
			['onmouseover', 'clearCanvas()']
		]);

		setStyles(dotIcon, [
			['width', '16px'],
			['height', '16px'],
			['position', 'absolute'],
			['margin-left', element[0] - 8 + 'px'],
			['margin-top', element[1] - 8 + 'px'],
			['cursor', 'pointer']
		]);
		
		referenceIcon.appendChild(dotIcon);

	});
}


/**
* deleteIcons - Remove the elements that are inside a DOM element.

* @param {object} [n=document.getElementById('iconReference')] element - Parent element that contains the elements to be deleted.
*/

function deleteIcons(element = document.getElementById('iconReference')){

	//#Elimina los iconos creados en la capa de referencia.
	while(element.hasChildNodes()){ 
		element.removeChild(element.firstChild);
	}
}