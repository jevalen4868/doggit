$('nav a').on('click', function(event) {
    event.preventDefault();
    /* Act on the event */
    var url = this.href;

    $('nav li.active').removeClass('active');
    $(this.parentElement).addClass('active');

    $('#container').animate({
            opacity: 0.0,
            paddingLeft: '+=180'
        },
        500,
        'swing',
        function() {
            /* stuff to do after animation is complete */
            this.remove();
        }
    );

    $('#content').load(url).hide().fadeIn('slow');
});
