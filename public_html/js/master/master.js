/* Initialize Swiper */
var galleryExp = new Swiper('.gallery-experience', {
	nextButton: '.button-next',
   	spaceBetween: 15,
   	slidesPerView: 'auto',
   	touchRatio: 0.8,
   	loop:true,
   	slideToClickedSlide: true,
});
galleryExp.params.control = galleryExp;