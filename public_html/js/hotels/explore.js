var page = {
     init: function() {
          page.scripts();
          page.binds();
     },
     scripts: function() {
          f.getScript(f.base.jsp + 'swiper.js', function() {
               var galleryPopularTours, galleryPopularStays;

               galleryPopularTours = new Swiper('.gallery-popular-tours', {
                    nextButton: '.button-next',
                    spaceBetween: 15,
                    slidesPerView: 'auto',
                    touchRatio: 0.8,
                    loop: true,
                    slideToClickedSlide: true,
               });

               galleryPopularTours.params.control = galleryPopularTours;

               galleryPopularStays = new Swiper('.gallery-popular-stays', {
                    nextButton: '.button-next',
                    spaceBetween: 15,
                    slidesPerView: 'auto',
                    touchRatio: 0.8,
                    loop: true,
                    slideToClickedSlide: true,
               });

               galleryPopularStays.params.control = galleryPopularStays;
          }, true);
     },
     binds: function() {}
}

page.init();