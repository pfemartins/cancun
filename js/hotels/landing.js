
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
var slideIndex = 1;
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

// function showSlides() {
//     var i;
//     var slides = document.getElementsByClassName("mySlides");
//     for (i = 0; i < slides.length; i++) {
//         slides[i].style.display = "none"; 
//     }
//     slideIndex++;
//     if (slideIndex> slides.length) {slideIndex = 1} 
//     slides[slideIndex-1].style.display = "block"; 
//     //setTimeout(showSlides, 10000); // Change image every 2 seconds
// }