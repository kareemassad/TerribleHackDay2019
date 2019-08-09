var body = document.querySelector("body");
var btn = document.querySelector(".btn");
var color;

body.classList.add("bg");

btn.addEventListener("click", function(){
    body.classList.remove("bg");

    color = "#FF0000";
    body.style.backgroundColor = color;

    setInterval(function(){
        color = chroma.random();
        body.style.backgroundColor = color;
        
    }, 50);

});
