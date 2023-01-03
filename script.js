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

    ctx.beginPath();
    ctx.fillRect(125, 35, 50, 50);

    /*for (var i = 0; i < 10; i++) {
        for (var j = 0; j < 10; j++) {
            if (levelData[i][j] == 0) {
                ctx.beginPath()
                ctx.fillStyle = "#FFFFFF";
                ctx.fillrect(i * 20, j * 20, 20, 20);
            }
        }
    }*/
}