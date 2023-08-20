let tw = document.querySelector(".typewriter");
console.log(tw);
console.log(tw.textContent);

const Typewriter = class {
  constructor(element) {
    this.element = element;
    this.innerHTML = element.innerHTML;
    this.text = element.textContent;
    this.offsetHeight = element.offsetHeight;
    this.buff = '';
  }

  write() {
    if (this.text.length === this.buff.length) {
       this.element.innerHTML = this.innerHTML; 
       return;
    }
    this.buff += this.text.charAt(this.buff.length);
//    console.log(this.buff);
    this.element.innerHTML = this.buff;
    console.log(this.element.offsetHeight);
//    this.element.offsetHeight = this.offsetHeight;
    setTimeout(() => this.write(), Math.random() * 80);
  }
}

new Typewriter(tw).write();

function dynamicReveal() {
  let dynamicReveals = document.querySelectorAll('.dynamic-reveal');

  const windowHeight = window.innerHeight; //viewport height
  console.log('windowHeight', windowHeight);
  for (const dynamicReveal of dynamicReveals) {
    const distanceFromTop = dynamicReveal.getBoundingClientRect().top;
    console.log('distanceFromTop', distanceFromTop);
    const computedStyle = window.getComputedStyle(dynamicReveal);
    console.log('computedStyle', computedStyle);
    const transitionDistanceFromTop = computedStyle.getPropertyValue('--transition-trigger-distance-from-top');
//    const transitionDistanceFromTop = 100;
    console.log('transitionDistanceFromTop', transitionDistanceFromTop);

    if (distanceFromTop < windowHeight - transitionDistanceFromTop) {
      dynamicReveal.classList.add('active');
    } else {
      dynamicReveal.classList.remove('active');
    }
  }
}

window.addEventListener('scroll', dynamicReveal);
dynamicReveal();
