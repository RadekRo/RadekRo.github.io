function animateProgressBars() {
    $('.progress .progress-bar').css('width', function() {
        return $(this).attr('aria-valuenow') + '%';
    }).delay(1000);
}

$(document).on('ready', animateProgressBars());