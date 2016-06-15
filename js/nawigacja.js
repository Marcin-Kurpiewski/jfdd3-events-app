/**
 * Created by Elwira on 2016-06-14.
 */
/*$(document).ready(function () {
    $( ".lewy" ).on('click', function() {
        $( ".nawigacja-lista" ).animate({ backgroundPositionX:0}, 500, function(){
            $(this).stop();
        })
            .animate({ "left": "-=50px" }, "slow" );
    });

    $( ".prawy" ).click(function(){
        $( ".nawigacja-lista" ).animate({ "right": "-=50px" }, "slow" );
    });
})*/

$( "#prawy" ).click(function() {
    $( ".nawigacja-lista" ).animate({ "right": "+=100px" }, "slow" );
});

$( "#lewy" ).click(function(){
    $( ".nawigacja-lista" ).animate({ "left": "-=100px" }, "slow" );
});