// // grab an element
// var myElement = document.querySelector("header");
// // construct an instance of Headroom, passing the element
// var headroom  = new Headroom(myElement);
// // initialise
// headroom.init();


$(document).ready(function() {

    // job-detail切換選單
    $('.tab-company').click(function(event) {
        event.preventDefault();
        $('.job-info').addClass('hide').removeClass('show');
        $('.company-info').addClass('show').removeClass('hide');
        $('.tab-company').children().addClass('tab-company-control');
        $('.tab-job').children().removeClass('tab-company-control');
    });

    // job-detail切換選單
    $('.tab-job').click(function(event) {
        event.preventDefault();
        $('.company-info').addClass('hide').removeClass('show');
        $('.job-info').addClass('show').removeClass('hide');
        $('.tab-company').children().removeClass('tab-company-control');
        $('.tab-job').children().addClass('tab-company-control');
    });

    // nav-menu滿版選單開關
    $('.menu-cancel').click(function(event) {
        $('.menu-full').fadeToggle(200);
    });

    $('.menu-btn').click(function(event) {
        $('.menu-full').fadeToggle(200);
    });


  //  我要應徵
    $('.apply-job').click(function() {
        $('.apply-job-content').fadeToggle(300);
    });


  //箭頭往下
  $('.scroll-down').click(function(event) {
      event.preventDefault();
      $('html, body').animate({scrollTop: $(".intro-wrapper").offset().top = $('.home-banner').height() }, 1000 );
    });

  //nav-scroll
$(window).scroll(function() {

  if ($(".index-nav").offset().top > 60) {
    $("nav").removeClass("nav-no-bg");
    $('.logo').removeClass('hide');
    $('.logo-2').addClass('hide');
  } else {
    $(".index-nav").addClass("nav-no-bg");
    $('.logo-2').removeClass('hide');
    $('.logo').addClass('hide');
  }


});

$(window).scroll(function(){
  var height = $(this).scrollTop();

  if (height > 400) {
    $('nav').headroom();
  }
  else {
    $('nav').headroom().destroy();
  }

});

});
