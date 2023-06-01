const ctx = canvas.getContext("2d");

class lines5 {
  constructor() {
    const colorArr = [
      "rgba(45,36,17,0.09)",
      "rgba(235,229,212,0.09)",
      "rgba(107,103,78,0.09)",
      "rgba(232,138,52,0.09)",
      "rgba(79,54,26,0.09)",
      "rgba(167,174,154,0.09)",
      "rgba(181,129,76,0.09)",
      "rgba(188,198,173,0.09)",
      "rgba(115,76,19,0.09)",
      "rgba(220,161,174,0.09)",
      "rgba(255,249,236,0.09)",
      "rgba(48,30,2,0.09)",
      "rgba(200,188,181,0.09)",
      "rgba(74,66,35,0.09)",
      "rgba(255,240,216,0.09)",
    ];
    const randomNum = Math.floor(Math.random() * 16);
    this.color = colorArr[randomNum];
    this.xPos = Math.random() * canvas.width;
    this.yPos = Math.random() * canvas.height;
    this.initialSize = Math.random() * 0.5 + 0.1;
    this.maxSize = Math.random() * 1 + 0.8;
    this.speedX = Math.random() * 5 - 2.5;
    this.speedY = Math.random() * 5 - 2.5;
    this.velSize = Math.random() * 0.6 + 0.005;
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
      ctx.lineWidth = Math.random() * 4 + 2;
      ctx.stroke();
      requestAnimationFrame(this.update.bind(this));
    }
  }
}

class lines6 {
  constructor() {
    const colorArr = [
      "rgba(45,36,17,0.2)",
      "rgba(235,229,212,0.2)",
      "rgba(107,103,78,0.2)",
      "rgba(232,138,52,0.2)",
      "rgba(79,54,26,0.2)",
      "rgba(167,174,154,0.2)",
      "rgba(181,129,76,0.2)",
      "rgba(188,198,173,0.2)",
      "rgba(115,76,19,0.2)",
      "rgba(220,161,174,0.2)",
      "rgba(255,249,236,0.2)",
      "rgba(48,30,2,0.2)",
      "rgba(200,188,181,0.2)",
      "rgba(74,66,35,0.2)",
      "rgba(255,240,216,0.2)",
    ];
    const randomNum = Math.floor(Math.random() * 16);
    this.color = colorArr[randomNum];
    this.xPos = Math.random() * canvas.width;
    this.yPos = Math.random() * canvas.height;
    this.initialSize = Math.random() * 0.1 + 0.05;
    this.maxSize = Math.random() * 0.3 + 0.2;
    this.speedX = Math.random() * 7 - 3.5;
    this.speedY = Math.random() * 7 - 3.5;
    this.velSize = Math.random() * 1.5 + 0.005;
    this.angle = 0;
  }
  update() {
    this.xPos += this.speedX + Math.sin(this.angle);
    this.yPos += this.speedY + Math.sin(this.angle);
    this.initialSize += this.velSize / 24;
    this.angle += 0.05;
    if (this.initialSize < this.maxSize) {
      ctx.beginPath();
      ctx.arc(this.xPos, this.yPos, this.initialSize, 0, Math.PI * 4);
      ctx.fillStyle = this.color;
      ctx.strokeStyle = this.color;
      ctx.lineWidth = Math.random() * 2 + 1;
      ctx.stroke();
      ctx.fill();
      requestAnimationFrame(this.update.bind(this));
    }
  }
}

class lines7 {
  constructor() {
    const colorArr = [
      "rgba(45,36,17,0.05)",
      "rgba(235,229,212,0.05)",
      "rgba(107,103,78,0.05)",
      "rgba(232,138,52,0.05)",
      "rgba(79,54,26,0.05)",
      "rgba(167,174,154,0.05)",
      "rgba(181,129,76,0.05)",
      "rgba(188,198,173,0.05)",
      "rgba(115,76,19,0.05)",
      "rgba(220,161,174,0.05)",
      "rgba(255,249,236,0.05)",
      "rgba(48,30,2,0.05)",
      "rgba(200,188,181,0.05)",
      "rgba(74,66,35,0.05)",
      "rgba(255,240,216,0.05)",
    ];
    const randomNum = Math.floor(Math.random() * 16);
    this.color = colorArr[randomNum];
    this.xPos = Math.random() * canvas.width;
    this.yPos = Math.random() * canvas.height;
    this.initialSize = Math.random() * 1 + 0.05;
    this.maxSize = Math.random() * 3 + 1;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
    this.velSize = Math.random() * 3 + 2;
    this.angle = 0;
  }
  update() {
    this.xPos += this.speedX + Math.sin(this.angle);
    this.yPos += this.speedY + Math.sin(this.angle);
    this.initialSize += this.velSize / 24;
    this.angle += 0.03;
    if (this.intialSize < this.maxSize) {
      ctx.beginPath();
      ctx.arc(this.xPos, this.yPos, this.initialSize, 0, Math.PI * 4);
      ctx.fillStyle = this.color;
      ctx.strokeStyle = this.color;
      ctx.lineWidth = Math.random() * 2 + 0.1;
      ctx.stroke();
      ctx.fill();
      requestAnimationFrame(this.update.bind(this));
    }
  }
}

class lines8 {
  constructor() {
    const colorArr = [
      "rgba(45,36,17,0.07)",
      "rgba(235,229,212,0.07)",
      "rgba(107,103,78,0.07)",
      "rgba(232,138,52,0.07)",
      "rgba(79,54,26,0.07)",
      "rgba(167,174,154,0.07)",
      "rgba(181,129,76,0.07)",
      "rgba(188,198,173,0.07)",
      "rgba(115,76,19,0.07)",
      "rgba(220,161,174,0.07)",
      "rgba(255,249,236,0.07)",
      "rgba(48,30,2,0.07)",
      "rgba(200,188,181,0.07)",
      "rgba(74,66,35,0.07)",
      "rgba(255,240,216,0.07)",
    ];
    const randomNum = Math.floor(Math.random() * 16);
    this.color = colorArr[randomNum];
    this.xPos = Math.random() * canvas.width;
    this.yPos = Math.random() * canvas.height;
    this.initialSize = Math.random() * 0.8 + 0.1;
    this.maxSize = Math.random() * 2 + 1.7;
    this.speedX = Math.random() * 4 - 2;
    this.speedY = Math.random() * 4 - 2;
    this.velSize = Math.random() * 3 + 2;
    this.angle = 0;
  }
  update() {
    this.xPos += this.speedX + Math.sin(this.angle);
    this.yPos += this.speedY + Math.sin(this.angle);
    this.initialSize += this.velSize / 2;
    this.angle += 0;
    if (this.initialSize < this.maxSize) {
      ctx.beginPath();
      ctx.arc(this.xPos, this.yPos, this.initialSize, 0, Math.PI * 4);
      ctx.fillStyle = this.color;
      ctx.strokeStyle = this.color;
      ctx.lineWidth = Math.random() * 1.5 + 0.1;
      ctx.stroke();
      ctx.fill();
      requestAnimationFrame(this.update.bind(this));
    }
  }
}

export { lines5, lines6, lines7, lines8 };
