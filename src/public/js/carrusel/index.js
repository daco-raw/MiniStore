const carrusel = document.getElementById("sponsor-container");

let maxScrollLeft = carrusel.scrollWidth - carrusel.clientWidth;

let interval = null;
let step = 1;

const start = () => {
  interval = setInterval(() => {
    carrusel.scrollLeft += step;
    if (carrusel.scrollLeft === maxScrollLeft) {
      step *= -1;
    } else if (carrusel.scrollLeft === 0) {
      step *= -1;
    }
  }, 10);
};

const stop = () => {
  clearInterval(interval);
};

carrusel.addEventListener("mouseover", () => {
  stop();
});

carrusel.addEventListener("mouseout", () => {
  start();
});
