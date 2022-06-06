const text1 = document.querySelector('.par');
let btn1 = document.querySelector('.btn-1');
let btn2 = document.querySelector('.btn-2');
btn1.addEventListener('click', function () {
    text1.textContent = text1.textContent.replace(/'/g, '"');
});
btn2.addEventListener('click', function () {
    text1.textContent = text1.textContent.replace(/\B'|'\B/g, '"');
});
