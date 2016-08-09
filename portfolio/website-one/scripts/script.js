(function($) {

  'use strict';

  var TeamStudy = {

    // Initialization the functions
    init: function() {
      TeamStudy.StickMenu();
      TeamStudy.CounterUp();
      TeamStudy.ScrollUp();
    },

    // Navigation menu stick
    StickMenu: function() {
      $('body').waypoint(function() {
        $('#navigation').removeClass('stick');
      }, {
        offset: -49
      });

      $('body').waypoint(function() {
        $('#navigation').addClass('stick');
      }, {
        offset: -50
      });
    },

    // Number counter ticker animation
    CounterUp: function() {
      $('.team-study-counter > h4').counterUp({
        delay: 10,
        time: 3000
      });
    },

    // Back to top button function
    ScrollUp: function() {
      var $scrollUp = $('.scrollup');
      var $header = $('#header');

      $('body').waypoint(function() {
        $scrollUp.removeClass('visible');
      }, {
        offset: -($header.height())
      });

      $('body').waypoint(function() {
        $scrollUp.addClass('visible');
      }, {
        offset: -($header.height() + 1)
      });

      $scrollUp.click(function() {
        $('html, body').stop().animate({
          scrollTop: 0
        }, 2000, 'easeInOutExpo');

        return false;
      });

    }
  };

  // Run the main function
  $(function() {
    TeamStudy.init();
  });

})(window.jQuery);
