let Circle = function (x, y, color, radius) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.radius = radius;
    this.render = function (canvas) {
        canvas.beginPath();
        canvas.fillStyle = this.color;
        canvas.arc(this.x, this.y, this.radius, 0, 2 * Math.PI);
        canvas.fill();
    }
};
let circle = new Circle(10, 10, 100, "#000000");
circle.render(document.getElementById("canvas").getContext("2d"));
