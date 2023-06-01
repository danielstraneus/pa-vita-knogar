const ctx = canvas.getContext("2d");

class lines13 {
  constructor() {
    const colorArr = [
      "rgba(131,178,165,0.5)",
      "rgba(113,184,160,0.5)",
      "rgba(74,92,107,0.5)",
      "rgba(247,243,240,0.5)",
      "rgba(251,243,227,0.5)",
      "rgba(247,190,186,0.5)",
      "rgba(181,119,126,0.5)",
      "rgba(255,218,121,0.5)",
      "rgba(241,110,4,0.5)",
      "rgba(218,228,218,0.5)",
      "rgba(61,64,75,0.5)",
      "rgba(38,25,6,0.5)",
      "rgba(28,7,2,0.5)",
      "rgba(39,17,4,0.5)",
      "rgba(112,106,70,0.5)",
    ];
    const randomNum = Math.floor(Math.random() * 16);
    this.color = colorArr[randomNum];
    this.xPos = Math.random() * canvas.width;
    this.yPos = Math.random() * canvas.height;
    this.maxSize = Math.random() * 0.5 + 1.1;
    this.initialSize = Math.random() * 0.05 + 1.1;
    this.speedX = Math.random() * 4 - 2;
    this.speedY = Math.random() * 4 - 2;
    this.velSize = Math.random() * 0.5 + 0.005;
    this.angle = (20 * Math.PI) / 180;
  }

  update() {
    this.xPos += this.speedX + Math.sin(this.angle);
    this.yPos += this.speedY + Math.sin(this.angle);
    this.initialSize += this.velSize / 24;
    this.angle += 0.04;
    if (this.initialSize < this.maxSize) {
      ctx.beginPath();
      ctx.arc(this.xPos + 1, this.yPos, this.initialSize, 0, Math.PI * 4);
      ctx.fillStyle = this.color;
      ctx.strokeStyle = this.color;
      ctx.lineWidth = Math.random() * 3 + 0.1;
      ctx.stroke();
      ctx.fill();
      requestAnimationFrame(this.update.bind(this));
    }
  }
}

class lines14 {
  constructor() {
    const colorArr = [
      "rgba(131,178,165,0.6)",
      "rgba(113,184,160,0.6)",
      "rgba(74,92,107,0.6)",
      "rgba(247,243,240,0.6)",
      "rgba(251,243,227,0.6)",
      "rgba(247,190,186,0.6)",
      "rgba(181,119,126,0.6)",
      "rgba(255,218,121,0.6)",
      "rgba(241,110,4,0.6)",
      "rgba(218,228,218,0.6)",
      "rgba(61,64,75,0.6)",
      "rgba(38,25,6,0.6)",
      "rgba(28,7,2,0.6)",
      "rgba(39,17,4,0.6)",
      "rgba(112,106,70,0.6)",
    ];
    const randomNum = Math.floor(Math.random() * 16);
    this.color = colorArr[randomNum];
    this.xPos = Math.random() * canvas.width;
    this.yPos = Math.random() * canvas.height;
    this.maxSize = Math.random() * 1.1 + 0.5;
    this.initialSize = Math.random() * 0.7 + 0.2;
    this.speedX = Math.random() * 6 - 3;
    this.speedY = Math.random() * 6 - 3;
    this.velSize = Math.random() * 0.5 + 0.005;
    this.angle = Math.random() * 3.2;
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

class lines15 {
  constructor() {
    const colorArr = [
      "rgba(131,178,165,0.7)",
      "rgba(113,184,160,0.7)",
      "rgba(74,92,107,0.7)",
      "rgba(247,243,240,0.7)",
      "rgba(251,243,227,0.7)",
      "rgba(247,190,186,0.7)",
      "rgba(181,119,126,0.7)",
      "rgba(255,218,121,0.7)",
      "rgba(241,110,4,0.7)",
      "rgba(218,228,218,0.7)",
      "rgba(61,64,75,0.7)",
      "rgba(38,25,6,0.7)",
      "rgba(28,7,2,0.7)",
      "rgba(39,17,4,0.7)",
      "rgba(112,106,70,0.7)",
    ];
    const randomNum = Math.floor(Math.random() * 16);
    this.color = colorArr[randomNum];
    this.xPos = Math.random() * canvas.width;
    this.yPos = Math.random() * canvas.height;
    this.maxSize = Math.random() * 1.5 + 0.5;
    this.initialSize = Math.random() * 0.3 + 0.1;
    this.speedX = Math.random() * 2 - 1;
    this.speedY = Math.random() * 2 - 1;
    this.velSize = Math.random() * 0.5;
    this.angle = Math.random() * 6.2;
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

class lines16 {
  constructor() {
    const colorArr = [
      "rgba(131,178,165,0.8)",
      "rgba(113,184,160,0.8)",
      "rgba(74,92,107,0.8)",
      "rgba(247,243,240,0.8)",
      "rgba(251,243,227,0.8)",
      "rgba(247,190,186,0.8)",
      "rgba(181,119,126,0.8)",
      "rgba(255,218,121,0.8)",
      "rgba(241,110,4,0.8)",
      "rgba(218,228,218,0.8)",
      "rgba(61,64,75,0.8)",
      "rgba(38,25,6,0.8)",
      "rgba(28,7,2,0.8)",
      "rgba(39,17,4,0.8)",
      "rgba(112,106,70,0.8)",
    ];
    const randomNum = Math.floor(Math.random() * 16);
    this.color = colorArr[randomNum];
    this.xPos = Math.random() * canvas.width;
    this.yPos = Math.random() * canvas.height;
    this.maxSize = Math.random() * 2 + 1;
    this.initialSize = Math.random() * 0.05 + 0.04;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
    this.velSize = Math.random() * 0.5;
    this.angle = Math.random() * 6.2;
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

export { lines13, lines14, lines15, lines16 };
