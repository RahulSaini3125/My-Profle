
window.addEventListener('scroll', function () {
    const header = document.querySelector('header');
    header.classList.toggle("sticky", window.scrollY > 0);
});

function myFunction(x) {
    const menu = document.getElementById("menu");
    const btn2 = document.getElementById("btn2");
    x.classList.toggle("change");
    menu.classList.toggle("active");
    btn2.classList.toggle("active");
}

function gethome() {
    const menu1 = document.getElementById("menu");
    const menu2 = document.getElementById("container");
    menu1.classList.toggle("active");
    menu2.classList.toggle("change");
}

function myloader() {
    const loader = document.getElementById("preloader");
    loader.style.display = "none";
}

function admin() {
    const email = document.getElementById("email").value
    const password = document.getElementById("password").value
    var user ;
    var pass ;
    if (email == "administration@myprofile" && password == "Admin@2003") {
        location.replace("adminstration.html")
    }
}