var LiveForm = require("./LiveForm");
var random = require("./random");

module.exports = class Trade extends LiveForm {
    constructor(x, y) {
        this.x = x;
        this.energiya = 50;
        this.y = y;
        this.directions = [];
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }
    chooseCell(character) {
        this.getNewCoordinates();
        return super.chooseCell(character);}
    mul() {
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);
        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 5;
            let trade = new Trade(x, y);
            tradeArr.push(trade);
            this.energiya = 50;
        }
    }
    sest() {
        let emptyCells = this.chooseCell(2);
        let newCell = random(emptyCells);
        if (newCell) {
            this.energiya++;
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;
            for (let i in grassEaterArr) {
                if (grassEaterArr[i].x == x && grassEaterArr[i].y == y) {
                    grassEaterArr.splice(i, 1)
                }
            }
            this.y = y;
            this.x = x;
            if (this.energiya >= 15) {
                this.mul();
            }
        } else {
            this.move()
        }
    }
    move() {
        this.energiya--;
        let emptyCells = this.chooseCell(0);
        let emptyCells2 = this.chooseCell(1);
        let emptyCells4 = this.chooseCell(4);
        let fullCell = emptyCells.concat(emptyCells2).concat(emptyCells4)
        let newCell = random(fullCell);
        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 5;
            matrix[this.y][this.x] = 0;
            for (let i in hunterArr) {
                if (hunterArr[i].x == x && hunterArr[i].y == y) {
                    hunterArr.splice(i, 1)
                }
            }
            for (let i in grassArr) {
                if (grassArr[i].x == x && grassArr[i].y == y) {
                    grassArr.splice(i, 1)
                }
            }
            this.y = y;
            this.x = x;
        }
        if (this.energiya < 0) {
            this.die();
        }
    }
    die() {
        matrix[this.y][this.x] = 0;
        for (let i in tradeArr) {
            if (tradeArr[i].x == this.x && tradeArr[i].y == this.y) {
                tradeArr.splice(i, 1)
            }
        }
    }
}