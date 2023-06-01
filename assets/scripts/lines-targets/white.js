const ctx = canvas.getContext("2d");

class white1 {
  constructor() {
    const colorArr = [
      "rgba(255,178,165,1)",
      "rgba(255,178,165,0.9)",
      "rgba(255,178,165,0.8)",
      "rgba(255,178,165,0.7)",
      "rgba(255,178,165,0.6)",
      "rgba(255s,178,165,0.5)",
    ];
    const randomNum = Math.floor(Math.random() * 7);
    this.color = colorArr[randomNum];
    this.xPos = canvas.width / 2;
    this.yPos = canvas.height / 2;
    this.maxSize = Math.random() * 2 + 1;
    this.initialSize = Math.random() * 0.05 + 0.04;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
    this.velSize = Math.random() * 0.5;
    this.angle = Math.random() * 6.2;
  }

  update() {
    this.xPos += this.speedX + Math.cos(this.angle);
    this.yPos += this.speedY + Math.cos(this.angle / 2);
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

class white2 {
  constructor() {
    const colorArr = [
      "rgba(31,178,165,1)",
      "rgba(31,178,165,0.9)",
      "rgba(31,178,165,0.8)",
      "rgba(31,178,165,0.7)",
      "rgba(31,178,165,0.6)",
      "rgba(31,178,165,0.5)",
    ];
    const randomNum = Math.floor(Math.random() * 7);
    this.color = colorArr[randomNum];
    this.xPos = canvas.width / 2;
    this.yPos = canvas.height / 2;
    this.maxSize = Math.random() * 2 + 1;
    this.initialSize = Math.random() * 0.05 + 0.04;
    this.speedX = Math.random() * 4 - 2;
    this.speedY = Math.random() * 4 - 2;
    this.velSize = Math.random() * 0.9;
    this.angle = Math.random() * 6.2;
  }

  update() {
    const numberArr = [1, 2, 3, 4, 5, 6];
    const randomNum = Math.floor(Math.random() * 7);
    this.xPos += this.speedX + Math.cos(this.angle / numberArr[randomNum]);
    this.yPos += this.speedY + Math.cos(this.angle);
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

class white3 {
  constructor() {
    const colorArr = [
      "rgba(100,100,100,0.1.)",
      "rgba(100,100,100,0.9)",
      "rgba(100,100,100,0.8)",
      "rgba(100,100,100,0.7)",
      "rgba(100,100,100,0.6)",
      "rgba(100,100,100,0.5)",
    ];
    const randomNum = Math.floor(Math.random() * 7);
    this.color = colorArr[randomNum];
    this.xPos = canvas.width / 2;
    this.yPos = canvas.height / 2;
    this.maxSize = Math.random() * 2 + 1;
    this.initialSize = Math.random() * 0.05 + 0.04;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
    this.velSize = Math.random() * 0.5;
    this.angle = 0;
  }

  update() {
    this.xPos += this.speedX + Math.cos(this.angle / 2);
    this.yPos += this.speedY + Math.cos(this.angle / 2) * 1.5;
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

class white4 {
  constructor() {
    const colorArr = [
      "rgba(255,255,255,1)",
      "rgba(255,255,255,0.9)",
      "rgba(255,255,255,0.8)",
      "rgba(255,255,255,0.7)",
      "rgba(255,255,255,0.6)",
      "rgba(255,255,255,0.5)",
    ];
    const randomNum = Math.floor(Math.random() * 7);
    this.color = colorArr[randomNum];
    this.xPos = canvas.width / 2;
    this.yPos = canvas.height / 2;
    this.maxSize = Math.random() * 2 + 1;
    this.initialSize = Math.random() * 0.05 + 0.04;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
    this.velSize = Math.random() * 0.5;
    this.angle = 0;
  }

  update() {
    this.xPos += this.speedX + Math.cos(this.angle / 2);
    this.yPos += this.speedY + Math.cos(this.angle / 3) * 1.5;
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

class white5 {
  constructor() {
    const colorArr = [
      "rgba(0,0,0,1)",
      "rgba(0,0,0,0.9)",
      "rgba(0,0,0,0.8)",
      "rgba(0,0,0,0.7)",
      "rgba(0,0,0,0.6)",
      "rgba(0,0,0,0.5)",
    ];
    const randomNum = Math.floor(Math.random() * 7);
    this.color = colorArr[randomNum];
    this.xPos = canvas.width / 2;
    this.yPos = canvas.height / 2;
    this.maxSize = Math.random() * 2 + 1;
    this.initialSize = Math.random() * 0.05 + 0.04;
    this.speedX = Math.random() * 1 - 0.5;
    this.speedY = Math.random() * 1 - 0.5;
    this.velSize = Math.random() * 0.5;
    this.angle = 0;
  }

  update() {
    this.xPos += this.speedX + Math.cos(this.angle / 4);
    this.yPos += this.speedY + Math.cos(this.angle / 2) * 1.5;
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

export { white1, white2, white3, white4, white5 };
