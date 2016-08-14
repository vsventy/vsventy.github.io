(function($) {
  'use strict';

  var YouProfiled = {

    // Initialization the functions
    init: function() {
      YouProfiled.Carousel();
      YouProfiled.PlaceHolder();
      YouProfiled.ResponsiveMenu();
    },

    // Init Owl Carousel
    Carousel: function() {
      var owl = $('#carousel');
      owl.owlCarousel({
        items: 3, //3 items above 1000px browser width
        itemsDesktop: [1000, 3], //3 items between 1000px and 901px
        itemsDesktopSmall: [900, 2], // 2 items between 900px and 601px
        itemsTablet: [600, 1], //1 items between 600 and 0
        itemsMobile: false // itemsMobile disabled - inherit from itemsTablet option
      });
      owl.trigger('owl.play', 3000); // 3000 = 3s
    },

    // Placeholder compatibility for IE8
    PlaceHolder: function() {
      $('input, textarea').placeholder();
    },

    // Show simple vertical menu for small devices (< 992px)
    ResponsiveMenu: function() {
      var $trigger = $('.trigger-nav'),
        $menu = $('.trigger-victim');

      $trigger.click(function() {
        $(this).next($menu).slideToggle();
      });

      $(window).resize(function() {
        if ($(window).width() > 992) {
          $menu.removeAttr('style');
        }
      });
    }
  }

  $(document).ready(function() {
    YouProfiled.init();
  }); //end ready

}(jQuery));
