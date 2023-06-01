const ctx = canvas.getContext("2d");

class output1layer1 {
  constructor() {
    this.xPos = (Math.random() * canvas.width) / 8 + canvas.width / 3 + 20;
    this.yPos = (Math.random() * canvas.height) / 8 + 100;
    this.speedX = Math.random() * 4 - 2;
    this.speedY = Math.random() * 4 - 2;
    this.maxSize = Math.random() * 12 + 10;
    this.initialSize = Math.random() * 5 + 1;
    this.velSize = Math.random() * 1 + 0;
    this.angle = 0;
  }
  update() {
    this.xPos += this.speedX + Math.sin(this.angle);
    this.yPos += this.speedY + Math.sin(this.angle);
    this.initialSize += this.velSize;
    this.angle += 4;
    if (this.initialSize < this.maxSize) {
      ctx.beginPath();
      ctx.arc(this.xPos, this.yPos, this.initialSize, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(132,186,176,0.02)";
      ctx.fill();
      requestAnimationFrame(this.update.bind(this));
    }
  }
}

class output1layer2 {
  constructor() {
    this.xPos = (Math.random() * canvas.width) / 16 + canvas.width / 3 + 200;
    this.yPos = (Math.random() * canvas.height) / 16 + 200;
    this.speedX = Math.random() * 4 - 2;
    this.speedY = Math.random() * 4 - 2;
    this.maxSize = Math.random() * 2 + 10;
    this.initialSize = Math.random() * 2 + 1;
    this.velSize = Math.random() * 1 + 0.5;
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
      ctx.strokeStyle = "rgba(255,255,255,0.004)";
      ctx.lineWidth = 100;
      ctx.stroke();
      requestAnimationFrame(this.update.bind(this));
    }
  }
}

class output2layer1 {
  constructor() {
    this.xPos = (Math.random() * canvas.width) / 4 + canvas.width / 3;
    this.yPos = (Math.random() * canvas.height) / 6 + 200;
    this.speedX = Math.random() * 4 - 2;
    this.speedY = Math.random() * 4 - 2;
    this.maxSize = Math.random() * 9 + 5;
    this.initialSize = Math.random() * 3 + 1;
    this.velSize = Math.random() * 2 + 1;
    this.angle = Math.random() * 4;
  }
  update() {
    this.xPos += this.speedX + Math.sin(this.angle);
    this.yPos += this.speedY + Math.sin(this.angle / 2);
    this.initialSize += this.velSize / 2;
    this.angle += 3;
    if (this.initialSize < this.maxSize) {
      ctx.beginPath();
      ctx.arc(this.xPos, this.yPos, this.initialSize, 0, Math.PI * 2);
      ctx.fillStyle = "rgba(150,120,18,0.05)";
      ctx.fill();
      requestAnimationFrame(this.update.bind(this));
    }
  }
}

class output2layer2 {
  constructor() {
    this.xPos = (Math.random() * canvas.width) / 4 + canvas.width / 3;
    this.yPos = (Math.random() * canvas.height) / 8 + 150;
    this.speedX = Math.random() * 4 - 2;
    this.speedY = Math.random() * 4 - 2;
    this.maxSize = Math.random() * 21 + 20;
    this.initialSize = Math.random() * 2 + 0.1;
    this.velSize = Math.random() * 0.5 + 0.005;
    this.angle = Math.random() * 6.2;
  }
  update() {
    this.xPos += this.speedX + Math.sin(this.angle / 2);
    this.yPos += this.speedY + Math.sin(this.angle);
    this.initialSize += this.velSize / 8;
    this.angle += 0.1;
    if (this.initialSize < this.maxSize / 4) {
      ctx.beginPath();
      ctx.arc(this.xPos, this.yPos, this.initialSize, 0, Math.PI * 4);
      ctx.strokeStyle = "rgba(255,255,255,0.004)";
      ctx.lineWidth = 50;
      ctx.stroke();
      requestAnimationFrame(this.update.bind(this));
    }
  }
}

class output3layer1 {
  constructor() {
    this.xPos = (Math.random() * canvas.width) / 8 + canvas.width / 3 + 200;
    this.yPos = (Math.random() * canvas.height) / 8 + 250;
    this.speedX = Math.random() * 4 - 2;
    this.speedY = Math.random() * 4 - 2;
    this.maxSize = Math.random() * 12 + 10;
    this.initialSize = Math.random() * 2 + 1;
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
      ctx.fillStyle = "rgba(68,55,36,0.04)";
      ctx.lineWidth = Math.random() * 0.05 + 40.4;
      ctx.fill();
      requestAnimationFrame(this.update.bind(this));
    }
  }
}

class output3layer2 {
  constructor() {
    this.xPos = (Math.random() * canvas.width) / 4 + canvas.width / 3 + 100;
    this.yPos = (Math.random() * canvas.height) / 8 + 270;
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
      ctx.fillStyle = "rgba(229,241,230,0.005)";
      ctx.strokeStyle = "rgba(229,241,230,0.005)";
      ctx.lineWidth = 100;
      ctx.fill();
      ctx.stroke();
      requestAnimationFrame(this.update.bind(this));
    }
  }
}

export {
  output1layer1,
  output1layer2,
  output2layer1,
  output2layer2,
  output3layer1,
  output3layer2,
};
