//U86364709


let canvas = document.querySelector("#animation");
let ctx = canvas.getContext("2d");

let width = canvas.width;
let height = canvas.height;

//Ball constructor with inital properties
class Ball {
    constructor(x, y, radius, dx, dy, color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx;
        this.dy = dy;
        this.color = color;
    }
    // Draw method
    drawBall(ctx){
        ctx.fillStyle = this.color;
        ctx.beginpath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        ctx.fill();
    }
    // Update method for handling movement of ball
    updateBall(canvas){
        this.x += this.dx;
        this.y += this.dy;

        if(this.x + this.radius > canvas.width || this.x - this.radius  <= 0 ){
            this.dx -= this.dx;
        }
        if(this.y + this.radius > canvas.height || this.y - this.radius <= 0){
            this.dy -= this.dy;
        }
    }
    draw(){
        ctx.clearRect(0, 0, width, height);
        this.drawBall();
    }
}


