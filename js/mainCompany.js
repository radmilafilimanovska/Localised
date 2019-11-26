$(document).ready(function () {

    function navChange() {
        $(".navbar-fixed-top").css({ backgroundColor: "white", transition: "background 1s" }); // change the color of class "navbar-fixed-top" to white
        $(".navbar-brand, .navbar-nav>li>a").css({ color: "black", transition: "color 1s" });// change the color of class "navbar-brand,navbar-nav>li>a" to black
        $(".navbar-brand").css('text-transform', 'capitalize');// change the text of class "navbar-brand" to Logo
        $("#hireBtn").css({ backgroundColor: "cyan", border: "1px solid black", borderRadius: "5px" });
        $(".navbar-toggle .icon-bar").css("background", "black");
    }

    function navOnTop() {
        $(".navbar-fixed-top").css("background-color", "transparent"); // change it back to transparent
        $(".navbar-brand, .navbar-nav>li>a").css("color", "white");// change the color of class "navbar-brand,navbar-nav>li>a" to white
        $(".navbar-brand").css({ textTransform: 'uppercase' });// change the text of class "navbar-brand" to LOGO
        $("#hireBtn").css({ backgroundColor: "cyan", border: "", borderRadius: "" });
        $(".navbar-toggle .icon-bar").css("background", "white");
    }

    $(window).scroll(function () { // check if scroll event happened
        if ($(document).scrollTop() > 50) { // check if user scrolled more than 50 from top of the browser window
            navChange();
        } else {
            navOnTop();
        }

    });


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

    // FUNCTION FOR SHOW ELEMENT WITH ANIMATE ON SCROLL
    AOS.init();
})
