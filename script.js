var canvasWidth = 600;
var canvasHeight = 400;

function startGame() {
    gameCanvas.start();
}

var gameCanvas = {
    canvas: document.createElement("canvas"),
    start: function() {
        canvas.width = canvasWidth;
        canvas.height = canvasHeight;
        context = canvas.getContext("2d");
        document.body.insertBefore(canvas, document.body.childNodes[0]);
    }
}