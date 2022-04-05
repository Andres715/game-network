start();
window.addEventListener("resize", start);

function start() {
    var miNavArray = document.getElementsByTagName("nav");
    var miNav = miNavArray[0];
    var overlay = document.getElementById("one");

    if (innerWidth > 900) {
        if (miNav.style.left) {
            miNav.style.left = "0%"
            overlay.style.display = "none"
        }
    } else if (innerWidth <= 900) {
        miNav.style.left = "-100%";
        overlay.style.display = "none";
    }
}

var button = document.getElementById("btnNavbar");
button.addEventListener("click", () => {
    var miNavArray = document.getElementsByTagName("nav");
    var miNav = miNavArray[0];
    var overlay = document.getElementById("one");
    if (!miNav.style.left || miNav.style.left == "-100%") {
        miNav.style.left = "0%"
        setTimeout(() => {
            overlay.style.display = "inline";
        }, 500)
    } else {
        miNav.style.left = "-100%";

    }
});

var overlay = document.getElementById("one");
overlay.addEventListener("click", () => {
    var miNavArray = document.getElementsByTagName("nav");
    var miNav = miNavArray[0];
    var miOverlay = overlay;
    miNav.style.left = "-100%";
    miOverlay.style.display = "none";
});