const ctx = canvas.getContext("2d");

class lines1 {
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
    this.initialSize = Math.random() * 0.5 + 0.5;
    this.maxSize = Math.random() * 1.5 + 1.5;
    this.speedX = Math.random() * 4 - 2;
    this.speedY = Math.random() * 4 - 2;
    this.velSize = Math.random() * 0.5 + 0.005;
    this.angle = 0;
  }
  update() {
    this.initialSize += this.velSize / 24;
    this.angle += 0.04;
    this.xPos += this.speedX + Math.sin(this.angle);
    this.yPos += this.speedY + Math.sin(this.angle);
    if (this.initialSize < this.maxSize) {
      ctx.beginPath();
      ctx.arc(this.xPos, this.yPos, this.initialSize, 0, Math.PI * 4);
      ctx.fillStyle = this.color;
      ctx.strokeStyle = this.color;
      ctx.lineWidth = Math.random() * 2.5 + 0.5;
      ctx.stroke();
      ctx.fill();
      requestAnimationFrame(this.update.bind(this));
    }
  }
}

class lines2 {
  constructor() {
    const colorArr = [
      "rgba(45,36,17,0.3)",
      "rgba(235,229,212,0.3)",
      "rgba(107,103,78,0.3)",
      "rgba(232,138,52,0.3)",
      "rgba(79,54,26,0.3)",
      "rgba(167,174,154,0.3)",
      "rgba(181,129,76,0.3)",
      "rgba(188,198,173,0.3)",
      "rgba(115,76,19,0.3)",
      "rgba(220,161,174,0.3)",
      "rgba(255,249,236,0.3)",
      "rgba(48,30,2,0.3)",
      "rgba(200,188,181,0.3)",
      "rgba(74,66,35,0.3)",
      "rgba(255,240,216,0.3)",
    ];
    const randomNum = Math.floor(Math.random() * 16);
    this.color = colorArr[randomNum];
    this.xPos = Math.random() * canvas.width;
    this.yPos = Math.random() * canvas.height;
    this.initialSize = Math.random() * 0.7 + 0.2;
    this.maxSize = Math.random() * 1.1 + 0.5;
    this.speedX = Math.random() * 6 - 3;
    this.speedY = Math.random() * 6 - 3;
    this.velSize = Math.random() * 0.5 + 0.005;
    this.angle = 0;
  }

  update() {
    this.xPos += this.speedX + Math.sin(this.angle);
    this.yPos += this.speedY + Math.sin(this.angle);
    this.initialSize += this.velSize / 24;
    this.angle += 0.01;
    if (this.initialSize < this.maxSize) {
      ctx.beginPath();
      ctx.arc(this.xPos, this.yPos, this.initialSize, 0, Math.PI * 4);
      ctx.fillStyle = this.color;
      ctx.strokeStyle = this.color;
      ctx.lineWidth = Math.random() * 0.2 + 0.09;
      ctx.stroke();
      ctx.fill();
      requestAnimationFrame(this.update.bind(this));
    }
  }
}

class lines3 {
  constructor() {
    const colorArr = [
      "rgba(45,36,17,0.1)",
      "rgba(235,229,212,0.1)",
      "rgba(107,103,78,0.1)",
      "rgba(232,138,52,0.1)",
      "rgba(79,54,26,0.1)",
      "rgba(167,174,154,0.1)",
      "rgba(181,129,76,0.1)",
      "rgba(188,198,173,0.1)",
      "rgba(115,76,19,0.1)",
      "rgba(220,161,174,0.1)",
      "rgba(255,249,236,0.1)",
      "rgba(48,30,2,0.1)",
      "rgba(200,188,181,0.1)",
      "rgba(74,66,35,0.1)",
      "rgba(255,240,216,0.1)",
    ];
    const randomNum = Math.floor(Math.random() * 16);
    this.color = colorArr[randomNum];
    this.xPos = Math.random() * canvas.width;
    this.yPos = Math.random() * canvas.height;
    this.initialSize = Math.random() * 0.3 + 0.1;
    this.maxSize = Math.random() * 1.5 + 0.5;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
    this.velSize = Math.random() * 0.5;
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

class lines4 {
  constructor() {
    const colorArr = [
      "rgba(45,36,17,0.4)",
      "rgba(235,229,212,0.4)",
      "rgba(107,103,78,0.4)",
      "rgba(232,138,52,0.4)",
      "rgba(79,54,26,0.4)",
      "rgba(167,174,154,0.4)",
      "rgba(181,129,76,0.4)",
      "rgba(188,198,173,0.4)",
      "rgba(115,76,19,0.4)",
      "rgba(220,161,174,0.4)",
      "rgba(255,249,236,0.4)",
      "rgba(48,30,2,0.4)",
      "rgba(200,188,181,0.4)",
      "rgba(74,66,35,0.4)",
      "rgba(255,240,216,0.4)",
    ];
    const randomNum = Math.floor(Math.random() * 16);
    this.color = colorArr[randomNum];
    this.xPos = Math.random() * canvas.width;
    this.yPos = Math.random() * canvas.height;
    this.initialSize = Math.random() * 0.05 + 0.04;
    this.maxSize = Math.random() * 2 + 1;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
    this.velSize = Math.random() * 0.5;
    this.angle = 0;
  }
  update() {
    this.xPos += this.speedX + Math.sin(this.angle);
    this.yPos += this.speedY + Math.sin(this.angle);
    this.initialSize += this.velSize / 24;
    this.angle += 0.003;
    if (this.initialSize < this.maxSize) {
      ctx.beginPath();
      ctx.arc(this.xPos, this.yPos, this.initialSize, 0, Math.PI * 4);
      ctx.strokeStyle = this.color;
      ctx.lineWidth = Math.random() * 0.9 + 0.1;
      ctx.stroke();
      requestAnimationFrame(this.update.bind(this));
    }
  }
}

export { lines1, lines2, lines3, lines4 };
