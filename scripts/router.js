let router = {
	getHash: () => window.location.href.split('#')[1] || '',
	navigate: (path) => { window.location.href = window.location.href.replace(/#(.*)$/, '') + '#' + path; },
	eventEmitter: function(){
			window.addEventListener('hashchange', function(){
			router.init();
		});
	},

	init: function(){
		switch(router.getHash()){
			case 'canvas':
				let data = {
					names: ['grid', 'plane', 'reference'],
					width: 2000,
					height: 2000
				}

				// Los datos tienen que entrar como una llamada a firebase.

				templates.canvas(data);
				drawGrid();
				view.eventEmitter();
				model.eventEmitter();

				break;
			default:
				templates.start();
		}

		console.log("Hash actual:", router.getHash());
	}
}















let templates = {
	HTML: "",
	container: document.getElementById('view'),

	start: function(){
		templates.HTML = '';
		templates.HTML = `

		<div id="welcome-container" class="all-size centered">
			<div>
				<h1>PLAKIT</h1>
				<h2>Lorem ipsum dolor sit amet</h2>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod<br/>
					tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam,<br/>
					quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo<br/>
					consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse<br/>
					cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non<br/>
					proident, sunt in culpa qui officia deserunt mollit anim id est laborum.<br/>
				</p>
				<button tabindex="1" onclick="router.navigate('canvas')">Comenzar</button>
			</div>
		</div>
		`;
		templates.container.innerHTML = templates.HTML;
	},

	menu: function(){

	},

	/*
		names: [] => Array con los nombres
		widht: int => Anchura de los planos
		height: int => Altura de los planos

		[Las opciones de configuracion primeras] ? ...
	
	*/
	canvas: function(configCanvas){
		templates.HTML = '';
		configCanvas.names.forEach(function(element){
			templates.HTML += `<canvas id="${element}" width="${configCanvas.width}" height="${configCanvas.height}"></canvas>`;
		});
		templates.container.innerHTML = templates.HTML;
	}
}