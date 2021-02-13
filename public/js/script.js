let main = document.getElementById('main-top-left');
let licznik = 1;

let left = document.getElementById('slider-left');
let left2 = document.getElementById('slider-left2');
let right = document.getElementById('slider-right');
let right2 = document.getElementById('slider-right2');

let slide1 = document.getElementById('slider-1');
let slide2 = document.getElementById('slider-2');
let slide3 = document.getElementById('slider-3');

let hamburger = document.getElementById('hamburger');
let close = document.getElementById('close');
let menu = document.getElementById('mobile-menu');
let every = document.getElementById('main');

left.addEventListener('click', () => {
    ukryj(licznik);
    licznik--;
    licznik = check(licznik);
    pokaz(licznik);
    main.style.backgroundImage = `url(images/desktop-image-hero-${licznik}.jpg)`;
});
left2.addEventListener('click', () => {
    ukryj(licznik);
    licznik--;
    licznik = check(licznik);
    pokaz(licznik);
    main.style.backgroundImage = `url(images/desktop-image-hero-${licznik}.jpg)`;
});
right.addEventListener('click', () => {
    ukryj(licznik);
    licznik++;
    licznik = check(licznik);
    pokaz(licznik);
    main.style.backgroundImage = `url(images/desktop-image-hero-${licznik}.jpg)`;
});
right2.addEventListener('click', () => {
    ukryj(licznik);
    licznik++;
    licznik = check(licznik);
    pokaz(licznik);
    main.style.backgroundImage = `url(images/desktop-image-hero-${licznik}.jpg)`;
});

function check(licznik) {
    if (licznik < 1) {
        licznik = 3;
    }
    else if (licznik > 3) {
        licznik = 1;
    }
    return licznik;
}

function ukryj(licznik) {
    switch (licznik) {
        case 1:
            slide1.style.display = 'none';
            break;
        case 2:
            slide2.style.display = 'none';
            break;
        case 3:
            slide3.style.display = 'none';
            break;
    }
}

function pokaz(licznik) {
    switch (licznik) {
        case 1:
            slide1.style.display = 'block';
            break;
        case 2:
            slide2.style.display = 'block';
            break;
        case 3:
            slide3.style.display = 'block';
            break;
    }
}
window.addEventListener("mousemove", () => {
    if (window.innerWidth > 869) {
        every.style.opacity = "1";
        menu.style.transform = "translateY(-100%)";
    }
});

hamburger.addEventListener('click', () => {
    menu.style.transform = "translateY(0)";
    every.style.opacity = "0.5";
});
close.addEventListener('click', () => {
    menu.style.transform = "translateY(-100%)";
    every.style.opacity = "1";
});