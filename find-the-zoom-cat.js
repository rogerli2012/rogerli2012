var timer = document.querySelector("#lp-pom-text-18");
// var timer = document.querySelector("#timer");
var zoomcat = document.querySelector("#lp-pom-image-43");
// var zoomcat = document.querySelector("#zoomcat");
var timerActive = true;
var startTime = new Date().getTime();

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

async function start() {
	do {
		currentTime = new Date().getTime();
	  	elapsedTime = ((currentTime - startTime) / 1000).toFixed(2);
	  	await sleep(10);
	  	console.log(elapsedTime);
	  	timer.innerHTML = elapsedTime;
	} while (timerActive == true);
}

function stop() {
	console.log("STOPPPPPPPP");
	timerActive = false;
}

start();
