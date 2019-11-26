$(document).ready(function () {

    $('#myCarousel').carousel({
        interval: false
    });

    // SCROLL SLIDES ON MOUSE SCROLL

    $('#myCarousel').bind('wheel', function (e) {
        if (e.originalEvent.wheelDelta / 120 > 0) {
            $(this).carousel('prev');
        } else {
            $(this).carousel('next');
        }
    });


    //SCROLL SLIDES ON SWIPE FOR TOUCH ENABLED DEVICES

    $("#myCarousel").on("touchstart", function (event) {

        var yClick = event.originalEvent.touches[0].pageY;
        $(this).one("touchmove", function (event) {

            var yMove = event.originalEvent.touches[0].pageY;
            if (Math.floor(yClick - yMove) > 1) {
                $(".carousel").carousel('next');
            }
            else if (Math.floor(yClick - yMove) < -1) {
                $(".carousel").carousel('prev');
            }
        });
        $(".carousel").on("touchend", function () {
            $(this).off("touchmove");
        });
    });


    let leftArrow = $(window).width() * 1 / 3;
    let rightArrow = $(window).width() * 2 / 3;
    $('.left').width(leftArrow);
    $('.right').width(rightArrow - leftArrow);
    $('.glyphicon-chevron-left, .glyphicon-chevron-right').hide();
    $('.left').hover(function () {
        $('.glyphicon-chevron-left').show();
    }, function () {
        $('.glyphicon-chevron-left').hide();
    })
    $('.right').hover(function () {
        $('.glyphicon-chevron-right').show();
    }, function () {
        $('.glyphicon-chevron-right').hide();
    })

    //NAVBAR MENU ON CLICK - MOBILE

    $(document).ready(function () {
        $('body').on('click', '.navbar-toggle', function () {
            $("#myNavbar").hide();
            $('#myNav').animate({
                display: 'block',
                height: '100%'
            }, 'fast');
        });

        $('body').on('click', '.closebtn', function () {
            $('#myNav').animate({
                display: 'none',
                height: '0%'
            }, 'fast');
        });
    });

    $('#myCarousel').carousel({
        interval: 4000
    })
    $('.carousel .item').each(function () {
        var next = $(this).next();
        if (!next.length) {
            next = $(this).siblings(':first');
        }
        next.children(':first-child').clone().appendTo($(this));
        if (next.next().length > 0) {
            next.next().children(':first-child').clone().appendTo($(this));
        } else {
            $(this).siblings(':first').children(':first-child').clone().appendTo($(this));
        }
    });


})