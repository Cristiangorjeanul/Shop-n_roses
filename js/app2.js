document.addEventListener('DOMContentLoaded', function () {
 
  //Carousel
  const time = 3500;
  const left = document.querySelector(".left");
  const right = document.querySelector(".right");
  const products = document.querySelector(".products");
  const carousel = products.childElementCount;
  const maxLeft = (carousel - 1) * 100 * -1;

  let current = 0;

  function changeSlide(next = true) {
    if (next) {
      current += current > maxLeft ? -100 : current * -1;
    } else {
      current = current < 0 ? current + 100 : maxLeft;
    }
    products.style.left = current + "%";
  }

  let autoChange = setInterval(changeSlide, time);
  const restart = function () {
    clearInterval(autoChange);
    autoChange = setInterval(changeSlide, time);
  };

  right.addEventListener("click", function () {
    changeSlide();
    restart();
  });

  left.addEventListener("click", function () {
    changeSlide(false);
    restart();
  });


});
