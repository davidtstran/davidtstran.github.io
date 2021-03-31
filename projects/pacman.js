var projectName = "pacman"
var c = document.getElementById(projectName);

if (typeof(c) != "undefined" && c != null) {
    c.style.width = (c.width = 600) + "px";
    c.style.height = (c.height = 600) + "px";
    var cw = 600, centerw = cw/2;
    var ch = 600, centerh = ch/2;
    var ctx = c.getContext("2d");

    ctx.clearRect(0, 0, c.width, c.height);
	
	var blockSize = 15;
	var blockColor = "blue";
	var numBlocks = cw / blockSize; // per row or col
	var totalFood = 0; // first square is blank
	var foodRadius = 3;
	var foodColor = "yellow";
	var powerFoodRadius = foodRadius * 2;
	var powerColor = "pink";
	var powerTimer = 0; // time for each power food
	var mazer, mazerCenter;
	var mazerStartX = blockSize * 19, mazerStartY = blockSize * 22;
	var canMove = true;
	var mazerColor = "yellow";
	var collideElem;
	var enemyArray = [];
	var enemyColor = [ "red", "green", "orange", "purple" ]; // add enemy by adding color
	var enemyMovementDelay = 200;
	var headRadius = 7, bodyWidth = headRadius * 2, bodyHeight = 8;
}
