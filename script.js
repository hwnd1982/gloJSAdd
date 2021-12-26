const
  start = document.getElementById("start"),
  play = document.getElementById("play"),
  pause = document.getElementById("pause"),
  field = document.getElementById("field"),
  ball = document.getElementById("ball");

let stateTop = { requestAnimation: 0, animationFrameId: 0, startTime: 0, pauseTime: 0 };
let stateLeft = { requestAnimation: 0, animationFrameId: 0, startTime: 0, pauseTime: 0 };

function animate({ timing, draw, duration }, state) {
  state.startTime = performance.now();

  function animate(time) {
    // timeFraction от 0 до 1
    let timeFraction = (time - stateTop.startTime) / duration;
    if (timeFraction > 1) timeFraction = 1;

    // текущее состояние анимации
    const progress = timing(timeFraction);

    draw(progress);

    if (timeFraction < 1) {
      state.animationFrameId = requestAnimationFrame(animate);
    }
  }

  state.animationFrameId = requestAnimationFrame(animate);
  return animate;
}

function makeEaseOut(timing) {
  return function(timeFraction) {
    return 1 - timing(1 - timeFraction);
  };
}

function bounce(timeFraction) {
  for (let a = 0, b = 1; 1; a += b, b /= 2) {
    if (timeFraction >= (7 - 4 * a) / 11) {
      return -Math.pow((11 - 6 * a - 11 * timeFraction) / 4, 2) + Math.pow(b, 2);
    }
  }
}

function quad(timeFraction) {
  return Math.pow(timeFraction, 2);
}

start.onclick = function() {
  const to = field.clientHeight - ball.clientHeight;
  const width = 100;

  if (stateTop.animationFrameId) cancelAnimationFrame(stateTop.animationFrameId);
  stateTop = { requestAnimation: 0, animationFrameId: 0, startTime: performance.now(), pauseTime: 0 };

  stateTop.requestAnimation = animate({
    duration: 2000,
    timing: makeEaseOut(bounce),
    draw(progress) {
      ball.style.top = to * progress + "px";
    },
  }, stateTop);

  if (stateLeft.animationFrameId) cancelAnimationFrame(stateLeft.animationFrameId);
  stateLeft = { requestAnimation: 0, animationFrameId: 0, startTime: performance.now(), pauseTime: 0 };

  stateLeft.requestAnimation = animate({
    duration: 2000,
    timing: makeEaseOut(quad),
    draw(progress) {
      ball.style.left = width * progress + "px";
    }
  }, stateLeft);
};

play.onclick = function() {
  if (stateTop.requestAnimation && stateTop.pauseTime) {
    stateTop.startTime += performance.now() - stateTop.pauseTime;

    stateTop.animationFrameId = requestAnimationFrame(stateTop.requestAnimation);

    stateTop.pauseTime = 0;
  }
  if (stateLeft.requestAnimation && stateLeft.pauseTime) {
    stateLeft.startTime += performance.now() - stateLeft.pauseTime;

    stateLeft.animationFrameId = requestAnimationFrame(stateLeft.requestAnimation);

    stateLeft.pauseTime = 0;
  }
};

pause.onclick = function() {
  if (stateTop.animationFrameId) {
    stateTop.pauseTime = performance.now();

    cancelAnimationFrame(stateTop.animationFrameId);
    stateTop.animationFrameId = 0;
  }
  if (stateLeft.animationFrameId) {
    stateLeft.pauseTime = performance.now();

    cancelAnimationFrame(stateLeft.animationFrameId);
    stateLeft.animationFrameId = 0;
  }
};
