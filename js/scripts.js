const $skillsProgressBar = $('.progress .progress-bar');

function animateProgressBars() {
    $skillsProgressBar
        .css('transition-duration', '4s')
        .css('width', function() { return $(this).attr('aria-valuenow') + '%'; });
}

$(function () {
    $('[data-toggle="tooltip"]').tooltip()
});

$(document).on('ready', animateProgressBars());
