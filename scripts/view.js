const view = {
	reference: document.getElementById('reference'),
	options: document.getElementById('options'),

	scrollRectification: {gapX: 0, gapY: 0},

	layer: 'reference',
	action: null,
	type: null,

	eventEmitter: function(){
		this.options.addEventListener('click', function(event){
			if(event.target.nodeName === "SPAN"){
				/* ELIMINAR */console.log(event.target.dataset);
				view.layer = event.target.dataset.layer;
				view.action = event.target.dataset.action;
				view.type = event.target.dataset.type;
			}

		});

		this.reference.addEventListener('click', function(event){
			presenter.onClickEvent({
				layer: view.layer,
				ctx: document.getElementById(view.layer).getContext('2d'),
				reference: document.getElementById('reference').getContext('2d'),
				action: view.action,
				type: view.type,
				data: {
					coorX: roundGrid(event.clientX + view.scrollRectification.gapX), 
					coorY: roundGrid(event.clientY + view.scrollRectification.gapY)
				}
			});
		});

		this.reference.addEventListener('mousemove', function(event){
			presenter.onMoveEvent({
				layer: view.layer,
				ctx: document.getElementById(view.layer).getContext('2d'),
				reference: document.getElementById('reference').getContext('2d'),
				action: view.action,
				type: view.type,
				data: {
					coorX: roundGrid(event.clientX + view.scrollRectification.gapX), 
					coorY: roundGrid(event.clientY + view.scrollRectification.gapY)
				}
			});
		});

		window.addEventListener('scroll', function(){
			view.scrollRectification.gapX = window.scrollX;
			view.scrollRectification.gapY = window.scrollY;
		});
	}
}