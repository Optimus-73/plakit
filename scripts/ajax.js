function getRandom(min, max){
			return Math.floor(Math.random() * (max - min) + min);
		}

let random = getRandom(0, 10);

function ajaxRequest(url){
	let xmlHttp = new XMLHttpRequest();

	xmlHttp.onreadystatechange = function(){
		if(xmlHttp.readyState === 4 && xmlHttp.status === 200){
			let data = JSON.parse(xmlHttp.responseText).results;
			console.info(JSON.parse(xmlHttp.responseText));
			alert(`Y además, como me niego a utilizar la API de meteorología. El periodo orbital de ${data[random].name} es de ${data[random].orbital_period} días.`);
		}
	}

	xmlHttp.open("GET", url, true);
	xmlHttp.send();
}