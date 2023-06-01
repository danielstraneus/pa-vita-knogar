import { play } from "./xtra/xtra.js";
import { I } from "./chapters/chapter-I.js";
import { II } from "./chapters/chapter-II.js";
import { III } from "./chapters/chapter-III.js";
import { IV } from "./chapters/chapter-IV.js";
import { V } from "./chapters/chapter-V.js";
import { VI } from "./chapters/chapter-VI.js";
import { pearl } from "../a-frame/pearl.js";
import { tunnel } from "../a-frame/tunnel.js";

const canvas = document.getElementById("canvas");

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

canvas.width = 500;
canvas.height = 300;

if (window.innerWidth > 900) {
  canvas.width = 400;
  canvas.height = 240;
}

document.querySelector("button").addEventListener("click", function (e) {
  play();
  pearl();
  I();
  II();
  III();
  IV();
  V();
  VI();
  tunnel();
});
