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

    // 刪除職缺提醒視窗
    $('.del-job,.option-delete').click(function(event) {
        swal({
                title: "確定要刪除職缺？",
                text: "刪除後將無法復原",
                type: "warning",
                showCancelButton: true,
                confirmButtonColor: "#EB223B",
                confirmButtonText: "確認刪除",
                cancelButtonText: "取消",
                closeOnConfirm: false,
                closeOnCancel: true,
            },
            function(isConfirm) {
                if (isConfirm) {
                    swal("刪除完成", "", "success");
                }
            });
    });

  //  我要應徵
    $('.apply-job').click(function() {
        $('.apply-job-content').fadeToggle(300);
    });
});
