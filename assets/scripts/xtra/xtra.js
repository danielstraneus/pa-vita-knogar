const play = function () {
  let sound = document.getElementById("sound");
  sound.play();

  document.querySelector("html").classList.add("cursor-delete");
  document.querySelector("header").classList.add("cursor-delete");
  document.querySelector("main").classList.add("cursor-delete");
  document.querySelector("footer").classList.add("cursor-delete");
  document.querySelector("canvas").classList.add("cursor-delete");
  document.getElementById("frame").classList.add("cursor-delete");
  document.getElementById("frame-2").classList.add("cursor-delete");
  document.querySelector("img").classList.add("img-fade");
  document.querySelector("button").classList.add("dissapear");
  document.querySelector("aside").classList.add("second-fade");
  document.querySelector("footer").classList.add("first-fade");
  document.querySelector("h1").classList.add("third-fade");
  document.querySelector("canvas").classList.add("blur-fade");
  document.querySelector("body").classList.add("opacity-fade");
  document.getElementById("frame").classList.add("pearl-anim");
  document.getElementById("frame-2").classList.add("torus-anim");
};

export { play };
