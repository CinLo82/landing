document.getElementById("icono").addEventListener("click", function(e) {
    e.preventDefault();
    let enlaces = document.getElementById("enlaces");
    if (enlaces.classList.contains("uno")) {
        enlaces.classList.remove("uno");
        enlaces.classList.add("dos");
    } else {
        enlaces.classList.remove("dos");
        enlaces.classList.add("uno");
    }
});