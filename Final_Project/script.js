function setup() {
    var socket = io();
    var side = 20;
    var matrix = [];
    
    let weatherElement = document.getElementById('weather');
    let grassCountElement = document.getElementById('grassCount');
    let grassLiveCountElement = document.getElementById('grassLiveCount');
    let grassEaterCountElement = document.getElementById('grassEaterCount');
    let grassEaterLiveCountElement = document.getElementById('grassEaterLiveCount');
    let hunterCountElement = document.getElementById('hunterCount');
    let hunterLiveCountElement = document.getElementById('hunterLiveCount');
    let predatorCountElement = document.getElementById('predatorCount');
    let predatorLiveCountElement = document.getElementById('predatorLiveCount');
    let tradeCountElement = document.getElementById('tradeCount');
    let tradeLiveCountElement = document.getElementById('tradeLiveCount');
    
    socket.on("data", drawCreatures);

    function drawCreatures(data) {


     
        matrix = data.matrix;
        weatherElement.innerText = data.weather;
        grassCountElement.innerText = data.grassCounter;
        grassLiveCountElement.innerText = data.grassLiveCounter;

        grassEaterCountElement.innerText = data.grassEatarCounter;
        grassEaterLiveCountElement.innerText = data.grassEaterLiveCounter;

        hunterCountElement.innerText = data.hunterCounter;
        hunterLiveCountElement.innerText = data.hunterLiveCounter;

        predatorCountElement.innerText = data.predatorCounter;
        predatorLiveCountElement.innerText = data.predatorLiveCounter;


        tradeCountElement.innerText = data.tradeCounter;
        tradeLiveCountElement.innerText = tradeLiveCounter;


       
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
                else if (matrix[i][j] == 7) {
                        fill('#F0E68C');
                        rect(j * side, i * side, side, side);
                    }
                        else if (matrix[i][j] == 6) {
                        fill('#3977ff');
                        rect(j * side, i * side, side, side);
                }
            }
        }
    }
}