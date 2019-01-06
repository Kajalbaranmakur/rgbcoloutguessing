var numSquares = 6;
var colors = [];
var pickedColor;
var score = 0, count = 5, matchs = 0;

var squares = document.querySelectorAll(".square");
var colorDisplay = document.querySelector("#colorDisplay")
var resultDisplay = document.querySelector("#resultDisplay");
var h1 = document.querySelector("h1");
var resetButton = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");
var totalScore = document.querySelector("#totalScore");
var matchNo = document.querySelector("#matchNo");

init();

function init(){
	for(var i = 0; i < modeButtons.length; i++){
		modeButtons[i].addEventListener("click", function(){
			modeButtons[0].classList.remove("selected");
			modeButtons[1].classList.remove("selected");
			this.classList.add("selected");
			this.textContent === "Easy" ? numSquares = 3: numSquares = 6;
			reset();
            count = (numSquares-1); score = 0; matchs = 0;
            totalScore.textContent = score;
            matchNo.textContent = matchs;
		});
	}
    
    
	for(var i = 0; i < squares.length; i++){
		squares[i].addEventListener("click", function(){
			var clickedColor = this.style.background;
			if(pickedColor === clickedColor){
	             resultDisplay.textContent = "Correct!";
	             if(squares[0].style.background != squares[1].style.background){
	             	score = score + count;
	             }
	             if((squares[0].style.background === "rgb(35, 35, 35)")&&(squares[1].style.background === "rgb(35, 35, 35)")){
                    score = score + count;
	             }
	             changeColor(pickedColor);
	             resetButton.textContent = "Play Again";
	                          	             	             
	             totalScore.textContent = score ; 
	             matchNo.textContent = matchs ;             
	             count = numSquares-1;
	             console.log("Accuracy = " + score*100/(matchs*count) + " %");
			}else{
				this.style.background = "#232323";
				resultDisplay.textContent = "Try Again!";
				count --;
			}
		});
	}
	reset();
}


resetButton.addEventListener("click",function(){
	reset();
})
function reset(){
	matchs = matchs + 1;
	colors = generateRandomColor(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for(var i = 0; i < squares.length; i++){
		if(colors[i]){
			squares[i].style.display = "block";
			squares[i].style.background=colors[i];
		}else{
			squares[i].style.display = "none";
		}
		
	}
    resultDisplay.textContent = "";
    h1.style.background = "steelblue";
}

function changeColor(color){
	for(var i = 0; i < squares.length; i++){
        squares[i].style.background = color ;
    }
    h1.style.background = color;
}

function pickColor(){
    var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColor(num){
	var arr = [];
	for(var i = 0; i < num; i++){
		arr.push(randomColor());
	}
	return arr;
}
function randomColor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b +")";
}

