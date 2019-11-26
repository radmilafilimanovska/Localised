$(document).ready(function () {
    // NAVBAR MENU ON CLICK - MOBILE

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


    // FUNCTION FOR SHOW ELEMENT WITH ANIMATE ON SCROLL
    AOS.init();
});