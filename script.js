let
  count = 0,
  flyInterval = 0,
  planeStoped = false,
  cloudBigStoped = false,
  cloudSmallStoped = false;
const
  plane = document.querySelector('.plane'),
  cloudBig = document.querySelector('.cloud_big'),
  cloudSmall = document.querySelector('.cloud_small'),
  startStop = document.querySelector('.start-stop'),
  reset = document.querySelector('.reset'),

  planeIsFlying = () => {
    const
      planePosition = plane.getBoundingClientRect(),
      cloudBigPosition = cloudBig.getBoundingClientRect(),
      cloudSmallPosition = cloudSmall.getBoundingClientRect();

    flyInterval = requestAnimationFrame(planeIsFlying);
    count++;
    if (!planeStoped) {
      if (window.innerWidth - planePosition.left > 0) {
        plane.style.left = (-300 + count * 1.2) + 'px';
      } else {
        planeStoped = true;
      }
    }
    if (!cloudSmallStoped) {
      if (cloudSmallPosition.left > -200) {
        cloudSmall.style.right = (200 + count / 1.4) + 'px';
      } else {
        cloudSmallStoped = true;
      }
    }
    if (!cloudBigStoped) {
      if (cloudBigPosition.left > -300) {
        cloudBig.style.right = (-300 + count * 1.1) + 'px';
      } else {
        cloudBigStoped = true;
      }
    }
    if (cloudBigStoped && cloudSmallStoped && planeStoped) {
      cancelAnimationFrame(flyInterval);
      startStop.style.display = 'none';
      reset.style.display = 'block';
    }
  };

startStop.addEventListener('click', function() {
  if (this.textContent === 'Start') {
    requestAnimationFrame(planeIsFlying);
    this.textContent = 'Stop';
  } else {
    cancelAnimationFrame(flyInterval);
    this.textContent = 'Start';
    this.nextElementSibling.style.display = 'block';
  }
});
reset.addEventListener('click', function() {
  this.previousElementSibling.textContent = 'Start';
  this.previousElementSibling.style.display = 'block';
  this.style.display = 'none';
  cancelAnimationFrame(flyInterval);
  plane.style.left = '-300px';
  cloudSmall.style.right = '200px';
  cloudBig.style.right = '-300px';
  count = 0;
  planeStoped = false,
  cloudBigStoped = false,
  cloudSmallStoped = false;
});
