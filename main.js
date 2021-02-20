$(window).on("load", function() {
    function fade(pageLoad) {
        var windowBottom = $(window).scrollTop() + $(window).innerHeight();
        var min = 0.1;
        var max = 1;
        var threshold = 0.02;
        $(".fade").each(function() {
            /* Check the location of each desired element */
            var objectBottom = $(this).offset().top + $(this).outerHeight();

            /* If the element is completely within bounds of the window, fade it in */
            if (objectBottom < windowBottom) {
                //object comes into view (scrolling down)
                if ($(this).css("opacity") <= min + threshold || pageLoad) {
                    $(this).fadeTo(500, max);

                }
            } else { //object goes out of view (scrolling up)
                if ($(this).css("opacity") >= max - threshold || pageLoad) {
                    $(this).fadeTo(500, min);
                }
            }
        });
    }

    fade(true); //fade elements on page-load
    $(window).scroll(function() {
        fade(false);
    }); //fade elements on scroll
});