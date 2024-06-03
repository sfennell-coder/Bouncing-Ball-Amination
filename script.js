//U86364709

//Create ball constructor with inital properties
class Ball {
    constructor(x, y, radius, dx, dy, color){
        this.x = x;
        this.y = y;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
    }
    drawBall(ctx){
        ctx.beginpath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
};
let canvas = document.querySelector("#canvas");
let ctx = canvas.getContext("2d");