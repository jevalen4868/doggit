$("#testDiv").on('click', function(event) {
    event.preventDefault();
    this.innerHTML = "TEST";
    /* Act on the event */
});

$("#navbar").load('includes/navbar.html',
    function() {
        var $this = $(this);
        /* Stuff to do after the page is loaded */
        // Do nothing, yet
    }
); //.hide().fadeIn('slow');

if (Modernizr.geolocation) {
    navigator.geolocation.getCurrentPosition(success, fail);
    $loc = $("#locationStatus");

    function success(position) {
        $loc.html("position" + position);
    }

    function fail(msg) {
        $loc.html("You stink");
    }
}
