import drawOlympicRing from "./modules/drawOlympicRing";

const
  canvas = document.getElementById('canvas'),
  ctx = canvas.getContext('2d'),
  color = document.getElementById('color'),
  weight = document.getElementById('weight'),
  setFullScreenCanvas = () => {
    canvas.setAttribute('width', window.innerWidth - 8);
    canvas.setAttribute('height', window.innerHeight - 108);
    drawOlympicRing(ctx);
  };

setFullScreenCanvas();

window.addEventListener('resize', setFullScreenCanvas);
color.addEventListener('change', () => ctx.strokeStyle = color.value);
weight.addEventListener('input', () => {
  ctx.lineWidth = weight.value;
  document.querySelector('label[for=weight]').textContent = weight.value;
});
canvas.addEventListener('mousemove', event => {
  const
    x = event.offsetX,
    y = event.offsetY,
    dx = x - event.movementX,
    dy = y - event.movementY;

  if (event.buttons > 0) {
    console.log(x, dx, y, dy);
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(dx, dy);
    ctx.stroke();
    ctx.closePath();
  }
});
