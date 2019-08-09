var body = document.querySelector("body");
var btn = document.querySelector(".btn");
var color;

body.classList.add("bg");
var bool = true;

// while(bool){



btn.addEventListener("click", function () {
    body.classList.remove("bg");

    color = "#FF0000";
    body.style.backgroundColor = color;
    btn.textContent = "i am having a bad time";


    var timer = setInterval(function () {
        color = chroma.random();
        body.style.backgroundColor = color;
        anime({
            targets: '.btn',
            translateX: 1000,
            translateY: 500,
            duration: 300,
            direction: 'alternate',
            loop: true,
            easing: 'easeInOutSine'
        });
    }, 50);


    setTimeout(function () {

    }, 100);

    btn.addEventListener("click", function () {
        clearInterval(timer);
        body.classList.add("bg");
        btn.textContent = "again! again!";

    });


});
// }