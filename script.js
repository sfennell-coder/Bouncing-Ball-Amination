//U86364709


const canvas = document.querySelector("#canvas");
const ctx = canvas.getContext("2d");

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
    drawBall(){
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI*2, false);
        ctx.fill();
        ctx.closePath();
    }
    // Update method for handling movement of ball
    updateBall(){
        this.x += this.dx;
        this.y += this.dy;
        if(this.x + this.dx > canvas.width - this.radius|| this.x + this.dx < this.radius){
            this.dx = -this.dx;
        }
        if(this.y + this.dy > canvas.height - this.radius || this.y + this.dy < this.radius){
            this.dy = -this.dy;
        }
    }
    draw(){
        ctx.clearRect(0, 0, width, height);
        this.drawBall();
    }
    // Animation with interval
    animationLogic() {
        setInterval(() => {
            this.updateBall();
            this.draw();
    }, 15); 
}


}


const testData = new Ball(200, 160, 20, 2, 2, "red");

testData.drawBall();
testData.animationLogic();
