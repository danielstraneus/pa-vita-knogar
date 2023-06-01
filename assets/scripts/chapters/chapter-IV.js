import {
  output1layer1,
  output1layer2,
  output2layer1,
  output2layer2,
  output3layer1,
  output3layer2,
} from "../fields/field-123.js";

import {
  output4layer1,
  output4layer2,
  output5layer1,
  output5layer2,
  output6layer1,
  output6layer2,
} from "../fields/field-456.js";

import {
  output7layer1,
  output7layer2,
  output8layer1,
  output8layer2,
  output9layer1,
  output9layer2,
} from "../fields/field-789.js";

const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");

const IV = function () {
  setTimeout(() => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }, 40000);

  for (let i = 0; i < 400; i++) {
    setTimeout(() => {
      const action = new output1layer1();
      action.update();
    }, 40000);
  }

  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      const action = new output1layer2();
      action.update();
    }, 41000);
  }

  // Output 2 (Layer 1, Layer 2)

  for (let i = 0; i < 500; i++) {
    setTimeout(() => {
      const action = new output2layer1();
      action.update();
    }, 42000);
  }

  for (let i = 0; i < 200; i++) {
    setTimeout(() => {
      const action = new output2layer2();
      action.update();
    }, 43000);
  }

  // Output 3 (Layer 1, Layer 2)

  for (let i = 0; i < 500; i++) {
    setTimeout(() => {
      const action = new output3layer1();
      action.update();
    }, 43500);
  }

  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      const action = new output3layer2();
      action.update();
    }, 44000);
  }

  for (let i = 0; i < 400; i++) {
    setTimeout(() => {
      const action = new output4layer1();
      action.update();
    }, 46000);
  }
  for (let i = 0; i < 60; i++) {
    setTimeout(() => {
      const action = new output4layer2();
      action.update();
    }, 47000);
  }

  // Output 5 (Layer 1, Layer 2)

  for (let i = 0; i < 300; i++) {
    setTimeout(() => {
      const action = new output5layer1();
      action.update();
    }, 48000);
  }
  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      const action = new output5layer2();
      action.update();
    }, 49500);
  }

  // Output 6 (Layer 1, Layer 2)

  for (let i = 0; i < 300; i++) {
    setTimeout(() => {
      const action = new output6layer1();
      action.update();
    }, 51000);
  }

  for (let i = 0; i < 200; i++) {
    setTimeout(() => {
      const action = new output6layer2();
      action.update();
    }, 52000);
  }

  for (let i = 0; i < 300; i++) {
    setTimeout(() => {
      const action = new output7layer1();
      action.update();
    }, 53000);
  }

  for (let i = 0; i < 200; i++) {
    setTimeout(() => {
      const action = new output7layer2();
      action.update();
    }, 54000);
  }

  // Output 8 (Layer 1, Layer 2)

  for (let i = 0; i < 400; i++) {
    setTimeout(() => {
      const action = new output8layer1();
      action.update();
    }, 55500);
  }

  for (let i = 0; i < 400; i++) {
    setTimeout(() => {
      const action = new output8layer2();
      action.update();
    }, 56500);
  }

  // Output 9 (Layer 1, Layer 2)

  for (let i = 0; i < 400; i++) {
    setTimeout(() => {
      const action = new output9layer1();
      action.update();
    }, 58000);
  }

  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      const action = new output9layer2();
      action.update();
    }, 59500);
  }
};

export { IV };
