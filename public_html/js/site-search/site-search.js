var search = {
  init: function() {
    search.binds();
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
  }
}
search.init();