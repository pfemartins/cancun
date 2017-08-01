
/* Tabs functionality */
var tabLinks = document.querySelectorAll('ul.tabs li a');

for (var i = 0; i < tabLinks.length; i++) { 
  tabLinks[i].onclick = function() {
    var target = this.getAttribute('href').replace('#', '');
    var sections = document.querySelectorAll('section.tab-content');
    
    for(var j=0; j < sections.length; j++) {
      sections[j].style.display = 'none';
    }
    
    document.getElementById(target).style.display = 'block';
    
    for(var k=0; k < tabLinks.length; k++) {
      tabLinks[k].removeAttribute('class');
    }
    
    this.setAttribute('class', 'is-active');
    
    return false;
  }
};

/* Slider functionality */
/* var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1} 
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block"; 
  dots[slideIndex-1].className += " active";
}


var barsSlideIndex = 1;
barsShowSlides(barsSlideIndex);

function barsPlusSlides(n) {
  barsShowSlides(barsSlideIndex += n);
}

function barsCurrentSlide(n) {
  barsShowSlides(barsSlideIndex = n);
}

function barsShowSlides(n) {
  var i;
  var slides = document.getElementsByClassName("barsMySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {barsSlideIndex = 1} 
  if (n < 1) {barsSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none"; 
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[barsSlideIndex-1].style.display = "block"; 
  dots[barsSlideIndex-1].className += " active";
} */

/* Initialize Swiper */
var galleryTop = new Swiper('.gallery-top', {
   nextButton: '.swiper-button-next',
   prevButton: '.swiper-button-prev',
   spaceBetween: 10,
   loop:true,
   loopedSlides: 5, //looped slides should be the same     
});
var galleryThumbs = new Swiper('.gallery-thumbs', {
   spaceBetween: 10,
   slidesPerView: 8,
   touchRatio: 0.2,
   loop:true,
   loopedSlides: 5, //looped slides should be the same
   slideToClickedSlide: true,
});
var galleryBottom = new Swiper('.gallery-bottom', {
   spaceBetween: 15,
   slidesPerView: 1.4,
   touchRatio: 0.8,
   loop:true,
   loopedSlides: 5, //looped slides should be the same
   slideToClickedSlide: true,
});
galleryTop.params.control = galleryThumbs;
galleryThumbs.params.control = galleryTop; 
galleryBottom.params.control = galleryBottom;


var hotel = {
  init: function() {
    hotel.scripts();
    hotel.binds();
  },
  scripts: function() {},
  binds: function() {
    if (document.querySelector('a.show-hide-link')) {
      for (var i = 0; i < document.querySelectorAll('a.show-hide-link').length; i++) {
        document.querySelectorAll('a.show-hide-link')[i].addEventListener('click', function() {
          var selector = this.parentNode.parentNode.querySelectorAll('.show-hide-content')
          f.toggleClass(this.querySelector('.plusminus'), 'active');

          for (var i = 0; i < selector.length; i++) {
            f.toggleClass(selector[i], 'active');
          }
        });
      }
    }
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
  }
}  
/* Filters Counter */
var plus = document.getElementsByClassName("plus");
var minus = document.getElementsByClassName("minus");

var plusFunction = function() {
  var notes;
  var counterParent = this.parentNode;
  for(var i = 0; i < counterParent.childNodes.length; i++) {
    if (counterParent.childNodes[i].className == "counter-number") {
        counterNum = parseInt(counterParent.childNodes[i].innerHTML);
        if (counterNum < 10) {
          counterNum = counterNum + 1;
          counterParent.childNodes[i].innerHTML = counterNum;
          var inputNum = counterParent.querySelector('input').value = counterNum;
        }
        break;
      }   
  }
    
};

for (var i = 0; i < plus.length; i++) {
    plus[i].addEventListener('click', plusFunction, false);
}

var minusFunction = function() {
  var notes;
  var counterParent = this.parentNode;
  for(var i = 0; i < counterParent.childNodes.length; i++) {
    if (counterParent.childNodes[i].className == "counter-number") {
        counterNum = parseInt(counterParent.childNodes[i].innerHTML);
        if (counterNum > 0) {
          counterNum = counterNum - 1;
          counterParent.childNodes[i].innerHTML = counterNum;
          var inputNum = counterParent.querySelector('input').value = counterNum;
        }
        break;
      }   
  }
    
};

for (var i = 0; i < minus.length; i++) {
    minus[i].addEventListener('click', minusFunction, false);
}

hotel.init();    