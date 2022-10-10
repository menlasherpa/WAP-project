window.onload = function() {
  'use strict';

  let i;
  let length;
  let animationArray = null;
  let interval = null;
  let speed = 250;
  let start = document.getElementById('start');
  let stop = document.getElementById('stop');
  let animation = document.getElementById('animation');
  let fontsize = document.getElementById('fontsize');
  let turbo = document.getElementById('turbo');
  let textArea = document.getElementById('text-area');
  animation.onchange = displayFirstAnimationTextOnScreen;
  start.onclick = startAnimation;
  stop.onclick = stopAnimation;
  fontsize.onchange = changeFontSize;
  turbo.onchange = turboSpeed;

  function animationSingle() {
    if (i == length)
      i = 0;
    textArea.innerHTML = animationArray[i++];
  }

  function startAnimation() {
    start.disabled = true;
    stop.disabled = false;
    textArea.readOnly = true;
    console.log(animation.value);
    let animationText = ANIMATIONS[animation.value];
    animationArray = animationText.split("=====\n");
    i = 0;
    length = animationArray.length;
    console.log(animationArray);
    interval = setInterval(animationSingle, speed);
    animation.disabled = true;
  }

  function stopAnimation() {
    start.disabled = false;
    stop.disabled = true;
    clearInterval(interval);
    interval = null;
    animation.disabled = false;
    textArea.readOnly = false;
  }

  function changeFontSize() {
    textArea.style.fontSize = fontsize.value;
  }

  function turboSpeed() {
    if (turbo.checked == true) {
      speed = 50;
    } else {
      speed = 250;
    }
    if (interval != null) {
      clearInterval(interval);
      interval = null;
      interval = setInterval(animationSingle, speed);
    }
  }

  function displayFirstAnimationTextOnScreen() {
    textArea.innerHTML = ANIMATIONS[animation.value];
  }
};
