const WIDTH = 1400;
const HEIGHT = 800;

class particle{
    constructor(bullet, deg){
        this.bullet = bullet;
        this.ctx = this.bullet.ctx;
        this.x = this.bullet.x;
        this.y = this.bullet.y;

    }

    update(){

    }

    draw(){
        this.ctx.fillStyle = '#ff0000';
        this.ctx.beginPath();
        this.ctx.arc(this.x, this.y, 50, 0, 2*Math.PI);
        this.ctx.fill();
    }
}

class bullet{
    constructor(fireworks){
        this.fireworks = fireworks;
        this.ctx = fireworks.ctx;
        this.x = 300;
        this.y = 300;
        this.color = Math.floor(Math.random() * 255) + ',' +
                    Math.floor(Math.random() * 255) + ',' + 
                    Math.floor(Math.random() * 255);
        this.particles = [];
        let newParticle = new particle(this, 0);
        this.particles.push(newParticle);
    }

    update(){
        this.particles.forEach(particle => particle.update());
    }

    draw(){
        this.particles.forEach(particle => particle.draw());
    }
}

class fireworks{
    constructor(){
        this.canvas = document.createElement('canvas');
        this.ctx = this.canvas.getContext('2d');
        this.canvas.width = WIDTH;
        this.canvas.height = HEIGHT;
        document.body.appendChild(this.canvas);
        this.bullets = [];
        let newBullet = new bullet(this);
        this.bullets.push(newBullet);
        this.loop();
    }

    loop(){
        this.bullets.forEach(bullet => bullet.update());
        this.draw();
        setTimeout(()=>this.loop, 20);
    }

    clearScreen(){
        this.ctx.fillStyle = '#000000';
        this.ctx.fillRect(0, 0, WIDTH, HEIGHT);
    }

    draw(){
        this.clearScreen();
        this.bullets.forEach(bullet => bullet.draw());
    }
}
var f = new fireworks();