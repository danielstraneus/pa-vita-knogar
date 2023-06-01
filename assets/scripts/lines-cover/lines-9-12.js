const ctx = canvas.getContext("2d");

class lines9 {
  constructor() {
    const colorArr = [
      "rgba(131,178,165,0.1)",
      "rgba(113,184,160,0.1)",
      "rgba(74,92,107,0.1)",
      "rgba(247,243,240,0.1)",
      "rgba(251,243,227,0.1)",
      "rgba(247,190,186,0.1)",
      "rgba(181,119,126,0.1)",
      "rgba(255,218,121,0.1)",
      "rgba(241,110,4,0.1)",
      "rgba(218,228,218,0.1)",
      "rgba(61,64,75,0.1)",
      "rgba(38,25,6,0.1)",
      "rgba(28,7,2,0.1)",
      "rgba(39,17,4,0.1)",
      "rgba(112,106,70,0.1)",
    ];
    const randomNum = Math.floor(Math.random() * 16);
    this.color = colorArr[randomNum];
    this.xPos = Math.random() * canvas.width;
    this.yPos = Math.random() * canvas.height;
    this.initialSize = Math.random() * 0.05 + 1.1;
    this.maxSize = Math.random() * 0.5 + 1.1;
    this.speedX = Math.random() * 4 - 2;
    this.speedY = Math.random() * 4 - 2;
    this.velSize = Math.random() * 0.5 + 0.005;
    this.angle = 0;
  }
  update() {
    this.xPos += this.speedX + Math.sin(this.angle);
    this.yPos += this.speedY + Math.sin(this.angle);
    this.initialSize += this.velSize / 24;
    this.angle += 0.04;
    if (this.initialSize < this.maxSize) {
      ctx.beginPath();
      ctx.arc(this.xPos, this.yPos, this.initialSize, 0, Math.PI * 4);
      ctx.fillStyle = this.color;
      ctx.strokeStyle = this.color;
      ctx.lineWidth = Math.random() * 3 + 0.1;
      ctx.stroke();
      ctx.fill();
      requestAnimationFrame(this.update.bind(this));
    }
  }
}

class lines10 {
  constructor() {
    const colorArr = [
      "rgba(131,178,165,0.2)",
      "rgba(113,184,160,0.2)",
      "rgba(74,92,107,0.2)",
      "rgba(247,243,240,0.2)",
      "rgba(251,243,227,0.2)",
      "rgba(247,190,186,0.2)",
      "rgba(181,119,126,0.2)",
      "rgba(255,218,121,0.2)",
      "rgba(241,110,4,0.2)",
      "rgba(218,228,218,0.2)",
      "rgba(61,64,75,0.2)",
      "rgba(38,25,6,0.2)",
      "rgba(28,7,2,0.2)",
      "rgba(39,17,4,0.2)",
      "rgba(112,106,70,0.2)",
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
    if (this.intialSize < this.maxSize) {
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

class lines11 {
  constructor() {
    const colorArr = [
      "rgba(131,178,165,0.3)",
      "rgba(113,184,160,0.3)",
      "rgba(74,92,107,0.3)",
      "rgba(247,243,240,0.3)",
      "rgba(251,243,227,0.3)",
      "rgba(247,190,186,0.3)",
      "rgba(181,119,126,0.3)",
      "rgba(255,218,121,0.3)",
      "rgba(241,110,4,0.3)",
      "rgba(218,228,218,0.3)",
      "rgba(61,64,75,0.3)",
      "rgba(38,25,6,0.3)",
      "rgba(28,7,2,0.3)",
      "rgba(39,17,4,0.3)",
      "rgba(112,106,70,0.3)",
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

class lines12 {
  constructor() {
    const colorArr = [
      "rgba(131,178,165,0.4)",
      "rgba(113,184,160,0.4)",
      "rgba(74,92,107,0.4)",
      "rgba(247,243,240,0.4)",
      "rgba(251,243,227,0.4)",
      "rgba(247,190,186,0.4)",
      "rgba(181,119,126,0.4)",
      "rgba(255,218,121,0.4)",
      "rgba(241,110,4,0.4)",
      "rgba(218,228,218,0.4)",
      "rgba(61,64,75,0.4)",
      "rgba(38,25,6,0.4)",
      "rgba(28,7,2,0.4)",
      "rgba(39,17,4,0.4)",
      "rgba(112,106,70,0.4)",
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

export { lines9, lines10, lines11, lines12 };
