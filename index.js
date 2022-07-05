var whiteSeconde = document.getElementById("secondeW");
var whiteMinute = document.getElementById("minuteW");
var blackSeconde = document.getElementById("secondeB");
var blackMinute = document.getElementById("minuteB");
var gameOver = document.getElementById("gameOver");
var secW=0;
var minW=10;
var secB=0;
var minB=10;
var chooseTimeW = prompt("Please choose your time", 20);
var chooseTimeB = chooseTimeW;
if (chooseTimeW != null) {
 document.getElementById("minuteW").innerHTML =
 chooseTimeW;
 document.getElementById("minuteB").innerHTML =
 chooseTimeB;
}

btnWhitePlayer=document.getElementById("btnWhitePlayer");
btnBlackPlayer=document.getElementById("btnBlackPlayer");
const btnStop=document.getElementById("btnStop");
const btnReset=document.getElementById("btnReset");
document.getElementById("btnWhitePlayer").disabled = false;
document.getElementById("btnBlackPlayer").disabled = false;
var whiteIsRunning = false;
var blackIsRunning = false;
document.getElementById("btnReset").disabled = false;


btnWhitePlayer.addEventListener('click', event => {
	startWhite();
});
btnBlackPlayer.addEventListener('click', event => {
	startBlack();
});
btnStop.addEventListener('click', event => {
	stop();
});
btnReset.addEventListener('click', event => {
	reset();
});

window.onload = defSetInterval;
function defSetInterval(){
  intervalIDBlack = setInterval(timeBlackMinus, 1000);
	intervalIDWhite = setInterval(timeWhiteMinus, 1000);
  clearInterval(intervalIDBlack);
	clearInterval(intervalIDWhite);
}
function startWhite() {
		whiteIsRunning = true;
		blackIsRunning = false;
		intervalIDWhite = setInterval(timeWhiteMinus, 1000);
  	clearInterval(intervalIDBlack);
			document.getElementById("btnWhitePlayer").disabled = true;
			document.getElementById("btnBlackPlayer").disabled = false;
			document.getElementById("btnWhitePlayer").style.color = "grey";
			document.getElementById("btnBlackPlayer").style.color = "whitesmoke ";
			document.getElementById("btnStop").style.color = "whitesmoke";
			document.getElementById("btnBlackPlayer").disabled = false;
			}
			
function startBlack() {
	
	intervalIDBlack = setInterval(timeBlackMinus, 1000);	
		clearInterval(intervalIDWhite);
			document.getElementById("btnBlackPlayer").disabled = true;
			document.getElementById("btnWhitePlayer").disabled = false;
			document.getElementById("btnBlackPlayer").style.color = "grey";
			document.getElementById("btnWhitePlayer").style.color = "whitesmoke";
			document.getElementById("btnStop").style.color = "whitesmoke";
			whiteIsRunning = false;
			blackIsRunning = true;
			document.getElementById("btnWhitePlayer").disabled = false;
			}
	
							/*intervalIDWhite = setInterval(function(){
										test();
										timeWhiteMinus();
										},1000); <=setInterval white several function */

							/*function test() {
								sec++;
								seconde.innerHTML = sec;
								minute.innerHTML = min;
								if(sec==60){
								sec=0;
								min++;
								}
							}*/

function timeWhiteMinus() {
 if(secW<=0 && chooseTimeW<=0){
 	secW =1;
 	chooseTimeW=0;
 	gameOver.innerHTML="White lost by time !";
 }else if (secW<=0){
secW=60;
chooseTimeW--;
}
secW--;
whiteSeconde.innerHTML = (secW < 10) ? "0" + secW : secW;
whiteMinute.innerHTML = (chooseTimeW<10) ? "0" + chooseTimeW : chooseTimeW;
}

function timeBlackMinus() {
if(secB<=0 && chooseTimeB<=0){
	secB=1;
	chooseTimeB=0;
	gameOver.innerHTML="Black lost by time!"
}else if (secB<=0){
secB=60;
chooseTimeB--;
}
secB--;
blackSeconde.innerHTML = (secB < 10) ? "0" + secB : secB;
blackMinute.innerHTML = (chooseTimeB<10) ? "0" + chooseTimeB : chooseTimeB;
}

function stop() {
	document.getElementById("btnStop").style.color = "grey";
	 clearInterval(intervalIDWhite);
	 clearInterval(intervalIDBlack);
	 	if (whiteIsRunning == true) {
	 		document.getElementById("btnWhitePlayer").disabled = false;
	 		document.getElementById("btnBlackPlayer").disabled = true;
	 		document.getElementById("btnWhitePlayer").style.color = "whitesmoke";
	 		document.getElementById("btnBlackPlayer").style.color = "grey";

	 	} else if (blackIsRunning == true) {
	 		document.getElementById("btnBlackPlayer").disabled = false;
	 		document.getElementById("btnWhitePlayer").disabled = true;
	 		document.getElementById("btnBlackPlayer").style.color = "whitesmoke";
	 		document.getElementById("btnWhitePlayer").style.color = "grey";
	 	}
	 
	 
}

							/*function reset(){
											secW=0;
											seconde.innerHTML = sec;
											minW=0;
											minute.innerHTML = min;
											negSec=0;
											timer.innerHTML = negSec;
											negMinute=20;
											negMin.innerHTML = negMinute;
											clearInterval(intervalID);
											document.getElementById("btnStart").disabled = false;
											document.getElementById("btnStart").style.color = "#C3FF24";
										}*/

function reset(){
secW=0;
secondeW.innerHTML = secW;
minW=0;
minuteW.innerHTML = minW;
secB=0;
secondeB.innerHTML = secB;
minuteB.innerHTML = minB;
chooseTimeW = prompt("Please choose your time", 20);
chooseTimeB = chooseTimeW;
minuteW.innerHTML = chooseTimeW;
minuteB.innerHTML = chooseTimeB; 
clearInterval(intervalIDBlack);
clearInterval(intervalIDWhite);
document.getElementById("btnWhitePlayer").disabled = false;
document.getElementById("btnBlackPlayer").disabled = false;
document.getElementById("btnWhitePlayer").style.color = "whitesmoke";
document.getElementById("btnBlackPlayer").style.color = "whitesmoke";

}