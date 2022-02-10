let searchBtn = document.querySelector('.search');
let searchForm = document.querySelector('.search_form');
let searchI = document.querySelector('.search i');
let loginBtn = document.querySelector('.login');
let loginForm = document.querySelector('.login_form');
let crossBtn = document.querySelector('.cross');
let menuBar = document.querySelector('.menu_bar');
let menuBarI = document.querySelector('.menu_bar i');
let mainMenu = document.querySelector('.main_menu');
let controlBtn = document.querySelectorAll('.control');



searchBtn.addEventListener('click', function(e) {

    e.preventDefault();
    searchForm.classList.toggle('active');
    searchI.classList.toggle('fa-times');

})
loginBtn.addEventListener('click', function(e) {

    e.preventDefault();
    loginForm.classList.toggle('active');

})
crossBtn.addEventListener('click', function(e) {

    loginForm.classList.remove('active');


})
menuBar.addEventListener('click', function(e) {

    mainMenu.classList.toggle('active');
    menuBarI.classList.toggle('fa-times')


})

controlBtn.forEach(btn => {
    btn.addEventListener('click', function() {
        document.querySelector('.slider_control .active').classList.remove('active');
        btn.classList.add('active');
        var src = btn.getAttribute('data-src');
        document.querySelector('#video_slider').src = src;
    })
})



$(document).ready(function() {

    $(".review_slider").owlCarousel({
        items: 3,
        loop: true,
        margin: 30,
        autoplay: true


    });


});