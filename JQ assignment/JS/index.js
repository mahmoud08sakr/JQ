$("#clickbutt i").click(function () {
    if ($(".links-group").css("left") == "0px"); {
        $(".links-group").animate({ left: "0px" })
        console.log("sakr");
        if ($(".links-group").css("left") == "0px") {
            $(".links-group").animate({ left: "-250px" })

        }

    }

})

// party-section = 0
// join-us =  679.96875
// duration =  313.59375
// contacts  = 897.5625 
$("#home").click(function () {
    $(window).scrollTop(0)

})



$("#click1").click(function () {
    $("#show1").toggle(500)
})



$("#click2").click(function () {
    $("#show2").toggle(500)
})
$("#click3").click(function () {
    $("#show3").toggle(500)
})
$("#click4").click(function () {
    $("#show4").toggle(500)
})


var countDownDate = new Date("april 5, 2023 15:37:25").getTime();

var x = setInterval(function () {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("demo").innerHTML = days + "d " + hours + "h "
        + minutes + "m " + seconds + "s ";
    document.getElementById("day").innerHTML = days + " " + "D"
    document.getElementById("hours").innerHTML = hours + " " + "H"
    document.getElementById("min").innerHTML = minutes + " " + "min"
    document.getElementById("sec").innerHTML = seconds + " " + "sec"

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("demo").innerHTML = "";
    }
}, 1000);


$(document).ready(function () {
    const target = document.getElementById('least_button');
    target.disabled = true;
    $('#least').on('keyup', function () {
        $('#least_count').html("( " + $(this).val().length + " ) You must enter at least 100 characters.");
        if ($(this).val().length <= 100) {
            target.disabled = true;
        }
        else {
            target.disabled = false;
        }
    });
});