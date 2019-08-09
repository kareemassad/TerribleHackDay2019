var body = document.querySelector("body");
var btn = document.querySelector("#btn");


body.classList.add("bg");

btn.addEventListener("click", function(){
    body.classList.remove("bg");
    body.style.backgroundColor = "red";

});
