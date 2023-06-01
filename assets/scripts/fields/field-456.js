const ctx = canvas.getContext("2d");

class output4layer1 {
  constructor() {
    this.xPos = (Math.random() * canvas.width) / 8 + canvas.width / 3 - 100;
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
    this.angle += 0.6;
    if (this.initialSize < this.maxSize) {
      ctx.beginPath();
      ctx.arc(this.xPos, this.yPos, this.initialSize, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(188,140,140,0.01)";
      ctx.strokeStyle = "rgba(0,200,230,0.01)";
      ctx.lineWidth = Math.random() * 0.01 + 0.4;
      ctx.fill();
      ctx.stroke();
      requestAnimationFrame(this.update.bind(this));
    }
  }
}

class output4layer2 {
  constructor() {
    this.xPos = (Math.random() * canvas.width) / 8 + canvas.width / 3 - 100;
    this.yPos = (Math.random() * canvas.height) / 8 + 330;
    this.speedX = Math.random() * 4 - 2;
    this.speedY = Math.random() * 4 - 2;
    this.maxSize = Math.random() * 2 + 10;
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
      ctx.fillStyle = "rgba(255, 255, 255, 0.00)";
      ctx.strokeStyle = "rgba(255,255,255,0.004)";
      ctx.lineWidth = 100;
      ctx.stroke();
      requestAnimationFrame(this.update.bind(this));
    }
  }
}
class output5layer1 {
  constructor() {
    this.xPos = (Math.random() * canvas.width) / 8 + canvas.width / 3 - 50;
    this.yPos = (Math.random() * canvas.height) / 8 + 50;
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
    this.angle += 0.6;
    if (this.initialSize < this.maxSize) {
      ctx.beginPath();
      ctx.arc(this.xPos, this.yPos, this.initialSize, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(79,54,26, 0.01)";
      ctx.strokeStyle = "rgba(79,54,26, 0.01)";
      ctx.lineWidth = Math.random() * 0.01 + 0.4;
      ctx.fill();
      ctx.stroke();
      requestAnimationFrame(this.update.bind(this));
    }
  }
}

class output5layer2 {
  constructor() {
    this.xPos = (Math.random() * canvas.width) / 8 + canvas.width / 3 - 100;
    this.yPos = (Math.random() * canvas.height) / 8 + 100;
    this.speedX = Math.random() * 4 - 2;
    this.speedY = Math.random() * 4 - 2;
    this.maxSize = Math.random() * 2 + 10;
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
      ctx.fillStyle = "rgba(255, 255, 255, 0.00)";
      ctx.strokeStyle = "rgba(255,255,255,0.004)";
      ctx.lineWidth = 100;
      ctx.fill();
      ctx.stroke();
      requestAnimationFrame(this.update.bind(this));
    }
  }
}

class output6layer1 {
  constructor() {
    this.xPos = (Math.random() * canvas.width) / 8 + canvas.width / 3 + 350;
    this.yPos = (Math.random() * canvas.height) / 8 + 300;
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
      ctx.fillStyle = "rgba(246,103,0,0.01)";
      ctx.strokeStyle = "rgba(246,103,0,0.01)";
      ctx.lineWidth = Math.random() * 0.05 + 40.4;
      ctx.fill();
      ctx.stroke();
      requestAnimationFrame(this.update.bind(this));
    }
  }
}
class output6layer2 {
  constructor() {
    this.xPos = (Math.random() * canvas.width) / 8 + canvas.width / 3 + 350;
    this.yPos = (Math.random() * canvas.height) / 8 + 280;
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
      ctx.fillStyle = "rgba(232,138,52, 0.009)";
      ctx.strokeStyle = "rgba(232,138,52, 0.009)";
      ctx.lineWidth = 10;
      ctx.fill();
      ctx.stroke();
      requestAnimationFrame(this.update.bind(this));
    }
  }
}

export {
  output4layer1,
  output4layer2,
  output5layer1,
  output5layer2,
  output6layer1,
  output6layer2,
};
