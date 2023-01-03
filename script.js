/*var levelData = [[1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                 [1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
                 [1, 1, 0, 0, 1, 1, 0, 0, 1, 1],
                 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
                 [1, 0, 0, 1, 1, 1, 0, 0, 0, 1],
                 [1, 1, 0, 0, 1, 0, 0, 1, 1, 1],
                 [1, 1, 1, 0, 0, 0, 1, 1, 1, 1],
                 [1, 1, 1, 1, 1, 1, 1, 1, 1, 1]];*/
function draw() {
    const canvas = document.getElementById("gameCanvas");
    if (canvas.getContext) {
        const ctx = canvas.getContext("2d");

        ctx.fillRect(25, 25, 100, 100);
        ctx.clearRect(45, 45, 60, 60);
        ctx.strokeRect(50, 50, 50, 50);

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
}