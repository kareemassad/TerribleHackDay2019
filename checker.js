var body = document.querySelector("body");
var btn = document.querySelector(".btn");
var color;

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
        duration: 300,
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

    color = "#FF0000";
    body.style.backgroundColor = color;
    btn.textContent = "i am having a bad time";


    var timer = setInterval(function () {
        color = chroma.random();
        body.style.backgroundColor = color;
    }, 50);

    randomValues();
    setTimeout(function () {

    }, 100);

    btn.addEventListener("click", function () {
        clearInterval(timer);
        body.classList.add("bg");
        btn.textContent = "again! again!";
        bool = false;

    });


});
// }