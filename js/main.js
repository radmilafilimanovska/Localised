$(document).ready(function () {
    var bg1 = ["images/background1.jpg", "images/background2.jpg", "images/background3.jpg", "images/background4.jpg"];
    var bg2 = ["images/bg2.png", "images/bg21.png", "images/bg23.png", "images/bg24.png"];

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

    // NAVBAR
    $(window).scroll(function () { // check if scroll event happened
        if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
            navChange();
        } else {
            navOnTop();
        }

    });


    // CHANGE BACKGROUND IMAGES ON 3 SECONDS
    let counter = 0;
    setInterval(function () {
        $(".bg").css({ backgroundImage: "url(" + bg1[counter] + ")", backgroundRepeat: "no-repeat", backgroundSize: "cover", backgroundPosition: "top" });
        $(".imageMt").attr("src", bg2[counter]);
        counter++;
        if (counter > 3) {
            counter = 0;
        }

    }, 3000);


    //BACKGROUND FUNCTIONS
    function changeBackground() {
        $(this).addClass('bg-image-map');
        $(this).css({ "color": "white" });
    }
    function getBackground() {
        $(this).removeClass('bg-image-map');
        $(this).css({ "color": "" });
    }

    //BACKGROUND EVENTS FOR LAPTOPS AND MOBILES
    var alterFunction = function () {
        let cWidth = document.body.clientWidth;
        if (cWidth <= 768) {
            $('.thirdHolder').off('mouseover', changeBackground);
            $('.thirdHolder').off('mouseout', getBackground);
        } else if (cWidth >= 769) {
            $('.thirdHolder').on('mouseover', changeBackground);
            $('.thirdHolder').on('mouseout', getBackground);
        };
    };
    $(window).resize(function () {
        alterFunction();
    });
    alterFunction();

    //TEXTS EVENTS FOR LAPTOPS AND MOBILES
    $(".none1, .none2, .none3").addClass('none');
    $(".icon1 , .icon2, .icon3").addClass('none');
    let alterClass = function () {
        let cWidth1 = document.body.clientWidth;
        if (cWidth1 <= 768) {
            $(".icon1,.icon2,.icon3").addClass("block");

            $(".more1").click(function () {
                $(".more1").fadeOut("slow", function () {
                    $(".more1").text(($(".more1").text() == 'MORE') ? 'LESS' : 'MORE').fadeIn("slow");
                })
                $(".none1").fadeToggle(1000);
            })
            $(".more2").click(function () {
                $(".more2").fadeOut("slow", function () {
                    $(".more2").text(($(".more2").text() == 'MORE') ? 'LESS' : 'MORE').fadeIn("slow");
                })
                $(".none2").fadeToggle(1000);
            })
            $(".more3").click(function () {
                $(".more3").fadeOut("slow", function () {
                    $(".more3").text(($(".more3").text() == 'MORE') ? 'LESS' : 'MORE').fadeIn("slow");
                })
                $(".none3").fadeToggle(1000);
            })

        } else if (cWidth1 >= 769) {
            $(".thirdHolder1").hover(function () {
                $(".icon1").show();
                $(".none1").fadeIn(1200)
            }, function () {
                $(".icon1").hide();
                $(".none1").hide();
            });
            $(".thirdHolder2").hover(function () {
                $(".icon2").show();
                $(".none2").fadeIn(1200)
            }, function () {
                $(".icon2").hide();
                $(".none2").hide();
            });
            $(".thirdHolder3").hover(function () {
                $(".icon3").show();
                $(".none3").fadeIn(1200)
            }, function () {
                $(".icon3").hide();
                $(".none3").hide();
            });
            $(".more1 , .more2 , .more3").addClass("none");
        };
    };
    $(window).resize(function () {
        alterClass();
    });
    alterClass();

    //CLOCK FUNCTION
    function clockJavaScript() {
        let date = new Date();

        let seconds = date.getSeconds();
        let secondsDegrees = (seconds / 60) * 360 + 90;
        let secondsHand = document.querySelector(".seconds-hand")
        secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
        let secondsHand1 = document.querySelector(".seconds-hand1")
        secondsHand1.style.transform = `rotate(${secondsDegrees}deg)`;
        let secondsHand2 = document.querySelector(".seconds-hand2")
        secondsHand2.style.transform = `rotate(${secondsDegrees}deg)`;
        let secondsHand3 = document.querySelector(".seconds-hand3")
        secondsHand3.style.transform = `rotate(${secondsDegrees}deg)`;
        let secondsHand4 = document.querySelector(".seconds-hand4")
        secondsHand4.style.transform = `rotate(${secondsDegrees}deg)`;
        let secondsHand5 = document.querySelector(".seconds-hand5")
        secondsHand5.style.transform = `rotate(${secondsDegrees}deg)`;


        let minutes = date.getMinutes();
        let minutesDegrees = (minutes / 60) * 360 + 90;

        let minutesHand = document.querySelector(".minutes-hand")
        minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
        let minutesHand1 = document.querySelector(".minutes-hand1")
        minutesHand1.style.transform = `rotate(${minutesDegrees}deg)`;
        let minutesHand2 = document.querySelector(".minutes-hand2")
        minutesHand2.style.transform = `rotate(${minutesDegrees}deg)`;
        let minutesHand3 = document.querySelector(".minutes-hand3")
        minutesHand3.style.transform = `rotate(${minutesDegrees}deg)`;
        let minutesHand4 = document.querySelector(".minutes-hand4")
        minutesHand4.style.transform = `rotate(${minutesDegrees}deg)`;
        let minutesHand5 = document.querySelector(".minutes-hand5")
        minutesHand5.style.transform = `rotate(${minutesDegrees}deg)`;


        let hours = date.getHours();

        let hoursNewYork = hours - 6;
        let hoursDegreesNewYork = (hoursNewYork / 12) * 360 + 90;
        let hoursHand = document.querySelector(".hour-hand")
        hoursHand.style.transform = `rotate(${hoursDegreesNewYork}deg)`;
        let hoursLondon = hours - 1;
        let hoursDegreesLondon = (hoursLondon / 12) * 360 + 90;
        let hoursHand1 = document.querySelector(".hour-hand1")
        hoursHand1.style.transform = `rotate(${hoursDegreesLondon}deg)`;


        let hoursHand2 = document.querySelector(".hour-hand2")
        hoursHand2.style.transform = `rotate(${hoursDegreesNewYork}deg)`;

        let hoursHand3 = document.querySelector(".hour-hand3")
        hoursHand3.style.transform = `rotate(${hoursDegreesNewYork}deg)`;

        let hoursBucharest = hours + 1;
        let hoursDegreesBucharest = (hoursBucharest / 12) * 360 + 90;
        let hoursHand4 = document.querySelector(".hour-hand4")
        hoursHand4.style.transform = `rotate(${hoursDegreesBucharest}deg)`;

        let hoursWarsaw = hours;
        let hoursDegreesWarsaw = (hoursWarsaw / 12) * 360 + 90;
        let hoursHand5 = document.querySelector(".hour-hand5")
        hoursHand5.style.transform = `rotate(${hoursDegreesWarsaw}deg)`;
    }
    setInterval(clockJavaScript, 1000);


    //ON CLICK ARROW SCROLL DOWN AND NAVBAR CHANGE COLOR
    $(document).ready(function () {
        $(".arrow-a").click(function (e) {
            e.preventDefault();
            $("html, body").animate({ scrollTop: 1000 }, "slow");
            navChange();
        });

    });

    // FUNCTION FOR SHOW ELEMENT WITH ANIMATE ON SCROLL
    $(function () {
        AOS.init();
    })



    //DISPLAY ELEMENTS WITH FADEIN


    $(".hiddenTxtFadeIn, .hiddenBtnFadeIn1, .hiddenBtnFadeIn2").fadeOut();

    $(document).scroll(function () {
        let bottomBg = $('.bgFooter').position().top + $('.bgFooter').outerHeight();
        let botttomWindow = $(window).scrollTop() + $(window).height();
        if (botttomWindow > bottomBg) {
            $('.hiddenTxtFadeIn').delay(200).fadeIn();
            $('.hiddenBtnFadeIn1').delay(600).fadeIn();
            $('.hiddenBtnFadeIn2').delay(1000).fadeIn();
        }
    })



    //TABLET CONTENT - SCROLL
    let c = 1;
    $("#up").addClass('disabled');

    $('#down').click(function () {
        c++;

        $('#content').animate({
            bottom: "+=40px"
        })
        $("#up").removeClass('disabled');
        if (c == 20) {
            $("#down").addClass('disabled');
        }
    })
    $('#up').click(function () {
        if (c > 1) {
            $("#down").removeClass('disabled');
            $('#content').animate({
                bottom: "-=40px"
            })
            c--;
            if (c == 1) {
                $("#up").addClass('disabled');
            }
        }

    })

    // ON CLICK SCROLL TOP FOR 700MS

    $(document).ready(function () {
        $(".btnMeetTeam").click(function (e) {
            e.preventDefault();
            $("html, body").animate({ scrollTop: 700 }, "slow");
            navChange();
        });

    });

    // NAVBAR MENU ON CLICK - MOBILE

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

});