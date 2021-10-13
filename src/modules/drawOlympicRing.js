const drawOlympicRing = ctx => {
  const centerX = window.innerWidth / 2 - 263;

  ctx.strokeStyle = '#0884c2';
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.arc(centerX + 110, 110, 60, 0.25 * Math.PI, 1.25 * Math.PI);
  ctx.stroke();

  ctx.strokeStyle = '#fbb031';
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.arc(centerX + 182, 182, 60, 1.75 * Math.PI, 0.75 * Math.PI);
  ctx.stroke();

  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.arc(centerX + 254, 110, 60, 0.25 * Math.PI, 1.25 * Math.PI);
  ctx.stroke();

  ctx.strokeStyle = '#fbb031';
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.arc(centerX + 182, 182, 60, 0.75 * Math.PI, 1.75 * Math.PI);
  ctx.stroke();

  ctx.strokeStyle = '#0884c2';
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.arc(centerX + 110, 110, 60, 1.25 * Math.PI, 0.25 * Math.PI);
  ctx.stroke();

  ctx.strokeStyle = '#ed334e';
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.arc(centerX + 398, 110, 60,  0.75 * Math.PI, 1.75 * Math.PI);
  ctx.stroke();

  ctx.strokeStyle = '#1c8b3b';
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.arc(centerX + 326, 182, 60, 1.25 * Math.PI, 2.25 * Math.PI);
  ctx.stroke();

  ctx.strokeStyle = '#000000';
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.arc(centerX + 254, 110, 60, 1.25 * Math.PI, 0.25 * Math.PI);
  ctx.stroke();

  ctx.strokeStyle = '#1c8b3b';
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.arc(centerX + 326, 182, 60, 2.25 * Math.PI, 1.25 * Math.PI);
  ctx.stroke();

  ctx.strokeStyle = '#ed334e';
  ctx.lineWidth = 10;
  ctx.beginPath();
  ctx.arc(centerX + 398, 110, 60, 1.75 * Math.PI, 0.75 * Math.PI);
  ctx.stroke();

  ctx.lineWidth = 1;
  ctx.strokeStyle = '#000000';
};

export default drawOlympicRing;
