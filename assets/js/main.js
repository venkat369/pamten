/*--------------------------------*/
   (function ($) {
      "use strict"; // Start of use strict

      // Smooth scrolling using jQuery easing
      $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function () {
         if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
               $('html, body').animate({
                  scrollTop: (target.offset().top - 54)
               }, 1000, "easeInOutExpo");
               return false;
            }
         }
      });

      // Closes responsive menu when a scroll trigger link is clicked
      $('.js-scroll-trigger').click(function () {
         $('.navbar-collapse').collapse('hide');
      });

      // Activate scrollspy to add active class to navbar items on scroll
      $('body').scrollspy({
         target: '#admin-header',
         offset: 54
      });

   })(jQuery); // End of use strict
/*--------------------------------*/
   /*------------------preloader start--------------*/
      function handlePreloader() {
         if ($('.preloader').length) {
            $('.preloader').delay(2000).fadeOut(500);
         }
      }
      $(window).on('load', function () {
         handlePreloader();
         //enableMasonry();
      });
/*------------------preloader end--------------*/
/*--------------------------------*/
         $(document).ready(function() {
            $('.popup-youtube').magnificPopup({
               type: 'iframe'
            });
});
/*--------------------------------*/
/*--------------------------------*/
/*--------------------------------*/