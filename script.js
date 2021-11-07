const
  app = document.createElement('div'),
  progressRing = document.createElementNS('http://www.w3.org/2000/svg', 'svg'),
  progressRingCircle = document.createElementNS('http://www.w3.org/2000/svg', 'circle'),
  progressRange = document.createElement('input'),
  progressValue = document.createElement('div'),
  circleSize = 120,
  circleLineWeight = 5,
  circleOpt = {
    size: circleSize,
    centerX: circleSize / 2,
    centerY: circleSize / 2,
    lineWeight: 5,
    radius: (circleSize / 2) - (circleLineWeight * 2),
    color: '#ffffff',
    getCircumference() {
      return 2 * Math.PI * this.radius;
    },
    getProgress(percent) {
      return this.getCircumference() - percent / 100 * this.getCircumference();
    }
  };

app.className = 'app';
app.style.cssText = `
  display: flex;
  min-height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: #64b5f6;`;
progressValue.className = 'progress-value';
progressValue.style.cssText = `
  position: absolute;
  text-align: center;
  font-family: monospace;
  width: 75px;
  color: #ffffff;
  font-size: 50px;`;
progressRange.className = 'progress-range';
progressRange.setAttribute('type', 'range');
progressRange.setAttribute('min', 0);
progressRange.setAttribute('max', 100);
progressRange.setAttribute('step', 1);
progressRange.style.cssText = `
  position: absolute;
  width: 300px;
  bottom: 40%;`;
progressRing.className = 'progress-ring';
progressRing.setAttribute('width', circleOpt.size);
progressRing.setAttribute('height', circleOpt.size);
progressRingCircle.className = 'progress-ring__cricle';
progressRingCircle.setAttribute('cx', circleOpt.centerX);
progressRingCircle.setAttribute('cy', circleOpt.centerY);
progressRingCircle.setAttribute('r', circleOpt.radius);
progressRingCircle.setAttribute('stroke', '#ffffff');
progressRingCircle.setAttribute('stroke-width', circleOpt.lineWeight);
progressRingCircle.setAttribute('fill', 'transparent');
progressRingCircle.setAttribute('stroke-dasharray', `${circleOpt.getCircumference()} ${circleOpt.getCircumference()}`);

progressRing.append(progressRingCircle);
app.append(progressRing);
app.append(progressValue);
app.append(progressRange);
document.body.append(app);

progressRingCircle.setAttribute('stroke-dashoffset', circleOpt.getProgress(progressRange.value));
progressValue.textContent = progressRange.value;
progressRange.addEventListener('input', () => {
  progressRingCircle.setAttribute('stroke-dashoffset', circleOpt.getProgress(progressRange.value));
  progressValue.textContent = progressRange.value;
});
