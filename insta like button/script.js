var con = document.querySelector("#container")
var heart = document.querySelector(".heart i");
var like = document.querySelector(".bottom .ri-heart-3-fill")

con.addEventListener("dblclick", function(){
    heart.style.transform = "translate(-50%, -50%) scale(1)";
    heart.style.opacity = 0.8
    like.style.color = "red"

        setTimeout(function() {
            heart.style.opacity = 0
        }, 1000);
        setTimeout(function() {
            heart.style.transform = "translate(-50%, -50%) scale(0)";
        }, 2000);
});

like.addEventListener("click", function() {
    if (like.style.color === "red") {
        like.style.color = "#fff";
    } else {
        like.style.color = "red";
    }
});