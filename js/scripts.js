$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 0,
    nav: true,
    dotsEach: true,
    navText: ['', ' '],
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
        0: {
            items: 2
        },

        1000: {
            items: 3
        }
    }
});

var menuBtn = document.querySelector('.menu-btn');
var nav = document.querySelector('nav');
var lineOne = document.querySelector('nav .menu-btn .line--1');
var lineTwo = document.querySelector('nav .menu-btn .line--2');
var lineThree = document.querySelector('nav .menu-btn .line--3');
var link = document.querySelector('nav .nav-links');
menuBtn.addEventListener('click', () => {
    nav.classList.toggle('nav-open');
    lineOne.classList.toggle('line-cross');
    lineTwo.classList.toggle('line-fade-out');
    lineThree.classList.toggle('line-cross');
    link.classList.toggle('fade-in');
})
