var iframe = document.getElementById("myFrame");

set_iframe_size_style();

iframe.style.position = "relative";
iframe.style.width = "80vw";
iframe.style.left = "10vw";

function set_iframe_size_style() {
    var w = document.documentElement.clientWidth;
    var h = document.documentElement.clientHeight;
    if (h > (200 / 0.6)) {
        iframe.style.height = "60vh";
    } else {
        iframe.style.height = "200px";
    }
    if (w > 640 / 0.8) {
        iframe.style.width = "80vw";
    } else {
        iframe.style.width = "640px";
    }
}

window.addEventListener("resize", set_iframe_size_style);
localStorage.clear();