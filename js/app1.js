document.addEventListener('DOMContentLoaded', function () {

  //Flower  
  var center = document.querySelector("#center");
    var petal1 = document.querySelector("#petal1");
    var petal2 = document.querySelector("#petal2");
    var petal3 = document.querySelector("#petal3");
    var petal4 = document.querySelector("#petal4");
    var petal5 = document.querySelector("#petal5");
    var petal6 = document.querySelector("#petal6");
    var petal7 = document.querySelector("#petal7");
    var petal8 = document.querySelector("#petal8");
    var petal = document.querySelector(".petals");
    


    setInterval(function () {
        center.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    }, 1000);

    setInterval(function () {
        petal1.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    }, 1000);

    setInterval(function () {
        petal2.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    }, 1000);

    setInterval(function () {
        petal3.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    }, 1000);

    setInterval(function () {
        petal4.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    }, 1000);

    setInterval(function () {
        petal5.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    }, 1000);

    setInterval(function () {
        petal6.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    }, 1000);

    setInterval(function () {
        petal7.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    }, 1000);

    setInterval(function () {
        petal8.style.backgroundColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    }, 1000);

   

});
