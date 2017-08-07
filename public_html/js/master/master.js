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

var galleryLand = new Swiper('.gallery-land', {
	nextButton: '.button-next',
   	spaceBetween: 15,
   	slidesPerView: 'auto',
   	touchRatio: 0.8,
   	loop:true,
   	slideToClickedSlide: true,
});
galleryLand.params.control = galleryLand;

var gallerySea = new Swiper('.gallery-sea', {
	nextButton: '.button-next',
   	spaceBetween: 15,
   	slidesPerView: 'auto',
   	touchRatio: 0.8,
   	loop:true,
   	slideToClickedSlide: true,
});
gallerySea.params.control = gallerySea;

var galleryGuides = new Swiper('.gallery-guides', {
   	spaceBetween: 15,
   	slidesPerView: 'auto',
   	touchRatio: 0.8,
   	loop:true,
   	slideToClickedSlide: true,
});
galleryGuides.params.control = galleryGuides;

var galleryKnow = new Swiper('.gallery-know', {
   	spaceBetween: 15,
   	slidesPerView: 'auto',
   	touchRatio: 0.8,
   	loop:true,
   	slideToClickedSlide: true,
});
galleryKnow.params.control = galleryKnow;

var galleryBlog = new Swiper('.gallery-blog', {
   	spaceBetween: 15,
   	slidesPerView: 'auto',
   	touchRatio: 0.8,
   	loop:true,
   	slideToClickedSlide: true,
});
galleryBlog.params.control = galleryBlog;
