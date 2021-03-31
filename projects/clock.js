var projectName = "clock"
var c = document.getElementById(projectName);

if (typeof(c) != "undefined" && c != null) {
    c.style.width = (c.width = 600) + "px";
    c.style.height = (c.height = 600) + "px";
    var cw = 600, centerw = cw/2;
    var ch = 600, centerh = ch/2;
    var ctx = c.getContext("2d");

    var nowTime;
    var clockHandsArray;
    var textSize = 20, clockSize = 200, lineSize = 10;
    var mainColor = "white", subColor = "gray", otherColor = "black";
    var timeInterval = 1000;

    main();

    function main() {
        ctx.clearRect(0, 0, c.width, c.height);

        displayTime();
        setInterval(displayTime, timeInterval);
    }

    function displayTime() {
        ctx.clearRect(0, 0, c.width, c.height);

        nowTime = new Date();
        ctx.font = textSize + "px Arial";
        ctx.fillStyle = mainColor
        ctx.textAlign = "center";
        ctx.fillText(nowTime, centerw, textSize);
        displayClock(nowTime.getHours(), nowTime.getMinutes(), nowTime.getSeconds());
    }
    function displayClock(hr, mn, sc) {
        ctx.beginPath();
        ctx.arc(centerw, centerh, clockSize, 0, 2 * Math.PI);
        ctx.fillStyle = mainColor;
        ctx.fill();
        
        if (hr >= 12) { hr = hr - 12; };
        hourHand = clockHand(hr*5);
        minHand = clockHand(mn);
        secHand = clockHand(sc);
    }
    function clockHand(time) {
        var endX = centerw + clockSize*Math.cos((time*3.14/30) - 3.14/2); // unit circle starts at 15 mark, - pi/2
        var endY = centerh + clockSize*Math.sin((time*3.14/30) - 3.14/2); // unit circle starts at 15 mark, - pi/2
        ctx.moveTo(centerw, centerh);
        ctx.lineTo(endX, endY);
        ctx.strokeStyle = subColor;
        ctx.lineWidth = lineSize;
        ctx.stroke();
    }
}
