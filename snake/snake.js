class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Snake {
    constructor(coordx, coordy, len, tileSize, winSize) {
        this.body = [];
        this.color = [0, 255, 0];
        this.dir = new Point(1, 0);

        this.winSize = winSize;
        this.tileSize = tileSize;

        for (let x = 0; x < len; x++) {
            console.log(x);
            this.body.push(new Point(coordx - x, coordy));
        }
    }

    draw() {
        for (let i = 0; i < this.body.length; i++) {
            fill(this.color);
            rect(this.body[i].x * tileSize, this.body[i].y * tileSize, tileSize, tileSize);
        }
    }

    changeDir(dir) {
        this.dir.x = dir.x;
        this.dir.y = dir.y;
    }
    changeDir(x, y) {
        this.dir.x = x;
        this.dir.y = y;
    }

    move() {
        for (let i=this.body.length-1; i>0; i--) {
            this.body[i].x = this.body[i-1].x;
            this.body[i].y = this.body[i-1].y;
        }
        this.body[0].x += this.dir.x;
        this.body[0].y += this.dir.y;

        for (let i=1; i<this.body.length; i++)
            if (this.body[0].x === this.body[i].x && this.body[0].y === this.body[i].y)
                return 1

        return 0;
    }
}