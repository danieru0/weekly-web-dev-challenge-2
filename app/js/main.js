(function() {
    var btn = document.querySelector(".hamburger");
    var navbar = document.querySelector(".navbar");
    btn.addEventListener("click", function() {
        if (navbar.className === "navbar") {
            navbar.className += " responsive";
        } else {
            navbar.className = "navbar";
        }
    });
})();