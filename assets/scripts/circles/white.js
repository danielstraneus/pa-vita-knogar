const ctx = canvas.getContext("2d");

class wc1 {
  constructor() {
    this.xPos = canvas.width / 2 + 100 + Math.random() * 3 + 1;
    this.yPos = canvas.height / 2 - 100 + Math.random() * 3 + 1;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
    this.maxSize = Math.random() * 175 + 125;
    this.initialSize = Math.random() * 175 + 125;
    this.velSize = Math.random() * 2 - 0.05;
    this.angle = 0;
  }
  update() {
    this.xPos += this.speedX + Math.sin(this.angle);
    this.yPos += this.speedY + Math.sin(this.angle);
    this.initialSize += this.velSize / 8;
    this.angle += 0.015;
    if (this.initialSize < this.maxSize) {
      ctx.beginPath();
      ctx.arc(this.xPos, this.yPos, this.initialSize / 2, 0, Math.PI * 4);
      ctx.strokeStyle = "rgba(255,255,255,0.005)";
      ctx.lineWidth = 0.5;
      ctx.stroke();
      requestAnimationFrame(this.update.bind(this));
    }
  }
}

class wc2 {
  constructor() {
    this.xPos = canvas.width / 2 - 20 + Math.random() * 3 + 1;
    this.yPos = canvas.height / 2 + 40 + Math.random() * 3 + 1;
    this.speedX = Math.random() * 4 - 1;
    this.speedY = Math.random() * 4 - 3;
    this.maxSize = Math.random() * 125 + 115;
    this.initialSize = Math.random() * 75 + 65;
    this.velSize = Math.random() * 2 + 0.05;
    this.angle = 0;
  }
  update() {
    this.xPos += this.speedX + Math.sin(this.angle);
    this.yPos += this.speedY + Math.sin(this.angle);
    this.initialSize += this.velSize / 2;
    this.angle += 0.015;
    if (this.initialSize < this.maxSize) {
      ctx.beginPath();
      ctx.arc(this.xPos, this.yPos, this.initialSize / 2 + 30, 0, Math.PI * 4);
      ctx.strokeStyle = "rgba(255,255,255,0.010)";
      ctx.lineWidth = 0.5;
      ctx.stroke();
      requestAnimationFrame(this.update.bind(this));
    }
  }
}

class wc3 {
  constructor() {
    this.xPos = canvas.width / 2 - 120 + Math.random() * 3 + 1;
    this.yPos = canvas.height / 2 + 50 + Math.random() * 3 + 1;
    this.speedX = Math.random() * 4 - 1;
    this.speedY = Math.random() * 4 - 3;
    this.maxSize = Math.random() * 125 + 115;
    this.initialSize = Math.random() * 75 + 65;
    this.velSize = Math.random() * 2 + 0.05;
    this.angle = 0;
  }
  update() {
    this.xPos += this.speedX + Math.sin(this.angle);
    this.yPos += this.speedY + Math.sin(this.angle);
    this.initialSize += this.velSize / 2;
    this.angle += 0.015;
    if (this.initialSize < this.maxSize) {
      ctx.beginPath();
      ctx.arc(this.xPos, this.yPos, this.initialSize / 2, 0, Math.PI * 4);
      ctx.strokeStyle = "rgba(255,255,255,0.010)";
      ctx.lineWidth = 0.5;
      ctx.stroke();
      requestAnimationFrame(this.update.bind(this));
    }
  }
}

