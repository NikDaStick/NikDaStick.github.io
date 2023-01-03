let canvas, ctx;
var levelData = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                 [1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
                 [1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
                 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                 [1, 0, 0, 1, 1, 1, 0, 0, 0, 1],
                 [1, 1, 0, 0, 1, 0, 0, 1, 1, 1],
                 [1, 1, 1, 0, 0, 0, 1, 1, 1, 1],
                 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];
function init() {
    canvas = document.getElementById("gameCanvas");
    ctx = canvas.getContext("2d");
    level = new drawLevel();
}

function drawLevel() {
    for (var i; i < 10; i++) {
        for (var j; j < 10; j++) {
            if (levelData[i][j] == 0) {
                ctx.fillStyle = "#FFFFFF";
                ctx.fillrect(i * 20, j * 20, 20, 20);
            }
        }
    }
}