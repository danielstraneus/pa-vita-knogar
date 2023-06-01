import { wc1, wc2, wc3, wc4, wc5, wc6, wc7, wc8 } from "../circles/white.js";

const III = function () {
  for (let i = 0; i < 500; i++) {
    setTimeout(() => {
      const action = new wc1();
      action.update();
    }, 18000);
  }

  for (let i = 0; i < 300; i++) {
    setTimeout(() => {
      const action = new wc2();
      action.update();
    }, 20000);
  }

  for (let i = 0; i < 150; i++) {
    setTimeout(() => {
      const action = new wc3();
      action.update();
    }, 22000);
  }
  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      const action = new wc4();
      action.update();
    }, 24000);
  }
  for (let i = 0; i < 200; i++) {
    setTimeout(() => {
      const action = new wc5();
      action.update();
    }, 26000);
  }

  for (let i = 0; i < 150; i++) {
    setTimeout(() => {
      const action = new wc6();
      action.update();
    }, 28000);
  }
  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      const action = new wc7();
      action.update();
    }, 30000);
  }
  for (let i = 0; i < 120; i++) {
    setTimeout(() => {
      const action = new wc8();
      action.update();
    }, 32000);
  }

  const ctx = canvas.getContext("2d");

  setTimeout(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, 36000);

  setTimeout(() => {
    for (let i = 0; i < 500; i++) {
      setTimeout(() => {
        const action = new wc1();
        action.update();
      }, 18000);
    }

    for (let i = 0; i < 300; i++) {
      setTimeout(() => {
        const action = new wc2();
        action.update();
      }, 20000);
    }

    for (let i = 0; i < 150; i++) {
      setTimeout(() => {
        const action = new wc3();
        action.update();
      }, 22000);
    }
    for (let i = 0; i < 100; i++) {
      setTimeout(() => {
        const action = new wc4();
        action.update();
      }, 24000);
    }
    for (let i = 0; i < 200; i++) {
      setTimeout(() => {
        const action = new wc5();
        action.update();
      }, 26000);
    }

    for (let i = 0; i < 150; i++) {
      setTimeout(() => {
        const action = new wc6();
        action.update();
      }, 28000);
    }
    for (let i = 0; i < 100; i++) {
      setTimeout(() => {
        const action = new wc7();
        action.update();
      }, 30000);
    }
    for (let i = 0; i < 120; i++) {
      setTimeout(() => {
        const action = new wc8();
        action.update();
      }, 32000);
    }

    const ctx = canvas.getContext("2d");

    setTimeout(() => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }, 36000);
  }, 85000);
};

export { III };
