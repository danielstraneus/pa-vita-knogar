import {
  white1,
  white2,
  white3,
  white4,
  white5,
} from "../lines-targets/white.js";

const II = function () {
  // white //

  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      const action = new white1();
      action.update();
    }, 29000);
  }

  for (let i = 0; i < 100; i++) {
    setTimeout(() => {
      const action = new white2();
      action.update();
    }, 29500);
  }

  for (let i = 0; i < 90; i++) {
    setTimeout(() => {
      const action = new white3();
      action.update();
    }, 30000);
  }
  for (let i = 0; i < 90; i++) {
    setTimeout(() => {
      const action = new white4();
      action.update();
    }, 30500);
  }
  for (let i = 0; i < 90; i++) {
    setTimeout(() => {
      const action = new white5();
      action.update();
    }, 31000);
  }
};

export { II };
