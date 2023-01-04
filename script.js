let canvas = document.getElementById("gameCanvas");
let context = canvas.getContext("2d");
var levelData = [[0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0],
                    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 1, 0],
                    [0, 1, 0, 1, 1, 1, 1, 1, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1, 0],
                    [0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 1, 0],
                    [0, 1, 0, 1, 0, 2, 2, 2, 0, 0, 2, 2, 2, 0, 2, 0, 0, 2, 0, 1, 0, 1, 0],
                    [0, 1, 0, 1, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 1, 0, 1, 0],
                    [1, 1, 0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 2, 0, 0, 1, 0, 1, 1],
                    [0, 0, 0, 1, 1, 2, 0, 0, 2, 0, 0, 2, 0, 0, 2, 2, 2, 0, 1, 1, 0, 0, 0],
                    [1, 1, 0, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 2, 0, 0, 1, 0, 1, 1],
                    [0, 1, 0, 1, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 0, 2, 0, 1, 0, 1, 0],
                    [0, 1, 0, 1, 0, 2, 0, 0, 2, 0, 2, 2, 2, 0, 2, 0, 0, 2, 0, 1, 0, 1, 0],
                    [0, 1, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0, 0, 0, 0, 0, 1, 0],
                    [0, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 1, 1, 0, 1, 0],
                    [0, 1, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 1, 0],
                    [0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0]];

function startGame() {
    drawBg();
    player = new createPlayer();
}

function drawBg() {
    for (var i = 0; i < levelData.length; i++) {
        for (var j = 0; j < levelData[0].length; j++) {
            if (levelData[i][j] == 0 && j != 0 && j != levelData[0].length - 1) {
                context.fillStyle = "white";
                context.beginPath();
                context.arc(j* 30 + 15, i * 30 + 15, 5, 0, Math.PI * 2, true);
                context.closePath();
                context.fill();
            }
            else if (levelData[i][j] == 1) {
                context.fillStyle = "#1919A6";
                context.fillRect(j * 30, i * 30, 30, 30);
            }
            else if (levelData[i][j] == 2) {
                context.fillStyle = "#c60222";
                context.fillRect(j * 30, i * 30, 30, 30);
            }
        }
    }
}

function createPlayer() {

}