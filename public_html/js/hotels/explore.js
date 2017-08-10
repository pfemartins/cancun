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
     binds: function() {
          if (document.querySelector('a.mobile-filters-button')) {
               for (var i = 0; i < document.querySelectorAll('a.mobile-filters-button').length; i++) {
                    document.querySelectorAll('a.mobile-filters-button')[i].addEventListener('click', function() {
                         f.addClass(document.querySelector('.mobile-search-bar'), 'open-filters');
                         document.querySelector('a.mobile-filters-button').style.display = 'none';
                    });
               }
          }

          if (document.querySelector('a.close')) {
               for (var i = 0; i < document.querySelectorAll('a.close').length; i++) {
                    document.querySelectorAll('a.close')[i].addEventListener('click', function() {
                         f.removeClass(document.querySelector('form.mobile-search-bar.open-filters'), 'open-filters');
                         document.querySelector('a.mobile-filters-button').style.display = 'block';
                    });
               }
          }

          if (document.querySelector('a.more-filters')) {
               for (var i = 0; i < document.querySelectorAll('a.more-filters').length; i++) {
                    document.querySelectorAll('a.more-filters')[i].addEventListener('click', function() {
                         document.querySelector('.additional-filters').style.display = 'block';
                         document.querySelector('a.more-filters').style.display = 'none';
                         document.querySelector('.mobile-search-bar button').style.display = 'none';
                    });
               }
          }

          if (document.querySelector('a.hide-filters')) {
               for (var i = 0; i < document.querySelectorAll('a.hide-filters').length; i++) {
                    document.querySelectorAll('a.hide-filters')[i].addEventListener('click', function() {
                         document.querySelector('.additional-filters').style.display = 'none';
                         document.querySelector('a.more-filters').style.display = 'block';
                         document.querySelector('.mobile-search-bar button').style.display = 'block';
                    });
               }
          }
          if (document.querySelector('a.desktop-filters')) {
               for (var i = 0; i < document.querySelectorAll('a.desktop-filters').length; i++) {
                    document.querySelectorAll('a.desktop-filters')[i].addEventListener('click', function() {
                         var selector = this.parentNode.querySelectorAll('.filter-box');
                         var button = this.style.display = 'none';
                         f.toggleClass(this.querySelector('i'), 'active');

                         for (var i = 0; i < selector.length; i++) {
                              f.toggleClass(selector[i], 'active');
                         }
                    });
               }
          }
          if (document.querySelector('a.more-filters-link')) {
               for (var i = 0; i < document.querySelectorAll('a.more-filters-link').length; i++) {
                    document.querySelectorAll('a.more-filters-link')[i].addEventListener('click', function() {
                         var selector = this.parentNode.parentNode.parentNode.querySelectorAll('.more-filters');
                         f.toggleClass(this.querySelector('i'), 'active');

                         for (var i = 0; i < selector.length; i++) {
                              f.toggleClass(selector[i], 'active');
                         }
                    });
               }
          }

     }
}

page.init();