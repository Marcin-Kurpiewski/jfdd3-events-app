/**
 * Created by Elwira on 2016-06-14.
 */
$(document).ready(function () {
    $( ".guzik-lewy" ).click(function() {
        $( ".nawigacja-lista" ).animate({ "left": "+=50px" }, "slow" );
    });

    $( "#guzik-prawy" ).click(function(){
        $( ".nawigacja-lista" ).animate({ "left": "-=50px" }, "slow" );
    });
})