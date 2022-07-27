$(function() {

  $(window).on('load', function() {
    // Preloader
    $("#site-preloader").fadeOut("slow");
    // Initialize AOS
    AOS.init({
      duration: 1000,
      disable: 'mobile',
    });
  });

  // Add header scroll
  $(window).scroll(function(){
    if ($(this).scrollTop() > 0) {
        $('.navbar').addClass('navbar-scroll');
    } else {
        $('.navbar').removeClass('navbar-scroll');
    }
  });

});