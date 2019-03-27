function createElement(configObj, temporalData){
			isEqualDot(temporalData[temporalData.length-1], configObj.data) ? temporalData.pop() : temporalData.push(configObj.data);
			
			(configObj.type == temporalData.length) ? drawElement(temporalData, configObj.ctx) : null;
			return (configObj.type == temporalData.length) ? true : false;
		}
		
		function _createElement(configObj, temporalData){
			drawElement(temporalData.concat(configObj.data), configObj.reference);

			drawPreviewAids(temporalData.concat(configObj.data), configObj.reference);
		}

		
		function drawElement(data, ctx, style = "black"){
			ctx.beginPath();
			ctx.strokeStyle = style;
			ctx.moveTo(data[0].coorX, data[0].coorY);

			switch(data.length){
				case 2:
					ctx.lineTo(data[1].coorX, data[1].coorY);

					break;
				case 3:
					ctx.quadraticCurveTo(data[2].coorX, data[2].coorY, data[1].coorX, data[1].coorY);
					
					break;
				case 4:
					ctx.bezierCurveTo(data[2].coorX, data[2].coorY, data[3].coorX, data[3].coorY, data[1].coorX, data[1].coorY);

					break;
			}

			ctx.stroke();
			ctx.closePath();
		}
		
		function drawPreviewAids(data, ctx, style = "blue"){
			ctx.beginPath();

			ctx.strokeStyle = style;
			
			switch(data.length){
				case 3:
					ctx.moveTo(data[0].coorX, data[0].coorY);
					ctx.lineTo(data[2].coorX, data[2].coorY);
					ctx.lineTo(data[1].coorX, data[1].coorY);
					
					break;
				case 4:
					ctx.moveTo(data[0].coorX, data[0].coorY);
					ctx.lineTo(data[2].coorX, data[2].coorY);
					ctx.lineTo(data[3].coorX, data[3].coorY);
					ctx.lineTo(data[1].coorX, data[1].coorY);
			}
			
			ctx.stroke();
			ctx.closePath();
		}

		function clearCanvas(canvas = document.getElementById('reference')){
			let ctx = canvas.getContext('2d');
			ctx.clearRect(0, 0, canvas.getAttribute('width'), canvas.getAttribute('height'));
		}

		//let isEqualDot = (dot1, dot2) => (dot1 && dot2) ? (`${dot1.coorX}|${dot1.coorY}` === `${dot2.coorX}|${dot2.coorY}`) ? true : false : false;

		function isEqualDot(dot1, dot2){
			return (dot1 && dot2) ? (`${dot1.coorX}|${dot1.coorY}` === `${dot2.coorX}|${dot2.coorY}`) ? true : false : false;
		}

		/* PRUEBA */ /* REFACTORIZAR */

		function drawGrid(){
			let grid = document.getElementById('grid');
			let gridSize = grid.getAttribute('width');

			for(let i = 0; i < gridSize; i+=100){
				let ctx = grid.getContext('2d');

				ctx.strokeStyle = "#F1F1F1";

				ctx.moveTo(i, 0);
				ctx.lineTo(i, gridSize);
				ctx.moveTo(0, i);
				ctx.lineTo(gridSize, i);

				ctx.stroke();
			}
		}

		let roundGrid = (value => Math.round(value/10) * 10);
