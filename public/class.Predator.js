class Predator {
    constructor(x, y) {
        this.x = x;
        this.kyanq = 70;
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
        this.getNewCoordinates()
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }
    mul() {
        let emptyCells = this.chooseCell(0);
        let newCell = random(emptyCells);
        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 3;
            let predator = new Predator(x, y);
            predatorArr.push(predator);
            this.kyanq = 70;
        }
    }
    kushat() {
        let emptyCells = this.chooseCell(2);
        let newCell = random(emptyCells);
        if (newCell) {
            this.kyanq++;
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 3;
            matrix[this.y][this.x] = 0;
            for (let i in grassEaterArr) {
                if (grassEaterArr[i].x == x && grassEaterArr[i].y == y) {
                    grassEaterArr.splice(i, 1)
                }
            }
            this.y = y;
            this.x = x;
            if (this.kyanq >= 15) {
                this.mul();
            }
        } else {
            this.move()
        }
    }
    move() {
        this.kyanq--;
        let emptyCells = this.chooseCell(0);
        let emptyCells5 = this.chooseCell(1);
        let emptyCells4 = this.chooseCell(4)
        let fullCell = emptyCells.concat(emptyCells4).concat(emptyCells5)
        let newCell = random(fullCell);
        if (newCell) {
            let x = newCell[0];
            let y = newCell[1];
            matrix[y][x] = 3;
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
        if (this.kyanq < 0) {
            this.die();
        }
    }
    die() {
        matrix[this.y][this.x] = 0;

        for (let i in predatorArr) {
            if (predatorArr[i].x == this.x && predatorArr[i].y == this.y) {
                predatorArr.splice(i, 1)
            }
        }
    }
}