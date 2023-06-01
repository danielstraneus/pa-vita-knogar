const ctx = canvas.getContext("2d");

class green1 {
  constructor() {
    const colorArr = [
      "rgba(255,255,255,1.0)",
      "rgba(255,255,255,0.9)",
      "rgba(255,255,255,0.8)",
      "rgba(255,255,255,0.7)",
      "rgba(255,255,255,0.6)",
      "rgba(255,255,255,0.5)",
    ];
    const randomNum = Math.floor(Math.random() * 7);
    this.color = colorArr[randomNum];
    this.xPos = canvas.width / canvas.width / 2 + canvas.width / 2;
    this.yPos = Math.random() * canvas.height;
    this.maxSize = Math.random() * 0.5 + 1.1;
    this.initialSize = Math.random() * 0.05 + 1.1;
    this.speedX = Math.random() * 0.5 - 0.25;
    this.speedY = Math.random() * 0.5 - 0.25;
    this.velSize = Math.random() * 0.5 + 0.005;
    this.angle = 0;
  }
  update() {
    this.xPos += this.speedX + Math.cos(this.angle);
    this.yPos += this.speedY + Math.sin(this.angle) * 2;
    this.initialSize += this.vs / 24;
    this.angle += 0.004;
    if (this.initialSize < this.maxSize) {
      ctx.beginPath();
      ctx.arc(this.xPos + 1, this.yPos, this.initialSize, 0, Math.PI * 4);
      ctx.fillStyle = this.color;
      ctx.strokeStyle = this.color;
      ctx.lineWidth = 0.1;
      ctx.stroke();
      requestAnimationFrame(this.update.bind(this));
    }
  }
}

class green2 {
  constructor() {
    const colorArr = [
      "rgba(255,255,255,1.0)",
      "rgba(255,255,255,0.9)",
      "rgba(255,255,255,0.8)",
      "rgba(255,255,255,0.7)",
      "rgba(255,255,255,0.6)",
      "rgba(255,255,255,0.5)",
    ];
    const randomNum = Math.floor(Math.random() * 7);
    this.color = colorArr[randomNum];
    this.xPos = canvas.width / canvas.width / 2 + canvas.width / 2;
    this.yPos = Math.random() * canvas.height;
    this.maxSize = Math.random() * 0.5 + 1.1;
    this.initialSize = Math.random() * 0.05 + 1.1;
    this.speedX = Math.random() * 0.5 - 0.25;
    this.speedY = Math.random() * 0.5 - 0.25;
    this.velSize = Math.random() * 0.5 + 0.005;
    this.angle = 0;
  }
  update() {
    this.xPos += this.speedX - Math.cos(this.angle);
    this.yPos += this.speedY - Math.sin(this.angle) * 2;
    this.initialSize += this.velSize / 24;
    this.angle += 0.004;
    if (this.initialSize < this.maxSize) {
      ctx.beginPath();
      ctx.arc(this.xPos + 1, this.yPos, this.initialSize, 0, Math.PI * 4);
      ctx.fillStyle = this.color;
      ctx.strokeStyle = this.color;
      ctx.lineWidth = 0.1;
      ctx.stroke();
      requestAnimationFrame(this.update.bind(this));
    }
  }
}

class green3 {
  constructor() {
    const colorArr = [
      "rgba(255,0,0,0.3)",
      "rgba(0,255,0,0.3)",
      "rgba(0,0,255,0.3)",
      "rgba(255,255,255,0.3)",
      "rgba(0,0,0,0.3)",
      "rgba(255,0,255,0.3)",
    ];
    const randomNum = Math.floor(Math.random() * 7);
    this.color = colorArr[randomNum];
    this.xPos = Math.random() * canvas.width;
    this.yPos = Math.random() * canvas.height;
    this.maxSize = Math.random() * 1 + 0.5;
    this.initialSize = Math.random() * 0.3 + 0.1;
    this.speedX = Math.random() * 16 - 4;
    this.speedY = Math.random() * 16 - 4;
    this.velSize = 16;
    this.angle = 0;
  }
  update() {
    this.xPos += this.speedX + Math.sin(this.angle);
    this.yPos += this.speedY + Math.sin(this.angle);
    this.initialSize += this.velSize / 24;
    this.angle += 0.02;
    if (this.initialSize < this.maxSize) {
      ctx.beginPath();
      ctx.arc(this.xPos, this.yPos, this.initialSize, 0, Math.PI * 4);
      ctx.fillStyle = this.color;
      ctx.strokeStyle = this.color;
      ctx.lineWidth = Math.random() * 0.3 + 1.3;
      ctx.stroke();
      ctx.fill();
      requestAnimationFrame(this.update.bind(this));
    }
  }
}

class lastCircle {
  constructor() {
    this.xPos = canvas.width / 2 + Math.random() * 3 + 1;
    this.yPos = canvas.height / 2 + Math.random() * 3 + 1;
    this.speedX = Math.random() * 4 - 1;
    this.speedY = Math.random() * 4 - 3;
    this.maxSize = Math.random() * 125 + 115;
    this.initialSize = Math.random() * 75 + 65;
    this.velSize = Math.random() * 2 + 0.05;
    this.angle = Math.random() * 6;
  }
  update() {
    this.xPos += this.speedX + Math.sin(this.angle);
    this.yPos += this.speedY + Math.sin(this.angle);
    this.initialSize += this.velSize / 2;
    this.angle += 0.015;
    if (this.initialSize < this.maxSize) {
      ctx.beginPath();
      ctx.arc(this.xPos, this.yPos, this.initialSize / 2, 0, Math.PI * 4);
      ctx.strokeStyle = "rgba(255,0,255,0.05)";
      ctx.lineWidth = 0.5;
      ctx.stroke();
      requestAnimationFrame(this.update.bind(this));
    }
  }
}

export { green1, green2, green3, lastCircle };
