// slick slider
$('.banner-slider').slick({
	slidesToShow: 1,
	infinite: true,
	prevArrow: '<i class="banner-slider-arrow banner-slider-arrow-prev"></i>',
	nextArrow: '<i class="banner-slider-arrow banner-slider-arrow-next"></i>',
});

// slideout js
var slideout = new Slideout({
	'panel': document.querySelector('.main-content'),
	'menu': document.querySelector('.mobile-navigation-panel'),
	'padding': 256,
	'tolerance': 70
});

// Toggle button
document.querySelector('.mobile-menu').addEventListener('click', function() {
	slideout.toggle();
});