function myloader1() {
    const loader1 = document.getElementById("preloader");
    loader1.style.display = "none";
}


function on_off() {
    let on = document.getElementById("on");
    let off = document.getElementById("off");
    let checked = document.getElementById("switch");
    if (checked.checked) {
        on.style.display = "inline-block";
        off.style.display = "none";
    }
    else{
        off.style.display = "inline-block";
        on.style.display = "none";
    }
}