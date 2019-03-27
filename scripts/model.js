const model = {
	rootRef: firebase.database().ref(),
	//dataRef: this.rootRef.child('data'),

	guardo: function(data){
		const rootRef = firebase.database().ref();
		const dataRef = rootRef.child('data');

		dataRef.push({
			author: "Optimus",
			style: {
				color: 'black',
				transparence: false
			},
			data: data			
		});

		console.log("[MODEL]: Guardo!");
	},

	drawData: function(){
		const rootRef = firebase.database().ref();
		const dataRef = rootRef.child('data');
		const context = document.getElementById('plane').getContext('2d');

		dataRef.on('value', function(snapshot){
			//Tendría que mandar los datos al presentador ...
			console.log(Object.values(snapshot.val()));

			Object.values(snapshot.val()).forEach(function(element){
				drawElement(element.data, context);
			});
		});
	}
}