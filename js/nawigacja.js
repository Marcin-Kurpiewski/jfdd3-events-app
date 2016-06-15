/**
 * Created by Elwira on 2016-06-14.
 */


$( "#right" ).click(function() {
    $( ".block" ).animate({ "left": "+=150px" }, "slow" );
});

$( "#left" ).click(function(){
    $( ".block" ).animate({ "left": "-=150px" }, "slow" );
});