import { bc1, bc2, bc3, bc4, bc5, bc6, bc7, bc8 } from "../circles/black.js";

const I = function () {
  for (let i = 0; i < 500; i++) {
    setTimeout(() => {
      const action = new bc1();
      action.update();
    }, 10000);
  }

  for (let i = 0; i < 300; i++) {
    setTimeout(() => {
      const action = new bc2();
      action.update();
    }, 12000);
  }

  for (let i = 0; i < 150; i++) {
    setTimeout(() => {
      const action = new bc3();
      action.update();
    }, 14000);
  }
  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      const action = new bc4();
      action.update();
    }, 16000);
  }
  for (let i = 0; i < 200; i++) {
    setTimeout(() => {
      const action = new bc5();
      action.update();
    }, 18000);
  }

  for (let i = 0; i < 150; i++) {
    setTimeout(() => {
      const action = new bc6();
      action.update();
    }, 20000);
  }
  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      const action = new bc7();
      action.update();
    }, 23000);
  }
  for (let i = 0; i < 90; i++) {
    setTimeout(() => {
      const action = new bc8();
      action.update();
    }, 24000);
  }
};

export { I };
