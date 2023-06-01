const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

class bc1 {
  constructor() {
    this.xPos = canvas.width / 2 + 100 + Math.random() * 3 + 1;
    this.yPos = canvas.height / 2 - 100 + Math.random() * 3 + 1;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
    this.maxSize = Math.random() * 200 + 150;
    this.size = Math.random() * 200 + 150;
    this.velSize = Math.random() * 2 - 0.05;
    this.angle = Math.random() * 6;
  }
  update() {
    this.xPos += this.speedX + Math.sin(this.angle);
    this.yPos += this.speedY + Math.sin(this.angle);
    this.size += this.velSize / 8;
    this.angle += 0.015;
    if (this.size < this.maxSize) {
      ctx.beginPath();
      ctx.arc(this.xPos, this.yPos, this.size + 10, 0, Math.PI * 4);
      ctx.fillStyle = "rgba(255, 255, 255, 0)";
      ctx.strokeStyle = "rgba(0,0,0,0.005)";
      ctx.lineWidth = 0.5;
      ctx.stroke();
      requestAnimationFrame(this.update.bind(this));
    }
  }
}
class bc2 {
  constructor() {
    this.xPos = canvas.width / 2 + 120 + Math.random() * 3 + 1;
    this.yPos = canvas.height / 2 + 200 + Math.random() * 3 + 1;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
    this.maxSize = Math.random() * 250 + 100;
    this.size = Math.random() * 200 + 50;
    this.velSize = Math.random() * 2 - 0.05;
    this.angle = Math.random() * 6;
  }
  update() {
    this.xPos += this.speedX + Math.sin(this.angle);
    this.yPos += this.speedY + Math.sin(this.angle);
    this.size += this.velSize / 8;
    this.angle += 0.015;
    if (this.size < this.maxSize) {
      ctx.beginPath();
      ctx.arc(this.xPos, this.yPos, this.size + 10, 0, Math.PI * 4);
      ctx.fillStyle = "rgba(255, 255, 255, 0)";
      ctx.strokeStyle = "rgba(0,0,0,0.005)";
      ctx.lineWidth = 0.5;
      ctx.stroke();
      requestAnimationFrame(this.update.bind(this));
    }
  }
}
class bc3 {
  constructor() {
    this.xPos = canvas.width / 2 - 120 + Math.random() * 3 + 1;
    this.yPos = canvas.height / 2 + 50 + Math.random() * 3 + 1;
    this.speedX = Math.random() * 4 - 1;
    this.speedY = Math.random() * 4 - 3;
    this.maxSize = Math.random() * 150 + 130;
    this.size = Math.random() * 100 + 90;
    this.velSize = Math.random() * 2 + 0.05;
    this.angle = Math.random() * 6;
  }
  update() {
    this.xPos += this.speedX + Math.sin(this.angle);
    this.yPos += this.speedY + Math.sin(this.angle);
    this.size += this.velSize / 2;
    this.angle += 0.015;
    if (this.size < this.maxSize) {
      ctx.beginPath();
      ctx.arc(this.xPos, this.yPos, this.size + 10, 0, Math.PI * 4);
      ctx.fillStyle = "rgba(255, 255, 255, 0)";
      ctx.strokeStyle = "rgba(0,0,0,0.010)";
      ctx.lineWidth = 0.5;
      ctx.stroke();
      requestAnimationFrame(this.update.bind(this));
    }
  }
}
class bc4 {
  constructor() {
    this.xPos = canvas.width / 2 - 270 + Math.random() * 3 + 1;
    this.yPos = canvas.height / 2 - 100 + Math.random() * 3 + 1;
    this.speedX = Math.random() * 2 - 2;
    this.speedY = Math.random() * 4 - 2;
    this.maxSize = Math.random() * 100 + 80;
    this.size = Math.random() * 60 + 50;
    this.velSize = Math.random() * 2 + 0.05;
    this.angle = Math.random() * 6;
  }
  update() {
    this.xPos += this.speedX + Math.sin(this.angle);
    this.yPos += this.speedY + Math.sin(this.angle);
    this.size += this.velSize / 4;
    this.angle += 0.015;
    if (this.size < this.maxSize) {
      ctx.beginPath();
      ctx.arc(this.xPos, this.yPos, this.size + 2, 0, Math.PI * 4);
      ctx.fillStyle = "rgba(255, 255, 255, 0)";
      ctx.strokeStyle = "rgba(0,0,0,0.005)";
      ctx.lineWidth = 0.5;
      ctx.stroke();
      requestAnimationFrame(this.update.bind(this));
    }
  }
}
class bc5 {
  constructor() {
    this.xPos = canvas.width / 2 + Math.random() * 3 + 1;
    this.yPos = canvas.height / 2 + Math.random() * 3 + 1;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
    this.maxSize = Math.random() * 200 + 150;
    this.size = Math.random() * 200 + 180;
    this.velSize = Math.random() * 2 - 0.05;
    this.angle = Math.random() * 6;
  }
  update() {
    this.xPos += this.speedX + Math.sin(this.angle);
    this.yPos += this.speedY + Math.sin(this.angle);
    this.size += this.velSize / 8;
    this.angle += 0.015;
    if (this.size < this.maxSize) {
      ctx.beginPath();
      ctx.arc(this.xPos, this.yPos, this.size + 2, 0, Math.PI * 4);
      ctx.fillStyle = "rgba(255, 255, 255, 0)";
      ctx.strokeStyle = "rgba(0,0,0,0.01)";
      ctx.lineWidth = 0.5;
      ctx.stroke();
      requestAnimationFrame(this.update.bind(this));
    }
  }
}
class bc6 {
  constructor() {
    this.xPos = canvas.width / 2 + 40 + Math.random() * 3 + 1;
    this.yPos = canvas.height / 2 - 100 + Math.random() * 3 + 1;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
    this.maxSize = Math.random() * 180 + 150;
    this.size = Math.random() * 160 + 120;
    this.velSize = Math.random() * 2 - 0.05;
    this.angle = Math.random() * 6;
  }
  update() {
    this.xPos += this.speedX + Math.sin(this.angle);
    this.yPos += this.speedY + Math.sin(this.angle);
    this.size += this.velSize / 8;
    this.angle += 0.015;
    if (this.size < this.maxSize) {
      ctx.beginPath();
      ctx.arc(this.xPos, this.yPos, this.size + 2, 0, Math.PI * 4);
      ctx.fillStyle = "rgba(255, 255, 255, 0)";
      ctx.strokeStyle = "rgba(0,0,0,0.01)";
      ctx.lineWidth = 0.5;
      ctx.stroke();
      requestAnimationFrame(this.update.bind(this));
    }
  }
}
class bc7 {
  constructor() {
    this.xPos = canvas.width / 2 + 40 + Math.random() * 3 + 1;
    this.yPos = canvas.height / 2 - 100 + Math.random() * 3 + 1;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
    this.maxSize = Math.random() * 380 + 350;
    this.size = Math.random() * 300 + 250;
    this.velSize = Math.random() * 2 - 0.05;
    this.angle = Math.random() * 6;
  }

