const winSize = new Point(900, 570);
const tileSize = 30;
const baseCoord = new Point(5, 5, 3);
const fps = 60;
const movePerSeconds = 10;

var mainSnake;
var time;
var food;
var running;

const drawBoard = () => {
    for (let x = 0; x <= winSize.x; x += tileSize) {
        for (let y = 0; y <= winSize.y; y += tileSize) {
            if (((x + y) / tileSize) % 2 === 0) {
                fill(100);
            } else {
                fill(200);
            }
            rect(x, y, tileSize, tileSize);
        }
    }
}

const gameOver = () => {
    fill(0);
    textSize(50);
    text("Game over", (winSize.x / 2) - 120, (winSize.y / 2) - 10);
    running = false;
}

const generateFood = () => {
    food = new Point(int(Math.random() * (winSize.x/tileSize)), int(Math.random() * (winSize.y/tileSize)));

    for (let i=0; i<mainSnake.body.length; i++) {
        if (food.x == mainSnake.body[i].x && food.y == mainSnake.body[i].y) {
            generateFood();
            break;
        }
    }
}

const drawFood = () => {
    fill([255, 0, 0]);
    rect(food.x * tileSize, food.y * tileSize, tileSize, tileSize);
}

function setup() {
    createCanvas(winSize.x, winSize.y);
    frameRate(fps);

    mainSnake = new Snake(baseCoord.x, baseCoord.y, 3, tileSize, winSize);
    time = 0;
    generateFood();
    running = true;
}

function draw() {
    if (running === false)return;

    if (mouseIsPressed === true) {
        fill(0);
        circle(mouseX, mouseY, 100);
    }

    strokeWeight(0);
    drawBoard();

    if (((time * movePerSeconds) % fps) === 0) {
        if (food.x === (mainSnake.body[0].x + mainSnake.dir.x) && food.y === (mainSnake.body[0].y + mainSnake.dir.y)) {
            mainSnake.body.unshift(new Point(mainSnake.body[0].x + mainSnake.dir.x, mainSnake.body[0].y + mainSnake.dir.y));
            generateFood();
        } else {
            if (mainSnake.move() === 1)
                gameOver();
        }
    }
    mainSnake.draw();
    drawFood();

    if (keyIsPressed) {
        switch (keyCode) {
            case UP_ARROW:
                if (mainSnake.dir.y != 1)
                    mainSnake.changeDir(0, -1);
                break;
            case DOWN_ARROW:
                if (mainSnake.dir.y != -1)
                    mainSnake.changeDir(0, 1);
                break;
            case LEFT_ARROW:
                if (mainSnake.dir.x != 1)
                    mainSnake.changeDir(-1, 0);
                break;
            case RIGHT_ARROW:
                if (mainSnake.dir.x != -1)
                    mainSnake.changeDir(1, 0);
                break;
        
            default:
                break;
        }
    }

    time++;
}