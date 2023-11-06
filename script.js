let backgroundfar = document.getElementById('vector4');
let backgroundclose = document.getElementById('vector3');
let foreground = document.getElementById('vector2');
let boxman = document.getElementById('vector1');

window.addEventListener('scroll', () => {
    let value = window.scrollY;
    boxman.style.top = value * -1.5 + 'px';
    foreground.style.left = value * -4.5 + 'px';
    backgroundclose.style.left = value * 4.5 + 'px';
    backgroundfar.style.top = value * -4.5 + 'px';
})