  update() {
    this.xPos += this.speedX + Math.sin(this.angle);
    this.yPos += this.speedY + Math.sin(this.angle);
    this.size += this.velSize / 8;
    this.angle += 0.015;
    if (this.size < this.maxSize) {
      ctx.beginPath();
      ctx.arc(this.xPos, this.yPos, this.size + 2, 0, Math.PI * 4);
      ctx.fillStyle = "rgba(255, 255, 255, 0)";
      ctx.strokeStyle = "rgba(0,0,0,0.015)";
      ctx.lineWidth = 0.5;
      ctx.stroke();
      requestAnimationFrame(this.update.bind(this));
    }
  }
}
class bc8 {
  constructor() {
    this.xPos = canvas.width / 2 + 40 + Math.random() * 3 + 1;
    this.yPos = canvas.height / 2 - 100 + Math.random() * 3 + 1;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
    this.maxSize = Math.random() * 150 + 140;
    this.size = Math.random() * 120 + 110;
    this.velSize = Math.random() * 2 - 0.05;
    this.angle = Math.random() * 6;
  }
  update() {
    this.xPos += this.speedX + Math.sin(this.angle);
    this.yPos += this.speedY + Math.sin(this.angle);
    this.size += this.velSize / 8;
    this.angle += 0.015;
    if (this.size < this.maxSize) {
      ctx.beginPath();
      ctx.arc(this.xPos, this.yPos, this.size + 2, 0, Math.PI * 4);
      ctx.fillStyle = "rgba(255, 255, 255, 0)";
      ctx.strokeStyle = "rgba(0,0,0,0.03)";
      ctx.lineWidth = 0.5;
      ctx.stroke();
      requestAnimationFrame(this.update.bind(this));
    }
  }
}

export { bc1, bc2, bc3, bc4, bc5, bc6, bc7, bc8 };
