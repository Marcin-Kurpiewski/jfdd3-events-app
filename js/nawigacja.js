/**
 * Created by Elwira on 2016-06-14.
 */

var position = 0;
//for (var position = 0; position < 4; position ++) {
    $("#right").click(function () {
        var $block = $(".block"), $left = $("#left");
        if( $block.position().left - $left.position().left >= -30 ){
            $block.css('left', '-30px');
        }else{
            $block.animate({"left": "+=150px"}, "slow");
        }
    })
//};


    $("#left").click(function () {
        var $block = $(".block"), $right = $("#right"), rightPoint = $right.position().left - $block.width();
        console.log( rightPoint );
        console.log( $block.position().left );
        if( $block.position().left < rightPoint ){
            $block.css('left', rightPoint + 'px');
        }else{
            $block.animate({"left": "-=150px"}, "slow");
        }
    });
