const presenter = {
	temporalData: [],

	onClickEvent: function(configObj){
		switch(configObj.action){
			case 'create':
				if(createElement(configObj, presenter.temporalData)){
					model.guardo(presenter.temporalData);

					presenter.temporalData = [];
				}

			break;
		}
	},

	onMoveEvent: function(configObj){

		switch(configObj.action){
			case 'create':
				clearCanvas();

				_createElement(configObj, presenter.temporalData);

				break;
		}
		
	}
}