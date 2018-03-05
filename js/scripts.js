const $page = $('html, body');
const $skillsProgressBar = $('.progress .progress-bar');
const $webPages = $('.webpages-container img');
const $scrollToTopBtn = $('.return-to-top');

function animateProgressBars() {
    $skillsProgressBar
        .css('transition-duration', '4s')
        .css('width', function() { return $(this).attr('aria-valuenow') + '%'; });
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

function webPagesFadeIn() {

    scrollY>50 ?
        $webPages
            .css('opacity', '1')
            .css('transition', 'all 2.0s ease-in-out') :
            null;
}

function showScrollToTopButton() {

    $(window).scrollTop() > 200 ?
        $scrollToTopBtn.fadeIn(300).css('display', 'flex') :
        $scrollToTopBtn.css('display', 'none');

}

function scrollToTop() {

    const animationTime = 700;
    $page.animate({ scrollTop: 0}, animationTime);

}

$(document).on('ready', animateProgressBars());
$(window).on('scroll', webPagesFadeIn);
$(window).on('scroll', showScrollToTopButton);
$scrollToTopBtn.on('click', scrollToTop);

