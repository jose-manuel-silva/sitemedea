$(document).ready(function() {

    $('body').smoothScroll({
        delegateSelector: 'ul.scroll a'
    });

    $('p.subnav a').click(function(event) {
        event.preventDefault();
        var link = this;
        $.smoothScroll({
            scrollTarget: link.hash
        });
    });

    $('#change-speed').bind('click', function() {
        var $p1 = $('ul.mainnav a').first();
        var p1Opts = $p1.smoothScroll('options') || {};

        p1Opts.speed = p1Opts.speed === 1400 ? 400 : 1400;
        $p1.smoothScroll('options', p1Opts);
    });

    $('button.scrollsomething').bind('click', function(event) {
        event.preventDefault();
        $.smoothScroll({
            scrollElement: $('div.scrollme'),
            scrollTarget: '#findme'
        });
    });
    $('button.scrollhorz').bind('click', function(event) {
        event.preventDefault();
        $.smoothScroll({
            direction: 'left',
            scrollElement: $('div.scrollme'),
            scrollTarget: '.horiz'
        });

    });

    $('#scroll-relative-plus').on('click', function() {
        var wHeight = $(window).height();
        $.smoothScroll('+=100px');
    });
    $('#scroll-relative-minus').on('click', function() {
        $.smoothScroll('-=100px');
    });
    $('.page-scroll').on('click', function() {
        var wHeight = $(window).height();
        var wWidth = $(window).width();
        var rel = $(this).hasClass('down') ? '+=' : '-=';

        if (wWidth <= 560) {
            wHeight -= 130;
        }

        $.smoothScroll(rel + wHeight);
    });
});