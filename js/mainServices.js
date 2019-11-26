$(document).ready(function () {

    function navChange() {
        $(".navbar-fixed-top").css({ backgroundColor: "white", transition: "background 1s" }); // change the color of class "navbar-fixed-top" to white
        $(".navbar-brand, .navbar-nav>li>a").css({ color: "black", transition: "color 1s" });// change the color of class "navbar-brand,navbar-nav>li>a" to black
        $(".navbar-brand").css('text-transform', 'capitalize');// change the text of class "navbar-brand" to Logo
        $("#hireBtn").css({ backgroundColor: "red", border: "1px solid black", borderRadius: "5px" });
        $(".navbar-toggle .icon-bar").css("background", "black");
    }

    function navOnTop() {
        $(".navbar-fixed-top").css("background-color", "transparent"); // change it back to transparent
        $(".navbar-brand, .navbar-nav>li>a").css("color", "white");// change the color of class "navbar-brand,navbar-nav>li>a" to white
        $(".navbar-brand").css({ textTransform: 'uppercase' });// change the text of class "navbar-brand" to LOGO
        $("#hireBtn").css({ backgroundColor: "red", border: "", borderRadius: "" });
        $(".navbar-toggle .icon-bar").css("background", "white");
    }

    $(window).scroll(function () { // check if scroll event happened
        if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
            navChange();
        } else {
            navOnTop();
        }

    });
    $(".coding,.marketing,.branding").hide();
    $(".bgCyan").hide();

    // MOUSEWHEEL SERVICES

    var scrollable = $('.ulDecNone li').length - 1,
        count = 0;
    $('body').bind('wheel', function (e) {
        $(".bgCyan").show();
        if (e.originalEvent.deltaY < 0) {

            if (scrollable >= count && count > 0) {

                $('.active').removeClass('active').prev().addClass('active');
                count--;
            } else {
                return false;
            }
        } else {
            if (scrollable > count) {
                $('.active').removeClass('active').next().addClass('active');
                count++;
            } else {
                return false;
            }

        }

        if ($(".ulDecNone li:first").hasClass('active')) {
            $(".coding").fadeIn(1000);

            $(".marketing").hide();
            $(".branding").hide();
        }
        if ($(".ulDecNone li:eq(1)").hasClass('active')) {
            $(".marketing").fadeIn(1000);
            $(".coding").hide();
            $(".branding").hide();
        }
        if ($(".ulDecNone li:last").hasClass('active')) {
            $(".branding").fadeIn(1000);
            $(".coding").hide();
            $(".marketing").hide();
        }

    })


    // ON CLICK FADEIN LIST
    $(".bgCyan").hide();
    $(".liCoding").click(function () {
        $(".bgCyan").show();
        $(this).addClass("active");
        $(".liMarketing,.liBranding").removeClass("active");
        $(".coding").fadeIn(1000);
        $(".marketing").hide();
        $(".branding").hide();
    })

    $(".liMarketing").click(function () {
        $(".bgCyan").show();
        $(this).addClass('active');
        $(".liCoding,.liBranding").removeClass("active");
        $(".marketing").fadeIn(1000);
        $(".coding").hide();
        $(".branding").hide();
    })

    $(".liBranding").click(function () {
        $(".bgCyan").show();
        $(this).addClass('active');
        $(".liCoding,.liMarketing").removeClass("active");
        $(".branding").fadeIn(1000);
        $(".coding").hide();
        $(".marketing").hide();
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



})
