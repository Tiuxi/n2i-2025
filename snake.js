const allImagesSrc = ["test1.png", "test2.png"];

class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
}

class Snake {
    constructor(coordx, coordy, len, tileSize, winSize) {
        this.body = [];
        this.color = [50, 50, 70, 220];
        this.dir = new Point(1, 0);
        this.allImages = [];
        this.images = [];

        this.winSize = winSize;
        this.tileSize = tileSize;

        // load images
        for (let i=0; i<allImagesSrc.length; i++) {
            this.allImages.push(loadImage(allImagesSrc[i]));
        }

        for (let x = 0; x < len; x++) {
            this.body.push(new Point(coordx - x, coordy));
            this.images.push(int(Math.random() * this.allImages.length));
        }
    }

    draw() {
        for (let i = 0; i < this.body.length; i++) {
            fill(this.color);
            rect(this.body[i].x * tileSize, this.body[i].y * tileSize, tileSize, tileSize);
            //image(this.allImages[this.images[i]], this.body[i].x * this.tileSize, this.body[i].y * this.tileSize);
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

    addBodyPart() {
        this.body.unshift(new Point(this.body[0].x + this.dir.x, this.body[0].y + this.dir.y));
        this.images.push(int(Math.random() * this.allImages.length));
    }
}