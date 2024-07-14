
export const canvasInit = (canvasRef) => {
    // infinite canvas
    const context = canvasRef.current.getContext('2d');
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight;
}



class Car {
    constructor(x, y, width, height) {
        this.x = x || 0;
        this.y = y || 0;
        this.width = width || 100;
        this.height = height || 50;
        this.speed = 3;
        this.direction = 'left';
    }

    draw(context) {
        context.fillStyle = 'red';
        context.fillRect(this.x, this.y, this.width, this.height);
    }

    update() {
        if (this.direction === 'right') {
            this.x += this.speed;
        } else {
            this.x -= this.speed;
        }

        if (this.x > window.innerWidth) {
            this.direction = 'left';
        } else if (this.x < 0) {
            this.direction = 'right';
        }
   
    }
}

export function main(canvasRef) {
    canvasInit(canvasRef);
    const context = canvasRef.current.getContext('2d');
    const car = new Car(40, 50, 100, 50);

    const loop = () => {
        context.clearRect(0, 0, window.innerWidth, window.innerHeight);
        car.draw(context);
        car.update();
        requestAnimationFrame(loop);
    }

    loop();

    // requestAnimationFrame(() => main(canvasRef));
}