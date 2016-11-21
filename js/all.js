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
        $('.menu-full').fadeToggle(300);

    });
    $('.menu-btn').click(function(event) {
        $('.menu-full').fadeToggle(300);
    });


  //  我要應徵
    $('.apply-job').click(function() {
        $('.apply-job-content').fadeToggle(300);
    });
});
