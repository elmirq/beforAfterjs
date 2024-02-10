const box = document.getElementById('box');
const buttons = document.querySelectorAll('button');
// const circ = document.getElementsByClassName('circle');
// const lime = document.querySelector('.lime');
const lime = document.querySelectorAll('.lime');
const circ = document.querySelectorAll('.circle');
const wrapper = document.querySelector('.wrapper');
const ziko = document.createElement('div');
ziko.classList.add('wrapper')
// lime[3].before(ziko);
// // circ[1].remove();
// circ[0].replaceWith(circ[2])
wrapper.insertBefore(ziko, lime[1])