/**
 * Created by Elwira on 2016-06-14.
 */
$(document).ready(function () {
    $( "#guzik-lewy" ).on('click', function() {
        $( ".nawigacja-lista" ).animate({ backgroundPositionX:0}, 500, function(){
            $(this).stop();
        })
            .animate({ "left": "-=50px" }, "slow" );
    });

    $( "#guzik-prawy" ).click(function(){
        $( ".nawigacja-lista" ).animate({ "right": "-=50px" }, "slow" );
    });
})