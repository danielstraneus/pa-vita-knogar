const ctx = canvas.getContext("2d");

class output7layer1 {
  constructor() {
    this.xPos = (Math.random() * canvas.width) / 8 + canvas.width / 3 - 100;
    this.yPos = (Math.random() * canvas.height) / 8 + 200;
    this.speedX = Math.random() * 4 - 2;
    this.speedY = Math.random() * 4 - 2;
    this.maxSize = Math.random() * 12 + 12;
    this.initialSize = Math.random() * 1.5 + 0.1;
    this.velSize = Math.random() * 0.5 + 0.005;
    this.angle = 0;
  }
  update() {
    this.xPos += this.speedX + Math.sin(this.angle);
    this.yPos += this.speedY + Math.sin(this.angle);
    this.initialSize += this.velSize;
    this.angle += 0.03;
    if (this.initialSize < this.maxSize) {
      ctx.beginPath();
      ctx.arc(this.xPos, this.yPos, this.initialSize, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(107,161,126,0.01)";
      ctx.strokeStyle = "rgba(107,161,126,0.01)";
      ctx.lineWidth = Math.random() * 0.05 + 40.4;
      ctx.fill();
      ctx.stroke();
      requestAnimationFrame(this.update.bind(this));
    }
  }
}

class output7layer2 {
  constructor() {
    this.xPos = (Math.random() * canvas.width) / 8 + canvas.width / 3 - 120;
    this.yPos = (Math.random() * canvas.height) / 8 + 200;
    this.speedX = Math.random() * 4 - 2;
    this.speedY = Math.random() * 4 - 2;
    this.maxSize = Math.random() * 3 + 20;
    this.initialSize = Math.random() * 2 + 0.1;
    this.velSize = Math.random() * 0.5 + 0.005;
    this.angle = 0;
  }
  update() {
    this.xPos += this.speedX + Math.sin(this.angle / 2);
    this.yPos += this.speedY + Math.sin(this.angle);
    this.initialSize += this.velSize / 8;
    this.angle += 0.1;
    if (this.initialSize < this.maxSize / 4) {
      ctx.beginPath();
      ctx.arc(this.xPos, this.yPos, this.initialSize, 0, Math.PI * 4);
      ctx.fillStyle = "rgba(138,193,182,0.01)";
      ctx.strokeStyle = "rgba(138,193,182,0.01)";
      ctx.lineWidth = 10;
      ctx.fill();
      ctx.stroke();
      requestAnimationFrame(this.update.bind(this));
    }
  }
}

class output8layer1 {
  constructor() {
    this.xPos = (Math.random() * canvas.width) / 8 + canvas.width / 3 - 150;
    this.yPos = (Math.random() * canvas.height) / 8 + 350;
    this.speedX = Math.random() * 4 - 2;
    this.speedY = Math.random() * 4 - 2;
    this.maxSize = Math.random() * 12 + 12;
    this.initialSize = Math.random() * 1.5 + 0.1;
    this.velSize = Math.random() * 0.5 + 0.005;
    this.angle = 0;
  }
  update() {
    this.xPos += this.speedX + Math.sin(this.angle);
    this.yPos += this.speedY + Math.sin(this.angle);
    this.initialSize += this.velSize;
    this.angle += 0.03;
    if (this.initialSize < this.maxSize) {
      ctx.beginPath();
      ctx.arc(this.xPos, this.yPos, this.initialSize, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(120,62,38,0.01)";
      ctx.strokeStyle = "rgba(120,62,38,0.01)";
      ctx.lineWidth = Math.random() * 0.05 + 40.4;
      ctx.fill();
      ctx.stroke();
      requestAnimationFrame(this.update.bind(this));
    }
  }
}

class output8layer2 {
  constructor() {
    this.xPos = (Math.random() * canvas.width) / 8 + canvas.width / 3 - 150;
    this.yPos = (Math.random() * canvas.height) / 8 + 340;
    this.speedX = Math.random() * 4 - 2;
    this.speedY = Math.random() * 4 - 2;
    this.maxSize = Math.random() * 3 + 20;
    this.initialSize = Math.random() * 2 + 0.1;
    this.velSize = Math.random() * 0.5 + 0.005;
    this.angle = 0;
  }

  update() {
    this.xPos += this.speedX + Math.sin(this.angle / 2);
    this.yPos += this.speedY + Math.sin(this.angle);
    this.initialSize += this.velSize / 8;
    this.angle += 0.1;
    if (this.initialSize < this.maxSize / 4) {
      ctx.beginPath();
      ctx.arc(this.xPos, this.yPos, this.initialSize, 0, Math.PI * 4);
      ctx.fillStyle = "rgba(213,160,169,0.01)";
      ctx.strokeStyle = "rgba(213,160,169,0.01)";
      ctx.lineWidth = 10;
      ctx.fill();
      ctx.stroke();
      requestAnimationFrame(this.update.bind(this));
    }
  }
}

class output9layer1 {
  constructor() {
    this.xPos = (Math.random() * canvas.width) / 8 + canvas.width / 2;
    this.yPos = (Math.random() * canvas.height) / 8 + canvas.height / 2;
    this.speedX = Math.random() * 3 - 1.5;
    this.speedY = Math.random() * 3 - 1.5;
    this.maxSize = Math.random() * 3 + 20;
    this.initialSize = Math.random() * 2 + 0.1;
    this.velSize = Math.random() * 0.5 + 0.005;
    this.angle = Math.random() * 6.2;
  }
  update() {
    this.xPos += this.speedX + Math.sin(this.angle / 2);
    this.yPos += this.speedY + Math.sin(this.angle);
    this.initialSize += this.velSize / 8;
    this.angle += 0.8;
    if (this.initialSize < this.maxSize / 4) {
      ctx.beginPath();
      ctx.arc(this.xPos, this.yPos, this.initialSize, 0, Math.PI * 4);
      ctx.fillStyle = "rgba(234,220,189,0.01)";
      ctx.strokeStyle = "rgba(234,220,189,0.01)";
      ctx.lineWidth = 10;
      ctx.fill();
      ctx.stroke();
      requestAnimationFrame(this.update.bind(this));
    }
  }
}

class output9layer2 {
  constructor() {
    this.xPos = (Math.random() * canvas.width) / 8 + canvas.width / 2;
    this.yPos = (Math.random() * canvas.height) / 8 + canvas.height / 2;
    this.speedX = Math.random() * 4 - 2;
    this.speedY = Math.random() * 4 - 2;
    this.maxSize = Math.random() * 3 + 20;
    this.initialSize = Math.random() * 2 + 0.1;
    this.velSize = Math.random() * 0.5 + 0.005;
    this.angle = 0;
  }
  update() {
    this.xPos += this.speedX + Math.sin(this.angle / 2);
    this.yPos += this.speedY + Math.sin(this.angle);
    this.initialSize += this.velSize / 8;
    this.angle += 0.1;
    if (this.initialSize < this.maxSize / 4) {
      ctx.beginPath();
      ctx.arc(this.xPos, this.yPos, this.initialSize, 0, Math.PI * 4);
      ctx.fillStyle = "rgba(51,33,4,0.02)";
      ctx.strokeStyle = "rgba(51,33,4,0.02)";
      ctx.lineWidth = 5;
      ctx.fill();
      ctx.stroke();
      requestAnimationFrame(this.update.bind(this));
    }
  }
}

export {
  output7layer1,
  output7layer2,
  output8layer1,
  output8layer2,
  output9layer1,
  output9layer2,
};
