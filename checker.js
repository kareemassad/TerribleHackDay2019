var body = document.querySelector("body");
var btn = document.querySelector(".btn");
var color;
var barbie = new Audio();
barbie.src = "Im a barbie girl in a barbie woooorrrrllld.mp3"

body.classList.add("bg");
var bool = true;

function randomValues() {
    anime({
        targets: '.btn',
        translateX: function () {
            return anime.random(-1000, 1000);
        },
        translateY: function () {
            return anime.random(0, 1000);
        },
        scale: function () {
            return anime.random(0.5, 3);
        },
        easing: 'easeInOutQuad',
        duration: 450,
        complete: randomValues
    });
}



// const btnAnim = anime({
//     targets: '.btn',
//     translateX: function () {
//         return anime.random(0, 500);
//     },
//     translateY: function() {
//         return anime.random(0, 270);
//       },
//     scale: 2,
//     // translateX: -500,
//     duration: 1000,
//     direction: 'alternate',
//     loop: true,
//     easing: 'easeInOutSine'
// });

// while(bool){



btn.addEventListener("click", function () {
    body.classList.remove("bg");
    barbie.play();

    color = "#FF0000";
    body.style.backgroundColor = color;
    btn.textContent = "i am having a bad time";


    var timer = setInterval(function () {
        color = chroma.random();
        body.style.backgroundColor = color;
    }, 50);

    randomValues();
    setTimeout(function () {

    }, 10);

    btn.addEventListener("click", function () {
        clearInterval(timer);
        body.classList.add("bg");
        btn.textContent = "again! again!";
        bool = false;

    });


});
// }