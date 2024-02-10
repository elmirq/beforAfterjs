const leman = document.getElementById('leman');
function yandir() {
    leman.classList.add('lime');
    document.getElementById('leman').innerHTML = "Salam Aleykum";
}
function sondur() {
    leman.classList.remove('lime');
}

function yandirSondur() {
    leman.classList.toggle('lime');
    document.getElementById('leman').innerHTML = "Salam Aleykum";
}