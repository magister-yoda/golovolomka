function setup() {
    var socket = io();
    var side = 30;
    var matrix = [];
    
    let weatherElement = document.getElementById('weather');
    let grassCountElement = document.getElementById('grassCount');
    let grassLiveCountElement = document.getElementById('grassLiveCount');
    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let hunterCountElement = document.getElementById('hunterCount');
    let predatorCountElement = document.getElementById('predatorCount');
    let tradeCountElement = document.getElementById('tradeCount');
    
    socket.on("data", drawCreatures);

    function drawCreatures(data) {


     
        matrix = data.matrix;
        weatherElement.innerText = data.weather; "summer"
        grassCountElement.innerText = data.grassCounter;
        grassLiveCountElement.innerText = data.grassLiveCounter;
        grassEaterCountElement.innerText = data.grassEatarCounter;
        hunterCountElement.innerText = data.hunterCounter;
        predatorCountElement.innerText = data.predatorCounter;
        tradeCountElement.innerText = data.tradeCounter;
       
        createCanvas(matrix[0].length * side, matrix.length * side)
       
        background('#acacac');

        for (var i = 0; i < matrix.length; i++) {
            for (var j = 0; j < matrix[i].length; j++) {
                if (matrix[i][j] == 1) {
                    if(data.weather == "summer"){
                        fill("green");
                    }else if (data.weather == "autumn"){
                        fill("orange");
                    }
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 2) {
                    fill("yellow");
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 0) {
                    fill('#acacac');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 3) {
                    fill('red');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 4) {
                    fill('blue');
                    rect(j * side, i * side, side, side);
                } else if (matrix[i][j] == 5) {
                    fill('black');
                    rect(j * side, i * side, side, side);
                }
            }
        }
    }
}