class wc4 {
  constructor() {
    this.xPos = canvas.width / 2 - 270 + Math.random() * 3 + 1;
    this.yPos = canvas.height / 2 - 100 + Math.random() * 3 + 1;
    this.speedX = Math.random() * 2 - 2;
    this.speedY = Math.random() * 4 - 2;
    this.maxSize = Math.random() * 75 + 55;
    this.initialSize = Math.random() * 35 + 25;
    this.velSize = Math.random() * 2 + 0.05;
    this.angle = 0;
  }
  update() {
    this.xPos += this.speedX + Math.sin(this.angle);
    this.yPos += this.speedY + Math.sin(this.angle);
    this.initialSize += this.velSize / 4;
    this.angle += 0.015;
    if (this.initialSize < this.maxSize) {
      ctx.beginPath();
      ctx.arc(this.xPos, this.yPos, this.initialSize / 2, 0, Math.PI * 4);
      ctx.strokeStyle = "rgba(255,255,255,0.005)";
      ctx.lineWidth = 0.5;
      ctx.stroke();
      requestAnimationFrame(this.update.bind(this));
    }
  }
}
class wc5 {
  constructor() {
    this.xPos = canvas.width / 2 + Math.random() * 3 + 1;
    this.yPos = canvas.height / 2 + Math.random() * 3 + 1;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
    this.maxSize = Math.random() * 175 + 125;
    this.initialSize = Math.random() * 175 + 155;
    this.velSize = Math.random() * 2 - 0.05;
    this.angle = 0;
  }
  update() {
    this.xPos += this.speedX + Math.sin(this.angle);
    this.yPos += this.speedY + Math.sin(this.angle);
    this.initialSize += this.velSize / 8;
    this.angle += 0.015;
    if (this.initialSize < this.maxSize) {
      ctx.beginPath();
      ctx.arc(this.xPos, this.yPos, this.initialSize / 2, 0, Math.PI * 4);
      ctx.strokeStyle = "rgba(255,255,255,0.01)";
      ctx.lineWidth = 0.5;
      ctx.stroke();
      requestAnimationFrame(this.update.bind(this));
    }
  }
}
class wc6 {
  constructor() {
    this.xPos = canvas.width / 2 + 40 + Math.random() * 3 + 1;
    this.yPos = canvas.height / 2 - 100 + Math.random() * 3 + 1;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
    this.maxSize = Math.random() * 155 + 125;
    this.initialSize = Math.random() * 135 + 95;
    this.velSize = Math.random() * 2 - 0.05;
    this.angle = 0;
  }

  update() {
    this.xPos += this.speedX + Math.sin(this.angle);
    this.yPos += this.speedY + Math.sin(this.angle);
    this.initialSize += this.velSize / 8;
    this.angle += 0.015;
    if (this.initialSize < this.maxSize) {
      ctx.beginPath();
      ctx.arc(this.xPos, this.yPos, this.initialSize / 2, 0, Math.PI * 4);
      ctx.strokeStyle = "rgba(255,255,255,0.01)";
      ctx.lineWidth = 0.5;
      ctx.stroke();
      requestAnimationFrame(this.update.bind(this));
    }
  }
}
class wc7 {
  constructor() {
    this.xPos = canvas.width / 2 + 40 + Math.random() * 3 + 1;
    this.yPos = canvas.height / 2 - 100 + Math.random() * 3 + 1;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
    this.maxSize = Math.random() * 355 + 325;
    this.initialSize = Math.random() * 275 + 225;
    this.velSize = Math.random() * 2 - 0.05;
    this.angle = 0;
  }
  update() {
    this.xPos += this.speedX + Math.sin(this.angle);
    this.yPos += this.speedY + Math.sin(this.angle);
    this.initialSize += this.velSize / 8;
    this.angle += 0.015;
    if (this.initialSize < this.maxSize) {
      ctx.beginPath();
      ctx.arc(this.xPos, this.yPos, this.initialSize / 2, 0, Math.PI * 4);
      ctx.strokeStyle = "rgba(255,255,255,0.015)";
      ctx.lineWidth = 0.5;
      ctx.stroke();
      requestAnimationFrame(this.update.bind(this));
    }
  }
}
class wc8 {
  constructor() {
    this.xPos = canvas.width / 2 + 40 + Math.random() * 3 + 1;
    this.yPos = canvas.height / 2 - 100 + Math.random() * 3 + 1;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
    this.maxSize = Math.random() * 125 + 115;
    this.initialSize = Math.random() * 95 + 90;
    this.velSize = Math.random() * 2 - 0.05;
    this.angle = 0;
  }
  update() {
    this.xPos += this.speedX + Math.sin(this.angle);
    this.yPos += this.speedY + Math.sin(this.angle);
    this.initialSize += this.velSize / 8;
    this.angle += 0.015;
    if (this.initialSize < this.maxSize) {
      ctx.beginPath();
      ctx.arc(this.xPos, this.yPos, this.initialSize / 2, 0, Math.PI * 4);
      ctx.strokeStyle = "rgba(255,255,255,0.09)";
      ctx.lineWidth = 0.5;
      ctx.stroke();
      requestAnimationFrame(this.update.bind(this));
    }
  }
}

export { wc1, wc2, wc3, wc4, wc5, wc6, wc7, wc8 };
