$(document).ready(function(){

let hamgerger = document.querySelector('.hamberger');
let times = document.querySelector('.times');
let mobilenav = document.querySelector('.mobile-nav');

hamgerger.addEventListener('click', function(){

    mobilenav.classList.add('open');

});

times.addEventListener('click', function(){

    mobilenav.classList.remove('open');

});

});